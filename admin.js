import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, doc, setDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js"

const firebaseConfig = {
    apiKey: "AIzaSyDabkfzeh7oE6UBvLP41wteQEbCIqubXg8",
    authDomain: "caotico-firebase.firebaseapp.com",
    projectId: "caotico-firebase",
    storageBucket: "caotico-firebase.appspot.com",
    messagingSenderId: "158905552590",
    appId: "1:158905552590:web:ed1c3486205345a3520a9f"
  };
const imageProduct = 'img-product';

//Initialization
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const addProduct = document.getElementById("add-product")
addProduct.addEventListener("click", () => { 
   addNewProduct();
})

const nameInput = document.getElementById("name-input");
const categoryInput = document.getElementById("category-input");
const priceInput = document.getElementById("price-input");
const materialInput = document.getElementById("material-input");

let newProduct;

//Preguntar esto
function infoProduct() { 
    try {
        newProduct = {
            name: nameInput.value,
            categoryInput: categoryInput.value,
            priceInput: priceInput.value,
            materialInput: materialInput.value,
        
        }
    } catch (e) { 
        console.error("Error while adding new product")
    }
}


async function addNewProduct() { 
    try { 
        infoProduct();

        const imgInput = document.getElementById('img-new-product').files[0];
        const fileUrl = await addImageProduct(imgInput.name, imgInput);


        const docRef = await setDoc(doc(db, "products", newProduct.name), {
            name: newProduct.name,
            category: newProduct.categoryInput,
            price: newProduct.priceInput,
            material: newProduct.materialInput,
            imgUrl: fileUrl
        });

        nameInput.value = "";
        categoryInput.value = "";
        priceInput.value = "";
        materialInput.value = "";
    } catch (e) {
        console.error("Error adding element to new collection", e)
    }
}

async function addImageProduct(name, file) { 

    const storageReference = ref(storage, `${imageProduct}/${name}`);
    console.log(storageReference);

    try {
        await uploadBytes(storageReference, file)
        const url = await getDownloadURL(storageReference);
        return url
    } catch (err) { 
        console.error("Error uploading imgage: " + err.message)
    }

}