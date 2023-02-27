import {createUser, getUsers} from './api'

export const renderHeader = () => {
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
          <input type="text" class="input username" name="name" required="" autofocus="">
        </div>

        <div class="form-field">
          <label for="email-signup">Email</label>
          <input type="email" class="input email-signup" name="email" autocomplete="email" required="">
        </div>

        <div class="form-field">
          <label for="password-signup">Password</label>
          <input type="password" class="input password-signup" name="password" autocomplete="new-password" required="" minlength="5" aria-autocomplete="list">
        </div>

        <div class="form-field condition-password active">
          <label for="password-confirm">Confirm password</label> <input type="password" class="input password-confirm" name="password-confirm" autocomplete="new-password" required="" minlength="5">
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
const passConfirm = document.querySelector(".password-confirm") as HTMLInputElement;
const wrapperLogin = document.querySelector('.wrapper-login') as HTMLElement

headerUser?.addEventListener('click', () => {
  wrapperLogin.classList.remove('active')
  signInClick()
})

wrapperLogin.addEventListener('click', (e) => {
  if ((<HTMLElement>e.target).classList.contains('wrapper-login')) {
    wrapperLogin.classList.add('active')
  }
})

export interface Iusers {
  username: string,
  email: string,
  password: string,
}

function resetstyles() {
  email.value = ''
  username.value = ''
  pass.value = ''
  passConfirm.value = ''
  email.style.border = '1px solid #000'
  email.style.border = '1px solid #000'
  pass.style.border = '1px solid #000'
  passConfirm.style.border = '1px solid #000'
  email.classList.remove('valid')
  username.classList.remove('valid')
  pass.classList.remove('valid')
  passConfirm.classList.remove('valid')
}

function signOnClick() {
  signIn.classList.remove('active')
  conditionName.classList.remove('active')
  conditionPassword.classList.remove('active')
  signOn.classList.add('active')
  formBtn.innerHTML = 'Sign on'
  formBtn.setAttribute('data', 'sign-on')
  resetstyles()
}

signOn.addEventListener('click', () => {
  signOnClick()
})

function signInClick() {
  signIn.classList.add('active')
  conditionName.classList.add('active')
  conditionPassword.classList.add('active')
  signOn.classList.remove('active')
  formBtn.innerHTML = 'Sign in'
  formBtn.setAttribute('data', 'sign-in')
  resetstyles()
}
signIn.addEventListener('click', () => {
  signInClick()
})

const nameReg = /^[a-z0-9_-]{3,16}$/;
const emailReg = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;

async function conditionSignOn() {

  const set = await createUser(<Iusers>{
    email: email.value,
    username: username.value,
    password: pass.value,
  }
  )
  return set
}

formBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const emailIn = email.value.trim();
  const usernameIn = username.value.trim()
  const passIn = pass.value.trim()
  const passConfirmIn = passConfirm.value.trim()
  if (formBtn.getAttribute('data') === 'sign-on') {
    
  if (!emailReg.test(emailIn)) {
    email.style.border = '1px solid #f00'
    email.classList.remove('valid')
  } else {
    email.classList.add('valid')
    email.style.border = '1px solid #000'
    }

    if (!nameReg.test(usernameIn) && usernameIn === '') {
      username.style.border = '1px solid #f00'
      username.classList.remove('valid')
    } else {
      username.style.border = '1px solid #000'
      username.classList.add('valid')
    }

    if (passIn != '' && passConfirmIn != '' && passIn === passConfirmIn) {
      pass.classList.add('valid')
      passConfirm.classList.add('valid')
      pass.style.border = '1px solid #000'
      passConfirm.style.border = '1px solid #000'
    } else {
      pass.style.border = '1px solid #f00'
      passConfirm.style.border = '1px solid #f00'
      pass.classList.remove('valid')
      passConfirm.classList.remove('valid')
    }
  }

  if (email.classList.contains('valid') &&
    username.classList.contains('valid') &&
    pass.classList.contains('valid') &&
    passConfirm.classList.contains('valid')) {
    conditionSignOn()
    resetstyles()
    alert('вы зарегистрировались')
    wrapperLogin.classList.add('active')
  }
})

//--------------Вход---------------------------
formBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  if (formBtn.getAttribute('data') === 'sign-in') { 

    if (email.value != '') {
      const user = (await getUsers()).item.find((el: Iusers) => el.email === email.value);
      if (user != undefined) {
        if (user.password != undefined && pass.value === user.password) {
          const headerText = document.querySelector('.header-text') as HTMLElement;
          const name = user.username
          headerText.innerHTML = `Hello: ${name}`
          wrapperLogin.classList.add('active')
          headerUser?.classList.add('active')
          const json = JSON.stringify(user.username);
          localStorage.setItem('user', json)
        } else {
          alert('не верный логин или пароль')
        }
      }
      
    }
  }
})

export function nameUser() {
  const headerText = document.querySelector('.header-text') as HTMLElement;
  if (localStorage.getItem('user')) {
    const a = localStorage.getItem('user')
    headerText.innerHTML = `Helo: ${a}`
    wrapperLogin.classList.add('active')
    headerUser?.classList.add('active')
  } 
  
}
nameUser()