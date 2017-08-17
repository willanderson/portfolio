$(document).ready(function() {

  setTimeout(fadeIn, 400);
  function fadeIn() {
    $('#workBrowser').velocity("transition.slideUpBigIn");
  }



  var header_height = $("#header").outerHeight(true);
  $("section").css("padding-top", header_height);

   $('#featured').slick({
     asNavFor: '#titles',
     fade: false,
     prevArrow: "<button type='button' class='slick-prev'><svg class='slideshow-arrow-icon product-slider__arrow' viewBox='0 0 19 34' version='1.1' style='width: 19px; height: 24px;'><g stroke-width='1' stroke-linecap='round' stroke-linejoin='round' fill='none'><g transform='translate(-1042.000000, -2832.000000)'><g transform='translate(100.000000, 2489.000000)'><polyline points='943 343 960 360 943 377'></polyline></g></g></g></svg></button>",
     nextArrow: "<button type='button' class='slick-next'><svg class='slideshow-arrow-icon product-slider__arrow' viewBox='0 0 19 34' version='1.1' style='width: 19px; height: 24px;'><g stroke-width='1' stroke-linecap='round' stroke-linejoin='round' fill='none'><g transform='translate(-1042.000000, -2832.000000)'><g transform='translate(100.000000, 2489.000000)'><polyline points='943 343 960 360 943 377'></polyline></g></g></g></svg></button>"
   });

   $('#titles').slick({
     arrows: false,
     asNavFor: '#featured',
     fade: true
   });



  // Mobile menu
  $("#menuToggle").click(function() {
      var isOpen = $("#mobile_wrapper").is(':visible')
      var slideDir = isOpen ? 'slideUpOut' : 'slideDownIn'
      var cta = isOpen ? 'Menu' : 'Close'
      $('#menuToggle').text(cta);
      $('#mobile_wrapper').velocity('transition.' + slideDir, {
          duration: 250


      });
  });


});
