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

let sec6_tab_sub = document.getElementsByClassName("sec6_tab_sub");
let tab_title = document.getElementsByClassName("tab_title");

for (let i = 0; i < tab_title.length; i++) {
    tab_title[i].addEventListener("click", (event) => {
        tab_title[i].classList.toggle("tab_active");

        let next = tab_title[i].nextElementSibling;
        if (next.style.maxHeight) {
            next.style.maxHeight = null;
        } else {
            let act = document.querySelectorAll(".tab_active");

            for (let j = 0; j < act.length; j++) {
                act[j].classList.remove("tab_active");
                act[j].nextElementSibling.style.maxHeight = null;
            }

            tab_title[i].classList.add("tab_active");
            next.style.maxHeight = "fit-content";
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
