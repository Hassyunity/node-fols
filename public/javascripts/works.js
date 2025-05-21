const carousel = document.getElementById('carousel');
const cardWidth = 340; // largeur d'une carte + marge
let scrollX = 0;

function maxScroll() {
  return carousel.scrollWidth - carousel.parentElement.clientWidth;
}

function scrollRight() {
  scrollX += cardWidth;
  if (scrollX > maxScroll()) {
    scrollX = 0; // Retour au début du carrousel
  }
  carousel.style.transform = `translateX(-${scrollX}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialiser le carrousel pour afficher le premier projet
  scrollX = 0;
  carousel.style.transform = `translateX(-${scrollX}px)`;
});
