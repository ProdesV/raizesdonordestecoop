const track = document.querySelector('.carousel-track');
const produtos = Array.from(track.children);
const dots = Array.from(document.querySelectorAll('.dot'));

let currentIndex = 0;

function updateCarousel(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// adicionar clique nas bolinhas
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel(currentIndex);
  });
});

// auto slide opcional
setInterval(() => {
  currentIndex = (currentIndex + 1) % produtos.length;
  updateCarousel(currentIndex);
}, 4000);

// iniciar
updateCarousel(currentIndex);
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active'); // fecha o menu
  });
});
