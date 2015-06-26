(function ($) {
    'use strict';

    $(function() {
        $('#button-menu').click(function(){
            $('body').toggleClass('content-menu-open');
        });
    });
})(jQuery);