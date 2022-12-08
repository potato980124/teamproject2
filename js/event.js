let tab = document.querySelectorAll(".tab");
let event_wrap = document.querySelectorAll(".tab_content_wrap");
//for each 사용 tab====================================
// eventTab.forEach(function (tab) {
//     tab.addEventListener("click", function () {
//         eventTab.forEach(function (e) {
//             e.classList.remove("active");
//         });
//         tab.classList.add("active");
//     });
// });

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function () {
        for (let j = 0; j < tab.length; j++) {
            tab[j].classList.remove("tab_active");
            event_wrap[j].classList.add("none");
        }
        tab[i].classList.add("tab_active");
        event_wrap[i].classList.remove("none");
    });
}
