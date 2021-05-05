import {
    SCREEN_VIDEO_LAYER
} from "./Constants"

const PlayVideo = (btsn) => {

    function forEachBtn(el) {
        el.addEventListener('click', clickHandler)
    }

    function clickHandler(e) {

        const video = this.closest(`.${SCREEN_VIDEO_LAYER}`).querySelector('video')
        video.play()
        video.style.zIndex = '10'
        video.setAttribute('controls', true)
        this.style.display = 'none'
        onVideoEnded(video, this)
    }

    function onVideoEnded(video, btn) {
        video.addEventListener('ended', videoEndedHandler.bind(video, btn))
    }

    function videoEndedHandler(btn, e) {
        // alert('ended')
        this.removeAttribute('controls')
        this.setAttribute('poster', this.getAttribute('poster'))
        btn.style.display = 'flex'
        this.style.zIndex = '-1'
    }

    btsn.forEach(forEachBtn)

}

export default PlayVideo