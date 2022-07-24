/* ------------- show the convenable style buttons--------------  */
const accessorize__buttons = document.querySelectorAll('.accessorize__btn'),
      styles = document.querySelectorAll('.style') ;
      
accessorize__buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{

        /*============styling the button================ */
        accessorize__buttons.forEach((btn1)=>{
                  if (btn.id == btn1.id)
                        btn1.classList.add('accessorize__active');
                  else
                        btn1.classList.remove('accessorize__active');
        })
        /* ==============showing the style==========*/ 
            styles.forEach((style)=>{
                  if (style.classList.contains(btn.id))
                        style.classList.add('style__active');
                  else
                        style.classList.remove('style__active');
                
        })
    })
})
 
/*==================styling the style buttons========================= */
const style__buttons = document.querySelectorAll('.style__button');

style__buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{

        /*============styling the button================ */
        style__buttons.forEach((btn1)=>{
                  if (btn == btn1)
                        btn1.classList.add('btn__style__active');
                  else
                        btn1.classList.remove('btn__style__active');
        })
        /* ==============showing the styles in the image ==========*/ 
           /*which accessoires */
           let accessoire = btn.parentElement.classList[0];
           let imagetrigred = document.getElementById(accessoire)

           imagetrigred.setAttribute("src","assets/img/"+accessoire+"/"+btn.innerHTML+".png") ;
      
    })
})