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
    /*article_title.text(article_title_text.substr(0, 80) + '...');*/
    article_title.css("font-size", "16px");
  } else {
    $("h1#parent-fieldname-title").hide();
    $("h1.documentFirstHeading").hide();
    $("h1.insitu-title").hide();
  }

  // Transform simple tags to insitu tags
  var simple_tags = $('#viewlet-below-content #category a.link-category, .insitu-tags-labels a');
  if(simple_tags.length > 0) {
    $('#viewlet-below-content #category span.separator').hide();
    $('.insitu-btn-tags-container').hide();

    var insitu_tags = {
      'observations': 'filter-btn btn btn-default label insitu-btn-observations',
      'spatial-data': 'filter-btn btn btn-default label insitu-btn-spatial-data',
      'policy': 'filter-btn btn btn-default label insitu-btn-policy',
      'agreements': 'filter-btn btn btn-default label insitu-btn-agreements',
      'infrastructure': 'filter-btn btn btn-default label insitu-btn-infrastructure',
      'open-data': 'filter-btn btn btn-default label insitu-btn-open-data',
      'land': 'filter-btn btn btn-default label insitu-btn-land',
      'marine': 'filter-btn btn btn-default label insitu-btn-marine',
      'atmosphere': 'filter-btn btn btn-default label insitu-btn-atmosphere',
      'emergency': 'filter-btn btn btn-default label insitu-btn-emergency',
      'security': 'filter-btn btn btn-default label insitu-btn-security',
      'climate-change': 'filter-btn btn btn-default label insitu-btn-climate-change',
      'undefined': 'filter-btn btn btn-default label insitu-btn-undefined'
    }

    var home_url = $("li#portaltab-index_html a").attr("href");

    simple_tags.each(function() {
      var tag_id = this.text.toLowerCase().replace(" ", "-");
      var class_name = insitu_tags[tag_id];
      var search_url = "";

      if(class_name == undefined) {
        class_name = insitu_tags['undefined'];
        search_url = home_url + "/@@search?Subject%3Alist=" + this.text;
      } else {
        search_url = home_url + "/@@search-by-tags#?selected_tags=" + tag_id;
      }
      $(this).attr('href',search_url);

      $(this).addClass(class_name);
    });

    var tags_container = $("#viewlet-below-content #category");
    if(tags_container.length > 0) {
      // Get rid of Filled under: text
      tags_container.contents().get(0).nodeValue = "";

      // Move tags at the top of the page
      tags_container.prependTo('.row.main-content > .col-lg-8');
    }
  }
});
