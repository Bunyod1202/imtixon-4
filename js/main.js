
var owl = $('.owl-carousel');
owl.owlCarousel({
  margin: 32,
  dots: false,
  loop: true,
  center: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      margin: 20,
    },
    600: {
      items: 1.5,
      nav: true,
      margin: 0,
    },
    1000: {
      items: 3.5,
      nav:true,
    }
  }
})

