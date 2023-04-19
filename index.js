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

const projects = [
  {
    name: 'Multi Post Stories',
    img: 'Images/Img Placeholder.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desc1:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://rabayarabu.github.io/Portfolio-setup-and-mobile-first/',
    sourceCode: 'https://github.com/rabayarabu/Portfolio-setup-and-mobile-first.git',
  }
];
