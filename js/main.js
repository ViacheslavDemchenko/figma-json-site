const burger = document.querySelector('.burger');

if (burger) {
  burger.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });
}

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
  });
});

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Форма пока не отправляется. Нужно подключить обработчик.');
  });
});
