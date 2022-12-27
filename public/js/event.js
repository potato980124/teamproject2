let tab = document.querySelectorAll(".tab");
let tab_content_wrap = document.querySelectorAll(".tab_content_wrap");

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function (e) {
        for (let j = 0; j < tab.length; j++) {
            tab[j].classList.remove("tab_active");
            tab_content_wrap[j].classList.remove("tab_active");
        }
        e.currentTarget.classList.add("tab_active");
        tab_content_wrap[i].classList.add("tab_active");
    });
}
// for (let i = 0; i < tab.length; i++) {
//     tab[i].addEventListener("click", function (e) {
//         for (let j = 0; j < tab.length; j++) {
//             tab[j].classList.remove("tab_active");
//             tab_content_wrap[j].classList.add("none");
//         }
//         e.currentTarget.classList.add("tab_active");
//         // tab_content_wrap[i].classList.remove("none");
//     });
// }
// for (var i = 0; i < tab.length; i++) {
//     tab[i].addEventListener("click", function (e) {
//         e.preventDefault();
//         for (var j = 0; j < tab_content_wrap.length; j++) {
//             // 나머지 버튼 클래스 제거
//             tab[j].removeClass("tab_active");

//             // 나머지 컨텐츠 display:none 처리
//             tab_content_wrap[j].addClass("none");
//         }

//         // 버튼 관련 이벤트
//         tab[i].addClass("tab_active");

//         // 버튼 클릭시 컨텐츠 전환
//         tab_content_wrap[i].removeClass("none");
//     });
// }



// 띄어줄 공지사항 개수 
let noticeList = document.querySelectorAll('.notice_list_wrap');
console.log(noticeList);
if(noticeList.length>7){
    for(i=noticeList.length-1;i>7;i--){
        noticeList[i].remove();
    }
}

//카테고리 색상
let category = document.querySelectorAll('.category');
category.forEach((e)=>{
    e.style.color = e.nextElementSibling.innerText;
})

//띄어줄 뉴스 개수 
let newsList = document.querySelectorAll('.news_list_wrap');
console.log(noticeList);
if(noticeList.length>7){
    for(i=noticeList.length-1;i>7;i--){
        noticeList[i].remove();
    }
}
