import {
    $
} from '../../../libs/libs'

import {
    SIDEBAR__LAYOUT
} from './Constants'
import onLeave from './OnLeaveHandlerFullPage'




const InitFullPage = (data) => {

    $('.fullpage').fullpage({
        normalScrollElements: '.' + SIDEBAR__LAYOUT,
        scrollOverflow: true,
        scrollOverflowReset: true,
        lazyLoading: true,
        scrollingSpeed: 1000,

        anchors: ['main-screen', 'screen-2', 'screen-3', 'screen-4', 'screen-5', 'screen-6', 'contacts', 'footer'],
        scrollOverflowOptions: {
            click: false,
            disableTouch: false,
            disablePointer: false,
            disableMouse: false,
            scrollbars: 'custom'
        },
        bigSectionsDestination: 'top',
        afterResize: rebuild,
        afterLoad: rebuild,
        afterRender: rebuild,
        onLeave: onLeave(data)
    })




    function rebuild() {
        setTimeout(function () {
            $.fn.fullpage.reBuild()
        }, 100)
    }




}



export default InitFullPage