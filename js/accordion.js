document.querySelectorAll('.js-accordion').forEach((item) => {
  const trigger = item.querySelector('.js-accordion-trigger');
  const content = item.querySelector('.js-accordion-content');
  const DURATION = 300; // CSSのtransition時間(ms)

  trigger.addEventListener('click', (e) => {
    e.preventDefault();

    const isOpened = item.open;

    if (!isOpened) {
      /* ======================
         開く
         0px → px → auto
      ====================== */

      item.open = true;
      content.style.height = '0px';

      requestAnimationFrame(() => {
        const height = content.scrollHeight;
        content.style.height = height + 'px';

        let done = false;

        const finish = () => {
          if (done) return;
          done = true;
          content.style.height = 'auto';
        };

        content.addEventListener('transitionend', finish, { once: true });

        // transitionend が来なかった場合の保険
        setTimeout(finish, DURATION + 50);
      });

    } else {
      /* ======================
         閉じる
         auto → px → 0px
      ====================== */

      const height = content.scrollHeight;
      content.style.height = height + 'px';

      // レイアウト確定
      content.offsetHeight;

      content.style.height = '0px';

      let done = false;

      const finish = () => {
        if (done) return;
        done = true;
        item.open = false;
      };

      content.addEventListener('transitionend', finish, { once: true });

      // transitionend が来なかった場合の保険
      setTimeout(finish, DURATION + 50);
    }
  });
});