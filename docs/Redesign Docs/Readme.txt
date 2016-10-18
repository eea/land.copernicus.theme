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


TODO:
=====
Homepage:
    Implement slider images administration.
    Implement News list.
    Implement Events list.

Other:
    Use better fonts from https://fonts.google.com/
    Fix links href for important sections (example: User corner) - we need a better solution here.
    In navbar use theme fontawesome icon for Home.
    Remove scripts from redesign-simple-page.html and redesign-index.html. Move in portal javascripts or use existing (bootstrap).
    Fix space in footer bottom.
    Navbar to have suboptions if any.
    Fix breadcrumbs wrong markup and add fontawesome icon before You are here.
    Fix go to Top button in footer position (see on Firefox).
    Padding top utils menu.
    The same color for btn hover. Green dark instead of computed.
    Better contrast for links color?
    Better icon for Land use cases? (the man in foreground filled with color)
    Better footer design. Partners section, better position?
    The error message. It's very bold. Redesign it. Fix color for link hover: white.
    Use the same style for links in large column as for small col. (underlined only on hover?)
    Go to Top button: fix behaviour.
    User corner: administration and links. (It's only a draft now.)
    Font sizes for headings.
    Font size for normal text. (http://demo.copernicus.eea.europa.eu/user-corner/contract-opportunities)
    Print styles.
    Improve custom styles (example: http://demo.copernicus.eea.europa.eu/@@personal-information)
    Improve register form styles: http://demo.copernicus.eea.europa.eu/@@register
    Fix print button position (http://demo.copernicus.eea.europa.eu/about). Maybe use bootstrap solution used in html + css theme, + diazo rules.
    Sitemap icons position (http://demo.copernicus.eea.europa.eu/sitemap)
    Style for pagination in search results page, also style for Search button.
