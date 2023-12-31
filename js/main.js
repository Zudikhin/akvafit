$(document).ready(function() {
    "use strict";

    $(".back_modal").click(function() {
        $(this).removeClass("active");
        $(".dropdown").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(".dropdown_top_close").click(function() {
        $(".back_modal").removeClass("active");
        $(".dropdown").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(".header_mob_burger").click(function() {
        $(".back_modal").addClass("active");
        $(".dropdown").addClass("active");
        $("body").addClass("scroll");
    });

    $('select').niceSelect();

    $('.review_wrap_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		speed: 500,
        centerMode: true,
        centerPadding: 0,
		autoplay: false,
        fade: false,
		prevArrow: $('.review_wrap_arrows_prev'),
      	nextArrow: $('.review_wrap_arrows_next'),
          responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
	});

    $('.product_example_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		speed: 500,
		autoplay: false,
        fade: false,
		prevArrow: $('.product_example_title_arrows_prev'),
      	nextArrow: $('.product_example_title_arrows_next'),
          responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    fade: true
                }
            }
        ]
	});

    $('.residential_complexes_slider').slick({
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        variableWidth: true
    });

    $('.collections_slider').slick({
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        variableWidth: true
    });

    $('.flat_block_left_for_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.flat_block_left_nav',
        prevArrow: $('.flat_block_left_for_arrows_prev'),
      	nextArrow: $('.flat_block_left_for_arrows_next')
    });

    $('.flat_block_left_nav').slick({
        slidesToShow: 3,
        mobileFirst: true,
        slidesToScroll: 1,
        asNavFor: '.flat_block_left_for_slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1919,
                settings: {
                    slidesToShow: 4,
                    adaptiveHeight: true,
                    vertical: true
                }
            }
        ]
    });

    $(".region_nav_item").click(function() {
        $(".region_nav_item").removeClass("active");
        $(this).addClass("active");
        var attr = $(this).attr("data-target");
        $(".region_content_item").removeClass("active");
        $(`#${attr}`).addClass("active");
    });

    $('.similar_block').slick({
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        variableWidth: true
    });

    $(".main_bottom_content_right").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".residential_complexes").offset().top
        }, 1000);
    });

    $('input').on('input',function(e){
        var valueInput = $(this).val();
        if(valueInput) {
            $(this).parent().find(".remove_input").css("display", "block");
        } else {
            $(this).parent().find(".remove_input").css("display", "none");
        }
    });

    $(".remove_input").click(function() {
        $(this).parent().find("input").val("");
        $(this).parent().find(".remove_input").css("display", "none");
    });

    $('.product_block_left_nav').slick({
        slidesToShow: 3,
        mobileFirst: true,
        slidesToScroll: 1,
        asNavFor: '.product_block_left_for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        vertical: true
    });

    $('.product_block_left_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        arrows: false,
        fade: true,
        asNavFor: '.product_block_left_nav'
    });

    $(".product_nav_item").click(function() {
        var attr = $(this).attr("data-target");
        $(".product_nav_item").removeClass("active");
        $(this).addClass("active");
        $(".product_description_item").removeClass("active");
        $(`#${attr}`).addClass("active");
    });

    $('.product_similar_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		speed: 500,
		autoplay: false,
        fade: false,
		prevArrow: $('.product_similar_title_arrows_prev'),
      	nextArrow: $('.product_similar_title_arrows_next'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    fade: true
                }
            }
        ]
	});

    $('.about_bot_team_sliders').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		speed: 500,
        centerMode: true,
        centerPadding: 0,
		autoplay: false,
        fade: false,
		prevArrow: $('.about_bot_team_arrows_prev'),
      	nextArrow: $('.about_bot_team_arrows_next'),
          responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
	});

    $(".faq_block_list_item_top").click(function() {
        $(this).parent().toggleClass("active");
        $(this).parent().find(".faq_block_list_item_body").slideToggle();
    })

});