/*=========================================================================
js start
===========================================================================*/
$(function () {
      'use strict';


      var nav = $('.main_menu').offset().top;

      $(window).scroll(function () {

        var src = $(this).scrollTop();

        if (src > nav) {

          $('.main_menu').addClass('menu_fix');

        } else {

          $('.main_menu').removeClass('menu_fix');

        }

      });
        // Banner slider js start
        $('#banner').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          arrows: false,
          dots: true,
        });

        // About video js start
        $('.venobox').venobox();


        // About video js start

        $('.test_slider').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          dots: true,
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

        });


        //*counter js start   *//

        $('.counter').counterUp({
          delay: 10,
          time: 1000
        });

        $('.clint_slider').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          arrows: true,
          nextArrow: '<i class="fas fa-chevron-right nxt_arr" ></i>',
          prevArrow: '<i class="fas fa-chevron-left perv_arr" ></i>',
          centerMode: true,
          centerPadding: 0,
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

        });


      });