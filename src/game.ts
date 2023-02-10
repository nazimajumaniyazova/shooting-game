import { createHTMLElement } from "./utils";

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
  // const destination = window.innerWidth;
  const gameField = document.querySelector('.game-field') as HTMLDivElement 

  const bulletKeyFrame = new KeyframeEffect(
    bullet,
    [
      { left: bullet.style.left },
      { left: gameField.clientWidth + 'px' } 
    ],
    { duration: 1000, fill: 'forwards' }
  );

  const bulletAnimation = new Animation(bulletKeyFrame, document.timeline);
  bulletAnimation.play();
  console.log(bullet.style.left)
  if(parseInt(bullet.style.left) > document.body.clientWidth) {
    // bullet.remove();
    console.log('hey')
  }

}