jQuery(document).ready(function($) {
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
