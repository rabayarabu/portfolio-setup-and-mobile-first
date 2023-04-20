const menu = document.querySelector('.menu_mobile');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const menuItem = document.querySelectorAll('.menu_link');
const projectsSide = document.getElementById('projects');
const modal = document.getElementById('popup');

const containers = document.getElementById('containers');
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

const arrProject = [
  {
    name: 'Professional Art Printing Data',
    nameCard: 'Multi Post Stories',
    number: 1,
    Description: "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technology: ['html', 'bootstrap', 'ruby', 'Ruby on rails'],
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
  {
    name: 'Professional Art Printing Data 2',
    nameCard: 'Multi Post Stories',
    number: 2,
    Description: "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technology: ['html', 'bootstrap', 'ruby', 'Ruby on rails'],
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
  {
    name: 'Professional Art Printing Data 3',
    nameCard: 'Multi Post Stories',
    number: 3,
    Description: "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technology: ['html', 'bootstrap', 'ruby', 'Ruby on rails'],
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
  {
    name: 'Professional Art Printing Data 4',
    nameCard: 'Multi Post Stories',
    number: 4,
    Description: "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technology: ['html', 'bootstrap', 'ruby'],
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
  {
    name: 'Professional Art Printing Data 5',
    nameCard: 'Multi Post Stories',
    number: 5,
    Description: "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technology: ['html', 'bootstrap', 'ruby', 'Ruby on rails'],
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
  {
    name: 'Professional Art Printing Data 6',
    nameCard: 'Multi Post Stories',
    number: 6,
    Description: "A daily selection of privately personalized reads; no account or sign-ups required,has been the industry's standard",
    descriptionCard: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technology: ['html', 'bootstrap', 'ruby', 'Ruby on rails'],
    btnCard1: 'See Live',
    btnCard2: 'See Source',
  },
];

function generateProduct() {
  projectsSide.innerHTML = arrProject.map((project) => `
  <article class="card">
  <h5>${project.name}</h5>
  <p>
  ${project.Description}
  </p>
  <ul>
    ${project.technology.map((x) => `<li class="list">${x}</li>`).join('')}
  </ul>
  <button type="button" class="card-button p-btn" id= ${project.number}>See project</button>
</article>
`).join('');
}

const generateLatest = function () {
  for (let i = arrProject.length - 1; i < arrProject.length; i += 1) {
    containers.innerHTML += `
    <div class="containers-body">
    <img class="featureImg" src="Images/Img Placeholder.png" alt="featureimage">
    <div class="card-body">
      <h5>${arrProject[i].nameCard}</h5>
      <p>
      ${arrProject[i].descriptionCard}
      </p>
      <ul>
      ${arrProject[i].technology.map((x) => `<li class="css">${x}</li>`).join('')}
      </ul>
      <button type="button" class="card-body-button p-btn" id="${arrProject[i].number}">See project</button>
    </div>
   </div>
          `;
  }
};
containers.addEventListener('click', (e) => {
  if (e.target.classList.contains('p-btn')) {
    modal.classList.remove('hide');
    const id = parseFloat(e.target.id);
    const search = arrProject.find((x) => x.number === id);
    if (search !== undefined) {
      modal.innerHTML = `
      <div class="popup-container">
      <div class="top-header">
        <h2>${search.name}</h2>
        <img src="Images/cross.png" alt="crossicon" id="closePop"></img>
      </div>
      <ul class="tools">
        ${search.technology.map((x) => `<li class="tools-li">${x}</li>`).join('')}
      </ul>
      <div class="middle">
        <img class="featureImg" src="Images/Img Placeholder.png" alt="featureimage">
        <div class="center">
          <p class="top-header-p">${search.descriptionCard}
          </p>

          <div class="buttonGroup">
            <button type="button" class="buttonGroup_button">See live <img src="Images/Icon.png" alt="icon" class="btn_icon"></button>
            <button type="button" class="buttonGroup_button">See source <img src="Images/desktopImg/Icon -GitHub.png" alt="GitHubIcon" class="btn_icon"></button>
          </div>
        </div>
      </div>
    </div>
    
    `;
    }
  }
});

generateLatest();

projectsSide.addEventListener('click', (e) => {
  if (e.target.classList.contains('p-btn')) {
    modal.classList.remove('hide');
    const id = parseFloat(e.target.id);
    const search = arrProject.find((x) => x.number === id);
    if (search !== undefined) {
      modal.innerHTML = `
      <div class="popup-container">
      <div class="top-header">
        <h2>${search.name}</h2>
        <img src="Images/cross.png" alt="crossicon" id="closePop"></img>
      </div>
      <ul class="tools">
        ${search.technology.map((x) => `<li class="tools-li">${x}</li>`).join('')}
      </ul>
      <div class="middle">
        <img class="featureImg" src="Images/Img Placeholder.png" alt="featureimage">
        <div class="center">
          <p class="top-header-p">${search.descriptionCard}
          </p>

          <div class="buttonGroup">
            <button type="button" class="buttonGroup_button">See live <img src="Images/Icon.png" alt="icon" class="btn_icon"></button>
            <button type="button" class="buttonGroup_button">See source <img src="Images/desktopImg/Icon -GitHub.png" alt="GitHubIcon" class="btn_icon"></button>
          </div>
        </div>
      </div>
    </div>
    
    `;
    }
  }
});

modal.addEventListener('click', (e) => {
  if (e.target.id === 'closePop') {
    modal.classList.add('hide');
  }
  generateProduct();
});

generateProduct();

// form validation
const contactForm = document.querySelector('#contact_section');
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const textarea = document.querySelector('#textarea');
const button = document.querySelector('#form_button');
const messageErr = document.querySelector('#message');
const checkLower = email.value;

button.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (fullName.value === '') {
    messageErr.innerHTML = 'Please provide your name';
    fullName.focus();
    return false;
  }
  if (email.value === '') {
    messageErr.innerHTML = 'Please provide email';
    email.focus();
    return false;
  } else if (checkLower !== checkLower.toLowerCase()) {
    messageErr.innerHTML = 'Please use lowercase for email';
    email.focus();
    return false;
  }
  if (!email.value.includes('@') || !email.value.includes('.')) {
    messageErr.innerHTML = 'Enter a valid email in Lowercase';
    messageErr.classList.add('show');
    email.focus();
    return false;
  }
  if (textarea.value === '') {
    messageErr.innerHTML = 'text must be within 500 characters';
    textarea.focus();
    return false;
  }
  messageErr.innerHTML = 'message sent!';
  contactForm.submit();
  fullName.value = '';
  email.value = '';
  textarea.value = '';
  return true;
});