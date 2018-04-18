from Products.Five.browser import BrowserView
from land.copernicus.content.config import MAX_NUMBER_NEWS


class HomepageView(BrowserView):
    """ Homepage
    """
    def __call__(self):
        return self.index()

    def news(self, limit=MAX_NUMBER_NEWS):
        catalog = self.context.portal_catalog
        query = {
            'portal_type': 'News Item',
            'sort_on': 'Date',
            'sort_order': 'descending',
            'review_state': 'published',
            'sort_limit': limit,
        }
        return catalog(**query)[:limit]
