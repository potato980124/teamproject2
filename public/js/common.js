window.onload = function () {
    header();
    footer();
    // headerHover();
    // headHoverOut();
};
function header() {
    let header = document.querySelector(".b_header");
    let headerBg = document.querySelector(".gnb_bg");
    if (location.pathname == "/") {
        header.classList.add("main");
        headerBg.classList.add("black");
    } else if (location.pathname != "/") {
        header.classList.remove("main");
        headerBg.classList.remove("black");
    }
}
// function headerHover() {
//     let mouseHead = document.querySelectorAll(".mouseHead");
//     let mouseover_hov = document.querySelectorAll(".mouseover_hov");
//     let hov_header = document.querySelector(".hover_header");
//     for (let i = 0; i < mouseHead.length; i++) {
//         mouseHead[i].addEventListener("mouseover", (event) => {
//             hov_header.classList.add("active");
//             for (let j = 0; j < mouseover_hov.length; j++) {
//                 console.log(i + "/" + j);
//                 if (i == j) {
//                     mouseover_hov[j].classList.add("active");
//                     hov_header.classList.add("active");
//                 }
//                 // else {
//                 //     mouseover_hov[j].classList.remove("active");
//                 //     hov_header.classList.remove("active");
//                 // }
//             }
//         });
//     }
// }
// function headHoverOut() {
//     let mouseHead = document.querySelectorAll(".mouseHead");
//     let mouseover_hov = document.querySelectorAll(".mouseover_hov");
//     let hov_header = document.querySelector(".hover_header");
//     for (let i = 0; i < mouseHead.length; i++) {
//         mouseHead[i].addEventListener("mouseout", (event) => {
//             hov_header.classList.remove("active");
//             for (let j = 0; j < mouseover_hov.length; j++) {
//                 mouseover_hov[j].classList.remove("active");
//             }
//         });
//     }
// }

function footer() {
    let footer = document.querySelector(".f_wrap");
    if (
        location.pathname == "/" ||
        location.pathname == "/about_us" ||
        location.pathname == "/committee" ||
        location.pathname == "/join" ||
        location.pathname == "/event_content" ||
        location.pathname == "/login"
    ) {
        footer.classList.remove("white");
    } else {
        footer.classList.add("white");
    }
}
let cate_click = document.querySelector(".click");
let cate_close = document.querySelector(".close");
let cate = document.querySelector(".cate");

function categoryH() {
    cate_click.addEventListener("click", (event) => {
        cate.classList.add("active");
    });
    cate_close.addEventListener("click", (event) => {
        cate.classList.remove("active");
    });
}
categoryH();
let cate_more = document.querySelectorAll(".cate_more");
let cate_accor = document.querySelectorAll(".cate_accor");
function category_accor() {
    for (let i = 0; i < cate_more.length; i++) {
        cate_more[i].addEventListener("click", function (e) {
            for (let j = 0; j < cate_accor.length; j++) {
                if (i == j) {
                    cate_more[j].classList.toggle("active");
                    cate_accor[j].classList.toggle("active");
                } else {
                    cate_more[j].classList.remove("active");
                    cate_accor[j].classList.remove("active");
                }
            }
        });
    }
}
category_accor();
