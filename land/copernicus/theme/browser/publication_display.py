from Products.Five.browser import BrowserView


class PublicationDisplay(BrowserView):
    def __call__(self):
        try:
            return self.context.image.image_thumb
        except AttributeError:
            return
