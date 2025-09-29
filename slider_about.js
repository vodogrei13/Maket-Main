
export function initAboutSlider() {

    // Массив Картинок
    let images = [{
        url: "./img/about-1.png",
    }, {
        url: "./img/about-1.png",
    }, {
        url: "./img/about-1.png",
    }, {
        url: "./img/about-1.png",
    }];

    let currentSlide = 0;

    function initSlider(images, options) {
        if(!images || !images.length) return;

        options = options || {
            dots: true,
            autoplay: true,
            interval: 3000
        }

        const sliderWrapper = document.querySelector('.slider_about');
        const sliderImages = sliderWrapper.querySelector('.slider__images_about');
        
        initImages();
        
        if (options.autoplay) {
            startAutoplay(options.interval);
        }

        // Функция слайдер-картинок
        function initImages() {
            images.forEach((image, index) => {
                let imageElement = document.createElement("div");
                imageElement.className = `image n${index} ${index === 0 ? "active" : ""}`;
                imageElement.dataset.index = index;
                imageElement.style.backgroundImage = `url(${image.url})`;
                sliderImages.appendChild(imageElement);
            });
        }

        // Функция перемещения слайдера
        function moveSlider(index) {
            currentSlide = parseInt(index);
            
            // Обновляем изображения
            document.querySelectorAll('.slider__images_about .image').forEach(img => {
                img.classList.remove('active');
            });
            document.querySelector(`.slider__images_about .image.n${index}`).classList.add('active');
        }

        // Функция автоплея
        function startAutoplay(interval) {
            setInterval(() => {
                currentSlide = (currentSlide + 1) % images.length;
                moveSlider(currentSlide);
            }, interval);
        }

        // Добавляем обработчики для стрелок
        const nextBtn = document.createElement('div');
        nextBtn.className = 'slider-next';
        nextBtn.innerHTML = `<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1369 9.96917C13 9.22633 11.893 8.50444 10.7859 7.78022C7.49762 5.63318 4.20932 3.48614 0.926989 1.33444C0.75392 1.22266 0.595771 1.06198 0.521173 0.901304C0.410767 0.659122 0.58682 0.395981 0.864326 0.270233C1.15078 0.139828 1.47603 0.160786 1.77443 0.351736C2.55025 0.850073 3.31712 1.3554 4.08698 1.85839C7.93029 4.36638 11.7706 6.87669 15.6139 9.38468C16.2525 9.80151 16.2555 10.1485 15.611 10.5676C11.0336 13.553 6.45921 16.543 1.87887 19.5307C1.74459 19.6192 1.58346 19.7007 1.41635 19.738C1.06723 19.8125 0.730048 19.6751 0.5719 19.4259C0.416735 19.1814 0.476414 18.9066 0.774808 18.711C1.57152 18.1801 2.38017 17.6561 3.18583 17.1322C6.77551 14.7872 10.3682 12.4422 13.9579 10.0973C14.0086 10.0646 14.0563 10.0274 14.1399 9.96917L14.1369 9.96917Z" fill="black"/>
        </svg>`;
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % images.length;
            moveSlider(currentSlide);
        });

        const prevBtn = document.createElement('div');
        prevBtn.className = 'slider-prev';
        prevBtn.innerHTML = `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.16682 9.97187C3.3037 10.7147 4.41075 11.4366 5.51779 12.1608C8.80609 14.3079 12.0944 16.4549 15.3767 18.6066C15.5498 18.7184 15.7079 18.8791 15.7825 19.0397C15.8929 19.2819 15.7169 19.5451 15.4394 19.6708C15.1529 19.8012 14.8277 19.7803 14.5293 19.5893C13.7535 19.091 12.9866 18.5856 12.2167 18.0826C8.37342 15.5747 4.53309 13.0644 0.689773 10.5564C0.05121 10.1395 0.048225 9.79256 0.692756 9.3734C5.27012 6.38803 9.8445 3.39801 14.4248 0.410317C14.5591 0.321828 14.7203 0.240324 14.8874 0.203065C15.2365 0.128547 15.5737 0.265939 15.7318 0.515108C15.887 0.759619 15.8273 1.0344 15.5289 1.23001C14.7322 1.76095 13.9235 2.2849 13.1179 2.80886C9.5282 5.15383 5.93554 7.49881 2.34586 9.84379C2.29513 9.87639 2.24739 9.91365 2.16384 9.97187L2.16682 9.97187Z" fill="black"/>
        </svg>`;
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + images.length) % images.length;
            moveSlider(currentSlide);
        });

        sliderWrapper.appendChild(prevBtn);
        sliderWrapper.appendChild(nextBtn);
    }

    let sliderOptions = {
        autoplay: true,
        interval: 4000
    };
    initSlider(images, sliderOptions);
}