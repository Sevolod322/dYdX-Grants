






const menuBody = document.querySelector('.menu__body');

const menuIcon = document.querySelector('.menu__icon');


const price = "$5,000 - $6,000"


menuIcon.addEventListener(
    'click',
    (event) => {
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock')
        menuIcon.classList.toggle('_active')
    }
)

