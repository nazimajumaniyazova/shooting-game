import { createHTMLElement, getPlayerData, Hero } from "./utils";

export function renderHeroChoisePage() {
  const gameField = createHTMLElement('div', 'game-field');
  const container = createHTMLElement('div', 'heroes');

  const instructions = createHTMLElement('h2', 'instructions-heading');
  instructions.innerHTML = 'Select Player then press Enter';

  // const heroesContainer = createHTMLElement('div', 'heroes-container');

  const maleHero = createHTMLElement('img', 'choose-male-hero') as HTMLImageElement;
  maleHero.src = './catalog-img/male.png';
  maleHero.style.width = '120px';

  const malePlayerContainer = createHTMLElement('div', ['boy', 'active']);
  malePlayerContainer.dataset.type = 'male';
  malePlayerContainer.append(maleHero);

  const femaleHero = createHTMLElement('img', 'choose-female-hero') as HTMLImageElement;
  femaleHero.src = './catalog-img/female.png';
  femaleHero.style.width = '120px';
  
  const femalePlayerContainer = createHTMLElement('div', 'girl');
  femalePlayerContainer.dataset.type = 'female';
  femalePlayerContainer.append(femaleHero);

  // const description = createHTMLElement('div', 'description-container');
  const descriptionMale = createHTMLElement('div', ['description', 'male-descr']);
  descriptionMale.innerText = 'Name: Mike\n Description: fast than Julie but has less health rate';

  const descriptionFemale = createHTMLElement('div', ['description', 'female-descr']);
  descriptionFemale.innerText = 'Name: Julie\n Description: slower than Mike but has more health rate';

  const height = malePlayerContainer.offsetHeight;
  console.log(height)

  // description.append(descriptionMale, descriptionFemale)

  // heroesContainer.append(malePlayerContainer, femalePlayerContainer)

  
  container.append(instructions, malePlayerContainer, femalePlayerContainer, descriptionMale, descriptionFemale  /*malePlayerContainer, femalePlayerContainer*/);
  gameField?.append(container);
  document.body.append(gameField);
}

export function renderGameField() {
  const container = document.querySelector('.container');
  const playerData = getPlayerData();
  container?.append(renderHero(playerData))
}


export function renderHero(player: Hero) {
  const hero = createHTMLElement('div', 'player');
  hero.style.backgroundImage = `url(./../catalog-img/${player.skin}.png)`;
  return hero;
}