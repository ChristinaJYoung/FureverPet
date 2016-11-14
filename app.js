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
  /* Instantiate Waypoint class*/
  var slide3 = document.getElementById('slide3');
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

  // $('#titleExceptSplash').hide();
  // $('.navigation').hide();
  // $('#dropdown').hide();
  //
  // $('#home').hide();
  // $('#selectBreeds').hide();
  //
  // $('#enterSite').click(function () {
  //   $('#home').show();
  //   $('#titleExceptSplash').show();
  //   $('.navigation').show();
  //   $('#splashPage').hide();
  //   $('#selectBreeds').hide();
  // })
  // $('#homeLink').click(function () {
  //   $('#home').show();
  //   $('#titleExceptSplash').show();
  //   $('.navigation').show();
  //   $('#splashPage').hide();
  //   $('#selectBreeds').hide();
  // })
  // $('#breedsLink').click(function () {
  //   $('#selectBreeds').show();
  //   $('#titleExceptSplash').show();
  //   $('#dropdown').show();
  //   $('.navigation').show();
  //   $('#home').hide();
  //   $('#splashPage').hide();
  // })

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
