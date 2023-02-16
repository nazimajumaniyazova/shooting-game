import { createHTMLElement, randomInteger } from "./utils";
// export let mission2Width = 0;
// export let isSecondMissionCompleted = false;
export let secondMissionTimer: NodeJS.Timer;

export function moveHero2(e: KeyboardEvent) {
  const hero = document.querySelector('.hero') as HTMLDivElement;
  switch(e.code) {
        case 'ArrowDown':
          if (hero.parentElement) {
            if (parseInt(hero.style.top) + hero.offsetHeight + 50 >= hero.parentElement?.offsetHeight) return
          }
          hero.style.top = hero.offsetTop + 80 + 'px';
          break;
    
        case 'ArrowUp':
          if (hero.offsetTop <= 24) return
          hero.style.top = hero.offsetTop - 80 + 'px';
          break;
    
        case 'Space':
          createBullet2()
          break;
  }
}

function createBullet2() {
  const hero = document.querySelector('.hero') as HTMLDivElement;
  const gameField = document.querySelector('.game-field')

  const bullet = createHTMLElement('div', 'bullet') as HTMLDivElement;

  if (!hero.classList.contains('hero-2')) {
    bullet.style.top = hero.offsetTop + 80 + 'px';
  } else {
    bullet.style.top = hero.offsetTop + 90 + 'px';
    bullet.style.left = '158px';
  }

  if (gameField) gameField.append(bullet);
  moveBullet2(bullet);
}

function moveBullet2(bullet: HTMLDivElement) {
  
  const timerId = setInterval(function() {
    bullet.style.left = bullet.offsetLeft + 10 + 'px';

    // isShot(bullet, timerId);

    if(bullet.offsetLeft > document.body.clientWidth) {
      bullet.remove();
      clearInterval(timerId);
    }
  }, 10)

}

export function createFly1() {

  const enemy = createHTMLElement('div', 'enemy');
  const speed = randomInteger(10, 20);
  enemy.style.top = randomInteger(100, document.body.offsetHeight - 100) + 'px';
  
  const timerId = setInterval(function() {
    enemy.style.left = (enemy.offsetLeft - speed) + 'px';
    if (enemy.offsetLeft + enemy.offsetWidth < 0) {
      enemy.remove();
      clearInterval(timerId);
    }
    // isDie()
  }, 100)

  enemy.dataset.timer = String(timerId);
  return enemy;
}

export function createFly2() {
  const rhino = createHTMLElement('div', ['enemy', 'rhino']);
  const speed = randomInteger(20, 30);
  rhino.style.top = randomInteger(100, document.body.offsetHeight - 100) + 'px';

  const timerId = setInterval(function() {
    rhino.style.left = (rhino.offsetLeft - speed) + 'px';
    if (rhino.offsetLeft + rhino.offsetWidth < 0) {
      rhino.remove();
      clearInterval(timerId);
    }
    // isDie()
  }, 100)

  rhino.dataset.timer = String(timerId);
  return rhino;
}

export function createEnemies2() {

  const gameField = document.querySelector('.game-field') as HTMLDivElement;

  secondMissionTimer = setInterval(()=>{
    const number = randomInteger(1, 2);
    for (let i = 0; i < number; i++) {
      gameField?.append(createFly2());
    }
  }, 500);
} 