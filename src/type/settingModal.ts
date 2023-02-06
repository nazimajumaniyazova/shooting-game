const btnSettings = document.querySelector('.settings') as HTMLElement
// const player = document.querySelector('.player') as HTMLElement
const imgPlayPause = document.querySelector('.img-play-pause') as HTMLImageElement;
const audio = document.querySelector('.audio') as HTMLAudioElement;
const volume = document.querySelector('.volmue') as HTMLInputElement;
const btnPlay = document.querySelector('.play-pause') as HTMLElement

audio.volume = 0.3

// const renderSettings = async () => {
//  const html = `
//  <div class="wrapper-modal active">
//  <div class="wrapper-modal__settings">

//    <div class="player">
//      <audio class="audio" autoplay="autoplay" src="#"></audio>

//      <div class="box-player-wrapper">
//        <div class="box-player">
//          <div class="btn play"><img class="img-play-pause" src="./assets/play.png" alt=""></div>

//          <div class="volume-box">
//            <div class="img-volume"><img class="reg-volume" src="./assets/volume.png" alt=""></div>
//            <input class="volmue" type="range" value="0.3" min="0" max="1" step="0.1">
//          </div>

//        </div>
//      </div>
//    </div>

//  </div>
// </div>
// `
//   const saction = <HTMLElement>document.createElement('div');
//   saction.classList.add('wrapper-modal')
//     saction.innerHTML = html;
//     document.body.appendChild(saction);
// }


volume.addEventListener('input', () => {
  const img = document.querySelector('.reg-volume') as HTMLImageElement;
  const data = volume.value;
  audio.volume = +data;
  if ( audio.volume === 0) {
    img.src = "./catalog-img/volumeFalse.png"
  } else {
    img.src = "./catalog-img/volume.png"
  }
})

btnSettings?.addEventListener('click', () => {
  const wrapperModal = document.querySelector('.wrapper-modal')
  wrapperModal?.classList.toggle('active')
  if (wrapperModal?.classList.contains('active')) {
    btnSettings.classList.add('active')
  } else {
    btnSettings.classList.remove('active')
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