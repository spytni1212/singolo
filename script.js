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

    let firstChild = imagesBlock.firstChild;
    imagesBlock.removeChild(imagesBlock.firstChild);
    imagesBlock.appendChild(firstChild)
});


const closeButton = document.getElementById('close-button');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let subject = document.getElementById('subject').value.toString();
    let describe = document.getElementById('describe').value.toString();
    if (subject === "") {
        document.getElementById('text-result').innerHTML = "Без Темы";  
    } else {
        document.getElementById('result-subject').innerText = subject;    
    }
    
    if (describe === "") {
        document.getElementById('text-describe').innerHTML = "Без описания";
    } else {
        document.getElementById('result-describe').innerText = describe;
    }
    document.getElementById('message-block').classList.remove('hidden');
    form.reset();
});

closeButton.addEventListener('click', () => {
    document.getElementById('message-block').classList.add('hidden');
});


const phoneVertical = document.getElementById('phone-vertical');
const phoneHorizontal = document.getElementById('phone-horizontal');

phoneVertical.addEventListener('click', (event) => {
    if(phoneVertical.classList.contains('phone-vertical')) {
        phoneVertical.classList.remove('phone-vertical');
        phoneVertical.classList.add('phone-vertical-black')
    } else {
        phoneVertical.classList.remove('phone-vertical-black');
        phoneVertical.classList.add('phone-vertical');
    }
})

phoneHorizontal.addEventListener('click', (event) => {
    if(phoneHorizontal.classList.contains('phone-horizontal')) {
        phoneHorizontal.classList.remove('phone-horizontal');
        phoneHorizontal.classList.add('phone-horizontal-black')
    } else {
        phoneHorizontal.classList.remove('phone-horizontal-black');
        phoneHorizontal.classList.add('phone-horizontal');
    }
})
