const menu = document.querySelector('.menu_mobile');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const menuItem = document.querySelectorAll('.menu_link');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('hide');
  closeIcon.classList.toggle('show');
});

closeIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('hide');
  closeIcon.classList.toggle('show');
});

menuItem.forEach((element) => {
  element.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('hide');
    closeIcon.classList.toggle('show');
  });
});
