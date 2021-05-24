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
import InitFullPagePopup from './InitFullPagePopup'

import settings from './MagnificPopupSettings'


const InitMagnificPopups = (body, data) => {

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
                change() {
                    removeClass(this.wrap[0], 'mfp-ready')
                    removeClass(this.bgOverlay[0], 'mfp-ready')

                    setTimeout(() => {
                        addClass(this.wrap[0], 'mfp-ready')
                        addClass(this.bgOverlay[0], 'mfp-ready')
                    }, 50)



                    if (this.content[0].classList.contains('second-branch-popup')) {
                        addClass(body, 'popup-open', 'popup-open_second-branch')
                        removeClass(body, 'popup-open_menu')

                        $.fn.fullpage.destroy('all')
                        setTimeout(() => {
                            InitFullPagePopup()
                        }, 50);



                    } else {
                        removeClass(body, 'popup-open_second-branch')

                    }


                },
                open() {
                    addClass(body, 'popup-open', 'popup-open_menu')
                },

                close() {
                    removeClass(body, 'popup-open', 'popup-open_menu')
                    console.log(!this.content[0].classList.contains('second-branch-popup'))

                    $.fn.fullpage.destroy('all')
                    InitFullPage(data)


                }
            }
        }
    }


    const settingsAboutSet = {
        ...settings,
        ...{
            callbacks: {
                change() {

                },
                open() {
                    addClass(body, 'popup-open', 'popup-open_third')



                },

                close() {
                    removeClass(body, 'popup-open', 'popup-open_third')

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
    $(OPEN_POPUP_LINK_SECONDARY).magnificPopup(settingsSecondary)
    $(OPEN_POPUP_LINK_MENU).magnificPopup(settingsMenu)
    $(OPEN_POPUP_LINK_ABOUT_SET).magnificPopup(settingsAboutSet)
    $(OPEN_POPUP_LINK_NEW).magnificPopup(settingsNew)
    $(OPEN_POPUP_LINK_VIDEO).magnificPopup(settingsVideo)



}


export default InitMagnificPopups