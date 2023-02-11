import { renderGameField,  renderHeroChoisePage} from "./render";
import {Player} from "./utils";
import {moveHero} from './game';

renderHeroChoisePage()
document.body.addEventListener('keydown', chooseHero);
document.body.addEventListener('keydown', confirmHero);

export function chooseHero(e: KeyboardEvent) {
  if (e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'ArrowLeft'  || e.code === 'ArrowRight') {
    const male = document.querySelector('.boy');
    const female = document.querySelector('.girl');
    if (male?.classList.contains('hero-active')) {
      male.classList.remove('hero-active')
    } else {
      male?.classList.add('hero-active')
    }
    if (female?.classList.contains('hero-active')) {
      female.classList.remove('hero-active')
    } else {
      female?.classList.add('hero-active')
    }
  }
}

export function confirmHero(e: KeyboardEvent) {

  if (e.code === 'Enter') {

    // 1. Confirm Hero

    const target = document.querySelector('.hero-active') as HTMLElement;
    const skin = target.dataset.type as string;
    if (skin === 'male') {
      const player = new Player('./catalog-img/male.png', 4, 'Mike', 7);
      localStorage.setItem('player', JSON.stringify(player));
    } else {
      const player = new Player('./catalog-img/female.png', 5, 'Julie', 9);
      localStorage.setItem('player', JSON.stringify(player));
    }
    
    const container = document.querySelector('.game-field');
    if (container) container.innerHTML = '';

    // 2. Render gamefield (hero, enemy, hearts)
    renderGameField();

    // 3. Remove confirm hero event listener
    document.body.removeEventListener('keydown', confirmHero)

    // 4. Add Event listener to move Hero

    document.body.addEventListener('keydown', moveHero);
  }

}
