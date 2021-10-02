//bgslider試し サイト↓
//https://www.progstudy-trace.com/entry/jquerybgswitcher/
jQuery(function($) {
  $('.slider').slick({
    autoplay:true,
    swipe:false,
    arrows: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "20%",
    variableWidth: true,
    dots:true,
    slidesToShow:4,
    responsive: [{
      breakpoint: 450,
      settings: {
          slidesToShow: 1,
      }
    }]
  });
});