$(document).ready(function() {

  setTimeout(fadeIn, 400);
  function fadeIn() {
    $('#workBrowser').velocity("transition.slideUpBigIn");
  }



  var header_height = $("#header").outerHeight(true);
  $("section").css("padding-top", header_height);

   $('#featured').slick({
     asNavFor: '#titles',
     fade: true
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
