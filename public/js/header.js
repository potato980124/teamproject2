let gnbMenu = document.querySelectorAll('.gnb_menu');
let lnb = document.querySelectorAll('.lnb')

gnbMenu.forEach((e,index)=>{
    e.addEventListener('mouseenter',()=>{
        lnb[index].style.display = 'flex';
    })
    e.addEventListener('mouseleave',()=>{
        lnb[index].style.display = 'none';
    })
})
