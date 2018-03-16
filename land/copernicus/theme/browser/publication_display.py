from Products.Five.browser import BrowserView


class PublicationDisplay(BrowserView):
    def __call__(self):
        try:
            image = self.context.image.image_thumb
            safe_title = self.context.title.decode('utf-8', 'replace')
            image.title = safe_title
            image.alt = safe_title
            return image
        except AttributeError:
            return
