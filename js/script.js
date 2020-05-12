let $width = window.innerWidth;

// Grab elements
const $list = document.querySelector(`.mobile-nav`);
const $nav = document.querySelector(`nav`);

const checkResize = () => {
let $width = window.innerWidth;
  if ($width < 760) {
    smallScreen();
  }
}

const smallScreen = () => {
    const $menu = document.querySelector(`.hamburger-menu`);
    $menu.addEventListener("click", hamburgerOpen);
}

const hamburgerOpen = e => {
  $list.style.display = 'flex';
  const $closeButton = document.querySelector(`.hamburger-close-button`);
  $closeButton.addEventListener("click", hamburgerClose);
}

const hamburgerClose = e => {
  $list.style.display= 'none';
}

const init = () => {
  if ($width < 760) {
    smallScreen();
  }
  window.addEventListener("resize", checkResize);
}

init();
