$('.apps-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
  });

  $('.client-slider').slick({
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    prevArrow:'<i class="fas fa-angle-left prev"></i>',
    nextArrow:'<i class="fas fa-angle-right next"></i>',
  });
