$(document).ready(function () {

  /*jQuery code for smooth scrolling to an anchor */
  $('a[href^="#"]').on('click', function(event) {

      var target = $(this.getAttribute('href'));

      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });

  /* WayPoint code */

  var slide3 = document.getElementById('slide3');
  /* Instantiate Waypoint class*/
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
