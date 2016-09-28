$(document).ready(function () {

  console.log('HELLO')

  $('#titleExceptSplash').hide();
  $('.navigation').hide();
  $('#dropdown').hide();

  $('#home').hide();
  $('#selectBreeds').hide();

  $('#enterSite').click(function () {
    $('#home').show();
    $('#titleExceptSplash').show();
    $('.navigation').show();
    $('#splashPage').hide();
    $('#selectBreeds').hide();
  })
  $('#homeLink').click(function () {
    $('#home').show();
    $('#titleExceptSplash').show();
    $('.navigation').show();
    $('#splashPage').hide();
    $('#selectBreeds').hide();
  })
  $('#breedsLink').click(function () {
    $('#selectBreeds').show();
    $('#titleExceptSplash').show();
    $('#dropdown').show();
    $('.navigation').show();
    $('#home').hide();
    $('#splashPage').hide();
  })

})
