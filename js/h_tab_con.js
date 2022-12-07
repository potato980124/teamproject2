let $orgarnTab = document.querySelector('.orgarn_tab');
let $hisTab = document.querySelector('.his_tab');
let $sec2_con_wrap = document.querySelectorAll('.sec2_con_wrap');


$orgarnTab.addEventListener('click',(e)=>{
    e.target.classList.add('tab_bg');
    e.target.previousElementSibling.classList.remove('tab_bg');
    $sec2_con_wrap.forEach((e)=>{
        e.classList.remove('tab_on');
    })
    $sec2_con_wrap[1].classList.add('tab_on');
})

$hisTab.addEventListener('click',(e)=>{
    e.target.classList.add('tab_bg');
    e.target.nextElementSibling.classList.remove('tab_bg');
    e.target.sibbl
    $sec2_con_wrap.forEach((e)=>{
        e.classList.remove('tab_on');
    })
    $sec2_con_wrap[0].classList.add('tab_on');
})

