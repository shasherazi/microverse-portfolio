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
