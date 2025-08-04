
import { cardData } from "./grants-card-data.js";



const cardPriceText = document.querySelectorAll('.card-price__text');
const cardPrice = document.querySelectorAll('.price');





const grantsCardsContainer = document.getElementById("grants-cards-container");

// Функция создания отдельной карточки
function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.className = "grant-project__card";
    projectCard.classList.add(`${project.filterCategory}`)
    projectCard.id = project.id;
    projectCard.classList.add(`${project.filterCategory}`);

    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    const cardInfo = document.createElement("div");
    cardInfo.className = "card-info";


    if (project.imageBlock) {
        const imageBlock = document.createElement('div');
        imageBlock.className = 'image-block';
        projectCard.style.display = 'inline-grid'
        projectCard.style.gridTemplateRows = 'max-content'
        // grid-template-rows: max-content;

        projectCard.appendChild(imageBlock);
    }


    // Категория

    const category = document.createElement('p');
    category.className = "category";
    category.innerText = "category";
    cardInfo.appendChild(category);

    // Название проекта
    const mainTextEl = document.createElement("h2");
    mainTextEl.className = "card__main-text";
    mainTextEl.textContent = project.mainText;
    cardInfo.appendChild(mainTextEl);

    


    // Подзаголовок

    const cardPrice = document.createElement('div');
    const priceText = document.createElement('span');
    const price = document.createElement('span');
    priceText.innerText = 'Funding amount:';
    price.innerText = '$5,000 - $6,000';

    cardPrice.className = 'card-price'

    cardPrice.appendChild(priceText);
    cardPrice.appendChild(price);
    cardInfo.appendChild(cardPrice);


    const subTitle = document.createElement('p');
    subTitle.className = 'card__subtitle';
    subTitle.innerText = project.desc;
    cardInfo.appendChild(subTitle);


    // Блок с аватарами
    const avatarGroup = document.createElement("div");
    avatarGroup.className = "card__avatar-group";

    project.usersAvatar.forEach((avatarSrc, index) => {
        const avatarLink = document.createElement("a");
        avatarLink.href = "#";


        const avatarImg = document.createElement("img");


        
        avatarImg.src = avatarSrc;
        avatarImg.alt = "";
        avatarImg.style.width = '46px';
        avatarImg.className = "avatar";




        if (index > 0) {
            avatarLink.classList.add("avatar-next")
        }

        avatarLink.appendChild(avatarImg);
        avatarGroup.appendChild(avatarLink);
        
    });

    
    cardContainer.appendChild(cardInfo);
    cardContainer.appendChild(avatarGroup);
    projectCard.appendChild(cardContainer);

    return projectCard;
}


cardData.forEach((project) => {
    const projectCard = createProjectCard(project);
    grantsCardsContainer.appendChild(projectCard);
});






    const addUsers = document.createElement('span');
    addUsers.classList.add('add-user');
    addUsers.classList.add('avatar-next');


    const addUsersWrapper = document.createElement('span')
    addUsersWrapper.classList.add('avatar');
    addUsersWrapper.classList.add('add-users-wrapper');
    addUsersWrapper.innerText = '+3'

    addUsers.appendChild(addUsersWrapper)


    const avatar3Group = document.getElementById('3').childNodes[1].childNodes[1]
    avatar3Group.appendChild(addUsers)






    
    const addUsers2 = document.createElement('span')
    addUsers2.classList.add('add-user');
    addUsers2.classList.add('avatar-next');


    const addUsersWrapper2 = document.createElement('span')
    addUsersWrapper2.classList.add('avatar');
    addUsersWrapper2.classList.add('add-users-wrapper');
    addUsersWrapper2.innerText = '+1'

    addUsers2.appendChild(addUsersWrapper2)


    const avatar4Group = document.getElementById('4').childNodes[1].childNodes[1]
    avatar4Group.appendChild(addUsers2)




