import {
    $headerLayout as headerLayout
} from "../../view"
import {
    $
} from '../../../libs/libs'
import {
    addClass,
    removeClass,
    menuclickeventHandler
} from "./Helpers"
import {
    changeClassesReverse
} from './BallClickAnimation'





const callBacksArr = []


export default function onLeave(data) {

    const {
        animation
    } = data

    setTimeout(function () {
        $.fn.fullpage.reBuild()
    }, 50)

    return function (origin, destination, direction) {

        const callback = menuclickeventHandler.bind(this)

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