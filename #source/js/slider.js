new Swiper('.swiper', {
    // Стрелки 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //Включение/отклдючение
    simulateTouch: false, //перетаскивания (пк) слайдов с помощью удержания ЛК мыши в сторону
    touchratio: 1, // чувствительность свайпа(чем больше - тем реще (проще) смещение слайдов)
    grabCursor: false, // Менят курсор перетаскивания
    slideToClickedSlide: false, // Переключение при клике слайда

    watchOverflow: true, // если только один слай, фиксирует слайд чтоб его нельзя было дергать.
    centeredSlides: true, // старт показа с центрального слайда

    loop: true, // Бесконечный слайдер

    poopedSlides: 3, // Кол-во дублирущих слайдов

    speed: 700,  // Скорость автопрокрутки


    //Брейк поинты (адаптив)
    breakpoints: {
        //ширина экрана при определленной ширине экрана
        320: {
            slidesPerView: 1, 
            spaceBetween: 80,
            slidesPerGroup: 1,
            initialSlide: 0,
        },
        768: {
            slidesPerView: 2, 
            spaceBetween: -50,
            slidesPerGroup: 2,
            initialSlide: 1,
        },
        1280: {
            slidesPerView: 3, 
            spaceBetween: -80,
            slidesPerGroup: 2,
            initialSlide: 1,
        },
    },

    preloadImage: false, // Отключить предзагрузку картинок Также для прогрузок картинок редактируется html файл.
    // картинка которую нужно прогрузиться ставим data-src. Картинка, которая показывается по грузиться нужная картинка src ( как правило она меньшего размера)
    // дополнительно ставится контейнер для картинки прогрузки. Итоговый приммер ниже

    // <img class="pets-box__pets-img swiper-lazy" data-src="img/pets-sophia.png" src="img/cross.svg" alt="pets-img">
    // <div class="swiper-lazy-preloader"></div>

    // подгрузка картинок
    lazy: {
        loadOnTransitionStart: true, // Подгружать на старте переключения слайда
        loadPervNext: true, // Подгружать предыдущую и следующие картинки
    },

    watchSlidesProgress: true, // Слежка за видимым слайдом
    watchSlidesvisibiliti: true, // Добавление класса видимым слайдам
    
    // Доступность
    ally: {
        enable: true,
        prevSlideMessage: 'Previos slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This isthe first slide',
        lastSlideMessage: 'This isthe last slide',
        paginationBulletMessage: 'Go to slide{(index})',
        notidicationClass: 'swiper-notification',
        containMessage: '',
        containRoleDescriptionMessage: '',
        itemRoleDescriptionMessage: '',
    },

}); 