import { createHTMLElement, getPlayerData, randomInteger } from "./utils";
export let bodyCount = 0;
export let missionWidth = 0;

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

    isShot(bullet, timerId);

    if(bullet.offsetLeft > document.body.clientWidth) {
      bullet.remove();
      clearInterval(timerId);
    }
  }, 10)

}

export function createEnemy() {

  const enemy = createHTMLElement('div', 'enemy');
  const speed = randomInteger(10, 20);
  enemy.style.top = randomInteger(100, document.body.offsetHeight - 100) + 'px';
  
  const timerId = setInterval(function() {
    enemy.style.left = (enemy.offsetLeft - speed) + 'px';
    if (enemy.offsetLeft + enemy.offsetWidth < 0) {
      enemy.remove();
      clearInterval(timerId);
    }
    isDie()
  }, 100)

  enemy.dataset.timer = String(timerId);
  return enemy;
}

function isShot(bullet: HTMLDivElement, timer: NodeJS.Timer) {

  const topB = bullet.offsetTop;
  // const bottomB = bullet.offsetTop + bullet.offsetHeight;

  const enemies = Array.from(document.querySelectorAll('.enemy') as NodeListOf<HTMLDivElement>);

  enemies.forEach(enemy => {
    const topE = enemy.offsetTop;
    const bottomE = enemy.offsetTop + enemy.offsetHeight;

    const leftB = bullet.offsetLeft;
    const leftE = enemy.offsetLeft;

      if(topB >= topE && topB <= bottomE && leftB >= leftE) {
        bodyCount++;
          enemy.className = 'boom';
          enemy.style.top = (topE - 10) + 'px';
          enemy.style.left = (leftE - 10) + 'px';

          const id = enemy.dataset.timer as unknown as NodeJS.Timer;
          clearInterval(id);

          setTimeout(function() {
            enemy.remove();
            bullet.remove();
            clearInterval(timer)
          }, 400);

          updateMissionProgress()
      }
  });
}

export function die() {
  const playerData = getPlayerData();
  playerData.lives--;

  localStorage.removeItem('player');
  localStorage.setItem('player', JSON.stringify(playerData));
  
  if(playerData.lives != 0) {
    const livesBlock = document.querySelector('.lives') as HTMLDivElement;
    const life = livesBlock.querySelector('span') as HTMLSpanElement;
    life.remove();
  } else {
    EndGame()
  }
  
}

export function isDie() {
  const player = document.querySelector('.hero') as HTMLDivElement;
  const enemies = Array.from(document.querySelectorAll('.enemy') as NodeListOf<HTMLDivElement>);

  enemies.forEach(enemy => {

    if (enemy.offsetTop > player.offsetTop && 
      enemy.offsetTop < player.offsetTop + player.offsetHeight &&
      enemy.offsetLeft <= player.offsetLeft + player.offsetWidth) {
        // boom!
        enemy.className = 'boom';
            enemy.style.top = (player.offsetTop + 50) + 'px';
            enemy.style.left = (player.offsetLeft + 50) + 'px';
            const id = enemy.dataset.timer as unknown as NodeJS.Timer;
            clearInterval(id);
            setTimeout(function() {
              enemy.remove();
            }, 400)
  
        die()
      }

  })
  
}

export function updateMissionProgress() {
  const missionBar = document.querySelector('.mission-bar') as HTMLDivElement;
  if (missionWidth >= 100) {
		console.log('finished');
		return;
	}
	missionWidth+=5;
	missionBar.style.width = missionWidth + '%';
}

function EndGame() {
  document.body.innerHTML = 'Game Over!';
}