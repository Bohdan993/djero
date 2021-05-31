import {
    $headerLayout as headerLayout
} from "../../view"
import {
    $
} from '../../../libs/libs'
import {
    addClass,
    removeClass
} from "./Helpers"
import {
    changeClassesReverse
} from './BallClickAnimation'



function myeventHandler(e) {
    const loadedSection = $(this)
    if (loadedSection.hasClass('fp-auto-height')) {
        const IScroll = loadedSection.find('.fp-scrollable').data('iscrollInstance')
        IScroll.scrollTo(0, 0, 0)
    }
}

const callBacksArr = []




export default function onLeave(data) {

    const {
        animation
    } = data

    setTimeout(function () {
        $.fn.fullpage.reBuild()
    }, 50)

    return function (origin, destination, direction) {

        const callback = myeventHandler.bind(this)

        if(callBacksArr.length) {
            document.removeEventListener('menuclickevent', callBacksArr[0])
            const elem = callBacksArr.shift()
        }

        callBacksArr.push(callback)
        document.addEventListener('menuclickevent', callback)

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

            changeClassesReverse(data)
            animation.play()


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