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
