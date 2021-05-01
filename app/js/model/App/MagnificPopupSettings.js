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
    fixedBgPos: true,
    mainClass: 'popup-main zoom-in-animation my-mfp-zoom-in',
    callbacks: {    
        change: function () {
                removeClass(this.wrap[0], 'mfp-ready')
                removeClass(this.bgOverlay[0], 'mfp-ready')

                setTimeout(()=>{
                    addClass(this.wrap[0], 'mfp-ready')
                    addClass(this.bgOverlay[0], 'mfp-ready')
                }, 50)
            
            if(this.content[0].classList.contains('popup_secondary')) {
                addClass($body, 'secondary-popup')
            } else {
                removeClass($body, 'secondary-popup')
            }
        },
        open() {
            // console.log(this.content)
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