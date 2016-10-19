# from DateTime import DateTime
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
        # now = DateTime()

        catalog = self.context.portal_catalog
        query = {
            'portal_type': 'Event',
            'sort_on': 'start',
            'sort_order': 'ascending'
        }
        events_brains = catalog(**query)

        events = []
        for event_brain in events_brains:
            # event = event_brain.getObject()
            # start_date = event.getField('startDate').getAccessor(event)()
            # if start_date > now:
            events.append(event_brain)

        return events[:MAX_NUMBER_EVENTS]
