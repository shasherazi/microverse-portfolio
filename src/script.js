const crossButton = document.querySelector('.mobile-menu-overlay-cross-button');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const navHamIcon = document.querySelector('.nav-right-hamburger');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-overlay-list-item > a');
const small = document.querySelector('.contact-form-small');
const name = document.querySelector('#name');
const textArea = document.querySelector('#textarea');
const email = document.querySelector('#email');
const form = document.querySelector('.contact-form-section-form');

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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    small.innerHTML = 'Please enter email in lowercase';
  } else {
    small.innerHTML = '';
    form.submit();
  }
});

const userInput = {};

[name, email, textArea].forEach((input) => {
  input.addEventListener('input', (e) => {
    userInput[e.target.name] = e.target.value;
    localStorage.setItem('userInput', JSON.stringify(userInput));
  });
});
