window.onload = function () {
    header();
    footer();
};
function header() {
    let header = document.querySelector(".b_header");
    if (location.pathname == "/") {
        header.classList.add("main");
    } else if (location.pathname != "/") {
        header.classList.remove("main");
    }
}
function footer() {
    let footer = document.querySelector(".f_wrap");
    if (
        location.pathname == "/" ||
        location.pathname == "/about_us" ||
        location.pathname == "/festival" ||
        location.pathname == "/committee" ||
        location.pathname == "/join" ||
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

function category() {
    cate_click.addEventListener("click", (event) => {
        cate.classList.add("active");
    });
    cate_close.addEventListener("click", (event) => {
        cate.classList.remove("active");
    });
}
category();
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
