from itertools import groupby
from itertools import chain
from itertools import imap as map
from operator import methodcaller
from collections import defaultdict
from functools import partial
from functools import reduce

import plone.api as api


def _group_on(decider, resources):
    grouped = groupby(resources, decider)

    def reducer(acc, itm):
        acc[itm[0]].extend(itm[1])
        return acc

    return reduce(reducer, grouped, defaultdict(list)).values()


def _apply(grouper, result):
    return chain(*map(grouper, result))


def _apply_in_order(groupers, data):

    def reducer(result, grouper):
        return _apply(grouper, result)

    return reduce(reducer, groupers, [data])


GROUP_ON_EXTERNAL = partial(_group_on, methodcaller('isExternalResource'))
GROUP_ON_AUTH = partial(_group_on, methodcaller('getAuthenticated'))
GROUP_ON_REL = partial(_group_on, methodcaller('getRel'))
GROUP_ON_COOKABLE = partial(_group_on, methodcaller('getCookable'))
GROUP_ON_MEDIA = partial(_group_on, methodcaller('getMedia'))
GROUP_ON_EXPR = partial(_group_on, methodcaller('getExpression'))
GROUP_ON_COND = partial(_group_on, methodcaller('getConditionalcomment'))
GROUP_ON_RENDER = partial(_group_on, methodcaller('getRendering'))

GROUP_ON_INLINE = partial(_group_on, methodcaller('getInline'))


CSS_OPTIMISER = partial(_apply_in_order, (
    GROUP_ON_EXTERNAL,
    GROUP_ON_AUTH,
    GROUP_ON_RENDER,
    GROUP_ON_REL,
    GROUP_ON_COOKABLE,
    GROUP_ON_MEDIA,
    GROUP_ON_COND,
    GROUP_ON_EXPR,
))


JS_OPTIMISER = partial(_apply_in_order, (
    GROUP_ON_EXTERNAL,
    GROUP_ON_AUTH,
    GROUP_ON_INLINE,
    GROUP_ON_COOKABLE,
    GROUP_ON_COND,
    GROUP_ON_EXPR,
))


def optimise_css(tool):

    final = tuple(chain(*CSS_OPTIMISER(tool.resources)))

    for sheet in final:
        if not sheet.isExternalResource():
            sheet.setCompression('full')
            sheet.setCacheable(True)

    tool.resources = final
    tool.cookResources()


def optimise_js(tool):

    final = tuple(chain(*JS_OPTIMISER(tool.resources)))

    for resource in final:
        if not resource.isExternalResource():
            resource.setCacheable(True)

    tool.resources = final
    tool.cookResources()


def run(_):
    optimise_css(api.portal.get_tool('portal_css'))
    optimise_js(api.portal.get_tool('portal_javascripts'))
