import {
    Splide
} from "../../../libs/libs"
import {
    addClass,
    removeClass
} from "./Helpers"



const InitSplide = () => {

    function forEachSlide(el) {
        const iframe = el.querySelector('iframe')
        if (iframe) iframe.remove()
    }

    function moveHandler(newIndex, oldIndex, destIndex) {


        const edgeIndex = this.Components.Controller.edgeIndex
        const prevArrow = this.Components.Arrows.arrows.prev
        const nextArrow = this.Components.Arrows.arrows.next


        if (newIndex >= edgeIndex) {
            addClass(nextArrow, 'disabled')
            removeClass(prevArrow, 'disabled')
        }

        if (0 < newIndex && newIndex < edgeIndex) {
            removeClass(nextArrow, 'disabled')
            removeClass(prevArrow, 'disabled')
        }

        if (newIndex <= 0) {
            addClass(prevArrow, 'disabled')
            removeClass(nextArrow, 'disabled')
        }


        if (this.root.id === 'screen-5__slider-main') {
            this.Components.Elements.slides.forEach(forEachSlide)
        }


    }


    function arrowsMountedHandler(prev, next) {
        addClass(prev, 'disabled')
    }


    function screen5SliderMountedHandler() {
        document.addEventListener('screenleaveevent', () => {
            this.Components.Elements.slides.forEach(forEachSlide)
        })
    }

    const mainScreenSlider = new Splide('#main-screen__slider', {
        // autoplay: true,
        type: 'fade',
        rewind: true,
        // interval: 5000,
        arrows: false,
        // speed: 1500,
        // drag: true,
        lazyLoad: 'nearby',
        pagination: false,
        pauseOnHover: true,
        autoWidth: true
    }).mount()




    const screen5thumbnailSlider = new Splide('#screen-5__slider-secondary', {
        // fixedWidth: 290,
        // height: 210,
        // heightRatio: 210/290,
        perPage: 1,
        gap: 15,
        // cover: true,
        isNavigation: true,
        pagination: false,
        autoWidth: true,
        drag: true,
        lazyLoad: 'nearby',
        preloadPages: 3,
        focus: 'center',
        trimSpace: true,
        classes: {
            // Add classes for arrows.
            arrows: 'splide__arrows screen-5__slider-arrows',
            arrow: 'splide__arrow screen-5__slider-arrow',
            prev: 'splide__arrow--prev screen-5__slider-arrow-prev',
            next: 'splide__arrow--next screen-5__slider-arrow-next',
        },
        breakpoints: {
            '768': {
                gap: 8,
            }
        },
    })


    const screen5MainSlider = new Splide('#screen-5__slider-main', {
        type: 'fade',
        heightRatio: 350 / 625,
        pagination: false,
        // cover: true,
        pagination: false,
        lazyLoad: 'nearby',
        classes: {
            // Add classes for arrows.
            arrows: 'splide__arrows screen-5__slider-arrows',
            arrow: 'splide__arrow screen-5__slider-arrow',
            prev: 'splide__arrow--prev screen-5__slider-arrow-prev',
            next: 'splide__arrow--next screen-5__slider-arrow-next',
        },
    });


    const aboutSetPopupSlider = new Splide('#about-set-popup__slider', {
        autoplay: true,
        type: 'fade',
        rewind: true,
        interval: 5000,
        arrows: false,
        speed: 1500,
        // drag: true,
        lazyLoad: 'nearby',
        pagination: true,
        // heightRatio: 435/625,
        // pauseOnHover: true,
        autoWidth: true
    }).mount()


    const newPopupSlider = new Splide('#new-popup__slider', {
        // fixedWidth: 290,
        // height: 210,
        // heightRatio: 210/290,
        perPage: 1,
        gap: 15,
        // cover: true,
        isNavigation: true,
        pagination: false,
        autoWidth: true,
        drag: true,
        lazyLoad: 'nearby',
        focus: 'center',
        trimSpace: true,
        classes: {
            // Add classes for arrows.
            arrows: 'splide__arrows new-popup__slider-arrows',
            arrow: 'splide__arrow new-popup__slider-arrow',
            prev: 'splide__arrow--prev new-popup__slider-arrow-prev',
            next: 'splide__arrow--next new-popup__slider-arrow-next',
        },
        breakpoints: {
            '576': {
                gap: 8,
            }
        },
    })

    screen5MainSlider.on('arrows:mounted', arrowsMountedHandler.bind(screen5MainSlider))
    screen5thumbnailSlider.on('arrows:mounted', arrowsMountedHandler.bind(screen5thumbnailSlider))
    screen5thumbnailSlider.mount()
    screen5MainSlider.on('mounted', screen5SliderMountedHandler.bind(screen5MainSlider))
    screen5MainSlider.mount()
    screen5MainSlider.on('move', moveHandler.bind(screen5MainSlider))
    screen5thumbnailSlider.on('move', moveHandler.bind(screen5thumbnailSlider))
    newPopupSlider.on('arrows:mounted', arrowsMountedHandler.bind(newPopupSlider))
    newPopupSlider.mount()
    newPopupSlider.on('move', moveHandler.bind(newPopupSlider))

}


export default InitSplide