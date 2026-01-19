
document.querySelectorAll('.js-accordion').forEach((item) => {
  const trigger = item.querySelector('.js-accordion-trigger');
  const content = item.querySelector('.js-accordion-content');

  trigger.addEventListener('click', () => {
    // コンテンツが開いているかどうかの判定
    const isOpened = item.classList.toggle('is-opened');
    
    if (isOpened) {
      // --- 開く時の処理 ---
      // 実際の高さを取得する
      const height = content.scrollHeight;
      // heightを0から数値に設定
      content.style.height = height + 'px';
    } else {
      // --- 閉じる時の処理 ---
      // 高さを0に戻す
      content.style.height = content.scrollHeight + 'px'; // ★ 現在値を確定

      requestAnimationFrame(() => {
        content.style.height = '0px'; // ★ 差分ができるので transition 発火
      });    }
  });


});
