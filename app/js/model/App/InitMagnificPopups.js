import {
    $
} from "../../../libs/libs"
import {
    OPEN_POPUP_LINK,
    OPEN_POPUP_LINK_ABOUT_SET,
    OPEN_POPUP_LINK_MENU,
    OPEN_POPUP_LINK_SECONDARY,
    OPEN_POPUP_LINK_NEW,
    OPEN_POPUP_LINK_VIDEO
} from "./Constants"

import {
    addClass,
    removeClass
} from "./Helpers"

import InitFullPage from './InitFullPage'

import {
    SetSecondBranchPopupSettings
} from "./InitMagnificPopupSecondBranch"

import settings from './MagnificPopupSettings'



const InitMagnificPopups = (body, data) => {
    

    const {
        callbacks: {
            change
        }
    } = SetSecondBranchPopupSettings(body, data)


    const settingsSecondary = {
        ...settings,
        ...{
            callbacks: {
                open() {
                    addClass(body, 'popup-open', 'popup-open_secondary')
                },

                close() {
                    removeClass(body, 'popup-open', 'popup-open_secondary')
                }
            }
        }
    }

    const settingsMenu = {
        ...settings,
        ...{
            callbacks: {
                change,
                open() {
                    addClass(body, 'popup-open', 'popup-open_menu', 'fixed1')
                },

                close() {
                    removeClass(body, 'popup-open', 'popup-open_menu', 'fixed1', 'popup-open_second-branch')
                    $.fn.fullpage.destroy('all')
                    InitFullPage(data)

                }
            }
        }
    }


    const settingsAboutSet = {
        ...settings,
        ...{
            // fixedBgPos: true,
            // fixedContentPos: true,
            callbacks: {
                change() {

                },
                open() {
                    addClass(body, 'popup-open', 'popup-open_third', 'fixed')
                },

                close() {
                    removeClass(body, 'popup-open', 'popup-open_third', 'fixed')
                }
            }
        }

    }

    const settingsNew = {
        ...settings,
        ...{
            callbacks: {
                change() {

                },
                open() {
                    addClass(body, 'popup-open', 'popup-open_fourth')



                },

                close() {
                    removeClass(body, 'popup-open', 'popup-open_fourth')

                }
            }
        }

    }

    const settingsVideo = {

        ...settings,
        ...{
            callbacks: {
                change() {

                },
                open() {
                    addClass(body, 'popup-open', 'popup-open_fifth')



                },

                close() {
                    removeClass(body, 'popup-open', 'popup-open_fifth')

                }
            }
        }

    }




    $(OPEN_POPUP_LINK).magnificPopup(settings)
    // $(OPEN_POPUP_LINK).magnificPopup(settings2)
    $(OPEN_POPUP_LINK_SECONDARY).magnificPopup(settingsSecondary)
    $(OPEN_POPUP_LINK_MENU).magnificPopup(settingsMenu)
    $(OPEN_POPUP_LINK_ABOUT_SET).magnificPopup(settingsAboutSet)
    $(OPEN_POPUP_LINK_NEW).magnificPopup(settingsNew)
    $(OPEN_POPUP_LINK_VIDEO).magnificPopup(settingsVideo)

    $('#screen-5__slider-secondary').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Завантаження зображення #%curr%...',
        mainClass: 'zoom-in-animation my-mfp-zoom-in',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">Зображення #%curr%</a> не може бути завантажене.',
            // titleSrc: function(item) {
            // 	return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            // }
        },
        callbacks: {
            open() {
                addClass(body, 'popup-gallery-open')
            },

            close() {
                removeClass(body, 'popup-open', 'popup-gallery-open')
            }

        }

    })




}


export default InitMagnificPopups