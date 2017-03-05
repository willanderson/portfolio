$(document).ready(function() {

  // $(document).on('scroll', function() {
  //   if($(this).scrollTop()>=$('#work').position().top){
  //       $(".work-header-image").addClass("removeHeader");
  //   }
  // })

    var header_height = $("#header").outerHeight(true);
    $(".content").css("padding-top", header_height);

  $("#turnOn").click(function(){
      $("#mobile_wrapper").toggleClass("hide");
      $('#menuToggle').html($('#menuToggle').text() == 'Close' ? 'Menu' : 'Close')
      // $("#menuToggle").html("Close");
  })

  $('footer').footerReveal();


});
