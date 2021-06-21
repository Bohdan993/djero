import InitOverlayScrollbars from './InitOverlayScrollbars'

import {
    $
} from '../../../libs/libs'

import {
    $body
} from "../../view"

import {
    addClass,
    removeClass
} from "./Helpers"


let instance


$.extend(true, $.magnificPopup.defaults, {
    tClose: 'Закрити (Esc)', // Alt text on close button
    tLoading: 'Завантаження...', // Text that is displayed during loading. Can contain %curr% and %total% keys
    gallery: {
        tPrev: 'Попередній (Ліва клавіша стрілка)', // Alt text on left arrow
        tNext: 'Наступний (Права клавіша стрілка)', // Alt text on right arrow
        tCounter: '%curr% із %total%' // Markup for "1 of 7" counter
    },
    image: {
        tError: '<a href="%url%">Зображення</a> не може бути завантажене.' // Error message when image could not be loaded
    },
    ajax: {
        tError: '<a href="%url%">Контент</a> не може бути завантажений.' // Error message when ajax request failed
    }
});

const settings = {
    type: 'inline',
    closeBtnInside: false,
    closeOnBgClick: false,
    showCloseBtn: false,
    removalDelay: 300,
    fixedBgPos: true,
    mainClass: 'zoom-in-animation my-mfp-zoom-in',
    callbacks: {
        change() {
            removeClass(this.wrap[0], 'mfp-ready')
            removeClass(this.bgOverlay[0], 'mfp-ready')

            setTimeout(() => {
                addClass(this.wrap[0], 'mfp-ready')
                addClass(this.bgOverlay[0], 'mfp-ready')
            }, 50)

            if (this.content[0].classList.contains('popup_secondary')) {
                addClass($body, 'popup-open_secondary')
                instance.destroy()
            } else {
                removeClass($body, 'popup-open_secondary')
            }

            if (this.content[0].classList.contains('menu-popup')) {
                addClass($body, 'popup-open_menu')
                instance.destroy()
            } else {
                removeClass($body, 'popup-open_menu')
            }
        },
        open() {
            $.fn.fullpage.setMouseWheelScrolling(false)
            instance = InitOverlayScrollbars({
                popup: this.wrap[0]
            })

            addClass($body, 'popup-open')

        },

        close() {
            removeClass($body, 'popup-open', 'popup-open_secondary', 'popup-open_menu')
            instance.destroy()
        }
    }
}


export default settings