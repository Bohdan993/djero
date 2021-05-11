import {
    $
} from '../../../libs/libs'
import {
    $backgroundVideoAnimation1
} from '../../view'
import {
    SIDEBAR__LAYOUT
} from './Constants'
import {
    addClass,
    removeClass
} from "./Helpers"


const InitFullPage = (headerLayout) => {

    $('.fullpage').fullpage({
        normalScrollElements: '.' + SIDEBAR__LAYOUT,
        scrollOverflow: true,
        lazyLoading: true,
        scrollingSpeed: 350,
        anchors: ['main-screen', 'screen-2', 'screen-3', 'screen-4', 'screen-5', 'footer', 'about-set', 'about-set2', 'about-set3'],
        scrollOverflowOptions: {
            disableTouch: true,
            disablePointer: true,
            disableMouse: true,
            scrollbars: 'custom'
        },
        afterLoad,
        onLeave
    })


    function afterLoad(origin, destination, direction) {

        $.fn.fullpage.reBuild()

        if (destination === 1) {
            $backgroundVideoAnimation1.play()

        }


    }


    function onLeave(origin, destination, direction) {

        addClass(
            removeClass(
                removeClass(
                    headerLayout, 
                    'white'), 
                'blue'), 
            'blue-full')

        if (destination === 1) {
            removeClass(
            headerLayout, 
            'blue-full')
            return
        }

        if (destination === 5) {
            removeClass(
                addClass(
                    headerLayout, 
                    'blue'), 
                'blue-full')
            return
        }

        if (destination === 6) {
            removeClass(
                addClass(
                    headerLayout, 
                    'white'), 
                'blue-full')
            return
        }

    }

}

export default InitFullPage