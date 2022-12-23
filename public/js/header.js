let gnbMenu = document.querySelectorAll('.gnb_menu');
let lnb = document.querySelectorAll('.lnb');
let gnbBg = document.querySelector('.gnb_bg');

gnbMenu.forEach((e,index)=>{
    e.addEventListener('mouseenter',()=>{
        setTimeout(()=>{
          lnb[index].style.display = 'flex';
          gnbBg.style.height = '70px';
          // gnbBg.style.borderBottom = '1px solid rgba()';
        },300);
        setTimeout(()=>{
          lnb[index].style.opacity = '1';
        },500)
      });
        e.addEventListener('mouseleave',()=>{
          setTimeout(()=>{
              lnb[index].style.display = 'none';
              gnbBg.style.height = '0';
              // gnbBg.style.borderBottom = '0';
          },300);
          setTimeout(()=>{
            lnb[index].style.opacity = '0';
          },500)
        })
})
