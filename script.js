

// HEADER

function cambioNav(){

    const navBar = document.getElementById("nav");
    let scroll = window.scrollY;

    if(scroll < 200){
        navBar.classList.remove("fondoNav");
    }else{
        navBar.classList.add("fondoNav");
    }
}

window.addEventListener("scroll", cambioNav);


// MAIN

const carousel = new bootstrap.Carousel('#carouselExampleIndicators')

// CATEGORIAS

function hover(element) {
    element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
  }
  
function unhover(element) {
    element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
}




// FRASE MOTIVACIONAL

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  });

