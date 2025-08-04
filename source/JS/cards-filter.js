
const cardPrev = document.querySelector('.card-prev');
const cardNext = document.querySelector('.card-next');

cardPrev.addEventListener(
    'click',
    () => {
        buttonFilterAll.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
)


cardNext.addEventListener(
    'click',
    () => {
        buttonFilterCompleted.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            // inline: 'center'

        });
    }
)



const buttonFilterAll = document.getElementById('filter_all');
const buttonFilterOpen = document.getElementById('filter_open');
const buttonFilterFunded = document.getElementById('filter_funded');
const buttonFilterCompleted = document.getElementById('filter_completed');

const buttonsFilter = [buttonFilterAll, buttonFilterOpen, buttonFilterFunded, buttonFilterCompleted];



const cards = document.querySelectorAll('.initiatives__card');
const cardsOpen = document.querySelectorAll('.open');
const cardsFunded = document.querySelectorAll('.funded');
const cardsCompleted = document.querySelectorAll('.completed')



const cardsClassActiveRemove = (item) => {
    item.forEach(arrayItem => {
        arrayItem.classList.remove('card-filter-active');
    })
}

const cardsClassActiveAdd = (item) => {
    item.forEach(arrayItem => {
        arrayItem.classList.add('card-filter-active');
        // item.classList.add('card-9');

    })
}

buttonFilterAll.addEventListener(
    'click',
    () => {

        buttonsFilter.forEach(item => {
            item.classList.remove('_active');
        })
        buttonFilterAll.classList.add('_active');
        
        cardsClassActiveRemove(cards)
    }
)

buttonFilterOpen.addEventListener(
    'click',
    () => {
        buttonsFilter.forEach(item => {
            item.classList.remove('_active');
        })


        buttonFilterOpen.classList.add('_active');

        cardsClassActiveRemove(cards)


        cardsClassActiveAdd(cardsOpen)
    }
)








buttonFilterFunded.addEventListener(
    'click',
    () => {
        buttonsFilter.forEach(item => {
            item.classList.remove('_active');
        })
        cardsClassActiveRemove(cards)


        buttonFilterFunded.classList.add('_active');



        cardsClassActiveAdd(cardsFunded)
        
    }
)


buttonFilterCompleted.addEventListener(
    'click',
    () => {
        buttonsFilter.forEach(item => {
            item.classList.remove('_active');
        })
        cardsClassActiveRemove(cards)


        buttonFilterCompleted.classList.add('_active');



        cardsClassActiveAdd(cardsCompleted)
        
    }
)






const cardPriceTextAll = document.querySelectorAll('.card__price-text');
cardPriceTextAll.forEach(item => {
    item.innerText = `Funding amount:`;
})