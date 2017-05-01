$(document).ready(function() {

  var header_height = $("#header").outerHeight(true);
  $("section").css("padding-top", header_height);

  // $("#menuToggle").click(function(){
  //     $("header").toggleClass("active");
  //     // $(".index").toggleClass("hide");
  //     $('#menuToggle').html($('#menuToggle').text() == 'Close' ? 'Menu' : 'Close')
  // })

  // Scape up work thumbnails on hover
  $('.browser').hover(function() {
      $(this).find('.window_img').addClass('scaleup');
  }, function() {
      $(this).find('.window_img').removeClass('scaleup');
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
