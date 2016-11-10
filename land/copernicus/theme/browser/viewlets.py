from DateTime import DateTime
from plone.app.layout.viewlets.common import ViewletBase
from plone.memoize import ram
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from time import time


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
        MAX_NUMBER_EVENTS = 2
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
        MAX_NUMBER_NEWS = 2

        catalog = self.context.portal_catalog
        query = {
            'portal_type': 'News Item',
            'sort_on': 'Date',
            'sort_order': 'descending',
            'review_state': 'published'
        }
        news_brains = catalog(**query)

        news = []
        for news_brain in news_brains:
            news.append(news_brain)

        return news[:MAX_NUMBER_NEWS]
