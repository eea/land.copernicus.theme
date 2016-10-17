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

TODO:
=====
Implement Search option.
Implement News list.
Implement Events list.
From Plone use only authoring.css.
Use better fonts from https://fonts.google.com/
Fix links href for important sections (example: User corner) - we need a better solution here.
In navbar use theme fontawesome icon for Home.
Remove scripts from redesign-simple-page.html and redesign-index.html. Move in portal javascripts or use existing (bootstrap).
Fix space in footer bottom.
Navbar to have suboptions if any.
Admin menu.
Fix breadcrumbs wrong markup and add fontawesome icon before You are here.
Fix editor bar styles - it's ugly. (paddings)
Fix print button position. (see mockup)
Fix Search button height.
Fix Ask the service desk link in simple page.
