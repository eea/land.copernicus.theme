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

    // trim description, it has too much space before
    var $description = $('#content .documentDescription');
    $description.text($.trim($description.text()));
});
