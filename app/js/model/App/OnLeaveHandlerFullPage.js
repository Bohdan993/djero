import {
    $headerLayout as headerLayout
} from "../../view"
import {
    $
} from '../../../libs/libs'
import {
    addClass,
    removeClass,
    menuclickeventHandler,
    addStyle
} from "./Helpers"
import {
    changeClassesReverse
} from './BallClickAnimation'
import { screenLeaveEvent } from "./CustomEvents"



const callBacksArr = []


function playVideo(video) {
    let playPromise = video.play()

    if (playPromise !== undefined) {
        playPromise.then(res => {
                console.log(res)
                // Automatic playback started!
                // Show playing UI.
            })
            .catch(error => {
                console.log(error)
                video.play()
                // Auto-play was prevented
                // Show paused UI.
            })
    }
    addStyle(video, {
        zIndex: '32'
    })
    video.setAttribute('controls', true)
    onVideoEnded(video)
}

function onVideoEnded(video) {
    video.addEventListener('ended', videoEndedHandler.bind(video))
}

function videoEndedHandler(e) {
    this.removeAttribute('controls')
    this.setAttribute('poster', this.getAttribute('poster'))
    addStyle(this, {
        zIndex: '-1'
    })
}


function videoSliderMountedEventHandler(e) {
    console.log('SLIDE CGANGE')
    const {root} = e.detail
    root.Components.Elements.slides.forEach(forEachSlide)
}


function forEachSlide(el) {
        const iframe = el.querySelector('iframe')
        if(iframe) iframe.remove()
    }




export default function onLeave(data) {

    const {
        firstAnimation,
        thirdAnimation,
        fourthAnimation
    } = data

    setTimeout(function () {
        $.fn.fullpage.reBuild()
    }, 50)



    return function (origin, destination, direction) {

        
        document.dispatchEvent(screenLeaveEvent)

        const callback = menuclickeventHandler.bind(this)

        if (callBacksArr.length) {
            document.removeEventListener('menuclickevent', callBacksArr[0])
            const elem = callBacksArr.shift()
        }

        callBacksArr.push(callback)
        document.addEventListener('menuclickevent', callback)

        addClass(
            removeClass(
                headerLayout,
                'white'),
            'blue-full')

        if (destination === 1) {
            removeClass(
                headerLayout,
                'blue-full')

            changeClassesReverse(data)
            firstAnimation.play()


            return
        }


        if (destination === 2) {
            playVideo(thirdAnimation)
            // thirdAnimation.play()
            return
        }


        if (destination === 3) {
            playVideo(fourthAnimation)
            // fourthAnimation.play()
            return
        }


        if (destination === 5) {
            // removeClass(
            //     addClass(
            //         headerLayout,
            //         'blue'),
            //     'blue-full')
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