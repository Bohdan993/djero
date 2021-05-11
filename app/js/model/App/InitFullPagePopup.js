import {
    $
} from '../../../libs/libs'


const InitFullPagePopup = () => {

    $('.fullpage-popup').fullpage({
        scrollOverflow: true,
        lazyLoading: true,
        scrollingSpeed: 350,
        anchors: ['about-set', 'about-set2', 'about-set3'],
        scrollOverflowOptions: {
            disableTouch: true,
            disablePointer: true,
            disableMouse: true,
            scrollbars: 'custom'
        }
    })



}

export default InitFullPagePopup