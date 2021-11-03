const linksContainer = document.querySelector('.linksContainer');
const links = document.querySelector('#dynamicLinks');

const btnHamburger = document.querySelector('#btnHamburger');

btnHamburger.addEventListener('click', dynamicToggle);

function dynamicToggle() {
  const linksHeight = links.getBoundingClientRect().height;
  const linksContHeight = linksContainer.getBoundingClientRect().height;

  if (linksContHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    btnHamburger.classList.add('open');
  } else {
    linksContainer.style.height = 0;
    btnHamburger.classList.remove('open');
  }
}
// // for changing the linksContainer height for desktop to auto without using !important in css
// const Media = window.matchMedia('(max-width: 500px)');
// console.log(Media);
// if (!Media.matches) {
//   linksContainer.style.height = `auto !important`;
// }
