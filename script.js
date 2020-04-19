import CardsContainer from './src/cards-container';
import playTrainSwitcher from './src/play-train-switcher';
import mainMenu from './src/header';


function runEnglishForKidsApp() {
  const container = new CardsContainer();

  container.generateDomCardContainer();
   mainMenu(container);
  playTrainSwitcher();
}

document.body.onload = runEnglishForKidsApp;
