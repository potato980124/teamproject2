var swiper = new Swiper(".swiper", {
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
var swiper = new Swiper(".news_mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".slide_next",
        prevEl: ".slide_prev",
    },
});
