from copy import copy
import functools
from zope.component.hooks import getSite
from DateTime import DateTime
from plone.app.layout.viewlets.common import ViewletBase
from plone.app.layout.viewlets.common import GlobalSectionsViewlet
from plone.memoize import ram
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from time import time
import plone.api as api


class CopernicusGlobalSections(GlobalSectionsViewlet):
    render = ViewPageTemplateFile('global_sections.pt')

    def update(self):
        super(CopernicusGlobalSections, self).update()

        portal = getSite()
        portal_url = portal.absolute_url()
        portal_path = '/'.join(portal.getPhysicalPath())
        catalog = api.portal.get_tool('portal_catalog')

        def _set_selected(selected, tab):
            new_tab = copy(tab)
            new_tab['selected'] = tab['id'] == selected
            return new_tab

        def _get_leafs(tab):
            if not tab['url'].startswith(portal_url):
                return tuple()

            if tab['url'] == portal_url:
                return tuple()

            relative_url = (
                ''.join(tab['url'].split(portal_url))
                .replace('/', '', 1)
            )
            obj_path = '{}/{}'.format(portal_path, relative_url)

            folderish = catalog(
                is_folderish=True,
                path=dict(query=obj_path, depth=1)
            )

            return tuple([
                dict(
                    id=b.getId,
                    name=b.Title,
                    url=b.getURL()
                ) for b in folderish if not b.exclude_from_nav
            ])

        def _set_tabs(getter, tab):
            new_tab = copy(tab)
            new_tab['leafs'] = getter(tab)
            return new_tab

        update_selected = functools.partial(
            _set_selected,
            self.selected_portal_tab
        )
        update_leafs = functools.partial(_set_tabs, _get_leafs)

        self.portal_tabs = map(
            update_leafs, map(
                update_selected,
                self.portal_tabs
            )
        )


class CopernicusFooterInfoViewlet(ViewletBase):
    render = ViewPageTemplateFile('footer_info.pt')

    # we cache the results for one hour
    @ram.cache(lambda *args: time() // (60 * 60))
    def last_update(self):
        catalog = self.context.portal_catalog
        results = catalog.searchResults(
            {'portal_type': ['LandItem', 'LandSection'],
             'review_state': 'published',
             'sort_on': 'modified',
             'sort_order': 'descending'})

        last_update = None

        if results:
            last_update = results[0].ModificationDate

        return last_update


class CopernicusEventsViewlet(ViewletBase):
    render = ViewPageTemplateFile('events.pt')

    def events(self):
        MAX_NUMBER_EVENTS = getattr(
            self.context, 'box_events_items_number', 4)
        now = DateTime()

        catalog = self.context.portal_catalog
        query = {
            'portal_type': 'Event',
            'sort_on': 'start',
            'sort_order': 'ascending',
            'review_state': 'published'
        }
        events_brains = catalog(**query)

        future_events = []
        for event_brain in events_brains:
            event = event_brain.getObject()
            end_date = event.getField('endDate').getAccessor(event)()
            if end_date >= now:
                future_events.append(event_brain)

        return future_events[:MAX_NUMBER_EVENTS]


class CopernicusNewsViewlet(ViewletBase):
    render = ViewPageTemplateFile('news.pt')

    def news(self):
        MAX_NUMBER_NEWS = getattr(
            self.context, 'box_news_items_number', 4)

        catalog = self.context.portal_catalog
        query = {
            'portal_type': 'News Item',
            'sort_on': 'effective',
            'sort_order': 'descending',
            'review_state': 'published'
        }
        news_brains = catalog(**query)

        news = []
        for news_brain in news_brains:
            news.append(news_brain)

        return news[:MAX_NUMBER_NEWS]


class CopernicusReportsViewlet(ViewletBase):
    render = ViewPageTemplateFile('reports.pt')

    def reports(self):
        MAX_NUMBER_REPORTS = getattr(
            self.context, 'box_reports_items_number', 4)

        catalog = self.context.portal_catalog
        query = {
            'portal_type': 'File',
            'sort_on': 'Date',
            'sort_order': 'descending',
            'path': {
                'query': '/copernicus/library/reports',
                'depth': -1,
            },
        }

        brains = catalog(**query)
        return tuple(brains)[:MAX_NUMBER_REPORTS]
