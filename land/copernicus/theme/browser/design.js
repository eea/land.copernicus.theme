jQuery(document).ready(function($) {
  var warning_text_element = $('<span/>', {
    text: '(login required)',
    'class': 'login-req-warning',
  });

  if ($('body').hasClass('subsection-high-resolution-image-mosaic') &&
      $('body').hasClass('userrole-anonymous')) {
    var target_photoalbum = $('.photoAlbumEntryTitle').filter(':contains("Image 2012")');
    $(target_photoalbum).parents('.photoAlbumEntry').append($(warning_text_element));
  }

  var warning_text_element2 = warning_text_element.clone();

  if ($('body').hasClass('subsection-high-resolution-image-mosaic-very-high-resolution') &&
      $('body').hasClass('userrole-anonymous')) {
    var target_photoalbum = $('.photoAlbumEntryTitle').filter(':contains("VHR 2012")');
    $(target_photoalbum).parents('.photoAlbumEntry').append($(warning_text_element2));
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

  // Short title + long title
  // or
  // Complete single title
  var article_title = $("#insitu-article-title");
  var article_title_text = article_title.text();
  if(article_title_text.length > 80) {
    article_title.text(article_title_text.substr(0, 80) + '...');
  } else {
    $("h1#parent-fieldname-title").hide();
    $("h1.documentFirstHeading").hide();
    $("h1.insitu-title").hide();
  }
});
