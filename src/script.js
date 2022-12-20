const crossButton = document.querySelector('.mobile-menu-overlay-cross-button');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const navHamIcon = document.querySelector('.nav-right-hamburger');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-overlay-list-item > a');

function hideMobileMenu() {
  requestAnimationFrame(() => {
    mobileMenuOverlay.style.left = '100%';
  });
}

navHamIcon.addEventListener('click', () => {
  mobileMenuOverlay.style.left = '0%';
  mobileMenuOverlay.style.display = 'flex';
});

crossButton.addEventListener('click', () => {
  hideMobileMenu();
});

mobileMenuLinks.forEach((mobileMenuLink) => {
  mobileMenuLink.addEventListener('click', () => {
    hideMobileMenu();
  });
});

const projects = [
  {
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: './src/assets/images/popupWindowFeaturedImg.svg',
    techologies: ['html', 'bootstrap', 'Ruby on Rails'],
    liveVersionLink: '#',
    sourceCodeLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './src/assets/images/projectImages/projectBackgroundImg.svg',
    techologies: ['html', 'bootstrap', 'Ruby'],
    liveVersionLink: '#',
    sourceCodeLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './src/assets/images/projectImages/projectBackgroundImg.svg',
    techologies: ['html', 'bootstrap', 'Ruby'],
    liveVersionLink: '#',
    sourceCodeLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './src/assets/images/projectImages/projectBackgroundImg.svg',
    techologies: ['html', 'bootstrap', 'Ruby'],
    liveVersionLink: '#',
    sourceCodeLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './src/assets/images/projectImages/projectBackgroundImg.svg',
    techologies: ['html', 'bootstrap', 'Ruby'],
    liveVersionLink: '#',
    sourceCodeLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './src/assets/images/projectImages/projectBackgroundImg.svg',
    techologies: ['html', 'bootstrap', 'Ruby'],
    liveVersionLink: '#',
    sourceCodeLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './src/assets/images/projectImages/projectBackgroundImg.svg',
    techologies: ['html', 'bootstrap', 'Ruby'],
    liveVersionLink: '#',
    sourceCodeLink: '#',
  },
];

const articlesToAddPopupWindow = document.querySelectorAll('.has-popup');

for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];

  const projectPopupWindow = document.createElement('div');
  projectPopupWindow.classList.add('project-popup-window');

  const projectPopupWindowText = document.createElement('div');
  projectPopupWindowText.classList.add('project-popup-window-text');
  projectPopupWindow.appendChild(projectPopupWindowText);

  const projectPopupWindowHeading = document.createElement('h1');
  projectPopupWindowHeading.classList.add('project-popup-window-heading');
  projectPopupWindowHeading.textContent = project.name;
  projectPopupWindowText.appendChild(projectPopupWindowHeading);

  const projectPopupWindowCross = document.createElement('img');
  projectPopupWindowCross.classList.add('project-popup-window-cross');
  projectPopupWindowCross.src = './src/assets/icons/cross.svg';
  projectPopupWindowCross.alt = 'cross button';
  projectPopupWindowText.appendChild(projectPopupWindowCross);

  const projectPopupWindowTechologiesList = document.createElement('ul');
  projectPopupWindowTechologiesList.classList.add('project-popup-window-techologies-list', 'recent-works-card-tags');
  project.techologies.forEach((techology) => {
    const techologyItem = document.createElement('li');
    techologyItem.classList.add('project-popup-window-techologies-list-item', 'recent-works-card-tag');
    techologyItem.textContent = techology;
    projectPopupWindowTechologiesList.appendChild(techologyItem);
  });
  projectPopupWindow.appendChild(projectPopupWindowTechologiesList);

  const projectPopupWindowImg = document.createElement('img');
  projectPopupWindowImg.classList.add('project-popup-window-img');
  projectPopupWindowImg.src = project.featuredImage;
  projectPopupWindowImg.alt = 'project image screenshot';
  projectPopupWindow.appendChild(projectPopupWindowImg);

  const projectPopupWindowDescription = document.createElement('p');
  projectPopupWindowDescription.classList.add('project-popup-window-description');
  projectPopupWindowDescription.textContent = project.description;
  projectPopupWindow.appendChild(projectPopupWindowDescription);

  const projectPopupWindowLinkButtons = document.createElement('div');
  projectPopupWindowLinkButtons.classList.add('project-popup-window-link-buttons');
  projectPopupWindow.appendChild(projectPopupWindowLinkButtons);

  const projectPopupWindowLiveVersionLinkButton = document.createElement('button');
  projectPopupWindowLiveVersionLinkButton.classList.add('project-popup-window-button', 'btn');
  projectPopupWindowLiveVersionLinkButton.textContent = 'See Live ';
  const projectPopupWindowLiveVersionLinkButtonIcon = document.createElement('img');
  projectPopupWindowLiveVersionLinkButtonIcon.classList.add('project-popup-window-live-version-link-button-icon');
  projectPopupWindowLiveVersionLinkButtonIcon.src = './src/assets/icons/externalLink.svg';
  projectPopupWindowLiveVersionLinkButtonIcon.alt = 'external link icon';
  projectPopupWindowLiveVersionLinkButton.appendChild(projectPopupWindowLiveVersionLinkButtonIcon);
  projectPopupWindowLinkButtons.appendChild(projectPopupWindowLiveVersionLinkButton);

  const projectPopupWindowSourceCodeLinkButton = document.createElement('button');
  projectPopupWindowSourceCodeLinkButton.classList.add('project-popup-window-button', 'btn');
  projectPopupWindowSourceCodeLinkButton.textContent = 'See Source ';
  const projectPopupWindowSourceCodeLinkButtonIcon = document.createElement('img');
  projectPopupWindowSourceCodeLinkButtonIcon.classList.add('project-popup-window-source-code-link-button-icon');
  projectPopupWindowSourceCodeLinkButtonIcon.src = './src/assets/icons/github.svg';
  projectPopupWindowSourceCodeLinkButtonIcon.alt = 'github icon';
  projectPopupWindowSourceCodeLinkButton.appendChild(projectPopupWindowSourceCodeLinkButtonIcon);
  projectPopupWindowLinkButtons.appendChild(projectPopupWindowSourceCodeLinkButton);

  articlesToAddPopupWindow[i].appendChild(projectPopupWindow);
}

const popupWindowCrossButtons = document.querySelectorAll('.project-popup-window-cross');

popupWindowCrossButtons.forEach((crossButton) => {
  crossButton.addEventListener('click', () => {
    crossButton.parentElement.parentElement.style.display = 'none';
  });
});

const popupButtons = document.querySelectorAll('.popup-btn');

popupButtons.forEach((popupButton) => {
  popupButton.addEventListener('click', () => {
    popupButton.parentElement.nextElementSibling.style.display = 'block';
    popupButton.parentElement.nextElementSibling.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
