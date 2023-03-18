const burgerMenu = document.querySelector(".burger-menu");
const sideMenu = document.querySelector(".wrapper");
const li = document.querySelectorAll("#links");

burgerMenu.addEventListener("click" , () => {
    sideMenu.classList.toggle("top-20");
});


li.forEach(collapse);

function collapse(el){
    el.addEventListener("click", () =>{
        sideMenu.classList.toggle("top-20");
    });
};
    


// Rectangles hover

const smallRectangle1 = document.querySelector(".shape-1");
const smallRectangle2 = document.querySelector(".shape-2");
const smallRectangle3 = document.querySelector(".shape-3");
const smallRectangle4 = document.querySelector(".shape-4");
const smallRectangle5 = document.querySelector(".shape-5");
const smallRectangle6 = document.querySelector(".shape-6");
// const largeRectangle = document.querySelector(".rectangle");
const bgImage1 = document.querySelector(".bg-image1");
const bgImage2 = document.querySelector(".bg-image2");
const bgImage3 = document.querySelector(".bg-image3");
const bgImage4 = document.querySelector(".bg-image4");
const bgImage5 = document.querySelector(".bg-image5");
const bgImage6 = document.querySelector(".bg-image6");
const opacityText = document.querySelector(".opacity-text");

function changeImage1(){
    bgImage1.src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/ffe468/external-paint-brush-graphic-design-kmg-design-glyph-kmg-design-1.png";
    smallRectangle1.style.backgroundColor = "#9dcf5e";
    opacityText.style.opacity = "1";
};

function backToNormal1(){
    bgImage1.src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/9dcf5e/external-paint-brush-graphic-design-kmg-design-glyph-kmg-design-1.png";
    smallRectangle1.style.backgroundColor = "#ffe468";
    opacityText.style.opacity = "0";
};

function changeImage2(){
    bgImage2.src="https://img.icons8.com/ios-glyphs/40/ffe468/roller-brush--v1.png";
    smallRectangle2.style.backgroundColor = "#9dcf5e";
    opacityText.style.opacity = "1";
};

function backToNormal2(){
    bgImage2.src="https://img.icons8.com/ios-glyphs/40/9dcf5e/roller-brush--v1.png";
    smallRectangle2.style.backgroundColor = "#ffe468";
    opacityText.style.opacity = "0";
};



//testimonial scroll

const previousBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const testimonialOne = document.querySelector("#testimonial-1");
const testimonialTwo = document.querySelector("#testimonial-2");

nextBtn.addEventListener("click", () =>{
    if (testimonialOne.classList.contains("active")){
        testimonialOne.classList.remove("active");
        testimonialTwo.classList.add("active");
    } else if (testimonialTwo.classList.contains("active")){
        testimonialOne.classList.add("active");
        testimonialTwo.classList.remove("active");
    }
});

previousBtn.addEventListener("click", () =>{
    if (testimonialOne.classList.contains("active")){
        testimonialOne.classList.remove("active");
        testimonialTwo.classList.add("active");
    } else if (testimonialTwo.classList.contains("active")){
        testimonialOne.classList.add("active");
        testimonialTwo.classList.remove("active");
    }
});


// HIDE BUTTON

topBtn = document.querySelector("#topBtn");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 250) {
    topBtn.classList.remove("opacity-0");
    topBtn.classList.add("opacity-100");
  } else {
    topBtn.classList.add("opacity-0");
    topBtn.classList.remove("opacity-100");
  }
};

window.addEventListener("scroll", myScrollFunc);