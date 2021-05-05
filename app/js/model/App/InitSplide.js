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
        // drag: true,
        lazyLoad: 'nearby',
        pagination: false,
        pauseOnHover: true,
        autoWidth: true
    }).mount()


    let thumbnailSlider = new Splide( '#screen-5__slider-secondary', {
		fixedWidth  : 290,
		height      : 210,
		gap         : 15,
		cover       : true,
		isNavigation: true,
        focus       : 'center',
        pagination: false,
        lazyLoad: 'nearby',
		
		// breakpoints : {
		// 	'600': {
		// 		fixedWidth: 66,
		// 		height    : 40,
		// 	}
		// },
	} ).mount();


    let primarySlider = new Splide( '#screen-5__slider-main', {
		type       : 'fade',
		heightRatio: 350/625,
		pagination : false,
		cover      : true,
        lazyLoad: 'nearby', 
        // autoWidth: true
	} );


    primarySlider.sync( thumbnailSlider ).mount();

}


export default InitSplide