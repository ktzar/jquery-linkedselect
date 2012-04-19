/** 
 * Map two selects so the changes in one affect the other
 * target: selector of the element that will change
 * map:    object with keys and values mapping both elements
 */
if(typeof jQuery != 'undefined') {
    jQuery(function($) {
        $.fn.extend({
            linkselect: function(options) {
                var settings = $.extend({}, $.fn.linkselect.defaults, options);
                return this.each(function () {
                    /* Core of the plugin */
                    $(this).change(function(){
                        if ( typeof settings.map[$(this).val()] != "undefined" ) {
                            $(settings.target).val(settings.map[$(this).val()]);
                        }
                    });
                    /* END Core of the plugin */
               });
            }
        });
        $.fn.linkselect.defaults = { target:'', map:{}};
    }(jQuery));
}
