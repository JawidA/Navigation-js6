const menu = document.querySelector('#menu_icon');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar a');

function menuToggle () {
    nav.classList.toggle('menu_open');
};

menu.addEventListener('click', menuToggle);
links.forEach(item => item.addEventListener('click', menuToggle));