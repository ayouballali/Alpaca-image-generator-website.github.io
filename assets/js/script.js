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

let randomButton = document.getElementById("random");

let haires = document.querySelectorAll(".hair").childElement.contttent;
let eyes = document.querySelectorAll(".eyes").childElement.innerHTML;
let ears = document.querySelectorAll(".ears").childElement.innerHTML;
let legs = document.querySelectorAll(".legs").childElementinnerHTML;
let accessoires =
  document.querySelectorAll(".accessoires").childElement.innerHTML;
let backgrounds =
  document.querySelectorAll(".backgrounds").childElement.innerHTML;
let mouth = document.querySelectorAll(".mouth").childElement.innerHTML;

randomButton.addEventListener("click", () => {
  haires.random();
  eyes.random();
});

/*================== function that get a value than put the convenant image and make it active    ========================= */

function putThisImage(element, accessoire) {
  let imagetrigredElemt = document.getElementById(accessoire);

  imagetrigred.setAttribute(
    "src",
    "assets/img/" + accessoire + "/" + element + ".png"
  );

  /*============styling the button================ */
  style__buttons.forEach((btn2) => {
    if (accessoire == btn2.parentElement.classList[0]) {
      if (accessoire == btn2) btn2.classList.add("btn__style__active");
      else btn2.classList.remove("btn__style__active");
    }
  });
}
