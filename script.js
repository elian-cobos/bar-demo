// Slider Hero
const images = document.querySelectorAll('.slider img');
let current = 0;

function nextSlide() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

images[0].classList.add('active');
setInterval(nextSlide, 5000);

// Reseñas (puedes añadir más)
const reviews = [
  {
    name: "María López",
    text: "¡Todo estaba delicioso! El servicio es excelente y el ambiente muy agradable. Volveremos sin duda.",
    stars: "★★★★★",
    date: "Hace 2 semanas"
  },
  {
    name: "John Smith",
    text: "Best British breakfast on the coast! Very friendly staff and generous portions.",
    stars: "★★★★☆",
    date: "Hace 1 mes"
  },
  {
    name: "Carlos Ruiz",
    text: "La paella estaba espectacular. Uno de los mejores restaurantes de Benalmádena.",
    stars: "★★★★★",
    date: "Hace 3 semanas"
  }
];

const container = document.getElementById('reviewsContainer');

reviews.forEach(review => {
  const card = document.createElement('div');
  card.className = 'review-card';
  card.innerHTML = `
    <div class="stars">${review.stars}</div>
    <p>"${review.text}"</p>
    <strong>${review.name}</strong><br>
    <small>${review.date}</small>
  `;
  container.appendChild(card);
});

// Scroll automático suave de reseñas
setInterval(() => {
  container.scrollBy({ left: 370, behavior: 'smooth' });
}, 4000);
