import {
    $
} from "../../../libs/libs"
import {
    OPEN_POPUP_LINK,
    OPEN_POPUP_LINK_ABOUT_SET,
    OPEN_POPUP_LINK_MENU,
    OPEN_POPUP_LINK_SECONDARY,
    OPEN_POPUP_LINK_SECOND_BRANCH,
    OPEN_POPUP_LINK_NEW
} from "./Constants"
import {
    addClass,
    removeClass
} from "./Helpers"

import settings from './MagnificPopupSettings'
import InitFullPage from './InitFullPage'
import InitFullPagePopup from './InitFullPagePopup'
import InitOverlayScrollbars from './InitOverlayScrollbars'


let instanceSecondBranchPopup
let instanceAboutSetPopup
let instanceNewPopup

const InitMagnificPopups = (body, headerClosePopup, data) => {

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


    const settingsMenu = {
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

    const settingsSecondBranch = {
        ...settings,
        ...{
            callbacks: {
                change() {
                    removeClass(this.wrap[0], 'mfp-ready')
                    removeClass(this.bgOverlay[0], 'mfp-ready')
                    instanceAboutSetPopup && instanceAboutSetPopup.destroy()
                    instanceNewPopup && instanceNewPopup.destroy()

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


                    if (this.content[0].classList.contains('popup_fourth')) {
                        addClass(body, 'popup-open_fourth')
                        // addClass(headerClosePopup, 'open-popup-link-second-branch')
                        // headerClosePopup.setAttribute('href', '#second-branch-popup')
                        removeClass(body, 'popup-open_second-branch')

                        // instanceAboutSetPopup = InitOverlayScrollbars({
                        //     popup: this.wrap[0]
                        // })
                        instanceNewPopup = InitOverlayScrollbars({
                            popup: this.wrap[0]
                        })
                    } else {
                        removeClass(body, 'popup-open_fourth')
                        // removeClass(headerClosePopup, 'open-popup-link-second-branch')
                        // headerClosePopup.setAttribute('href', '#')
                    }


                    if (this.content[0].classList.contains('popup_third')) {
                        addClass(body, 'popup-open_third')
                        removeClass(body, 'popup-open_second-branch')
                        instanceAboutSetPopup = InitOverlayScrollbars({
                            popup: this.wrap[0]
                        })
                    } else {
                        removeClass(body, 'popup-open_third')
                    }


                    if (this.content[0].classList.contains('second-branch-popup')) {
                        addClass(body, 'popup-open_second-branch')
                        removeClass(body, 'popup-open_third', 'popup-open_fourth')
                        

                    } else {
                        removeClass(body, 'popup-open_second-branch')
                    }


                    if (this.content[0].classList.contains('menu-popup')) {
                        addClass(body, 'popup-open_menu')
                    } else {
                        removeClass(body, 'popup-open_menu')
                    }


                    if (this.content[0].classList.contains('payment-popup')) {
                        instanceSecondBranchPopup = InitOverlayScrollbars({
                            popup: this.wrap[0]
                        })
                    }

                },
                open() {
                    addClass(body, 'popup-open', 'popup-open_second-branch')
                    $.fn.fullpage.destroy('all')
                    InitFullPagePopup()
                },

                close() {
                    // console.log(this)
                    removeClass(body, 'popup-open', 'popup-open_second-branch', 'popup-open_secondary')
                    $.fn.fullpage.destroy('all')
                    InitFullPage(data)
                    instanceSecondBranchPopup && instanceSecondBranchPopup.destroy()
                    instanceAboutSetPopup && instanceAboutSetPopup.destroy()
                    instanceNewPopup && instanceNewPopup.destroy()
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





    $(OPEN_POPUP_LINK).magnificPopup(settings)
    $(OPEN_POPUP_LINK_SECONDARY).magnificPopup(settingsSecondary)
    $(OPEN_POPUP_LINK_MENU).magnificPopup(settingsMenu)
    $(OPEN_POPUP_LINK_SECOND_BRANCH).magnificPopup(settingsSecondBranch)
    $(OPEN_POPUP_LINK_ABOUT_SET).magnificPopup(settingsAboutSet)
    $(OPEN_POPUP_LINK_NEW).magnificPopup(settingsNew)



}


export default InitMagnificPopups