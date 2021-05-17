import {
    $
} from "../../../libs/libs"
import {
    OPEN_POPUP_LINK,
    OPEN_POPUP_LINK_ABOUT_SET,
    OPEN_POPUP_LINK_MENU,
    OPEN_POPUP_LINK_SECONDARY,
    OPEN_POPUP_LINK_SECOND_BRANCH
} from "./Constants"
import {
    addClass,
    removeClass
} from "./Helpers"

import settings from './MagnificPopupSettings'
import InitFullPage from './InitFullPage'
import InitFullPagePopup from './InitFullPagePopup'
import InitOverlayScrollbars from './InitOverlayScrollbars'


let instance

const InitMagnificPopups = (body, data) => {

    const settingsSecondary = {
        ...settings,
        ...{
            callbacks: {
                open() {
                    console.log('dfere')
                    addClass(body, 'popup-open', 'popup-open_secondary')
                },

                close() {
                    removeClass(body, 'popup-open', 'popup-open_secondary')
                }
            }
        }
    }


    const settingMenu = {
        ...settings,
        ...{
            callbacks: {
                open() {
                    addClass(body, 'popup-open', 'popup-open_menu')
                },

                close() {
                    removeClass(body, 'popup-open', 'popup-open_menu')
                }
            }
        }
    }

    const settingSecondBranch = {
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


                    if (this.content[0].classList.contains('popup_secondary')) {
                        addClass(body, 'popup-open_secondary')
                        removeClass(body, 'popup-open_second-branch')
                        $.fn.fullpage.destroy('all')
                        InitFullPage(data)
                    } else {
                        removeClass(body, 'popup-open_secondary')
                    }


                    if (this.content[0].classList.contains('popup_third')) {
                        addClass(body, 'popup-open_third')
                        removeClass(body, 'popup-open_second-branch')
                    } else {
                        removeClass(body, 'popup-open_third')
                    }


                    if (this.content[0].classList.contains('second-branch-popup')) {
                        addClass(body, 'popup-open_second-branch')
                        removeClass(body, 'popup-open_third')
                        
                    } else {
                        removeClass(body, 'popup-open_second-branch')
                    }


                    if (this.content[0].classList.contains('menu-popup')) {
                        addClass(body, 'popup-open_menu')
                    } else {
                        removeClass(body, 'popup-open_menu')
                    }


                    if (this.content[0].classList.contains('payment-popup')) {
                        instance = InitOverlayScrollbars({
                            popup: this.wrap[0]
                        })
                    } else {
                    }
                
                },
                open() {
                    addClass(body, 'popup-open', 'popup-open_second-branch')
                    // console.log('dferer')
                    $.fn.fullpage.destroy('all')
                    InitFullPagePopup()
                },

                close() {
                    // console.log(this)
                    removeClass(body, 'popup-open', 'popup-open_second-branch', 'popup-open_secondary')
                    $.fn.fullpage.destroy('all')
                    InitFullPage(data)
                    instance && instance.destroy()
                }
            }
        }
    }

    // const settingsSecondBranchWithItem = {
    //     ...settingSecondBranch,
    //     ...{
    //         items: {
    //             src: '#second-branch-popup'
    //         }
    //     }

    // }


    const settingAboutSet = {
        ...settings,
        ...{
            callbacks: {
                change() {

                },
                open() {
                    addClass(body, 'popup-open', 'popup-open_about-set')

                },

                close() {
                    removeClass(body, 'popup-open', 'popup-open_about-set')

                }
            }
        }

    }





    $(OPEN_POPUP_LINK).magnificPopup(settings)
    $(OPEN_POPUP_LINK_SECONDARY).magnificPopup(settingsSecondary)
    $(OPEN_POPUP_LINK_MENU).magnificPopup(settingMenu)
    $(OPEN_POPUP_LINK_SECOND_BRANCH).magnificPopup(settingSecondBranch)
    $(OPEN_POPUP_LINK_ABOUT_SET).magnificPopup(settingAboutSet)



}


export default InitMagnificPopups