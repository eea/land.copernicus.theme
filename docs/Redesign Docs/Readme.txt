TODO
====
- homepage: a page for each section, update diazo rules
- remove unused images (land icons etc.)
- menu top right - use icons
- color tags - fix links
- color tags - editable? in all pages?
- menu bottom - fix links. Editable?
- text in footer - remove?
- banners in footer - add copernicus
- newsletter - fix link
- home: reports - implement
- home: observations, spatial data - fix links, editable?
- home: title - style
- home: images slider - implement, styles
- fix responsivity issues


INSITU Install Guide for New theme
==================================
http://localhost:8081/copernicus/prefs_install_products_form
    run land.copernicus.theme step

In portal_skins custom remove copernicusLand.css override.
In http://demo-insitu.eea.europa.eu/portal_css/manage_cssForm click Save

For demo-insitu: fix robots.txt:
    http://stackoverflow.com/a/1522525/1929820
    Just replace
        Disallow:
    with
        Disallow: /

Fix images slider to work:
In portal_javascripts/manage_jsForm add:
    ++resource++land.copernicus.theme.bootstrap-min.js

Fix title non-ascii to fix error on news: news/towards-stronger-partnerships-and-collaboration-the-eea2019s-second-workshop-on-in-situ-coordination

news/interview-with-mauro-facchini-head-of-unit-2013-copernicus-unit-directorate-general-for-internal-market-industry-entrepreneurship-and-smes-european-commission-1/edit

==================================
OLD (from Copernicus Land):

Here we have useful resources used for redesign.

Copernicus Logo with details.svg is exported from Copernicus style guide ("Copernicus graphical charter 1-10-2015.pdf").
Copernicus Logo.svg is the important part of previous svg file.
iStock copyrights Dariusz Paciorek new size.jpg - the representative image of the Land Copernicus designated by the Commission.

New theme configuration notes
=============================
(Steps we used in implementation process of Redesign Theme in Plone with Diazo.)

Copy: RedesignTheme/index.html to theme/static/redesign-index.html
Copy: RedesignTheme/simple-page.html to theme/static/redesign-simple-page.html
Copy: RedesignTheme/public/css/app.css to theme/skins/copernicus_theme_styles/redesign-app.css
Run step: 2.4.1 for land.copernicus.theme
Copy: RedesignTheme/public/images files to theme/skins/copernicus_theme_images/
Edit theme/static/redesign-index.html
    Replace ./public/css/app.css with ./redesign-app.css
    Replace "/public/images" with "" (none)
    Replace script sources with:
        https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js
    Replace: ./index.html with ./
    Fix partners link: ./user-corner/partners
    Replace button with
        <a href="./contact-form" class="btn btn-default">
          <i class="fa fa-envelope"></i>
          Ask the service desk
        </a>
    Solve a href="#" for important pages.
    Remove jquery script

Edit theme/skins/copernicus_theme_styles/redesign-app.css
    Find: background-image: url( and fix paths. Example: ./image.png
    Replace: "../fonts/bootstrap/" with "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/fonts/"

ADD fixes in theme/skins/copernicus_theme_styles/redesign-app.css

Edit theme/static/redesign-simple-page.html
    Fix resources
    Add data-diazo for land-secondary-column
    Remove jquery script

In Situ -> Reference data
/in-situ/edit (Change title)


If manage_portlets - add new portlet is not working:
----------------------------------------------------
/portal_javascripts/manage_jsForm

Remove conditions for:

eeatinymceutils.js
python: (not here.restrictedTraverse('@@plone_portal_state').anonymous()) and 'edit' in request.ACTUAL_URL.split('/')[-1]

++resource++eea.tinymce.plugins.js
python: (not here.restrictedTraverse('@@plone_portal_state').anonymous()) and 'edit' in request.ACTUAL_URL.split('/')[-1]

and Save.


Newsletter
----------
@@manage-portlets
Add portlet
Static text portlet

Portlet header: User corner menu
