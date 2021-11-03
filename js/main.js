var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.5,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-mob", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function() {
  $('.burger-menu').click(function() {
      $('.burger-menu').toggleClass('open-menu');
      $('.nav').toggleClass('open-menu');
  });
});
