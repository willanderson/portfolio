$(document).ready(function() {

  var header_height = $("#header").outerHeight(true);
  $("section").css("padding-top", header_height);

  $("#turnOn").click(function(){
      $("#mobile_wrapper").toggleClass("hide");
      $('#menuToggle').html($('#menuToggle').text() == 'Close' ? 'Menu' : 'Close')
      // $("#menuToggle").html("Close");
  })

  $('footer').footerReveal();


});
