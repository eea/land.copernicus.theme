jQuery( document ).ready(function($) {
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

    $("#viewlet-cookiepolicy").appendTo("body"); // Fix cookie policy visibility problem (in IE)
});
