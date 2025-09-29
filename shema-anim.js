
export function initShemaAnim() {
  const scheme = document.querySelector('.block__scheme');
  if (!scheme) return;

  // собираем пары: иконка + соответствующий текст по индексу
  const icons = Array.from(scheme.querySelectorAll('.card__scheme .img__item_sheme'));
  const texts = Array.from(scheme.querySelectorAll('.text__scheme .shema__text'));

  // если разметка не парами, То best-effort: сопоставит по порядку
  const items = icons.map((icon, i) => {
    return {
      icon,
      text: texts[i] || null
    };
  });

  // подготовка анимации
  items.forEach(({icon, text}) => {
    icon.classList.add('sheme-anim__icon');
    if (text) text.classList.add('sheme-anim__text');
  });

  const arrows = Array.from(scheme.querySelectorAll('.arrow__right_cheme'));
  arrows.forEach(a => a.classList.add('sheme-anim__arrow'));

  // IntersectionObserver для запуска анимации при появлении
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // запуск последовательой анимацию
        items.forEach(({icon, text}, idx) => {
          const delay = idx * 500; // ms
          icon.style.transitionDelay = `${delay}ms`;
          icon.classList.add('sheme-anim__in');
          if (text) {
            text.style.transitionDelay = `${delay + 100}ms`;
            text.classList.add('sheme-anim__in');
          }
        });

        arrows.forEach((a, i) => {
          a.style.transitionDelay = `${i * 80 + 100}ms`;
          a.classList.add('sheme-anim__in');
        });

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  observer.observe(scheme);

  // hover micro-interactions
  items.forEach(({icon, text}) => {
    icon.addEventListener('mouseenter', () => icon.classList.add('sheme-anim__hover'));
    icon.addEventListener('mouseleave', () => icon.classList.remove('sheme-anim__hover'));
    if (text) {
      icon.addEventListener('focus', () => icon.classList.add('sheme-anim__hover'));
      icon.addEventListener('blur', () => icon.classList.remove('sheme-anim__hover'));
    }
  });
}
