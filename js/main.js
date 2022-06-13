$(function () {


   $('.slider__inner').slick({
      dots: true,
      nextArrow: '<button type="button" class="slick-next"><img src="img/right.png" alt=""></button>',
      prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png" alt=""></button>'
   });


   $('.header__top--burger, .menu__list-link').on('click', function () {
      $('.header__top-iner').toggleClass('header__top-iner--active');
   });


   var mixer = mixitup('.potfolio__content');
})