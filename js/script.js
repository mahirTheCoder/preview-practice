$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// -----------------------


$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  // autoplay: true,
  // autoplaySpeed: 3000,
  //   dots: true,
  prevArrow: '<i class="fa-solid myarrol ll fa-arrow-left"></i>',
  nextArrow: '<i class="fa-solid myarro l rr fa-arrow-right"></i>'

});



// ------------------------------
$('.Sliderfor').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slidernav',
  arrows: false,
});
$('.slidernav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.Sliderfor',
  focusOnSelect: true,
});