import {
    Splide
} from "../../../libs/libs"
import {
    addClass,
    removeClass
} from "./Helpers"

const InitSplide = () => {
    let mainScreenSlider = new Splide('.main-screen__slider', {
        // autoplay: true,
        type: 'fade',
        rewind: true,
        // interval: 5000,
        arrows: false,
        // speed: 1500,
        drag: true,
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


    let thumbnailSlider = new Splide('#screen-5__slider-secondary', {
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
    }).mount();


    let primarySlider = new Splide('#screen-5__slider-main', {
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
        // arrowPath: 'M2.32 6.03L7.56 0.88C7.8 0.64 7.8 0.25 7.56 0.01C7.31 -0.23 6.92 -0.23 6.68 0.01L1.45 5.16M2.73 5.03L16.42 5.03C16.76 5.03 17.03 5.3 17.03 5.64C17.03 5.98 16.76 6.25 16.42 6.25L2.73 6.25C2.4 6.25 2.12 5.98 2.12 5.64C2.12 5.3 2.4 5.03 2.73 5.03ZM0.98 5.63L6.68 11.24C6.92 11.48 7.31 11.48 7.56 11.24C7.8 11 7.8 10.61 7.55 10.37L1.86 4.77L0.98 5.63Z',
    });


    primarySlider.sync(thumbnailSlider).mount();
    // primarySlider.on('move', moveHandler.bind(primarySlider))
    // thumbnailSlider.on('move', moveHandler.bind(thumbnailSlider))
}


export default InitSplide