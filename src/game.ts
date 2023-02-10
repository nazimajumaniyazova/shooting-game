import { createHTMLElement, randomInteger } from "./utils";

export function moveHero(e: KeyboardEvent) {
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
          createBullet()
          break;
  }
}

function createBullet() {
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
  moveBullet(bullet);
}

function moveBullet(bullet: HTMLDivElement) {
  
  const timerId = setInterval(function() {
    bullet.style.left = bullet.offsetLeft + 10 + 'px';

    // isShot(bullet, timerId);

    if(bullet.offsetLeft > document.body.clientWidth) {
      bullet.remove();
      clearInterval(timerId);
    }
  }, 10)

}

export function createEnemy() {
  const gameField = document.querySelector('.game-field');
  const enemy = createHTMLElement('div', 'enemy');
  enemy.style.top = randomInteger(100, document.body.offsetHeight - 100) + 'px';
  gameField?.append(enemy);
  
  const timerId = setInterval(function() {
    enemy.style.left = (enemy.offsetLeft - 10) + 'px';
    if (enemy.offsetLeft + enemy.offsetWidth < 0) {
      enemy.remove();
      clearInterval(timerId);
      createEnemy();

      // die();
    }

    // isDie()

  }, 100)
  
  return enemy;
}