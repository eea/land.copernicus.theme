TODO
====

https://taskman.eionet.europa.eu/issues/80505

- 1.1 The size of the banner appears not to have changed (much if at all). I think it can shrink by about 30% more.

- 2.1 I would suggest making the search box just large enough to contain the word "Search". Other than that its ok for m, unless Sanja or Henrik have comments.

- Looking at the news box it strikes me that there is a problem with long titles. Therefore I would like to raise a new question:

    - 3.4. Is there a way to allow a "short version" of each news article to be shown in the box, with the longer version displayed on the news listing (i.e. http://demo-insitu.eea.europa.eu/news) and on individual news items (e.g. http://demo-insitu.eea.europa.eu/news/copernicus-and-in-situ-hand-in-hand-for-europes-environment-1).

- Concerning the news listing page:
http://demo-insitu.eea.europa.eu/news

    - 3.5 Can we constrain the number of words shown in the news summary (I suggest around 50)? In some cases (e.g. Copernicus and in situ: hand in hand for Europe's environment) the summary spreads itself too far down the page.

    - 3.6 Will the poster's name be shown instead of the username as is shown now (e.g. Dimitri Papadakis instead of papaddim)?

- Concerning the individual news items (e.g. http://demo-insitu.eea.europa.eu/news/copernicus-and-in-situ-hand-in-hand-for-europes-environment-1):

    - 3.7 When titles are too long, they completely fill the banner (e.g. http://demo-insitu.eea.europa.eu/news/interview-with-mauro-facchini-head-of-unit-2013-copernicus-unit-directorate-general-for-internal-market-industry-entrepreneurship-and-smes-european-commission-1)

    Refer to the issue 3.4 above concerning the news box; a short version of the title would also solve this problem.

    - 3.8 The display of feature images is a little unusual (e.g. same example as above): (1) not aligned with text (2) no text flow (3) caption not scaled to width of image displayed. There seems to be no way to modify it by editing - I tried. I would prefer to have the feature image (1) scale to fill the width of the news article or (2) right-aligned with the text wrapping around it. In any case, the caption should scale with the size of the image (also not the case at the moment).

    See attached mockup illustrating the above points.

- Editable section for Discover the Copernicus Services.

- Homepage: Reports - implement

- tests with IE and other browsers, fix (responsivity) problems


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

/portal_types/Folder/manage_propertiesForm
Add news_listing
    In /news select Display - news_listing

In /manage_propertiesForm add:
  box_events_items_number 3 int
  box_news_items_number 3 int
  box_reports_items_number 3 int


- In /homepage-content/ - remove unused images


- In /homepage-content/
    add new pages:
        /homepage-content/homepage-images-slider
        /homepage-content/homepage-observations-spatial-data
        /homepage-content/homepage-tags
        /homepage-content/homepage-copernicus-services
        /homepage-content/homepage-stay-informed
        /homepage-content/homepage-footer

Analog for simplepage-content:
- In /simplepage-content/
    add new pages:
        /simplepage-content/simplepage-images-slider
        /simplepage-content/simplepage-observations-spatial-data
        /simplepage-content/simplepage-tags
        /simplepage-content/simplepage-stay-informed
        /simplepage-content/simplepage-footer

SAMPLE IMAGES SLIDER:

<!-- IMAGES SLIDER -->
<div data-diazo="insitu-carousel" id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>

    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="./insitu-slider-01.png" alt="Global">
        <div class="container">
          <div class="carousel-caption">
            <h4>First slide</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.</p>
            <p><a href="#" class="btn btn-default insitu-btn-read-more">Read more</a></p>
          </div>
        </div>
      </div>

      <div class="item">
        <img src="./insitu-slider-02.png" alt="Pan-European">
        <div class="container">
          <div class="carousel-caption">
            <h4>Second slide</h4>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.</p>
            <p><a href="#" class="btn btn-default insitu-btn-read-more">Read more</a></p>
          </div>
        </div>
      </div>
    </div>

    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
</div>
<!-- IMAGES SLIDER -->


SAMPLE OBSERVATIONS AND SPATIAL DATA

<!-- Observations and spatial data -->
<div class="row">
  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
    <a href="#" class="btn btn-default btn-block insitu-btn-observations">
      <img src="./observation-icon.png" alt="Observations">
      <br />
      <span class="text">OBSERVATIONS</span>
    </a>
  </div>
  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
    <a href="#" class="btn btn-default btn-block insitu-btn-spatial-data">
      <img src="./spatial-data-icon.png" alt="Spatial data">
      <br />
      <span class="text">SPATIAL DATA</span>
    </a>
  </div>
</div><!-- Observations and spatial data -->


SAMPLE INSITU TAGS:
<!-- Insitu Tags -->
<div class="insitu-btn-tags-container text-center">
  <div id="insitu-tags-1">
    <a href="./@@search?SearchableText=policy" class="btn btn-default insitu-btn-policy">Policy</a>
    <a href="./@@search?SearchableText=agreements" class="btn btn-default insitu-btn-agreements">Agreements</a>
    <a href="./@@search?SearchableText=infrastructure" class="btn btn-default insitu-btn-infrastructure">Infrastructure</a>
    <a href="./@@search?SearchableText=open+data" class="btn btn-default insitu-btn-open-data">Open Data</a>
  </div>
  <div id="insitu-tags-2">
    <a href="./@@search?SearchableText=land" class="btn btn-default insitu-btn-land">Land</a>
    <a href="./@@search?SearchableText=marine" class="btn btn-default insitu-btn-marine">Marine</a>
    <a href="./@@search?SearchableText=atmosphere" class="btn btn-default insitu-btn-atmosphere">Atmosphere</a>
    <a href="./@@search?SearchableText=emergency" class="btn btn-default insitu-btn-emergency">Emergency</a>
    <a href="./@@search?SearchableText=security" class="btn btn-default insitu-btn-security">Security</a>
    <a href="./@@search?SearchableText=climate+change" class="btn btn-default insitu-btn-climate-change">Climate Change</a>
  </div>
</div><!-- Insitu Tags -->


SAMPLE STAY INFORMED:

<!-- STAY INFORMED -->
<div class="row main-content">
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="text-center">
      <p class="text-uppercase">
        Stay informed on our latest news!
        <a href="#" class="btn btn-primary text-uppercase insitu-btn-subscribe">Subscribe newsletter</a>
      </p>
    </div>
  </div>
</div><!-- STAY INFORMED -->


SAMPLE FOOTER:

  <!-- Footer -->
  <ul class="list-inline">
    <li><a href="#">About</a></li>
    <li><a href="#">Site map</a></li>
    <li><a href="#">Contact as</a></li>
    <li><a href="#">Disclaimer / Privacy</a></li>
    <li><a href="#">Data controllers</a></li>
    <li><a href="#">Cookies</a></li>
  </ul><!-- Footer -->


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
