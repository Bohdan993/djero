import {
    SCREEN_VIDEO_LAYER
} from "./Constants"


import {addStyle} from './Helpers'

const PlayVideo = (btsn) => {

    function forEachBtn(el) {
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

}

export default PlayVideo