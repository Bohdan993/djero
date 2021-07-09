import {
    $
} from '../../../libs/libs'

import {
    menuclickeventHandler,
    addClass,
    removeClass
} from "./Helpers"


const callBacksArr = []


const InitFullPagePopup = (headerLayout) => {

    $('.fullpage-popup').fullpage({
        scrollOverflow: true,
        scrollOverflowReset: true,
        lazyLoading: true,
        scrollingSpeed: 1000,
        lockAnchors: true,
        touchSensitivity: 20,
        anchors: ['about-set', 'news', 'delivery', 'delivery-2', 'footer-2'],
        scrollOverflowOptions: {
            click: false,
            disableTouch: false,
            disablePointer: false,
            disableMouse: false,
            scrollbars: 'custom'
        },
        // bigSectionsDestination: 'top',
        onLeave,
        afterLoad
    })


    function afterLoad(origin, destination, direction) {
        const callback = menuclickeventHandler.bind(this)

        if (callBacksArr.length) {
            document.removeEventListener('menuclickevent', callBacksArr[0])
            const elem = callBacksArr.shift()
        }

        callBacksArr.push(callback)
        document.addEventListener('menuclickevent', callback)

        setTimeout(function () {
            $.fn.fullpage.reBuild()
        }, 50)
    }

    function onLeave(origin, destination, direction) {

        addClass(
            removeClass(
                headerLayout,
                'white'),
            'blue-full')

        if (destination === 4) {
            removeClass(
                addClass(
                    headerLayout,
                    'white'),
                'blue-full')
            return
        }


        setTimeout(function () {
            $.fn.fullpage.reBuild()
        }, 50)

    }

}

export default InitFullPagePopup