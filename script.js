import { initNewsSlider } from './slider_news.js';
import { initAboutSlider } from './slider_about.js';
import { initShemaAnim } from './shema-anim.js';
import { initYoutubeOpen } from './youtube.js';


document.addEventListener('DOMContentLoaded', () => {
    try {
        initNewsSlider();
        initAboutSlider();
        initShemaAnim();
        initYoutubeOpen();
        document.getElementById("year").textContent = new Date().getFullYear();
        console.log('Все скрипты загружены успешно');
    } catch (error) {
        console.error('Ошибка загрузки скриптов:', error);
    }
});