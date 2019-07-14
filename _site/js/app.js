$(document).ready(function() {


  var target = $('#projectTitle');

  $(window).on('scroll', function() {
    var st = $(this).scrollTop();
    target.css({
      'opacity': 1 - st / 200
    });
  });


  var distance = $('.projects').offset().top - 60;
  var myElement = $('.section');

  $(window).scroll(function() {
    if ($(this).scrollTop() >= distance) {
      $("#section").show();
    } else {
      $("#section").hide();
    }
  });

  $('a[href^="#"]').click(function() {
    $(this.hash).velocity('scroll');
  });

});
