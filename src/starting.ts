import { chooseHero } from "./choose-hero";
import { renderHeroChoisePage } from "./render";
import { wrapperBlokHelp, blockHelp, wrapperBlokHelpCopy, clickBlockHelp } from './type/helpGame';
import { renderSettings, wrapperSetting } from "./type/settingModal"


const container = document.querySelector('.container') as HTMLElement;
welcome()
function welcome() {
  let isTypingStoryActive = false;  
  const containertTop = createNode('div', 'container-top');
  container.append(containertTop);

  const logo = createNode('img', 'logo') as HTMLImageElement;
  logo.src = './catalog-img/logo.png'
  // welcomeText.innerText = 'Welcome';
  containertTop.append(logo);

  // const gameName = createNode('div', 'game-name');
  // gameName.innerText = 'Savior';
  // containertTop.append(gameName);

  const containerBottom = createNode('div', 'container-bottom');
  container.append(containerBottom);


  const startBtn = createNode('button', ['start-btn', 'btn']);
  startBtn.innerText = 'START';
  containerBottom.append(startBtn);


  const pressEnter = createNode('p', 'press-enter');
  pressEnter.innerText = 'or press Enter';
  containerBottom.append(pressEnter);
  
  setTimeout(() => {
    startBtn.classList.add('display-on');
    pressEnter.classList.add('display-on');
  }, 2000)

  startBtn.addEventListener('click', onStartBtnClick);

  window.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !isTypingStoryActive) {
      onStartBtnClick()
      isTypingStoryActive = true;
      window.removeEventListener('keydown', onSkipBtnClick)
      const blockHelp = document.querySelector('.block-help') as HTMLElement
      blockHelp.classList.add('active')
    }
    return;
  });
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

function onStartBtnClick() {
  container.innerHTML = '';
  typeGameStory()
  displaySkipBtn()
}

function crateTypingItem() {
  const typingItem = createNode('div', 'typing-container__item');
  const sentence = createNode('span', 'sentence');
  const inputCursor = createNode('span', 'input-cursor');
 
  typingItem.append(sentence)
  typingItem.append(inputCursor);

  return typingItem;
}
async function typeSentence(sentence: string, eleRef: HTMLElement, delay = 100){
  const letters = sentence.split('')
  let i = 0
  while(i<letters.length){
      await waitForMs(delay);
      eleRef.append(letters[i])
      i++
  }
  return
}
function waitForMs(ms: number){
  return new Promise(resolve =>setTimeout(resolve,ms))
}
async function typeGameStory(){
  const gameStoryText = ['The year 3023', 'The Earth is attacked by giant insects from outer space!', 'Your mission is to eliminate invaders and save the planet.', 'You have been chosen to accomplish this mission.'];
  for (const item of gameStoryText) {
    const typingItem = crateTypingItem();
    container.append(typingItem);
    const sentence = typingItem?.querySelector('.sentence') as HTMLElement;
    await typeSentence(item, sentence);
    const cursor =   typingItem.querySelector('.input-cursor ') as HTMLElement;
    cursor.style.visibility = 'hidden';
  }
}

function displaySkipBtn() {
  const skipBtn = createNode('button', ['skip-btn','btn'])
  skipBtn.innerHTML = 'Skip';
  container.append(skipBtn);

  
  
  
  skipBtn.addEventListener('click', skipStoryM);
  
  document.body.addEventListener('keydown', skipStory);
}

export async function skipStoryM() {
  const footer = document.querySelector('.footer')
  onSkipBtnClick()
  blockHelp()
  renderSettings()
  footer?.remove()
  // header?.remove()
  const elementBlockHelp = document.querySelector('.block-help') as HTMLElement
  elementBlockHelp.addEventListener('click', () => {
  document.body.removeEventListener('keydown', chooseHero);
  wrapperBlokHelp();
  wrapperBlokHelpCopy();
  clickBlockHelp();   
  })
  wrapperSetting()
}

export async function skipStory(e: KeyboardEvent) {
  const footer = document.querySelector('.footer')
  if (e.key === 'Enter') {
    onSkipBtnClick()
    blockHelp()
    renderSettings()
    footer?.remove()
    // header?.remove()
    const elementBlockHelp = document.querySelector('.block-help') as HTMLElement
    elementBlockHelp.addEventListener('click', () => {
    document.body.removeEventListener('keydown', chooseHero);
    wrapperBlokHelp();
    wrapperBlokHelpCopy();
    clickBlockHelp()
    })
    wrapperSetting()
  }
}

function onSkipBtnClick() {
  container.remove();
  renderHeroChoisePage()
}


