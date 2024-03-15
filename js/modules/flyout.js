
jQuery(function($){
    jQuery('a[href="#flyout_form"]').on("click", function(e){
        e.preventDefault();
        jQuery(".flyout-form").addClass("open");
        jQuery(".flyout-bg").fadeIn();
    });
    jQuery(".flyout-close").on("click", function(e){
        e.preventDefault();
        jQuery(".flyout-form").removeClass("open");
        jQuery(".flyout-bg").fadeOut();
    });
    jQuery(".flyout-bg").on("click", function(){
        jQuery(".flyout-close").trigger("click");
    });


    jQuery('a[href="#flyout_form_uk"]').click(function(e){
        e.preventDefault();
        jQuery(".flyout-form-uk").addClass("open");
        jQuery(".flyout-bg").fadeIn();
    });
    jQuery(".flyout-close-uk").on("click", function(e){
        e.preventDefault();
        jQuery(".flyout-form-uk").removeClass("open");
        jQuery(".flyout-bg").fadeOut();
    });
    jQuery(".flyout-bg").on("click", function(){
        jQuery(".flyout-close-uk").trigger("click");
    });

    jQuery(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            jQuery(".flyout-close-uk").trigger("click");
        }
    });
});
