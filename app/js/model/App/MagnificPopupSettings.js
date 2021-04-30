import InitOverlayScrollbars from './InitOverlayScrollbars'
import {
    $body
} from "../../view"

import {
    addClass,
    removeClass
} from "./Helpers"

let instance

const settings = {
    type: 'inline',
    closeBtnInside: false,
    closeOnBgClick: false,
    showCloseBtn: false,
    removalDelay: 300,
    mainClass: 'popup-main zoom-in-animation',
    callbacks: {
        open() {
            console.log(this)
            instance = InitOverlayScrollbars({
                popup: this.wrap[0]
            })

            addClass($body, 'popup-open')
        },

        close() {
            removeClass($body, 'popup-open')
            instance.destroy()
        }
    }
}


export default settings