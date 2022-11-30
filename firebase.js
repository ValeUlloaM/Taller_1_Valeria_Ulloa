 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getFirestore, collection, getDocs,getDoc, setDoc, doc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDabkfzeh7oE6UBvLP41wteQEbCIqubXg8",
   authDomain: "caotico-firebase.firebaseapp.com",
   projectId: "caotico-firebase",
   storageBucket: "caotico-firebase.appspot.com",
   messagingSenderId: "158905552590",
   appId: "1:158905552590:web:ed1c3486205345a3520a9f"
 };

 import {reValidateUser} from './auth.js'

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export const authentication = auth;
export const database = db;

 export function newUser(email, password){
    createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    let newUser = {
      correo: email,
    carrito: []
    }
    const docRef = await setDoc(doc(db, "users", user.uid), newUser);
  })
  .catch((error) => {
    const errorMessage = error.message;

    alert(errorMessage)
  });
 }

 console.log("hola")

 export function logIn(email, password){
 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}

export function signOutUser(){
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  console.log("Sesion cerrada")
}).catch((error) => {
  // An error happened.
  console.log("Error al cerrar sesion", error.message)
});
}
let ActualUser;
onAuthStateChanged(auth, (user) => {
  ActualUser=user;
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      validateAdmin( uid);
      reValidateUser(true)
    } else {
        reValidateUser(false)
        validateAdmin("none");
    }
  });

 const adminAcess = document.getElementById("access-admin");

//Check if user is admin 
function validateAdmin(user) { 

  if (user === "yNUWOmvJCThcRQ4zsrqA2pg1wmJ2") {
        adminAcess.style.display = "block";
      console.log("is admin")
  } else { 
    adminAcess.style.display = "none";
      console.log("no admin")
  }
}


export async function getProducts(){
const querySnapshot = await getDocs(collection(db, "products"));
const mappedArray = [];
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  mappedArray.push(doc.data())
});
return mappedArray;
}

export async function getProductsCart(){
  if (ActualUser){
    const docRef = doc(db, "users", ActualUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const mappedArray = [];
      docSnap.data().carrito.forEach((doc) => {
        mappedArray.push(doc)
      });
      return mappedArray;
    } else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
    }
    
    
  } else {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart==null || cart == undefined) {
    return []
    } else {
      return cart
    }
  }
  
  }


