// Управление слайдером партнеров
document.addEventListener('DOMContentLoaded', function() {
  const sliderTracks = document.querySelectorAll('.slider-track');
  
  // Функция для создания бесшовного слайдера
  function initSeamlessSlider() {
    sliderTracks.forEach(track => {
      const content = track.querySelector('.slider-content');
      const items = Array.from(content.children);
      
      // Очищаем контент от дубликатов (на случай перезапуска)
      content.innerHTML = '';
      
      // Добавляем оригинальные элементы
      items.forEach(item => {
        content.appendChild(item.cloneNode(true));
      });
      
      // Добавляем дубликаты для бесшовности
      items.forEach(item => {
        const clone = item.cloneNode(true);
        content.appendChild(clone);
      });
      
      // Добавляем еще одни дубликаты для плавности
      items.forEach(item => {
        const clone = item.cloneNode(true);
        content.appendChild(clone);
      });
    });
  }

  // Инициализация слайдера
  initSeamlessSlider();
  
  // Пауза при наведении
  sliderTracks.forEach(track => {
    track.addEventListener('mouseenter', function() {
      const content = this.querySelector('.slider-content');
      content.style.animationPlayState = 'paused';
    });
    
    track.addEventListener('mouseleave', function() {
      const content = this.querySelector('.slider-content');
      content.style.animationPlayState = 'running';
    });
  });
});