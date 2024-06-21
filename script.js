const menuBlock = document.querySelector('.menu-block');
const hamburgerMenu = document.getElementById('hamburger-menu');
const firstBar = document.getElementById('first-bar');
const secondBar = document.getElementById('second-bar');
const thirdBar = document.getElementById('third-bar');
let active = false;
hamburgerMenu.addEventListener('click', displayMenu);

function displayMenu() {
  if (!active) {
    secondBar.style.visibility = 'hidden';
    firstBar.style.rotate = '-45deg';
    firstBar.style.translate = '0 15px';
    thirdBar.style.rotate = '45deg';
    menuBlock.classList.remove('invisible');
    active = true;
  } else if (active) {
    secondBar.style.visibility = 'visible';
    firstBar.style.rotate = '0deg';
    firstBar.style.translate = '0 ';
    thirdBar.style.rotate = '';
    menuBlock.classList.add('invisible');
    active = false;
  }
}
