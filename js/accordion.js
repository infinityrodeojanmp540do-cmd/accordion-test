

document.querySelectorAll('.js-accordion').forEach((accordion, accIndex) => {
  accordion.querySelectorAll('.js-accordion-item').forEach((item, index) => {
    const summary = item.querySelector('.js-accordion-trigger');
    const content = item.querySelector('.js-accordion-content');

    const contentId = `accordion-${accIndex}-${index}`;
    content.id = contentId;

    summary.setAttribute('aria-controls', contentId);
    summary.setAttribute(
      'aria-expanded',
      item.hasAttribute('open')
    );
  });
});