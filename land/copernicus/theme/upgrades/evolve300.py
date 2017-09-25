from itertools import groupby
from itertools import chain
from itertools import imap as map
from operator import methodcaller
from operator import itemgetter
from collections import defaultdict
from functools import partial

import plone.api as api


def _group_on(decider, resources):
    grouped = groupby(resources, decider)
    def reducer(acc, itm):
        acc[itm[0]].extend(itm[1])
        return acc

    return reduce(reducer, grouped, defaultdict(list)).values()


def _apply(grouper, result):
    return list(chain(*map(grouper, result)))


GROUP_ON_EXTERNAL = partial(_group_on, methodcaller('isExternalResource'))
GROUP_ON_AUTH = partial(_group_on, methodcaller('getAuthenticated'))
GROUP_ON_REL = partial(_group_on, methodcaller('getRel'))
GROUP_ON_COOKABLE = partial(_group_on, methodcaller('getCookable'))
GROUP_ON_MEDIA = partial(_group_on, methodcaller('getMedia'))
GROUP_ON_EXPR = partial(_group_on, methodcaller('getExpression'))
GROUP_ON_COND = partial(_group_on, methodcaller('getConditionalcomment'))
GROUP_ON_RENDER = partial(_group_on, methodcaller('getRendering'))

GROUP_ON_INLINE = partial(_group_on, methodcaller('getInline'))


def optimise_css(tool):
    external = GROUP_ON_EXTERNAL(tool.resources)
    auth = _apply(GROUP_ON_AUTH, external)
    render = _apply(GROUP_ON_RENDER, auth)
    rel = _apply(GROUP_ON_REL, render)
    cook = _apply(GROUP_ON_COOKABLE, rel)
    media = _apply(GROUP_ON_MEDIA, cook)
    cond = _apply(GROUP_ON_COND, media)
    expr = _apply(GROUP_ON_EXPR, cond)
    final = tuple(chain(*expr))

    for sheet in final:
        if not sheet.isExternalResource():
            sheet.setCompression('full')
            sheet.setCacheable(True)

    tool.resources = final
    tool.cookResources()


def optimise_js(tool):
    external = GROUP_ON_EXTERNAL(tool.resources)
    auth = _apply(GROUP_ON_AUTH, external)
    inline = _apply(GROUP_ON_INLINE, auth)
    cook = _apply(GROUP_ON_COOKABLE, inline)
    cond = _apply(GROUP_ON_COND, cook)
    expr = _apply(GROUP_ON_EXPR, cond)
    final = tuple(chain(*expr))

    for resource in final:
        if not resource.isExternalResource():
            resource.setCacheable(True)

    tool.resources = final
    tool.cookResources()


def run(_):
    optimise_css(api.portal.get_tool('portal_css'))
    optimise_js(api.portal.get_tool('portal_javascripts'))
