import {getProducts, getProductsCart} from './firebase.js'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { authentication, database } from './firebase.js';
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"

const myList = await getProducts();
const productsCart = await getProductsCart();

export const products = myList;
export const myProducts = productsCart;

let userActual;
onAuthStateChanged(authentication, (user) => {
  userActual = user;
});

async function addCart(cart) {

    if (userActual) {
      let userRef = doc(database, 'users', userActual.uid);
      await updateDoc(userRef, {
        carrito: cart
      })
    } else {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
  
  export default addCart;
