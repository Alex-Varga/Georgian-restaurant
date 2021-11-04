var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.5,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  breakpoints: {
    0: {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    778: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
      spaceBetween: 2,
    }

  },
});

$(document).ready(function() {
  $('.burger-menu').click(function() {
      $('.burger-menu').toggleClass('open-menu');
      $('.nav').toggleClass('open-menu');
  });
});
