/* eslint-disable @typescript-eslint/no-non-null-assertion */
// import { renderHeroChoisePage } from "./render";
// import {Player} from "./utils";
import {createHTMLElement} from './utils'
import { Game } from "./game/Game";
// renderHeroChoisePage();

document.body.addEventListener('keydown', chooseHero);

export function chooseHero(e: KeyboardEvent) {
  if (e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'ArrowLeft'  || e.code === 'ArrowRight') {
    const male = document.querySelector('.boy');
    const female = document.querySelector('.girl');
    if (male?.classList.contains('active')) {
      male.classList.remove('active')
    } else {
      male?.classList.add('active')
    }
    if (female?.classList.contains('active')) {
      female.classList.remove('active')
    } else {
      female?.classList.add('active')
    }
  }
  if(e.key === "Enter") {
    const chosedHero = document.querySelector('.heroes .active')!.getAttribute('data-type')!
    document.querySelector('.game-field')?.remove()
    console.log(chosedHero)
    gameAnimation(chosedHero);
    const blockHelp = document.querySelector('.block-help') as HTMLElement
    if (blockHelp) {
      blockHelp.remove()
    }
  }
}

// document.body.addEventListener('keydown', (e: KeyboardEvent) => {

//   if (e.code === 'Enter') {
//     const header = document.querySelector('.header')
//     header?.remove()
//     const target = document.querySelector('.active') as HTMLElement;
//     const skin = target.dataset.type as string;
//     if (skin === 'male') {
//       const player = new Player('./catalog-img/male.png', 4, 'Mike', 7);
//       localStorage.setItem('player', JSON.stringify(player));
//     } else {
//       const player = new Player('./catalog-img/female.png', 5, 'Julie', 9);
//       localStorage.setItem('player', JSON.stringify(player));
//     }
    
//     const container = document.querySelector('.container');
//     if (container) container.innerHTML = '';
//   }

// });

export function gameAnimation(chosedHero: string) {
  const canvas = createHTMLElement('canvas', 'canvas') as HTMLCanvasElement;
  const context = canvas.getContext('2d') as CanvasRenderingContext2D;
  canvas.width  = document.documentElement.scrollWidth;
  canvas.height  = document.documentElement.scrollHeight;
  document.body.append(canvas);
  const game = new Game(canvas.width, canvas.height, chosedHero)

  let previousTimeStamp = 0
  function animate(currentTimeStamp: number){
    const deltaTime = currentTimeStamp - previousTimeStamp;
    previousTimeStamp = currentTimeStamp;
    context.clearRect(0,0,canvas.width,canvas.height)
    game.draw(context)
    game.update(deltaTime)
    requestAnimationFrame(animate)
  }
  animate(0)
}