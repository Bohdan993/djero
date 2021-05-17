import {
    $
} from '../../../libs/libs'


const InitFullPagePopup = () => {

    $('.fullpage-popup').fullpage({
        scrollOverflow: true,
        lazyLoading: true,
        scrollingSpeed: 350,
        anchors: ['about-set', 'news', 'delivery', 'footer-2'],
        scrollOverflowOptions: {
            click: false,
            disableTouch: true,
            disablePointer: true,
            disableMouse: true,
            scrollbars: 'custom'
        },
        onLeave
    })

    function onLeave(origin, destination, direction) {
        setTimeout(function () {
            $.fn.fullpage.reBuild()
        }, 0)


    }

}

export default InitFullPagePopup