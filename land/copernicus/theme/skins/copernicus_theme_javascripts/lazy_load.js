/* jslint:disable */
/*global jQuery, window, document, Faceted */

function cleanupFacetedLazy() {
    if (Faceted.Events.LAZY_LOAD && jQuery('#faceted-results').length === 0) {
        jQuery(Faceted.Events).unbind(Faceted.Events.LAZY_LOAD);
    }
}

jQuery(document).ready(function($) {
    // Check if the faceted event needs to be cleaned up
    // Faceted Lazy Load
    if (window.Faceted) {
        Faceted.Events.LAZY_LOAD = 'FACETED-LAZY-LOAD';
        Faceted.LoadLazy = {
            initialize: function () {
                if(jQuery('#faceted-results').length) {
                    var loaded_once;
                    jQuery(Faceted.Events).bind(Faceted.Events.LAZY_LOAD, function(evt, data){
                        var children = jQuery('#faceted-results').children();
                        if (children.length > 1) {
                            var lazy_elements = children.find('.lazy');
                            var lazy_elements_parents = lazy_elements.parent();

                            lazy_elements.each(function(){
                                var element = jQuery(this);
                                var source = element.attr('src');

                                if (source.indexOf('lazyload_loader') === -1) {
                                    element.attr('data-src', source);
                                    element.attr('src', '/www/lazyload_loader.gif');
                                    loaded_once = true;
                                } else {
                                    loaded_once = false;
                                }
                            });

                            if (loaded_once) {
                                lazy_elements_parents.css('text-align', 'center');

                                var windowWidth = window_width;
                                if (windowWidth <= 767 || windowWidth > 930) {
                                    lazy_elements_parents.css('width', '15%');
                                }

                                if (windowWidth <= 480 || (windowWidth > 767 && windowWidth <= 930)) {
                                    lazy_elements_parents.css('width', '20%');
                                }

                                lazy_elements.lazy({
                                    scrollDirection: 'both',
                                    effect: 'fadeIn',
                                    effectTime: 1000,
                                    threshold: 100,
                                    visibleOnly: true,
                                    onError: function(element) {
                                        console.log('error loading ' + element.data('src'));
                                    }
                                });
                            }
                        }
                    });
                }
            }
        };
        cleanupFacetedLazy();
    }

    if(jQuery('#faceted-results').length) {
        jQuery('#faceted-results').bind('DOMSubtreeModified',function() {
            Faceted.LoadLazy.initialize();
        });
    }

    $('.lazy').lazy({
        scrollDirection: 'both',
        effect: 'fadeIn',
        effectTime: 1000,
        threshold: 100,
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });

    // Internet explorer detection
    var isIe = function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return true
            return true;
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return true
            return true;
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return true
            return true;
        }

        // other browser
        return false;
    };

    var count = 0;
    var forceImageLoad = function(images) {
        count++;
        if (count > 1) {
            $(images).each(function() {
                var image = $(this);

                if (!$(this).attr('data-src')) {
                    var image_src = $(this).attr('src');
                    $(this).attr('data-src', image_src);
                }

                var image_source = image.attr('data-src');
                image.attr('src', image_source);
                // setTimeout(function(){}, 100);
            });
        }
    };

    var forceDavizLoad = function() {
        jQuery.each(jQuery('.embedded-dashboard:visible'), function(idx, elem) {
            if ((elem)) {
                if (jQuery(elem).hasClass('not_visible')) {
                    jQuery(elem).removeClass('not_visible');
                    if (jQuery(elem).hasClass('isChart')) {
                        var vhash = elem.id.split('_')[2];
                        if (window.gl_charts) {
                            window.gl_charts['googlechart_view_' + vhash] = window.drawChart(jQuery(elem).data('settings'), jQuery(elem).data('other_options')).chart;
                        }
                    }
                    else{
                        window.drawDashboardEmbed(jQuery(elem).data('settings'));
                    }
                    jQuery(elem).trigger('eea.embed.loaded');
                }
            }
            setTimeout(function() {}, 1000);
        });
    };

    var beforePrintCaller = function(lazyElements) {
        forceDavizLoad();
        forceImageLoad(lazyElements);
    };

    if (typeof lazyElements !== 'undefined') {
        if (isIe()) {
            window.onbeforeprint = beforePrintCaller(lazyElements || []); // Internet Explorer
        }

        $(document).keydown(function(allBrowsers) { // Track printing using Ctrl/Cmd+P.
            if (allBrowsers.keyCode === 80 && (allBrowsers.ctrlKey || allBrowsers.metaKey)) {
                beforePrintCaller(lazyElements || []);
            }
        });

        if (window.matchMedia) { // Track printing from browsers using the Webkit engine
            var mediaQueryList = window.matchMedia('print');
            mediaQueryList.addListener(function(mql) {
                if (mql.matches) {
                    beforePrintCaller(lazyElements || []);
                }
            });
        }
    }
    var $window = $(window);
    $window.on('click', function(ev) { $window.scroll();});
});
