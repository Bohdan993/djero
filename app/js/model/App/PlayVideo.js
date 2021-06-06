import {
    NO_VIDEO_PLAY,
    SCREEN_VIDEO_LAYER
} from "./Constants"


import {
    addStyle
} from './Helpers'

const PlayVideo = (btsn) => {

    function forEachBtn(el) {
        if (el.classList.contains(NO_VIDEO_PLAY)) return
        el.addEventListener('click', clickHandler)

    }

    function clickHandler(e) {

        const video = this.closest(`.${SCREEN_VIDEO_LAYER}`).querySelector('video')
        video.play()
        addStyle(video, {
            zIndex: '32'
        })
        video.setAttribute('controls', true)
        addStyle(this, {
            display: 'none'
        })
        onVideoEnded(video, this)
    }

    function onVideoEnded(video, btn) {
        video.addEventListener('ended', videoEndedHandler.bind(video, btn))
    }

    function videoEndedHandler(btn, e) {
        this.removeAttribute('controls')
        this.setAttribute('poster', this.getAttribute('poster'))
        addStyle(btn, {
            display: 'flex'
        })
        addStyle(this, {
            zIndex: '-1'
        })
    }

    btsn.forEach(forEachBtn)


    // function include(arr, x) {

    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] === x) return true
    //     }

    //     return false
    // }


    // function diffArray (a, b) {
    //     const res = []


    //     for(let i = 0; i < a.length; i++) {
    //         if(!include(b, a[i])) res.push(a[i])
    //     }


    //     return res
    // }


    // console.log(diffArray([3,6,7,4,3,2,1,2,3,4,4,4,3,3,3,3,2], []))
}

export default PlayVideo