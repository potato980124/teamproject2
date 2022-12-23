var swiper = new Swiper(".mySwiper", {
    // Optional parameters
    // effect: "coverflow",
    loop: true,
    autoHeight: false,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 0,
    // Responsive breakpoints
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    /*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
});

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper_news", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
    900: {
        slidesPerView: 2,
        spaceBetween: 50,
    },
    1200: {
        slidesPerView: 3,
        spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".nswiper-button-next",
    prevEl: ".nswiper-button-prev",
  }
  });
var swiper = new Swiper(".sponser_slide", {
    slidesPerView: 2,
    
    breakpoints: {
        1200: {
            slidesPerView: 6,
            spaceBetween: 40,
        },
        600: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
