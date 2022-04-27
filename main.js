import './style.css';

const btn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  mobileNav.classList.toggle('hidden');
});
