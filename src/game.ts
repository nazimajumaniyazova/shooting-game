export function moveHero(e: KeyboardEvent) {
  const hero = document.querySelector('.hero') as HTMLDivElement;
  switch(e.code) {
        case 'ArrowDown':
          // console.log(hero.parentElement?.offsetHeight)
          console.log(hero.offsetHeight)
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
          // createBullet()
          break;
  }
}