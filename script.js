/* HEADER SCROLL */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 100){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }

});

/* SLIDER */

const images = document.querySelectorAll(".slider img");

let current = 0;

images[0].classList.add("active");

function nextSlide(){

  images[current].classList.remove("active");

  current = (current + 1) % images.length;

  images[current].classList.add("active");

}

setInterval(nextSlide, 5000);

/* RESEÑAS */

const reviews = [

  {
    name:"María López",
    text:"¡Todo estaba delicioso! El servicio es excelente y el ambiente muy agradable. Volveremos sin duda.",
    stars:"★★★★★",
    date:"Hace 2 semanas"
  },

  {
    name:"John Smith",
    text:"Best British breakfast on the coast! Very friendly staff and generous portions.",
    stars:"★★★★★",
    date:"Hace 1 mes"
  },

  {
    name:"Carlos Ruiz",
    text:"La paella estaba espectacular. Uno de los mejores restaurantes de Benalmádena.",
    stars:"★★★★★",
    date:"Hace 3 semanas"
  }

];

const container = document.getElementById("reviewsContainer");

reviews.forEach(review => {

  const card = document.createElement("div");

  card.classList.add("review-card");

  card.innerHTML = `
    <div class="stars">${review.stars}</div>
    <p>${review.text}</p>
    <br>
    <strong>${review.name}</strong>
    <br>
    <small>${review.date}</small>
  `;

  container.appendChild(card);

});

setInterval(() => {

  container.scrollBy({
    left:375,
    behavior:"smooth"
  });

}, 4000);
