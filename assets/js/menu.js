const menu = document.querySelector('#menu');
const nav = document.querySelector('.header-nav');
const links = document.querySelectorAll('.nav-item-link');

menu.addEventListener('click', () => {
    if(menu.checked) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menu.checked = false;
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && nav.classList.contains('active')) {
        nav.classList.remove('active');
        menu.checked = false;
    }
});