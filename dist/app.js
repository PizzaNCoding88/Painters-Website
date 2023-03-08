const burgerMenu = document.querySelector(".burger-menu");
const sideMenu = document.querySelector(".wrapper");

burgerMenu.addEventListener("click" , () => {
    sideMenu.classList.toggle("top-20");
});

// Rectangles hover

const smallRectangle = document.querySelector(".shape");
const largeRectangle = document.querySelector(".rectangle");
const bgImage = document.querySelector(".bg-image");
const opacityText = document.querySelector(".opacity-text");

function changeImage(){
    bgImage.src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/ffe468/external-paint-brush-graphic-design-kmg-design-glyph-kmg-design-1.png";
    smallRectangle.style.backgroundColor = "#9dcf5e";
    opacityText.style.opacity = "1";
};

function backToNormal(){
    bgImage.src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/9dcf5e/external-paint-brush-graphic-design-kmg-design-glyph-kmg-design-1.png";
    smallRectangle.style.backgroundColor = "#ffe468";
    opacityText.style.opacity = "0";
};
