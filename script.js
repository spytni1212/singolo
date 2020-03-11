const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});



const WORKS = document.getElementById('works');

WORKS.addEventListener('click', (event) => {
    WORKS.querySelectorAll('img').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});
