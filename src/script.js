const crossButton = document.querySelector('.mobile-menu-overlay-cross-button');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const navHamIcon = document.querySelector('.nav-right-hamburger');

navHamIcon.addEventListener('click', () => {
  mobileMenuOverlay.style.left = '0%';
});

crossButton.addEventListener('click', () => {
  mobileMenuOverlay.style.left = '100%';
});
