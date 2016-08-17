from HTMLParser import HTMLParser
from Products.Five.browser import BrowserView


class MLStripper(HTMLParser):
    def __init__(self):
        self.reset()
        self.fed = []

    def handle_data(self, d):
        self.fed.append(d)

    def get_data(self):
        return ''.join(self.fed)


def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()


class EventFormat(BrowserView):
    def __call__(self, text="", wordsnumber=50):
        if not text:
            field = self.context.getField('text')
            text = field.getAccessor(self.context)()
        s = MLStripper()
        s.feed(text)
        return " ".join(s.get_data().split()[:int(wordsnumber)]) + "..."
