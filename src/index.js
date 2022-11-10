const menuToggle = document.querySelector('#menuToggle');
const iconMenu = document.querySelector('#iconMenu');
const iconCross = document.querySelector('#iconCross');
const mobileMenu = document.querySelector('#mobileMenu');

// Responsive Menu
menuToggle.addEventListener('click', function (e) {
  e.preventDefault();

  iconMenu.classList.toggle('hidden');
  iconCross.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
});
