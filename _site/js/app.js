$(document).ready(function() {

  var header_height = $("#header").outerHeight(true);
  $("section").css("padding-top", header_height);

  $("#work-btn").click(function(){
      $(".wrapper").toggleClass("expand");
      $('#work-btn').html($('#work-btn').text() == '×' ? 'Work' : '×')
  })

  $('footer').footerReveal();


});
