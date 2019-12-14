$(document).ready(function() {

  $("#apenndage").remove();

  var target = $('#projectTitle');

  $(window).on('scroll', function() {
    var st = $(this).scrollTop();
    target.css({
      'opacity': 1 - st / 200
    });
  });


  var distance = $('.projects').offset().top - 60;
  var myElement = $('.navUrl');

  $(window).scroll(function() {
    if ($(this).scrollTop() >= distance) {
      $("#navUrl").show();
    } else {
      $("#navUrl").hide();
    }
  });


  // Animate scroll down to footer

  $('a[href^="#"]').click(function() {
    $(this.hash).velocity('scroll');
  });


  // Show project title on hover

  $( ".project" ).mouseenter(function() {
      $("#navUrl").append("<span id='apenndage'>/" + $(this).attr("name") + "</span>");
  })
  .mouseleave(function() {
      $("#apenndage").remove();
  });

});
