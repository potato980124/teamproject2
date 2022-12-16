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
