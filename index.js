const hamburger = document.querySelector("#menu_bar");
const navMenu = document.querySelector("#menu_list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.toggle("active");
    navMenu.classList.toggle("active");
}