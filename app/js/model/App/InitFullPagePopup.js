import {
    $
} from '../../../libs/libs'


const InitFullPagePopup = () => {

    $('.fullpage-popup').fullpage({
        scrollOverflow: true,
        scrollOverflowReset: true,
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
        bigSectionsDestination: 'top',
        onLeave,
    })

    function onLeave(origin, destination, direction) {
        setTimeout(function () {
            $.fn.fullpage.reBuild()
        }, 50)
    }

}

export default InitFullPagePopup