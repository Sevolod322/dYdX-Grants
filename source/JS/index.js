



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    centeredSlides: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


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




const titlePrice = document.querySelectorAll('.price');

titlePrice.forEach((item) => {
    item.innerHTML = price
})





const MONTH = 'January 1'
const DATENMUBER = '2022'

const dateMonthSpan = document.querySelectorAll('.card__date-month');
const dateNumberSpan = document.querySelectorAll('.card__date-number')


dateMonthSpan.forEach((item)=> {
    item.innerHTML = MONTH
})

dateNumberSpan.forEach( (item)=> {
    item.innerHTML = DATENMUBER
})

const questions = document.querySelectorAll('.question');








const questionButton1 = document.getElementById('question-button-1');

questionButton1.addEventListener(
    'click',
    (event) => {
        const question1 = document.getElementById('question-1');
        question1.classList.toggle('_question-active');

        const questionButton1 = document.getElementById('question-button-1');
        questionButton1.classList.toggle('_question-button-active');

        const questionAnswer1 = document.getElementById('question_answer-1')
        questionAnswer1.classList.toggle('_answer-active');

    }
)


const questionButton2 = document.getElementById('question-button-2');


questionButton2.addEventListener(
    'click',
    (event) => {
        const question2 = document.getElementById('question-2');
        question2.classList.toggle('_question-active');
        

        const questionButton2 = document.getElementById('question-button-2');
        questionButton2.classList.toggle('_question-button-active');
        

        const questionAnswer2 = document.getElementById('question_answer-2')
        questionAnswer2.classList.toggle('_answer-active');


    }
)



const questionButton3 = document.getElementById('question-button-3');


questionButton3.addEventListener(
    'click',
    (event) => {
        const question3 = document.getElementById('question-3');
        question3.classList.toggle('_question-active');
        

        const questionButton3 = document.getElementById('question-button-3');
        questionButton3.classList.toggle('_question-button-active');
        

        const questionAnswer3 = document.getElementById('question_answer-3')
        questionAnswer3.classList.toggle('_answer-active');


    }
)




const questionButton4 = document.getElementById('question-button-4');


questionButton4.addEventListener(
    'click',
    (event) => {
        const question4 = document.getElementById('question-4');
        question4.classList.toggle('_question-active');
        

        const questionButton4 = document.getElementById('question-button-4');
        questionButton4.classList.toggle('_question-button-active');
        

        const questionAnswer4 = document.getElementById('question_answer-4')
        questionAnswer4.classList.toggle('_answer-active');


    }
)




const questionButton5 = document.getElementById('question-button-5');

questionButton5.addEventListener(
    'click',
    (event) => {
        const question5= document.getElementById('question-5');
        question5.classList.toggle('_question-active');
        

        const questionButton5 = document.getElementById('question-button-5');
        questionButton5.classList.toggle('_question-button-active');
        

        const questionAnswer5 = document.getElementById('question_answer-5');
        questionAnswer5.classList.toggle('_answer-active');


    }
)



const questionButton6 = document.getElementById('question-button-6');

questionButton6.addEventListener(
    'click',
    (event) => {
        const question6= document.getElementById('question-6');
        question6.classList.toggle('_question-active');
        

        const questionButton6 = document.getElementById('question-button-6');
        questionButton6.classList.toggle('_question-button-active');
        

        const questionAnswer6 = document.getElementById('question_answer-6');
        questionAnswer6.classList.toggle('_answer-active');


    }
)




const questionButton7 = document.getElementById('question-button-7');

questionButton7.addEventListener(
    'click',
    (event) => {
        const question7 = document.getElementById('question-7');
        question7.classList.toggle('_question-active');
        

        const questionButton7 = document.getElementById('question-button-7');
        questionButton7.classList.toggle('_question-button-active');
        

        const questionAnswer7 = document.getElementById('question_answer-7');
        questionAnswer7.classList.toggle('_answer-active');


    }
)
