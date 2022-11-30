
import addCart, {myProducts} from './utils.js'

let cart = myProducts
displayCart(cart)

function displayCart(arrayProducts) {
    const productSection = document.getElementById('cart')
    productSection.innerHTML = '';
    console.log('hola');

    arrayProducts.forEach((product) => {
        const card = document.createElement('article')
        const btnEliminate = document.createElement('button');
        btnEliminate.className='eliminarBtn'
        btnEliminate.innerHTML = 'Eliminar del Carrito';
        card.classList.add('card')
        card.innerHTML =
        ` <a href="./details.html?name=${product.name}">
        <img src="${product.imgUrl}" class="card-img-top">
         <div class="card-body">
              <h5 class="name">${product.name}</h5>
              <p class="price">${product.price}</p>
        </div>
        </a>
        `
        btnEliminate.addEventListener('click', (e)=>{
            let indexCart = cart.findIndex(cartElement => cartElement.name === product.name)
            cart.splice(indexCart, 1);
            addCart(cart)
            displayCart(cart)
        })
        card.appendChild(btnEliminate)
        productSection.append(card)
       
    });
}