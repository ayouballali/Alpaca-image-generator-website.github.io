import domtoimage from 'dom-to-image';

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

let haires = document.querySelectorAll(".hair")[0].children;
let eyes = document.querySelector(".eyes").children;
let ears = document.querySelector(".ears").children;
let legs = document.querySelector(".leg").children;
let accessoires = document.querySelector(".accessories").children;
let backgrounds = document.querySelector(".backgrounds").children;
let mouth = document.querySelector(".mouth").children;
let neck = document.querySelector(".neck").children;

randomButton.addEventListener("click", () => {
  putThisImage(
    haires[Math.floor(Math.random() * haires.length)].innerHTML,
    "hair"
  );
  putThisImage(eyes[Math.floor(Math.random() * eyes.length)].innerHTML, "eyes");
  putThisImage(ears[Math.floor(Math.random() * ears.length)].innerHTML, "ears");
  putThisImage(legs[Math.floor(Math.random() * legs.length)].innerHTML, "leg");
  putThisImage(
    accessoires[Math.floor(Math.random() * accessoires.length)].innerHTML,
    "accessories"
  );
  putThisImage(
    backgrounds[Math.floor(Math.random() * backgrounds.length)].innerHTML,
    "backgrounds"
  );
  putThisImage(
    mouth[Math.floor(Math.random() * mouth.length)].innerHTML,
    "mouth"
  );
  putThisImage(neck[Math.floor(Math.random() * neck.length)].innerHTML, "neck");
});

/*================== function that get a value than put the convenant image and make it active    ========================= */

function putThisImage(element, accessoire) {
  let imagetrigredElemt = document.getElementById(accessoire);

  imagetrigredElemt.setAttribute(
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

/* ====================downlaoding the image ==========================*/
// let downloadButton = document.getElementById("download");
// var node = document.getElementById("image");

// downloadButton.addEventListener("click", () => {
//   htmlToImage
//     .toPng(node)
//     .then(function (dataUrl) {
//       var img = new Image();
//       img.src = dataUrl;
//       document.body.appendChild(img);
//     })
//     .catch(function (error) {
//       console.error("oops, something went wrong!", error);
//     });
// });
