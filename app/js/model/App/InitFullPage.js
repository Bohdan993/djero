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
        scrollingSpeed: 350,

        anchors: ['main-screen', 'screen-2', 'screen-3', 'screen-4', 'screen-5', 'footer'],
        scrollOverflowOptions: {
            click: false,
            disableTouch: true,
            disablePointer: true,
            disableMouse: true,
            scrollbars: 'custom'
        },
        bigSectionsDestination: 'top',
        afterReBuild() {},
        afterRender() {
        //    console.log(this)
            // if (prevSection.hasClass('fp-auto-height')) {
            //     var IScroll = prevSection.find('.fp-scrollable').data('iscrollInstance');
            //     IScroll.scrollTo(0, IScroll.maxScrollY, 0)
            // }
        },
        onLeave: onLeave(data)
    })

     


    // function afterLoad(origin, destination, direction) {



    // }




}



export default InitFullPage