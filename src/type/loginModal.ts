const renderHeader = () => {
  const block = `
  <div class="header-text">Hello</div>
  <div class="header-user"></div>
  `
  const saction = <HTMLElement>document.createElement('div');
  saction.classList.add('header')
  saction.innerHTML = block;
  document.body.appendChild(saction);
}
renderHeader()

const renderWrapperLogin = () => {
  const block = `
  <div class="wrapper-login active">
    <div class="login">

      <div class="sign">
        <div class="sign-in active">Singl in</div>
        <div class="sign-on">Singl on</div>
      </div>

      <form class="wrapper__form-fiel">
        <div class="form-field condition-name active">
          <label for="name">Name</label>
          <input type="text" class="username" name="name" required="" autofocus="">
        </div>

        <div class="form-field">
          <label for="email-signup">Email</label>
          <input type="email" class="email-signup" name="email" autocomplete="email" required="">
        </div>

        <div class="form-field">
          <label for="password-signup">Password</label>
          <input type="password" class="password-signup" name="password" autocomplete="new-password" required="" minlength="5" aria-autocomplete="list">
        </div>

        <div class="form-field condition-password active">
          <label for="password-confirm">Confirm password</label> <input type="password" id="password-confirm" name="password-confirm" autocomplete="new-password" required="" minlength="5">
        </div>

        <button class="btn-active btn-reset form__btn"  data="sign-in" type="submit">Sign in</button>
      </form>
    </div>
  </div>
  `

  const saction = <HTMLElement>document.createElement('div');
  saction.innerHTML = block;
  document.body.appendChild(saction);
}
renderWrapperLogin()


const headerUser = document.querySelector('.header-user')
const signIn = document.querySelector('.sign-in') as HTMLElement
const signOn = document.querySelector('.sign-on') as HTMLElement
const conditionName = document.querySelector('.condition-name') as HTMLElement
const conditionPassword = document.querySelector('.condition-password') as HTMLElement
const formBtn = document.querySelector('.form__btn') as HTMLButtonElement
const email = document.querySelector(".email-signup") as HTMLInputElement;
const username = document.querySelector(".username") as HTMLInputElement;
const pass = document.querySelector(".password-signup") as HTMLInputElement;
const wrapperLogin = document.querySelector('.wrapper-login') as HTMLElement

headerUser?.addEventListener('click', () => {
  wrapperLogin.classList.remove('active')
})

wrapperLogin.addEventListener('click', (e) => {
  if ((<HTMLElement>e.target).classList.contains('wrapper-login')) {
    wrapperLogin.classList.add('active')
  }
})

// interface users {
//   userName: string,
//   email: string,
//   password: string,
// }

signOn.addEventListener('click', () => {
  signIn.classList.remove('active')
  conditionName.classList.remove('active')
  conditionPassword.classList.remove('active')
  signOn.classList.add('active')
  formBtn.innerHTML = 'Sign on'
  formBtn.setAttribute('data', 'sign-on')
})

signIn.addEventListener('click', () => {
  signIn.classList.add('active')
  conditionName.classList.add('active')
  conditionPassword.classList.add('active')
  signOn.classList.remove('active')
  formBtn.innerHTML = 'Sign in'
  formBtn.setAttribute('data', 'sign-in')
})

function conditionSignOn() {

  const user = {
    email: email.value ,
    username: username.value,
    password: pass.value,
  }

  const json = JSON.stringify(user);
  localStorage.setItem(username.value, json)
  console.log(localStorage.getItem('username'))
}

formBtn.addEventListener('click', () => {
  if (formBtn.getAttribute('data') === 'sign-on') {
    conditionSignOn()
  }
})