jQuery(function($){

    const headerHeight = $(".main-header").outerHeight(true);
    $(".hs-back-to-top").hide();
    $(window).on("scroll load", function(){
        let scroll = $(this).scrollTop();
        scroll > headerHeight ? $(".main-header").addClass("sticky-header") : $(".main-header").removeClass("sticky-header");
        scroll > headerHeight ? $('.hs-back-to-top').fadeIn(1000) : $('.hs-back-to-top').fadeOut(1000);
    });
    $('.hs-back-to-top').on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $(".menu_icon").on("click", function(event){
        event.preventDefault();
        $(".main-header").toggleClass("nav-open")
        $(this).toggleClass("active");
        $(".header-mobile").toggleClass("open");
    });

    $(".fixme").each(function(index, value){
        const _selfme = $(this);
        _selfme
        .onScrollSection({
            topOffset:          100,
            bottomOffset:       0,
            setParentOnStick:   true,
            setWidthOnStick:    true,
            viewport:           window,
            footerElement:      null,
        });
        _selfme.closest(".fixmeParent").css({
            'z-index': index,
            'position': 'relative',
        });
        _selfme.parent(".fixmeParent").nextAll(':not(.fixmeParent)').css({
            'position': 'relative',
            'z-index': 50,
        });
    });


    $('.team-content-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        arrows: false,
        dots: false,
        asNavFor: '.team-image-slider'
    });
    $('.team-image-slider').slick({
        speed: 1500,
        fade: true,
        cssEase: 'ease-out',
        easing: 'easeOutElastic',
        asNavFor: '.team-content-slider',
        dots: false,
        arrows: false,
        focusOnSelect: true
      });
     
});