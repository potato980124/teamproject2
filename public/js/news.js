let newsimg = document.querySelectorAll('.newsimg');

for(let i=0; i<newsimg.length; i++){
  newsimg[i].addEventListener("mouseover", function(){
    newsimg[i].classList.add('active');


    
  })
  newsimg[i].addEventListener("mouseleave", function(){
    newsimg[i].classList.remove('active');

    
  })

}
