function welcome() {
  const container = createNode('div', 'container');
  document.body.append(container);

  const welcomeText = createNode('p', 'welcome-text');
  welcomeText.innerText = 'Welcome';
  container.append(welcomeText);

  const gameName = createNode('div', 'game-name');
  gameName.innerText = 'Savior';
  container.append(gameName);

  const startBtn = createNode('button', ['start-btn', 'btn']);
  startBtn.innerText = 'start';
  container.append(startBtn);

  const pressEnter = createNode('p', 'press-enter');
  pressEnter.innerText = 'or press Enter';
  container.append(pressEnter);
  
  setTimeout(() => {
    startBtn.classList.add('display-on');
    pressEnter.classList.add('display-on');
  }, 2000)
  startBtn.addEventListener('click', onStartBtnClick)
}

function createNode(tagName: string, classes: Array<string> | string) {
  const node = document.createElement(tagName);
  if(Array.isArray(classes)) {
    classes.forEach(function(item) {
      node.classList.add(item)
    })
  } else {
    node.classList.add(classes)
  }
  return node;
}

function onStartBtnClick(this: HTMLElement, event: Event) {
  const container = this.closest('.container') as HTMLElement;
  container.innerHTML = '';
  console.log(container)
  console.log(event)
}

// function startingStory() {

// }
welcome()

const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 1000;
const CANVAS_HEIGHT = canvas.height = 500;

let gameFrame = 0;
class Enemy {
  image: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  spriteWidth: number;
  spriteHeight: number;
  frame: number;
  flapSpeed: number;
  constructor() {
    this.image = new Image();
    this.image.src = './catalog-img/enemy2.png';
    this.speed = Math.random() *4 + 1;
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;
    this.x = Math.random() * ( canvas.width - this.width);
    this.y = Math.random() *  ( canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x -= this.speed
    //this.y += this.speed
    if(gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? this.frame = 0 : this.frame++;
    }
  }
  draw() {
    ctx?.strokeRect(this.x,this.y, this.width,this.height);
    ctx?.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth,this.spriteHeight ,this.x, this.y, this.width, this.height)
  }
}
const enemy1 = new Enemy();

function animate() {
  ctx?.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemy1.update()
  enemy1.draw()
  requestAnimationFrame(animate)
  gameFrame++;
}
animate()