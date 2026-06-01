const burger = document.querySelector('.burger');

if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    if (burger) {
      burger.setAttribute('aria-expanded', 'false');
    }
  });
});

document.querySelectorAll('[data-accordion="single"]').forEach((accordion) => {
  accordion.querySelectorAll('details').forEach((details) => {
    details.addEventListener('toggle', () => {
      if (!details.open) {
        return;
      }

      accordion.querySelectorAll('details[open]').forEach((openedDetails) => {
        if (openedDetails !== details) {
          openedDetails.open = false;
        }
      });
    });
  });
});

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Форма пока не отправляется. Нужно подключить обработчик.');
  });
});
