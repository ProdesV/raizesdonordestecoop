// Menu hamburguer
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  console.log('Botão clicado!');
  menu.classList.toggle('active');
});


toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Carrossel com scroll automático opcional
const carousel = document.querySelector('.carousel-container');

let scrollAmount = 0;
setInterval(() => {
  if (carousel) {
    carousel.scrollBy({ left: 350, behavior: 'smooth' });
    // reset no final
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }
}, 4000);
