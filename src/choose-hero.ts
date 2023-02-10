// import { renderHeroChoisePage } from "./render";
import {Player} from "./utils";

// renderHeroChoisePage();

document.body.addEventListener('keydown', (e: KeyboardEvent) => {
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
});


document.body.addEventListener('keydown', (e: KeyboardEvent) => {

  if (e.code === 'Enter') {

    const target = document.querySelector('.active') as HTMLElement;
    const skin = target.dataset.type as string;
    if (skin === 'male') {
      const player = new Player('./catalog-img/male.png', 4, 'Mike', 7);
      localStorage.setItem('player', JSON.stringify(player));
    } else {
      const player = new Player('./catalog-img/female.png', 5, 'Julie', 9);
      localStorage.setItem('player', JSON.stringify(player));
    }
    
    const container = document.querySelector('.container');
    if (container) container.innerHTML = '';
  }

});


