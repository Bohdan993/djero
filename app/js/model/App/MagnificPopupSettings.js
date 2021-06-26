import InitOverlayScrollbars from './InitOverlayScrollbars'

import {
    $
} from '../../../libs/libs'


import { args } from '..'

import {
    $body,
    $headerLayout as headerLayout
} from "../../view"


import {
    addClass,
    removeClass
} from "./Helpers"

import InitFullPagePopup from './InitFullPagePopup'
import InitFullPage from './InitFullPage'


let instance
let instanceAboutSetPopup


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
            instanceAboutSetPopup && instanceAboutSetPopup.destroy()
            instance && instance.scroll({ y : "0%"  })

            setTimeout(() => {
                addClass(this.wrap[0], 'mfp-ready')
                addClass(this.bgOverlay[0], 'mfp-ready')
            }, 50)

            if (this.content[0].classList.contains('popup_secondary')) {
                addClass($body, 'popup-open_secondary')
                instance && instance.destroy()
            } else {
                removeClass($body, 'popup-open_secondary')
            }

            if (this.content[0].classList.contains('menu-popup')) {
                addClass($body, 'popup-open_menu')
                instance && instance.destroy()
            } else {
                removeClass($body, 'popup-open_menu')
            }

            if (this.content[0].classList.contains('second-branch-popup')) {

                addClass($body, 'popup-open_second-branch')
                removeClass($body, 'popup-open_third', 'popup-open_fourth', 'popup-open_menu')
                $.fn.fullpage.destroy('all')
                instance && instance.destroy()
                setTimeout(function () {
                    InitFullPagePopup(headerLayout)
                }, 50)


            } else {
                removeClass($body, 'popup-open_second-branch')
            }


            if (this.content[0].classList.contains('popup_third')) {
                addClass($body, 'popup-open_third', 'fixed1')
                removeClass($body, 'popup-open_second-branch')
                $.fn.fullpage.destroy('all')
                instance && instance.destroy()
                instanceAboutSetPopup = InitOverlayScrollbars({
                    popup: this.wrap[0]
                })
            } else {
                removeClass($body, 'popup-open_third', 'fixed1')
            }
        },
        open() {
            $.fn.fullpage.setMouseWheelScrolling(false)
            instance = InitOverlayScrollbars({
                popup: this.wrap[0]
            })

            addClass($body, 'popup-open', 'fixed1')

        },

        close() {
            removeClass($body, 'popup-open', 'popup-open_second-branch', 'popup-open_secondary', 'popup-open_menu', 'fixed1')

            $('html, body').animate({
                scrollTop: 0
            }, 2, function () {
                $.fn.fullpage.destroy('all')
                InitFullPage(args)
            })

            instance && instance.destroy()
            instanceAboutSetPopup && instanceAboutSetPopup.destroy()
        }
    }
}


export default settings