// const wrapperBlokHelp = () => {
//   const block = `
//   <div class="colum-block">
//   <div class="col col1-1"></div>
//   <div class="col col1-2">
//     <img src="./catalog-img/male-player.png" style="width: 75%;" alt="#">
//     <div class="fon-text fon-text-game">
//     Movement to the top ⬆️ <br>
//     Movement to the bottom ⬇️<br>
//     Fire (space) 🔥</div>
//   </div>
//   <div class="col col1-3"></div>
//   <div class="col col1-4"></div>
// </div>
// <div class="colum-block">
//     <div class="col">
//     </div>
//     <div class="col"></div>
//     <div class="col"></div>
//     <div class="col"></div>
// </div>
// <div class="colum-block3">
//     <div class="col"></div>
//     <div class="col"></div>
//     <div class="col"></div>
//     <div class="col"></div>
// </div>
// <div class="colum-block4">
//     <div class="col col4-1">
//         <div class="img-heart">
//           <img src="./catalog-img/heart.png" alt="#">
//           <img src="./catalog-img/heart.png" alt="#">
//           <img src="./catalog-img/heart.png" alt="#">
//         </div>
//         <span class="fon-text help-life-text">Number of lives</span>
//     </div>
//     <div class="col ">
//       <img src="./catalog-img/enemy-1.png" style="width: 30%;" alt="#">
//       <span class="fon-text help-enemy-text">Enemy</span>
//     </div>
//     <div class="col"></div>
//     <div class="col col4-4">
//       <span class="fon-text fon-text-settings">Settings</span>
//     </div>
// </div>`

//   const saction = <HTMLElement>document.createElement('div');
//     saction.classList.add('wrapper-blok-help')
//     saction.innerHTML = block;
//     document.body.appendChild(saction);
// }
// // wrapperBlokHelp();

// const wrapperBlokHelpCopy = () => {
//   const block = `  <div class="colum-block">
//   <div class="col col-copy col1-1"></div>
//   <div class="col col-copy col1-2 help-player" data-click="true">
//   </div>
//   <div class="col col-copy col1-3"></div>
//   <div class="col col-copy col1-4"></div>
// </div>
// <div class="colum-block">
//     <div class="col col-copy"></div>
//     <div class="col col-copy"></div>
//     <div class="col col-copy"></div>
//     <div class="col col-copy"></div>
// </div>
// <div class="colum-block3">
//     <div class="col col-copy"></div>
//     <div class="col col-copy"></div>
//     <div class="col col-copy"></div>
//     <div class="col col-copy"></div>
// </div>
// <div class="colum-block4">
//     <div class="col col-copy col4-1  help-life">
//     </div>
//     <div class="col col-copy help-emeny">
//     </div>
//     <div class="col col-copy"></div>
//     <div class="col col-copy col4-4  help-settings"></div>
// </div>`

//   const saction = <HTMLElement>document.createElement('div');
//     saction.classList.add('wrapper-blok-help-copy')
//     saction.innerHTML = block;
//     document.body.appendChild(saction);
// }
// // wrapperBlokHelpCopy();

// function clickBlockHelp() {
//   const divBlock = document.querySelectorAll('.col-copy')
//   const helpPlayer = document.querySelector('.help-player') as HTMLElement
//   const helpLife = document.querySelector('.help-life') as HTMLElement
//   const helpSettings = document.querySelector('.help-settings') as HTMLElement
//   const helpEmeny = document.querySelector('.help-emeny') as HTMLElement
//   const fonTextGame = document.querySelector('.fon-text-game') as HTMLElement 
//   const helpLifeText = document.querySelector('.help-life-text') as HTMLElement
//   const helpEnemyText = document.querySelector('.help-enemy-text') as HTMLElement 
//   const fontextSettings = document.querySelector('.fon-text-settings') as HTMLElement
//   helpPlayer.style.background = 'none'
//   helpPlayer.style.cursor= 'pointer';
//   divBlock.forEach(item => {

//     item.addEventListener('click', () => {
//       if (item.classList.contains('help-player') && helpPlayer.dataset.click === 'true') {
//         helpLife.setAttribute('data-click', 'true')
//         helpPlayer.style.background = 'rgb(0, 0, 0, 0.5)'
//         helpPlayer.dataset.click = 'false'
//         helpLife.style.background = 'none'
//         helpLife.style.cursor = 'pointer';
//         helpPlayer.style.cursor = 'auto';
//         fonTextGame.style.display = 'none'
//       } else if (item.classList.contains('help-life') && helpLife.dataset.click === 'true') {
//         helpEmeny.setAttribute('data-click', 'true')
//         helpLife.style.background = 'rgb(0, 0, 0, 0.5)'
//         helpEmeny.style.background = 'none'
//         helpLife.dataset.click = 'false'
//         helpEmeny.style.cursor = 'pointer';
//         helpLife.style.cursor = 'auto';
//         helpLifeText.style.display = 'none'
//       }else if (item.classList.contains('help-emeny') && helpEmeny.dataset.click === 'true') {
//         helpSettings.style.background = 'none'
//         helpSettings.setAttribute('data-click', 'true')
//         helpEmeny.style.background = 'rgb(0, 0, 0, 0.5)'
//         helpSettings.style.cursor = 'pointer';
//         helpEmeny.style.cursor = 'auto';
//         helpEnemyText.style.display = 'none'
//       } else if (item.classList.contains('help-settings') && helpSettings.dataset.click === 'true') {
//         helpSettings.style.background = 'rgb(0, 0, 0, 0.5)'
//         helpEmeny.dataset.click = 'false'
//         helpSettings.style.cursor = 'auto';
//         fontextSettings.style.display = 'none'
//       }

//     })
//   })
// }

// // clickBlockHelp()
