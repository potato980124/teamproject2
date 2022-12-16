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
var swiper = new Swiper(".mySwiperN", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    // Responsive breakpoints
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
    navigation: {
        nextEl: ".slide_next",
        prevEl: ".slide_prev",
    },
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
