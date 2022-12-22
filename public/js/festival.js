let plusBtn = document.querySelector('.m_plus_wrap');
let mainTxt = document.querySelector('.m_sec1_cont_maintxt');
plusBtn.addEventListener('click',()=>{
    mainTxt.classList.toggle('m_sec1_cont_maintxt_on');
})