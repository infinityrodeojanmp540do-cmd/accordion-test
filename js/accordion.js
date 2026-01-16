document.querySelectorAll('.c-accordion__title').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.c-accordion__item');
    const content = item.querySelector('.c-accordion__content');
    const isOpen = item.classList.contains('is-open');

    button.setAttribute('aria-expanded', !isOpen);

    if (!isOpen) {
      // 開く
      content.hidden = false;
      const height = content.scrollHeight;
      content.style.height = height + 'px';

      item.classList.add('is-open');
    } else {
      // 閉じる
      content.style.height = content.scrollHeight + 'px';

      requestAnimationFrame(() => {
        content.style.height = '0px';
      });

      item.classList.remove('is-open');

      content.addEventListener(
        'transitionend',
        () => {
          content.hidden = true;
        },
        { once: true }
      );
    }
  });
});