// const e = require("express");

setInterval(dDay, 1000);
setInterval(sprinkleFirst, 2000);
setInterval(sprinkleSecond, 2100);

let main_section1 = document.querySelector(".section1");

// window.onload = function () {
//     a();
// };
// main_section1.onmouseout = function(){
//     sprinkleOut();

// }

function sprinkleFirst() {
    let confetti = document.querySelector(".con-first");
    confetti.classList.toggle("show");
}

function sprinkleSecond() {
    let confetti = document.querySelector(".con-second");
    confetti.classList.toggle("show");
}

// function sprinkle() {
//     let confetti = document.querySelectorAll(".confetti");
//     for (i = 0; i <= confetti.length; i++) {
//         confetti[i].classList.toggle("mouseon");
//     }
//     // confetti.classList.add('active');
// }
// function sprinkleOut() {
//     let confetti = document.querySelectorAll(".confetti");
//     for (i = 0; i <= confetti.length; i++) {
//         confetti[i].classList.remove("mouseon", "mousemove");
//     }
//     // confetti.classList.add('active');
// }
// function sprinkleMove() {
//     let confetti = document.querySelectorAll(".confetti");
//     for (i = 0; i <= confetti.length; i++) {
//         confetti[i].classList.add("mouseon", "mousemove");
//     }
//     // confetti.classList.add('active');
// }

//섹션6 탭 섹션, 아코디언

function tabOpen(e, tabName) {
    let tabContent = document.getElementsByClassName("tabcont");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";

    let tabT = document.getElementsByClassName("tabTitle");
    for (let i = 0; i < tabT.length; i++) {
        tabT[i].className = tabT[i].className.replace(" active", "");
    }
    e.currentTarget.className += " active";
}

let accor_btn = document.querySelectorAll(".accor_btn");

let sec6_tab = document.getElementById("sec6_tab");

let sec6_tab_sub = document.querySelectorAll(".sec6_tab_sub");
let tab_title = document.querySelectorAll(".tab_title");
for (let i = 0; i < tab_title.length; i++) {
    tab_title[i].addEventListener("click", (event) => {
        tab_title[i].classList.toggle("tab_active");

        // let next = event.currentTarget.nextElementSibling;
        // console.log(next);
        // next.classList.toggle("sub_toggle");
        for (j = 0; j < sec6_tab_sub.length; j++) {
            if (i == j) {
                sec6_tab_sub[j].classList.toggle("sub_toggle");
            } else if (i !== j) {
                tab_title[i].classList.remove("tab_active");
                sec6_tab_sub[j].classList.remove("sub_toggle");
            }
        }
    });
}

//dday
function dDay() {
    let nextLastday = new Date("2023-12-31");
    let today = new Date();
    let leftDate = nextLastday - today;
    let d_date = document.querySelector("#d_date");
    let d_hour = document.querySelector("#d_hour");
    let d_miniute = document.querySelector("#d_miniute");
    let d_second = document.querySelector("#d_second");
    const leftDay = Math.floor(leftDate / (1000 * 60 * 60 * 24));
    const leftHour = Math.floor((leftDate / (1000 * 60 * 60)) % 24);
    const leftMinute = Math.floor((leftDate / (1000 * 60)) % 60);
    const leftSecond = Math.floor((leftDate / 1000) % 60);
    d_date.innerText = leftDay;
    d_hour.innerText = leftHour;
    d_miniute.innerText = leftMinute;
    d_second.innerText = leftSecond;
}
dDay();

// 메인에 띄어줄 공지사항 개수
let noticeList = document.querySelectorAll(".notice_list");
console.log(noticeList);
if (noticeList.length > 3) {
    for (i = noticeList.length - 1; i > 3; i--) {
        noticeList[i].remove();
    }
}

//카테고리 색상
let category = document.querySelectorAll(".notice_cate");
category.forEach((e) => {
    e.style.color = e.nextElementSibling.innerText;
});
