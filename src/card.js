class Card {
  constructor(
    { word, translation, image, audioSrc, }
  ) {
    this.word = word;
    this.translation = translation;
    this.image = image;
    this.audioSrc = audioSrc;
    this.cardFront = document.querySelectorAll('.font-face');
  }

  createDOMCard() {

    const cardItem = document.createElement('div');
    const cardImgUrl = `url(./assets/${this.image})`;
    const cardFront = document.createElement('div');
    const cardBack = document.createElement('div');
    const cardRotateImg = document.createElement('img');

    cardFront.innerHTML = this.word;
    cardBack.innerHTML = this.translation;
    cardRotateImg.src = './assets/img/rotate.png';
    cardRotateImg.classList.add('rotate')
    cardFront.id = this.word;
    cardFront.classList.add('font-face');
    cardBack.classList.add('back-face');
    cardBack.classList.add('hidden');
    cardFront.style.backgroundImage = cardImgUrl;
    cardBack.style.backgroundImage = cardImgUrl;
    cardItem.classList.add('card');
    cardItem.appendChild(cardFront);
    cardItem.appendChild(cardBack);
    cardItem.appendChild(cardRotateImg);

    return cardItem;
  }

  audioPlay(name) {
    const audio = new Audio(`./assets/audio/${name}.mp3`);

    audio.play();
  }

}

export default Card;