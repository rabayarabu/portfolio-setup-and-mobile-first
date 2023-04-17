const menuItem = document.querySelector("#menu_list");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const menu = document.querySelectorAll(".menu_link");

hamburgerIcon.addEventListener("click", () => {
  menuItem.classList.toggle("active");
  hamburgerIcon.classList.toggle("hide");
  closeIcon.classList.toggle("show");
});
