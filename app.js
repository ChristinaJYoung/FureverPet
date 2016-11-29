$(document).ready(function () {
  /*jQuery code for smooth scrolling to an anchor */
  $('a[href^="#"]').click(function(event) {

      var target = $(this.getAttribute('href'));
      console.log("TESTING THIS", target)

      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });

  /* WayPoint code */
  var slide2 = document.getElementById('slide2');
  var slide3 = document.getElementById('slide3');

  /* Instantiate Waypoint class*/
  var waypoint = new Waypoint({
    element: slide2,
    handler: function (direction) {
      slide2.classList.add('animate')
      slide2.classList.add('animate')
      slide2.classList.add('animate')
      slide2.classList.add('animate')
      slide2.classList.add('animate')
    }
  })

  var waypoint = new Waypoint({
      element: slide3,
      handler: function (direction) {
        slide3.classList.add('animate')
        slide3.classList.add('animate')
        slide3.classList.add('animate')
        slide3.classList.add('animate')
        slide3.classList.add('animate')
      }
  })

  let $el = $('.fade-in'),
  $fadeIn1 = $('#fade-in1'),
  $fadeIn2 = $('#fade-in2'),
  $fadeIn3 = $('#fade-in3'),
  $fadeIn4 = $('#fade-in4'),
  $fadeIn5 = $('#fade-in5'),
  duration = 5,
  from = { opacity: 0},
  to = { opacity: 1 };

  TweenMax.fromTo($el, duration, from, to);
  TweenMax.fromTo($fadeIn1, duration, from, to);
  TweenMax.fromTo($fadeIn2, duration, from, to);
  TweenMax.fromTo($fadeIn3, duration, from, to);
  TweenMax.fromTo($fadeIn4, duration, from, to);
  TweenMax.fromTo($fadeIn5, duration, from, to);

  // dropdown box selections hide/show
  $('select').change(function () {
    console.log(this.value)
    if (this.value == 'All Breeds') {
      console.log('HELLO')
      $('#dalmations').show();
      $('#germanSheps').show();
      $('#greatDanes').show();
    } else if (this.value == 'Dalmations') {
      $('#dalmations').show();
      $('#germanSheps').hide();
      $('#greatDanes').hide();
    } else if (this.value == 'German Shepherds') {
      $('#germanSheps').show();
      $('#dalmations').hide();
      $('#greatDanes').hide();
    } else if (this.value == 'Great Danes') {
      $('#greatDanes').show();
      $('#germanSheps').hide();
      $('#dalmations').hide();
    } else {
      $('#greatDanes').hide();
      $('#germanSheps').hide();
      $('#dalmations').hide();

    }
  })

})
