function tabOpen(e, tabName){
    let tabContent = document.getElementsByClassName('tabcont');
    for ( let i = 0; i<tabContent.length; i++){
        tabContent[i].style.display = 'none';
    }

    document.getElementById(tabName).style.display='block';

    let tabT = document.getElementsByClassName('tabTitle');
    for (let i = 0; i<tabT.length; i++){
        tabT[i].className = tabT[i].className.replace(' active','');
    }
    e.currentTarget.className += ' active';
}



let sec6_tab = document.getElementById('sec6_tab');

let sec6_tab_sub = document.getElementsByClassName('sec6_tab_sub');
let tab_title = document.getElementsByClassName('tab_title');


for (let i =0; i< tab_title.length; i++){
    tab_title[i].addEventListener('click',(e)=>{

        tab_title[i].classList.toggle('tab_active');

        let next = tab_title[i].nextElementSibling;
        if( tab_title[i].style.maxHeight){
            tab_title[i].style.maxHeight = '0'; //null =값을 아예 빼버리는 것
          }else{
            let act = document.querySelectorAll('.sec6_tab_sub.sub_toggle')
           
            for(let j = 0; j < act.length; j++){
              //for문 안에 또 for문 만드는거라 i를 쓸 수 없음!
              act[j].classList.remove('sub_toggle')
            }
              sec6_tab_sub[i].classList.toggle('sub_toggle');

            
        let tab_act = document.querySelectorAll('.tab_active')

        for( let k=0; k < tab_act.length; k++){
            tab_act[k].classList.remove('tab_active')
        }
        tab_title[i].classList.toggle('tab_active')
    }
})
}


