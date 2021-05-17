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
        lazyLoading: true,
        scrollingSpeed: 350,
        anchors: ['main-screen', 'screen-2', 'screen-3', 'screen-4', 'screen-5', 'footer'],
        scrollOverflowOptions: {
            click: false,
            disableTouch: true,
            disablePointer: true,
            disableMouse: true,
            scrollbars: 'custom'
        },
        onLeave: onLeave(data)
    })


    // function afterLoad(origin, destination, direction) {

        

    // }




}

export default InitFullPage