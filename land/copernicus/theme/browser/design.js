jQuery(document).ready(function($) {
  // Add texts in Register form
  if($('body').hasClass('template-register') && $('body').hasClass('portaltype-plone-site')) {
    var $form = $("article.main #content #content-core form");
    if($form.length == 1) {
      $(
          "<div class='info-box'>"
        + "<p>You must be a registered user in order to download the data made available on this website. Please note: no registration is required for viewing information or accessing web services.</p>"
        + "<h2>Have an EIONET account?</h2>"
        + "<p>Members of the EIONET network can use their EIONET account or choose to create a new one.</p>"
        + "</div>"
      ).insertBefore($form);

      $(
          "<span class='info-text-bottom'>"
        + "Please contact <a href='http://land.copernicus.eu/contact-form'>the service desk</a>,"
        + " if you have any questions.<p>"
        + "</span>"
      ).insertAfter($("#actionsView span.actionButtons"));
    }
  }

  // Overrides in:
  // site/@@personal-information
  // site/@@personal-preferences
  // site/@@change-password
  if($('body').hasClass('portaltype-plone-site') && (
     $('body').hasClass('template-change-password') ||
     $('body').hasClass('template-personal-preferences') ||
     $('body').hasClass('template-personal-information')
  )) {
    // Rename "Personal information" to "Personal settings"
    $("div#edit-bar ul#content-views li#contentview-user_data-personal-information a").text("Personal settings");

    if($('body').hasClass('template-personal-information')) {
      $("div#content h1.documentFirstHeading").text("Personal settings");
    }

    // Hide Personal preferences tab for non-manager users
    if(!$('body').hasClass('userrole-manager')) {
      $("div#edit-bar ul#content-views li#contentview-user_data-personal-preferences").hide();
    }
  }

  // trim description, it has too much space before
  var $description = $('#content .documentDescription');
  $description.text($.trim($description.text()));

  $("#viewlet-cookiepolicy").appendTo("body");  // Fix cookie policy visibility problem (in IE)

  /* Go to top */
  $("footer a.go-top").on("click", function(evt) {
    $("html, body").animate({scrollTop:0});
    evt.preventDefault();
    return false;
  });

  // Main menu behaviour for dropdown items (News)
  var $news_menu = $("#portaltab-news-items");
  $news_menu.appendTo("ul.nav.land-social-icons");

  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(30).fadeIn(200);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(500);
  });

  // Land item edit - Metadata tab - Bounding Boxes behaviour
  // Empty fields are hidden by default, just show them on "Add" pressed
  if($('body').hasClass('template-atct_edit') && $('body').hasClass('portaltype-landitem')) {
    var bounding_boxes = $('div[id*="archetypes-fieldname-geographicBoundingBox"]');
    $(bounding_boxes).each(function() {
      var fields = $(this).find('input');
      var is_empty = true;
      $(fields).each(function() {
        if($(this).val().length > 0) {
          is_empty = false;
        }
      });

      if(is_empty) {
        $(this).hide();
      }
    });

    $('#archetypes-fieldname-geographicBoundingBox7').after("<button id='add-bounding-box'>Add Bounding Box Field</button>");
    $('#add-bounding-box').after("<p class='formHelp'>Empty bounding boxes are ignored in view mode. You can have maximum 7 bounding boxes.</p>");
    $('#archetypes-fieldname-geographicBoundingBox').show();

    $('#add-bounding-box').on('click', function(evt) {
      evt.preventDefault();
      $('div[id*="archetypes-fieldname-geographicBoundingBox"]:hidden:first').show();
    });
  }
});
