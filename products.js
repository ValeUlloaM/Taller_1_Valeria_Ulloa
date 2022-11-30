import {products} from './utils.js'

let shop = products;

console.log(products); 
let filteredProducts  = [];
let keyword2 =  "" ;
let keyword =  "" ;
let category = "all";
let material = "material";
let price = "price";


displayProducts(shop);
displayCategories();
displayPrice();
displayMaterial();

// Crear Listeners
const keywordElement = document.getElementById('keyword')
keywordElement.addEventListener('change', () => handleKeyword(keywordElement));

const keywordElement2 = document.getElementById('keyword2')
keywordElement2.addEventListener('change', () => handleKeyword2(keywordElement2));

const categoryElement = document.getElementById('category')
categoryElement.addEventListener('change', () => handleCategories(categoryElement));

const priceElement = document.getElementById('price')
priceElement.addEventListener('change', () => handlePrice (priceElement));

const materialElement = document.getElementById('material')
materialElement.addEventListener('change', () => handleMaterial (materialElement));

// Metodos de display
function displayProducts(arrayProducts) {
    const productSection = document.getElementById('products')
    productSection.innerHTML = '';
    console.log('hola');

    arrayProducts.forEach((product) => {
        const card = document.createElement('article')
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
        productSection.append(card)
    });
}

function displayCategories(){
    const categoriesArray = [];
    shop.forEach((product) => {
        if(!categoriesArray.includes(product.category)) {
            categoriesArray.push(product.category);
        }
    });

    const dropdown = document.getElementById('category');

    categoriesArray.forEach((category) => {
        const optionElement = document.createElement('option');
        optionElement.value = category;
        optionElement.textContent = category;

        dropdown.append(optionElement);
    })

    console.log(categoriesArray);
}

function displayPrice(){
    const priceArray = [];
    
    shop.forEach((product) => {
        if(!priceArray.includes(product.price)) {
            priceArray.push(product.price)
        }
    });

    const dropdown = document.getElementById('price')

    priceArray.forEach((price) => {
        const optionElement = document.createElement('option')
        optionElement.value = price
        optionElement.textContent = price

        dropdown.append(optionElement)
    })
    console.log(priceArray)
}

function displayMaterial(){
    const materialArray = [];
    
    shop.forEach((product) => {
        if(!materialArray.includes(product.material)) {
            materialArray.push(product.material)
        }
    });

    const dropdown = document.getElementById('material')

    materialArray.forEach((material) => {
        const optionElement = document.createElement('option')
        optionElement.value = material
        optionElement.textContent = material

        dropdown.append(optionElement)
    })

    console.log(materialArray)
}

// Metodos de eventos
function handleKeyword(input) {
     keyword = input.value;
     filterByAllFilters();
    displayProducts(filteredProducts);
}
function handleKeyword2(input) {
    keyword2 = input.value;
    filterByAllFilters();
   displayProducts(filteredProducts);
}

function handleCategories(input){
    category = input.value;
    filterByAllFilters();
    displayProducts(filteredProducts);

}

function handlePrice(input){
    price = input.value;
    filterByAllFilters();
    displayProducts(filteredProducts);

}

function handleMaterial(input){
    material = input.value;
    filterByAllFilters();
    displayProducts(filteredProducts);

}

function filterByAllFilters(){
 filteredProducts = shop.filter((product)=> { 

    const hasKeyword = 
    product.name.toLowerCase().includes(keyword.toLowerCase())|| 
    product.category.toLowerCase().includes(keyword.toLowerCase());

    const hasKeyword2 = 
    product.name.toLowerCase().includes(keyword2.toLowerCase())|| 
    product.category.toLowerCase().includes(keyword2.toLowerCase());

    const isCategory = product.category === category || category === 'all';

    const isMaterial = product.material === material || material === 'material'

    const isPrice = product.price === price || price === 'price'

    return   hasKeyword2  && hasKeyword  && isCategory  && isMaterial  && isPrice
    
})

}