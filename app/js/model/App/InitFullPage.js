import {
    $
} from '../../../libs/libs'
import {
    $backgroundVideoAnimation1
} from '../../view'
import {
    SIDEBAR__LAYOUT
} from './Constants'


const InitFullPage = () => {
    $('.fullpage').fullpage({
        normalScrollElements: '.' + SIDEBAR__LAYOUT,
        scrollOverflow: true,
        scrollOverflowReset: true,
        lazyLoading: true,
        scrollingSpeed: 350,
        anchors: ['main-screen', 'screen-2', 'screen-3', 'screen-4', 'screen-5'],
        scrollOverflowOptions: {
            // click: true,
            disableTouch: true,
            disablePointer: true,
            disableMouse: true,
            scrollbars: 'custom'
        },
        // fadingEffect:true,
        //options here
        // navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips: ['firstSlide', 'secondSlide'],
        // autoScrolling:true,
        // scrollHorizontally: true
        afterLoad,
        onLeave,
    })


    function afterLoad(origin, destination, direction) {

        $.fn.fullpage.reBuild()
        // $('.header__layout').addClass('blue')
        if (destination === 1) {
            $backgroundVideoAnimation1.play()

            // $('.header__layout').removeClass('blue')
        }


    }


    function onLeave(origin, destination, direction) {

        $('.header__layout').addClass('blue')
        if (destination === 1) {
            $('.header__layout').removeClass('blue')
        }


    }

}

export default InitFullPage