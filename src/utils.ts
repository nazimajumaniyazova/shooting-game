export interface Hero {
  skin: string,
  lives: number,
  name: string,
  speed: number
}

export interface Julie {
  skin: './catalog-img/female.png',
  name: 'Julie',
  lives: 5,
  speed: 9
}

export interface Mike {
  skin: './catalog-img/male.png',
  name: 'Mike',
  lives: 4,
  speed: 7
}


export function createHTMLElement(tg: string, cls?: string | string[]) {
  const element = document.createElement(tg);
  if (typeof cls === 'string') {
    element.classList.add(cls)
  } else {
    if (cls) cls.forEach(clss => element.classList.add(clss))
  }

  return element;
}

export function randomInteger(min: number, max: number) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export function getPlayerData() {
  const playerString = localStorage.getItem('player') as string;
  return JSON.parse(playerString);
}

export class Player implements Hero  {

  skin: string;
  lives: number;
  speed: number;
  name: string;

  constructor(skin: string, lives: number, name: string, speed: number) {
    this.skin = skin;
    this.lives = lives;
    this.name = name;
    this.speed = speed;
  }

}