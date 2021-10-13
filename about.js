const nav = document.querySelector('.social-nav');
const openNav = document.querySelector('.btn-header');
const closeNav = document.querySelector('.close-nav');
const backToTop = document.querySelector('.back-top');
const header = document.querySelector('.header');

openNav.addEventListener('click', () => {
  nav.classList.add('show-nav');
});

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;
  if (scrollY > headerHeight) {
    backToTop.classList.add('show-back-top');
  }
  if (scrollY < headerHeight) {
    backToTop.classList.remove('show-back-top');
  }
});

closeNav.addEventListener('click', () => {
  nav.classList.remove('show-nav');
});