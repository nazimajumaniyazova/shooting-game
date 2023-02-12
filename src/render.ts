import { createEnemy } from "./game";
import { createHTMLElement, getPlayerData, Hero, randomInteger } from "./utils";

export function renderHeroChoisePage() {
  const gameField = createHTMLElement('div', 'game-field');
  const container = createHTMLElement('div', 'heroes');
  const instructions = createHTMLElement('h2', 'instructions-heading');
  instructions.innerHTML = 'Select Player then press Enter';
  const maleHero = createHTMLElement('img', 'choose-male-hero') as HTMLImageElement;
  maleHero.src = './catalog-img/male.png';
  maleHero.style.width = '120px';
  const malePlayerContainer = createHTMLElement('div', ['boy', 'hero-active']);
  malePlayerContainer.dataset.type = 'male';
  malePlayerContainer.append(maleHero);
  const femaleHero = createHTMLElement('img', 'choose-female-hero') as HTMLImageElement;
  femaleHero.src = './catalog-img/female.png';
  femaleHero.style.width = '120px';
  const femalePlayerContainer = createHTMLElement('div', 'girl');
  femalePlayerContainer.dataset.type = 'female';
  femalePlayerContainer.append(femaleHero);
  container.append(instructions, malePlayerContainer, femalePlayerContainer);
  gameField?.append(container);
  document.body.append(gameField);
}

export function renderGameField() {
  const gameField = document.querySelector('.game-field') as HTMLDivElement;
  gameField.style.backgroundImage = 'url("./catalog-img/mission-1-bkg.jpg")';
  const playerData = getPlayerData();
  gameField?.append(renderHero(playerData));
  renderHearts();
  renderBodyCount();
  const number = randomInteger(2, 4);
  setInterval(()=>{
    for (let i = 0; i < number; i++) {
      gameField?.append(createEnemy());
    }
  }, 3000);
  
  
}

export function renderHero(player: Hero) {
  const hero = createHTMLElement('div', 'hero');
  hero.style.backgroundImage = `url(${player.skin})`;
  if (player.name === 'Julie') hero.classList.add('hero-2');
  return hero;
}

export function renderEnemy() {
  const enemy = createHTMLElement('div', 'enemy');
  enemy.style.top = randomInteger(100, document.body.offsetHeight - 100) + 'px';
  return enemy;
}

export function renderHearts() {
  const gameField = document.querySelector('.game-field');
  const heartContainer = createHTMLElement('div', 'lives');
  const playerData = getPlayerData();

  for(let i = 0; i < playerData.lives; i++) {
    const heart = createHTMLElement('span', 'heart');
    heartContainer.append(heart);
  }

  gameField?.append(heartContainer)
}

export function renderBodyCount() {
  const gameField = document.querySelector('.game-field');
  const missionProgress = createHTMLElement('div', 'mission-progress');
  const missionBar = createHTMLElement('div', 'mission-bar');
  missionProgress.append(missionBar);
  gameField?.append(missionProgress);
}