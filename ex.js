const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
const dotsNav = document.querySelector('.carousel-dots');

let currentSlide = 0;

// Criar bolinhas dinamicamente
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);

// Função para atualizar carrossel
function updateCarousel(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentSlide = index;
}

// Navegação com botões
nextButton.addEventListener('click', () => {
  let index = currentSlide + 1;
  if (index >= slides.length) index = 0;
  updateCarousel(index);
});

prevButton.addEventListener('click', () => {
  let index = currentSlide - 1;
  if (index < 0) index = slides.length - 1;
  updateCarousel(index);
});

// Navegação com bolinhas
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => updateCarousel(index));
});
