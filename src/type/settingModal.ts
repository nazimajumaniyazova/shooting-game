/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const renderSettings = () => {
  const html = `
  <div class="wrapper-modal__settings">
    <div class="player">
      <audio class="audio" src="./catalog-img/audio/one.mp3"></audio>
      <div class="box-player-wrapper">
        <div class="box-player">
          <div class="btn play-pause"><img class="img-play-pause" src="./catalog-img/play.png" alt=""></div>
          <div class="volume-box">
            <div class="img-volume"><img class="reg-volume" src="./catalog-img/volume.png" alt=""></div>
            <input class="volmue" type="range" value="0.3" min="0" max="1" step="0.1">
          </div>
        </div>
      </div>
    </div>
    <div class="settings-one setting">
      <span class="settings-text">Day time</span>
      <div class="switch-btn switch-one switch-on"></div>
    </div>
    <div class="settings-two setting">
      <span class="settings-text">Night time</span>
      <div class="switch-btn switch-two"></div>
    </div>
  </div>
`
  const saction = <HTMLElement>document.createElement('div');
  saction.classList.add('wrapper-modal')
  saction.classList.add('active')
  saction.innerHTML = html;
  document.body.appendChild(saction);
  const sactionSettings = <HTMLElement>document.createElement('div');
  sactionSettings.classList.add('settings')
  document.body.appendChild(sactionSettings);
}

let gameVolume: number;
export function wrapperSetting() {
  const btnSettings = document.querySelector('.settings') as HTMLElement
// const player = document.querySelector('.player') as HTMLElement
const imgPlayPause = document.querySelector('.img-play-pause') as HTMLImageElement;
const audio = document.querySelector('.audio') as HTMLAudioElement;
const volume = document.querySelector('.volmue') as HTMLInputElement;
const btnPlay = document.querySelector('.play-pause') as HTMLElement
const modalSettings = document.querySelector('.wrapper-modal__settings')
const switchBtn = document.querySelectorAll('.switch-btn');
const headerUser = document.querySelector('.header-user')

audio.volume = 0.3

gameVolume = +volume.value;

let gameVolume = volume.value;
let dayTime = 'dayTime';
volume.addEventListener('input', () => {
  const img = document.querySelector('.reg-volume') as HTMLImageElement;
  const data = volume.value;
  audio.volume = +data;
  if ( audio.volume === 0) {
    img.src = "./catalog-img/volumeFalse.png"
  } else {
    img.src = "./catalog-img/volume.png"
  }
  gameVolume = +volume.value
})

  btnSettings?.addEventListener('click', () => {
    if (headerUser?.classList.contains('active')) {
      const wrapperModal = document.querySelector('.wrapper-modal')
      wrapperModal?.classList.toggle('active')
      if (wrapperModal?.classList.contains('active')) {
        btnSettings.classList.add('active')
      } else {
        btnSettings.classList.remove('active')
  }
    }
  })
  

imgPlayPause.addEventListener('click', () => {
  btnPlay.classList.toggle('play')
  if (btnPlay.classList.contains('play')) {
    imgPlayPause.src = "./catalog-img/pause.png"
    audio.play();
  } else {
    imgPlayPause.src = "./catalog-img/play.png"
    audio.pause();
  }
  
})

modalSettings?.addEventListener('click', (event: Event)=> {
  const eventTartget = event.target as HTMLElement
  const setting = eventTartget.closest('.setting')!
  console.log(setting)
  if(setting.classList.contains('settings-one')){
    setting.querySelector('.switch-one')?.classList.toggle('switch-on')
    switchBtn.forEach(item => {
      if (item.classList.contains('switch-two')) {
        item.classList.remove('switch-on')
      } 
    })
    dayTime = 'dayTime'
  }
  if(setting.classList.contains('settings-two')){
    setting.querySelector('.switch-two')?.classList.toggle('switch-on')
    switchBtn.forEach(item => {
      if (item.classList.contains('switch-one')) {
        item.classList.remove('switch-on')
      } 
    })
    dayTime = 'nightTime'
  }
})

 switchBtn.forEach(item => {
   item.addEventListener('click', () => {
     if (item.classList.contains('switch-one')) {
       item.classList.toggle('switch-on')

     } else if (item.classList.contains('switch-two')) {
      item.classList.toggle('switch-on')
     }else if (item.classList.contains('switch-three')) {
      item.classList.toggle('switch-on')
    }
  })
})
}

export { gameVolume, dayTime};

