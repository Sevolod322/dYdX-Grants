
import { cardData } from "./funded-granst/grants-card-data.js";




const filterContainer = document.getElementById('filter-container');



const buttonfilterAll = document.getElementById('filter-item__all');
const buttonFilterTechnical = document.getElementById('filter-item__technical');
const buttonfilterGovernance = document.getElementById('filter-item__governance');
const buttonfilterGrowth = document.getElementById('filter-item__growth');
const buttonfilterAnalytics = document.getElementById('filter-item__analytics');
const buttonfilterProvider = document.getElementById('filter-item__provider');


const filterButtonCollection = document.querySelectorAll('.filter-list__item');





const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');


const technicalCards = document.querySelectorAll('.technical');
const governanceCards = document.getElementsByClassName('governance');
const growthCards = document.getElementsByClassName('growth');
const analyticsCards = document.getElementsByClassName('analytics');
const providerCards = document.getElementsByClassName('provider');



const cardsCollection = document.querySelectorAll('.grant-project__card');





let currentSlide = 0;
const slides = filterContainer;
const slideWidth = slides.children[0].offsetWidth;


const slideElements = slides.children;

function moveSlides(step) {
    currentSlide += step;

    if (currentSlide >= slideElements.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slideElements.length - 2;
    }

    const translateX = -slideElements[currentSlide].offsetLeft;
    slides.style.transform = `translateX(${translateX}px)`;
}




buttonPrev.addEventListener(
    'click',
    () => {
        moveSlides(-1)
    }
)


buttonNext.addEventListener(
    'click',
    () => {
        moveSlides(1)
    }
)








const filterActiveRemoveFn = (filterButtonsCol) => {
    filterButtonsCol.forEach(item => {
        item.classList.remove('_active');

    })
}


const clickFn = (button) => {
    button.addEventListener(
        'click',
        () => {
            filterActiveRemoveFn(filterButtonCollection)
            button.classList.add('_active')
        }
    )
}


clickFn(buttonfilterAll);
clickFn(buttonFilterTechnical);
clickFn(buttonfilterGovernance);
clickFn(buttonfilterGrowth);
clickFn(buttonfilterAnalytics);
clickFn(buttonfilterProvider);








buttonfilterAll.addEventListener(
    'click',
    () => {

        
        cardsCollection.forEach(card => {
            card.classList.remove('_card-active')
        })
    }
)



const buttonFilterFunction = (cardsCategoryCollection, filterButton) => {

    const cardActiveClass = '_card-active';

    filterButton.addEventListener(
        'click',
        () => {
            cardsCollection.forEach(card => {
                card.classList.remove(cardActiveClass)
            })
        
            for (let card = 0; card < cardsCategoryCollection.length; card++) {
                cardsCategoryCollection[card].classList.add(cardActiveClass)
                
            }
        }
    )

}

buttonFilterFunction(technicalCards, buttonFilterTechnical);
buttonFilterFunction(governanceCards, buttonfilterGovernance)
buttonFilterFunction(growthCards, buttonfilterGrowth)
buttonFilterFunction(analyticsCards, buttonfilterAnalytics)
buttonFilterFunction(providerCards, buttonfilterProvider)
























const cardCategory = document.querySelectorAll('.category');
cardCategory.forEach(item => {
    item.innerText = `category`;
})






















