jQuery(function($){

      $(".tesimo-slider").slick({

        dots: false,
        rows: 2,

        slidesToShow : 3,

        slidesToScroll: 3,

        arrows: true,

    loop: false,

        infinite: false,

        responsive: [

    

    {

            breakpoint: 992, // tablet breakpoint

            settings: {
               rows: 2,

                slidesToShow: 3,
                arrows: true,

                slidesToScroll: 3

            }

        },

        {

            breakpoint: 767, // mobile breakpoint

            settings: {
              rows: 3,
               dots: true,
         arrows: true,
                slidesToShow: 1,

                slidesToScroll: 1

            }

        }

  ]

      });



      });
