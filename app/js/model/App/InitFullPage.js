import {
    $
} from '../../../libs/libs'
import {
    $backgroundVideoAnimation1
} from '../../view'
import {
    SIDEBAR__LAYOUT
} from './Constants'
import onLeave from './OnLeaveHandlerFullPage'


const InitFullPage = () => {

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

        // $.fn.fullpage.reBuild()

        if (destination === 1) {
            $backgroundVideoAnimation1.play()

        }

    }


    

}

export default InitFullPage