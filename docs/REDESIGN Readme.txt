TODO
====
- Observations & Spatial data in Homepage - update links
  We would also need some details regarding the links called: Observations, Spatial data, and Reports

- home: reports - implement

- add / update missing links, check texts - related to newsletter based on feedback to #80175

- fix responsivity issues

- tests with IE and other browsers, fix problems

- Temporary issue of logging in
  Whilst at first I did not know what this comment was referring to, I now see that there is a Log in link at the top of the page. What is the issue?

- Improve Login form design
  Login form fields are too small after adding the pane on the right > Indeed the fields are too small - but no pane is visible on the right.

- Homepage: Could the homepage banner be made smaller by approximately one-third of its current size (whilst remaining larger than the banner of the inner pages)? We would like to be able to see more of the homepage content without the need for scrolling.

- Homepage: Could you swap the (vertical) position of the elements containing (1) the "button cluster" and (2) the News, Events and Reports boxes.

- Homepage: Could you add a vertical "banner-style" element similar to the "STAY INFORMED ON OUR LATEST NEWS!" bar, containing the text "Discover the Copernicus Services". We would like to include the icons of the six Copernicus services (see attachment) with links to each service page: 
    Land: land.copernicus.eu
    Marine: marine.copernicus.eu
    Atmosphere: atmosphere.copernicus.eu
    Emergency: emergency.copernicus.eu
    Climate: climate.copernicus.eu
    Security: TBD.

- Site Header: The search bar at the top of the page is a bit large in relation to the other elements. It is also in a slightly awkward position with respect to the layout of the header. Would it be possible to make it smaller and perhaps also move it next to (to the right of) the social media icons, for example? Note: it would be acceptable, in my opinion, to use the same size and format as the search bar on the land.copernicus.eu homepage, which is both smaller and more discreet.

- News, events, reports: Would it be possible to create a new item type: "In proximity", with similar behaviour to news, events and reports? 
Ideally we would have a drop-down menu under "News" leading to Events, Newsletter, In Proximity" and perhaps some others.

- Inner pages: Breadcrumb trail: Please can you add a little vertical space above the breadcrumb trail (e.g. Home ­­» Contact us) to separate it from the banner. Same applies to the "Print" button.

- Tagging / search function: The idea of the tags was that it would be possible to combine them, i.e. by clicking first on "observations" and then on "Land", for example, to display content tagged with both. Is it possible to implement such functionality? To be further discussed on Monday/Tuesday.

For more see: https://taskman.eionet.europa.eu/projects/copernicus-land-monitoring-service/wiki/MoM_1st_of_February_2017
- Increase visibility of the web site
    - Optimisation of search results in google.com, by inclusion of optimum number and location of keywords, tags etc. – EEA will provide the list of keywords; the lesser number of keywords, the higher placement on the search results
    - Links to other thematically relevant sites – add the other ESA sites and content with the overview of the 39 countries with entry point for the country; to be added somewhere in the User Corner or in the footer of the page.
    - Enabling the (automated) linkages to the open data portals – the objective is to feed open data portals with data from Copernicus; analysis will be started by Eugenia in March
    - Integration with social networks – Like and Tweet buttons like in BISE or look in the other 6 websites; Instagram and Slideshare might be good ideas because also of already prepared content information (pictures from conferences and piles of presentations)
- Include the necessary elements in both portals to allow RDF metadata harvesting by a Semantic Data Service
    - The idea is for the data published on the Copernicus websites to be harvested by the relevant semantic databases
    - The data should be well described by metadata, in particular keywords, so that datasets can be easily findable when searching for it in these semantic databases. As opposed to the tagging for search engines, in this case the rule of thumb is „the more, the better” and the terms should be more scientific.
    - It should be sufficient for two levels of pages from the sitemap and the datasets to be tagged with the relevant terms
    - Need to make sure that pages and datasets to be exported in RDF are tagged with sufficient terms. Together with the EEA team, EdW will assess further tagging with terms from controlled vocabularies, such as GEMET.
- Platforms
    - The statistics of the use of platforms (devices and broswers) in Europe in the past year will be considered
- Style
    - New design for insite site is on the demo server – feedback needed: http://demo-insitu.eea.europa.eu
    - Demo server will be used from now on before deployment to production
    - Demo servers need to be refreshed from once in a while with image from production
    - The buttons with the services on the bottom of the screen go to search with that specific term; every service has a specific color and logo






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
        /homepage-content/homepage-stay-informed
        /homepage-content/homepage-footer


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
