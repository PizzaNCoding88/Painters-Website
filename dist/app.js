const burgerMenu = document.querySelector(".burger-menu");
const sideMenu = document.querySelector(".wrapper");

burgerMenu.addEventListener("click" , () => {
    sideMenu.classList.toggle("top-20");
});