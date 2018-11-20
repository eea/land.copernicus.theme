function hideAllMenus() {
    jQuery('dl.actionMenu').removeClass('activated').addClass('deactivated')
}
function toggleMenuHandler(event) {
    jQuery(this).parents('.actionMenu:first').toggleClass('deactivated').toggleClass('activated');
    return false
}
function actionMenuDocumentMouseDown(event) {
    if (jQuery(event.target).parents('.actionMenu:first').length) {
        return true
    }
    hideAllMenus()
}
function actionMenuMouseOver(event) {
    var menu_id = jQuery(this).parents('.actionMenu:first').attr('id'),
        switch_menu;
    if (!menu_id) {
        return true
    }
    switch_menu = jQuery('dl.actionMenu.activated').length > 0;
    jQuery('dl.actionMenu').removeClass('activated').addClass('deactivated');
    if (switch_menu) {
        jQuery('#' + menu_id).removeClass('deactivated').addClass('activated')
    }
}
function initializeMenus() {
    jQuery(document).mousedown(actionMenuDocumentMouseDown);
    hideAllMenus();
    jQuery('dl.actionMenu dt.actionMenuHeader a').click(toggleMenuHandler).mouseover(actionMenuMouseOver);
    jQuery('dl.actionMenu > dd.actionMenuContent').each(function(idx, el) {
        var $el = $(el);
        var $parent = $el.parent();
        var $grandparent = $parent.parent();
        var id = $grandparent.attr('id');
        if (id !== 'search-results-bar') {
            $el.click(hideAllMenus);
        }
    });
}
jQuery(initializeMenus);
