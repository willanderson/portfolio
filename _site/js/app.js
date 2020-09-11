$(document).ready(function() {

  var projectName;

  var target = $('#projectTitle');

  $(window).on('scroll', function() {
    var st = $(this).scrollTop();
    target.css({
      'opacity': 1 - st / 200
    });
    var theta = st / 100 % Math.PI;
    if (st < 1000) {
      $('#spin').css({ transform: 'rotate(' + theta + 'rad)' });
    }
  });


  // var distance = $('.projects').offset().top - 60;
  // var myElement = $('.navUrl');
  //
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() >= distance) {
  //     $("#navUrl").show();
  //   } else {
  //     $("#navUrl").hide();
  //   }
  // });


  // Animate scroll down to footer

  $('a[href^="#"]').click(function() {
    $(this.hash).velocity('scroll');
  });


  // Show project title on hover


  function getName(element) {
    return $(element).attr("name");
  }


  $( ".project" ).mouseenter(function() {
      var projectName = getName(this);
      $("#navUrl").append("<span id='apenndage'>/" + projectName + "</span>");
  })


  .mouseleave(function() {
      var projectName = undefined;
      $("#apenndage").remove();
  });



});
