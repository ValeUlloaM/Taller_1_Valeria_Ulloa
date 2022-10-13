const products = [

    {
        imgUrl: "./shop-images/anillo1.png",
        name: "Carita",
        category: "Anillos",
        price: "$15.000",
        material: "Rodio"
    },

    {
        imgUrl: "./shop-images/collar1.png",
        name: "Ancla",
        category: "Collares",
        price: "$25.000",
        material: "Acero"
    },

    {
        imgUrl: "./shop-images/ear1.png",
        name: "Grecia",
        category: "Earcuffs",
        price: "$20.000",
        material: "Acero"
    },

    {
        imgUrl: "./shop-images/anillo2.png",
        name: "Margarita",
        category: "Anillos",
        price: "$15.000",
        material: "Rodio"
    },

    {
        imgUrl: "./shop-images/collar2.png",
        name: "Arito",
        category: "Collares",
        price: "$25.000",
        material: "Acero"
    },

    {
        imgUrl: "./shop-images/ear2.png",
        name: "Bolitas",
        category: "Earcuffs",
        price: "$15.000",
        material: "Rodio"
    },

    {
        imgUrl: "./shop-images/pulsera1.png",
        name: "Arito",
        category: "Pulseras",
        price: "$20.000",
        material: "Acero"
    },

    {
        imgUrl: "./shop-images/anillo3.png",
        name: "Corazones",
        category: "Anillos",
        price: "$15.000",
        material: "Rodio"
    },

    {
        imgUrl: "./shop-images/collar3.png",
        name: "Costelación",
        category: "Collares",
        price: "$20.000",
        material: "Acero"
    },

    {
        imgUrl: "./shop-images/ear3.png",
        name: "Ondas",
        category: "Earcuffs",
        price: "$20.000",
        material: "Acero"
    },

    {
        imgUrl: "./shop-images/pulsera2.png",
        name: "Colorcitos",
        category: "Pulseras",
        price: "$20.000",
        material: "Plástico"
    },

    {
        imgUrl: "./shop-images/anillo4.png",
        name: "Mariposita",
        category: "Anillos",
        price: "$15.000",
        material: "Rodio"
    },

    {
        imgUrl: "./shop-images/collar4.png",
        name: "Solecito",
        category: "Collares",
        price: "$25.000",
        material: "Acero"
    },

    {
        imgUrl: "./shop-images/ear4.png",
        name: "Fresita",
        category: "Earcuffs",
        price: "$15.000",
        material: "Rodio"
    },

    {
        imgUrl: "./shop-images/anillo5.png",
        name: "Círculo",
        category: "Anillos",
        price: "$15.000",
        material: "Rodio"
    },

    {
        imgUrl: "./shop-images/collar5.png",
        name: "Cuchillo",
        category: "Collares",
        price: "$25.000",
        material: "Acero"
    },

    {
        imgUrl: "./shop-images/ear5.png",
        name: "Perlitas set",
        category: "Earcuffs",
        price: "$70.000",
        material: "Acero"
    },

    {
        imgUrl: "./shop-images/anillo6.png",
        name: "Cadenitas",
        category: "Anillos",
        price: "$15.000",
        material: "Plástico"
    },

    {
        imgUrl: "./shop-images/collar6.png",
        name: "Arcoíris",
        category: "Collares",
        price: "25.000",
        material: "Acero"
    },

    {
        imgUrl: "./shop-images/ear6.png",
        name: "Diosita",
        category: "Earcuffs",
        price: "20.000",
        material: "Acero"
    },

]


const productSection = document.getElementById('products')
displayProducts()

function displayProducts() {
    products.forEach(product => {
        const card = document.createElement('article')
        card.classList.add('card')
        card.innerHTML =
        `
        <img src="${product.imgUrl}" class="card-img-top">
         <div class="card-body">
              <h5 class="name">${product.name}</h5>
              <p class="price">${product.price}</p>
        </div>
        `
        productSection.append(card)
    });
}