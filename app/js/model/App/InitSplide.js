import {
    Splide
} from "../../../libs/libs"
import {
    addClass,
    removeClass
} from "./Helpers"

const InitSplide = () => {

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


    }


    function arrowsMountedHandler(prev, next) {
        addClass(prev, 'disabled')
    }


    const screen5thumbnailSlider = new Splide('#screen-5__slider-secondary', {
        // fixedWidth: 290,
        // height: 210,
        // heightRatio: 210/290,
        // perPage: 4,
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
            arrows: 'splide__arrows screen-5__slider-arrows',
            arrow: 'splide__arrow screen-5__slider-arrow',
            prev: 'splide__arrow--prev screen-5__slider-arrow-prev',
            next: 'splide__arrow--next screen-5__slider-arrow-next',
        },
        // breakpoints : {
        // 	'600': {
        // 		fixedWidth: 66,
        // 		height    : 40,
        // 	}
        // },
    })


    const screen5MainSlider = new Splide('#screen-5__slider-main', {
        type: 'fade',
        heightRatio: 350 / 625,
        pagination: false,
        cover: true,
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

    screen5MainSlider.on('arrows:mounted', arrowsMountedHandler.bind(screen5MainSlider))
    screen5thumbnailSlider.on('arrows:mounted', arrowsMountedHandler.bind(screen5thumbnailSlider))
    screen5thumbnailSlider.mount()
    screen5MainSlider.sync(screen5thumbnailSlider).mount();
    screen5MainSlider.on('move', moveHandler.bind(screen5MainSlider))
    screen5thumbnailSlider.on('move', moveHandler.bind(screen5thumbnailSlider))

}


export default InitSplide