export function initYoutubeOpen() {
    // Проверяем, что Fancybox доступен
    if (typeof Fancybox === 'undefined') {
        console.error('Fancybox не загружен');
        return;
    }

    Fancybox.bind("[data-fancybox]", {
        // Указываем явно, что это iframe
        contentClick: "close",
        contentDblClick: false,
        
        // Настройки для YouTube
        Youtube: {
            noCookie: false,
            rel: 0,
            showinfo: 0,
            controls: 1
        },
        
        // Настройки размера
        defaultType: "iframe",
        width: 800,
        height: 450,
        
        // Анимация
        animated: true,
        closeOnBackgroundClick: true,
        autoFocus: false,
        
        // Убираем лишние элементы
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ["close"]
            }
        },
        
        // Обработчики событий для отладки
        on: {
            init: (fancybox) => {
                console.log('Fancybox инициализирован');
            },
            loading: (fancybox, slide) => {
                console.log('Загрузка контента');
            },
            reveal: (fancybox, slide) => {
                console.log('Контент показан');
            },
            closing: (fancybox) => {
                const iframe = fancybox.container.querySelector('iframe');
                if (iframe) {
                    iframe.src = '';
                }
            }
        }
    });
    
    console.log('YouTube инициализация завершена');
}