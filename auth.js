
import {newUser, logIn, signOutUser} from './firebase.js'
// HEADER

// Registrarse e iniciar sesion

export function reValidateUser (userIsSignedIn){

    if(userIsSignedIn){
        signButton.setAttribute('disabled', true)
        logButton.setAttribute('disabled', true)
        logOutButton.removeAttribute('disabled')
        registerButton.style.display = 'none'
        iniciarSesion.style.display = 'none'



    }else{
        signButton.removeAttribute('disabled')
        logButton.removeAttribute('disabled')
        logOutButton.setAttribute('disabled',true)
}
}

// MENU DESPLEGABLE

const iconoMenu = document.querySelector('#btn-usuario'),
      menu = document.querySelector('.cont-menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('activeMenu');
    document.body.classList.toggle('opacity');
    console.log('opacity')

  
});

// Registrarse e iniciar sesion

const signButton = document.getElementById('sign')
signButton.addEventListener('click', (e) => signUp(e))

const logButton = document.getElementById('login')
logButton.addEventListener('click', (e) => logInUser(e))

const logOutButton = document.getElementById('cerrar-sesion')
logOutButton.addEventListener('click', (e) => logOut(e))

const registerButton = document.getElementById('abrir-registro')
registerButton.addEventListener('click', (e) => activeRegister(e))

const closedButton = document.getElementById('cerrar-sesion')
closedButton.addEventListener('click', (e) => activeLogIn(e))

const createUser = document.getElementById('sign')
createUser.addEventListener('click', (e) => signOutAfterRegister(e))

function signUp(e){
    e.preventDefault()
    const email = document.getElementById('info-correo')?.value
    const password = document.getElementById('info-constraseña')?.value
    const confirm = document.getElementById('confirmar')?.value
    
    
    if(password == confirm) {
        newUser(email, password)
        
    } else {
        alert('Las constraseñas no coinciden')
    }


}


function logInUser(e){
    e.preventDefault()
    const email = document.getElementById('correo')?.value
    const password = document.getElementById('constraseña')?.value

    logIn(email,password)
}

function logOut(e){
    e.preventDefault()
    signOutUser()
    
    
}

const registroUsuario = document.getElementById('registro')
const iniciarSesion = document.getElementById('inicio')
const subscribe = document.getElementById('subscribe')


function activeRegister(e) {
    registroUsuario.style.display = 'block'
    iniciarSesion.style.display = 'none'
    registerButton.style.display = 'none'
    logOutButton.style.display = 'none'
    console.log("funciono")
  
}

function activeLogIn(e) {
    iniciarSesion.style.display = 'block'
    registerButton.style.display = 'block'

}

function signOutAfterRegister(e){
    registroUsuario.style.display = 'none'
    logOutButton.style.display = 'block'
    logOutButton.removeAttribute('disabled')
}


