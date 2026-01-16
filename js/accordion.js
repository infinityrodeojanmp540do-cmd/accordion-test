document.querySelectorAll('.c-accordion__title').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.c-accordion__item');
    const isOpen = item.classList.toggle('is-open');

    // aria 状態更新
    btn.setAttribute('aria-expanded', isOpen);
  });
});