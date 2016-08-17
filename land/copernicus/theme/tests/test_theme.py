# -*- coding: utf-8 -*-

from land.copernicus.theme.testing import FUNCTIONAL_TESTING
from plone.app.theming.interfaces import IThemeSettings
from plone.registry.interfaces import IRegistry
from plone.testing.z2 import Browser
from zope.component import getUtility
import Globals
import unittest


class TestCase(unittest.TestCase):

    layer = FUNCTIONAL_TESTING

    def setUp(self):
        # Enable debug mode always to ensure cache is disabled by default
        Globals.DevelopmentMode = True

        self.settings = getUtility(IRegistry).forInterface(IThemeSettings)
        import transaction
        transaction.commit()

    def tearDown(self):
        Globals.DevelopmentMode = False

    def test_theme_enabled(self):
        app = self.layer['app']
        portal = self.layer['portal']

        browser = Browser(app)
        browser.open(portal.absolute_url())
        marker_text = 'Copernicus Land Monitoring Services'
        self.assertTrue(marker_text in browser.contents)

    def test_theme_transformation(self):
        app = self.layer['app']
        portal = self.layer['portal']

        browser = Browser(app)
        browser.open(portal.absolute_url())

        self.assertTrue('portaltype-plone-site' in browser.contents)
