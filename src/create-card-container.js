import cards from '../assets/cards'

const body = document.body;

function createCardContainer() {
    const cardContainer = document.createElement('div');
    //const navigationItem = document.createElement('li');

    body.appendChild(cardContainer);
    // navigationMenu.appendChild(navigationItem);

    console.log(cards.length);
    for (let i = 1; i < cards.length; i++) {
        const cardCategory = document.createElement('div'); 
        const cCard = cards[i];

        cardCategory.id = cards[0][i-1];
        cardCategory.classList.add('card-category');
        cardContainer.appendChild(cardCategory);
       // console.log('card',cCard);

        for (let k = 0; k < cCard.length; k++) {
            const cardItem = document.createElement('div');
           // const cardImage = document.createElement('img');
           const cardImgUrl = `url(./assets/${cCard[k].image})`;

            cardItem.innerHTML = cCard[k].word;
            
            console.log('cardIMGurl', cardImgUrl);
          cardItem.style.backgroundImage = cardImgUrl;
        // cardItem.style.backgroundImage = 'url(./assets/img/angry.jpg)';
         // cardItem.style.background = 'red';
            cardItem.classList.add('card');
           console.log('IMG', (`../assets/${cCard[k].image}`));
            cardCategory.appendChild(cardItem);
          //  cardItem.appendChild(cardImage);
            console.log('image', cCard[k].image);
        }
    }
}

export default createCardContainer;