import addCart, { myProducts, products} from './utils.js'

let product;
const url = window.location.search;
const searchParams = new URLSearchParams(url);
const nameQueryParam = searchParams.get('name')
const btncar = document.getElementById('carrito');
searchProducts()
renderProduct()
btncar.addEventListener('click', (e) => {
  e.preventDefault()
  addProductCart()
})

function searchProducts() {
  product = products.find((item) => nameQueryParam === item.name)
  console.log(product)
}

function renderProduct() {
  const title = document.getElementById('title')
  const price = document.getElementById('precio')
  const material = document.getElementById('material')
  const category = document.getElementById('category')
  const img = document.getElementById('img')

  title.textContent = product.name

  price.textContent = 'Precio: ' + product.price
  material.textContent = 'Material: ' + product.material
  category.textContent = 'Categoría: ' + product.category
  img.setAttribute('src', product.imgUrl)

}
function addProductCart() {
  let cart = myProducts;
  cart.push(product);
  addCart(cart)
}



const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", () => {
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }
});



