
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  console.log('Botão clicado!');
  menu.classList.toggle('active');
});


toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

