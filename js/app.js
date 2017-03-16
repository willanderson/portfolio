$(document).ready(function() {

  var header_height = $("#header").outerHeight(true);
  $("section").css("padding-top", header_height);

  $("#menuToggle").click(function(){
      $("header").toggleClass("active");
      // $(".index").toggleClass("hide");
      $('#menuToggle').html($('#menuToggle').text() == 'Close' ? 'Menu' : 'Close')
  })

  // $('footer').footerReveal();


});
