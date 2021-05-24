import {
    $
} from "../../../libs/libs"

import settings from './MagnificPopupSettings'

import {
    OPEN_POPUP_LINK_SECOND_BRANCH
} from "./Constants"

import {
    addClass,
    removeClass
} from "./Helpers"

import InitFullPage from './InitFullPage'
import InitFullPagePopup from './InitFullPagePopup'
import InitOverlayScrollbars from './InitOverlayScrollbars'


let instanceSecondBranchPopup
let instanceAboutSetPopup
let instanceNewPopup

const SetSecondBranchPopupSettings = (body, data) => {
    return {
        ...settings,
        ...{
            callbacks: {
                change() {
                    removeClass(this.wrap[0], 'mfp-ready')
                    removeClass(this.bgOverlay[0], 'mfp-ready')
                    instanceAboutSetPopup && instanceAboutSetPopup.destroy()
                    instanceNewPopup && instanceNewPopup.destroy()

                    // console.log(this.currItem)

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
                        instanceAboutSetPopup = InitOverlayScrollbars({
                            popup: this.wrap[0]
                        })
                    } else {
                        removeClass(body, 'popup-open_third')
                    }


                    if (this.content[0].classList.contains('popup_fourth')) {
                        addClass(body, 'popup-open_fourth')
                        removeClass(body, 'popup-open_second-branch')
                        instanceNewPopup = InitOverlayScrollbars({
                            popup: this.wrap[0]
                        })
                    } else {
                        removeClass(body, 'popup-open_fourth')
                    }


                    if (this.content[0].classList.contains('popup_fifth')) {
                        addClass(body, 'popup-open_fifth')
                        removeClass(body, 'popup-open_fourth')
                        instanceNewPopup = InitOverlayScrollbars({
                            popup: this.wrap[0]
                        })
                    } else {
                        removeClass(body, 'popup-open_fifth')
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
                    console.log('df')
                    addClass(body, 'popup-open', 'popup-open_second-branch')

                    $.fn.fullpage.destroy('all')
                    InitFullPagePopup()
                },

                close() {

                    removeClass(body, 'popup-open', 'popup-open_second-branch', 'popup-open_secondary')
                    $.fn.fullpage.destroy('all')

                    setTimeout(() => {
                        InitFullPage(data)
                    }, 50000);
                    
                    
                    

                    instanceSecondBranchPopup && instanceSecondBranchPopup.destroy()
                    instanceAboutSetPopup && instanceAboutSetPopup.destroy()
                    instanceNewPopup && instanceNewPopup.destroy()
                }
            }
        }
    }
}




const InitMagnificPopupSecondBranch = (body, data) => {
    $(OPEN_POPUP_LINK_SECOND_BRANCH).magnificPopup(SetSecondBranchPopupSettings(body, data))
}





export default InitMagnificPopupSecondBranch

export {
    SetSecondBranchPopupSettings
}