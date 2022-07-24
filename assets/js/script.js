/* ------------- show the convenable style buttons--------------  */
const accessorize__buttons = document.querySelectorAll(".accessorize__btn"),
  styles = document.querySelectorAll(".style");

accessorize__buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    /*============styling the button================ */
    accessorize__buttons.forEach((btn1) => {
      if (btn.id == btn1.id) btn1.classList.add("accessorize__active");
      else btn1.classList.remove("accessorize__active");
    });
    /* ==============showing the style==========*/
    styles.forEach((style) => {
      if (style.classList.contains(btn.id))
        style.classList.add("style__active");
      else style.classList.remove("style__active");
    });
  });
});

/*==================styling the style buttons========================= */
const style__buttons = document.querySelectorAll(".style__button");

style__buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    /*============styling the button================ */
    style__buttons.forEach((btn1) => {
      if (btn.parentElement.classList[0] == btn1.parentElement.classList[0]) {
        if (btn == btn1) btn1.classList.add("btn__style__active");
        else btn1.classList.remove("btn__style__active");
      }
    });
    /* ==============showing the styles in the image ==========*/
    /*which accessoires */
    let accessoire = btn.parentElement.classList[0];
    // which image to put
    let imagetrigred = document.getElementById(accessoire);
    // put it
    imagetrigred.setAttribute(
      "src",
      "assets/img/" + accessoire + "/" + btn.innerHTML + ".png"
    );

    /*============styling the button================ */
    style__buttons.forEach((btn2) => {
      if (btn.parentElement.classList[0] == btn2.parentElement.classList[0]) {
        if (btn == btn2) btn2.classList.add("btn__style__active");
        else btn2.classList.remove("btn__style__active");
      }
    });
  });
});


/*================== randomly  ========================= */ 
