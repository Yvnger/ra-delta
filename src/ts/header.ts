const header: HTMLElement | null = document.getElementById('header');
const navWrap: HTMLElement | null = document.querySelector('.js-nav-wrap');
const hamburger: HTMLElement | null = document.querySelector('.hamburger');

const headerOpenedClass: string = 'header--opened';
const navOpenedClass: string = 'header__nav--opened';
const hamburgerOpenedClass: string = 'hamburger--opened';

export function countHeaderHeight() {
  return header?.clientHeight;
}

hamburger?.addEventListener('click', () => {
  header?.classList.toggle(headerOpenedClass);
  hamburger.classList.toggle(hamburgerOpenedClass);
  navWrap?.classList.toggle(navOpenedClass);
})

function updateTopNav() {
  const headerHeight = countHeaderHeight();

  if (window.innerWidth <= 767) {
    navWrap?.setAttribute('style', `padding-top: ${headerHeight}px`);
  } else {
    navWrap?.removeAttribute('style');
  }
}

window.addEventListener('resize', () => updateTopNav())

updateTopNav();
