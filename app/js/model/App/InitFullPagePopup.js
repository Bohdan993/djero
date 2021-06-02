import {
    $
} from '../../../libs/libs'

import {
    menuclickeventHandler
} from "./Helpers"


const callBacksArr = []


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
    }

    function onLeave(origin, destination, direction) {
        console.log(this)
        setTimeout(function () {
            $.fn.fullpage.reBuild()
        }, 50)

    }

}

export default InitFullPagePopup