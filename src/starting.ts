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