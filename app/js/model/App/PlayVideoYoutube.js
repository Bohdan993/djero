import {
    NO_VIDEO_PLAY,
    SCREEN_VIDEO_LAYER
} from "./Constants"

const PlayVideoYoutube = (btns) => {


    function forEachBtn(el) {
        if (el.classList.contains(NO_VIDEO_PLAY)) return
        el.addEventListener('click', clickHandler)
    }

    function clickHandler(e) {
        const parent = this.closest(`[data-youtube]`)
        const video = parent.getAttribute('data-youtube')

        const iframe = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1" frameborder="0" rel="0" allow="autoplay; encrypted-media" allowfullscreen>'
        parent.insertAdjacentHTML("beforeend", iframe)
    }


    btns.forEach(forEachBtn)
}

export default PlayVideoYoutube