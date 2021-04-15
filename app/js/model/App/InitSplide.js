import {
    Splide
} from "../../../libs/libs"

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
}


export default InitSplide