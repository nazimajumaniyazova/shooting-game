const help = () => {
  const block = `
  <tr>
      <td class="td"></td>
      <td class="td"></td>
      <td class="td"></td>
      <td class="td help-life"></td>
  </tr>
  <tr>
      <td rowspan="2" class="td help-player" data-click="true">
      <div class="test"><div>
      </td>
      <td class="td"></td>
      <td class="td"></td>
      <td class="td"></td>
  </tr>
  <tr>
      <td class="td"></td>
      <td class="td"></td>
      <td class="td"></td>
  </tr>
  <tr>
      <td class="td"></td>
      <td class="td"></td>
      <td class="td"></td>
      <td class="td help-settings"></td>
  </tr>
  `

  const saction = <HTMLElement>document.createElement('table');
    saction.classList.add('help-block')
    saction.innerHTML = block;
    document.body.appendChild(saction);
}
help();

function clickBlockHelp() {
  const tdBlock = document.querySelectorAll('.td')
  const helpPlayer = document.querySelector('.help-player') as HTMLElement 
  const helpLife = document.querySelector('.help-life') as HTMLElement
  const helpSettings = document.querySelector('.help-settings') as HTMLElement
  

  tdBlock.forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('help-player') && helpPlayer.dataset.click === 'true') {
        helpPlayer.style.background = 'rgb(0, 0, 0, 0.8)'
        helpLife.style.background = 'none'
        helpLife.setAttribute('data-bollean', 'true')
        helpPlayer.dataset.click = 'false'
      } else if (item.classList.contains('help-life') && helpLife.dataset.bollean === 'true') {
        helpLife.style.background = 'rgb(0, 0, 0, 0.8)'
        helpSettings.style.background = 'none'
      } else if (item.classList.contains('help-settings')) {
        helpSettings.style.background = 'rgb(0, 0, 0, 0.8)'
      } 

    })
  })
}

clickBlockHelp()