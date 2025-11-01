import { initNewsSlider } from './slider_news.js';
import { initAboutSlider } from './slider_about.js';
import { initShemaAnim } from './shema-anim.js';
import { initYoutubeOpen } from './youtube.js';


function initProfileDropdown() {
    const profileContainer = document.querySelector('.profile-dropdown-container');
    const body = document.body;
    
    // Проверяем статус авторизации (здесь можно заменить на реальную проверку)
    function checkAuthStatus() {
        // Временная переменная для демонстрации
        // В реальном приложении здесь должна быть проверка токена/сессии
        return localStorage.getItem('userLoggedIn') === 'true';
    }
    
    // Обновляем отображение меню в зависимости от статуса авторизации
    function updateDropdownDisplay() {
        const isLoggedIn = checkAuthStatus();
        
        if (isLoggedIn) {
            body.classList.add('user-logged-in');
        } else {
            body.classList.remove('user-logged-in');
        }
    }
    
    // Обработчики для кнопок входа/выхода
    function setupEventListeners() {
        // Вход
        const loginBtn = document.querySelector('.dropdown-content.unauthorized .dropdown-item:first-child');
        if (loginBtn) {
            loginBtn.addEventListener('click', function(e) {
                e.preventDefault();
                // Здесь логика входа
                localStorage.setItem('userLoggedIn', 'true');
                updateDropdownDisplay();
            });
        }
        
        // Выход
        const logoutBtn = document.querySelector('.dropdown-item.logout');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                // Здесь логика выхода
                localStorage.setItem('userLoggedIn', 'false');
                updateDropdownDisplay();
            });
        }
    }
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function(e) {
        if (!profileContainer.contains(e.target)) {
            const dropdown = profileContainer.querySelector('.profile-dropdown');
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            dropdown.style.transform = 'translateY(-10px)';
        }
    });
    
    updateDropdownDisplay();
    setupEventListeners();

    // УДАЛИТЬ В ПРОДАКШН - ЭТО ТЕСТ!
    const toggleBtn = document.getElementById('toggleAuth');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const currentStatus = localStorage.getItem('userLoggedIn');
            const newStatus = currentStatus === 'true' ? 'false' : 'true';
            localStorage.setItem('userLoggedIn', newStatus);
            updateDropdownDisplay();
            alert('Статус авторизации: ' + (newStatus === 'true' ? 'Вход выполнен' : 'Выход выполнен'));
        });
    }

}

document.addEventListener('DOMContentLoaded', () => {
    try {
        initNewsSlider();
        initAboutSlider();
        initShemaAnim();
        initYoutubeOpen();
        initProfileDropdown(); // Добавьте эту строку
        document.getElementById("year").textContent = new Date().getFullYear();
        console.log('Все скрипты загружены успешно');
    } catch (error) {
        console.error('Ошибка загрузки скриптов:', error);
    }
});