const MENU = document.getElementById('menu');
const WORKS = document.getElementById('works');
const imagesBlock = document.getElementById('works');
const portfolioNavButtons = document.getElementById('portfolio-navigation');


MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});


WORKS.addEventListener('click', (event) => {
    WORKS.querySelectorAll('img').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});


portfolioNavButtons.addEventListener('click', (event) => {
    portfolioNavButtons.querySelectorAll('.portfolio__button').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');

    let firstChild = imagesBlock.firstChild
    imagesBlock.removeChild(imagesBlock.firstChild);
    imagesBlock.appendChild(firstChild)
});


