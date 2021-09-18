let header = document.querySelector('.header-section');
let colorMenu = document.querySelector('.header-menu');
let colorList = document.querySelector('.header-menu__link');
let logo = document.querySelector('.header-logo');
let closeButton = document.querySelector('.header-icon__close');
let burgerButton = document.querySelector('.header-icon__burger');
// console.log(header);

const headerHeight = header.offsetHeight;
// console.log(headerHeight);
document.body.style.paddingTop = `${headerHeight}px`;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('active');
    colorList.classList.add('active');
    logo.classList.add('active');
    closeButton.classList.add('active');
    burgerButton.classList.add('active');
    colorMenu.classList.add('active');
  } else {
    header.classList.remove('active');
    colorList.classList.remove('active');
    logo.classList.remove('active');
    closeButton.classList.remove('active');
    burgerButton.classList.remove('active');
    colorMenu.classList.remove('active');
  }
});
