const swiper = new Swiper(".swiper", {
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

// if data-swiper-slide-index==0{

// // }
// let vw = window.innerWidth;
// if (vw > 800 && vw < 1920) {
//     const swiper = new Swiper(".swiper", {
//         // Optional parameters
//         // effect: "coverflow",
//         loop: true,
//         autoHeight: false,
//         centeredSlides: true,
//         slidesPerView: 3,
//         spaceBetween: 0,
//         // Responsive breakpoints
//         breakpoints: {
//             640: {
//                 slidesPerView: 3,
//                 spaceBetween: 0,
//             },
//             992: {
//                 slidesPerView: 3,
//                 spaceBetween: 0,
//             },
//         },

//         // If we need pagination
//         pagination: {
//             el: ".swiper-pagination",
//         },

//         // Navigation arrows
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },

//         // And if we need scrollbar
//         /*scrollbar: {
//     el: '.swiper-scrollbar',
//   },*/
//     });
// }
// } else if (vw < 800) {
//     console.log("now" + vw);
//     const swiper = new Swiper(".swiper", {
//         // Optional parameters
//         // effect: "coverflow",
//         loop: true,
//         autoHeight: false,
//         centeredSlides: true,
//         slidesPerView: 2,
//         spaceBetween: 0,
//         // Responsive breakpoints
//         // breakpoints: {
//         //     640: {
//         //         slidesPerView: 3,
//         //         spaceBetween: 0,
//         //     },
//         //     992: {
//         //         slidesPerView: 3,
//         //         spaceBetween: 0,
//         //     },
//         // },

//         // If we need pagination
//         // pagination: {
//         //     el: ".swiper-pagination",
//         // },

//         // Navigation arrows

//         // And if we need scrollbar
//         /*scrollbar: {
//     el: '.swiper-scrollbar',
//   },*/
//     });
// }
