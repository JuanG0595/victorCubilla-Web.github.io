const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const hiddenMenu = document.querySelector('.hidden-menu');

navbarToggleBtn.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu (){
  hiddenMenu.classList.toggle('inactive');
}