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
    const {
        headerLayout
    } = data
    return {
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


                    if (this.content[0].classList.contains('popup_third')) {
                        addClass(body, 'popup-open_third', 'fixed2')
                        removeClass(body, 'popup-open_second-branch')
                        $.fn.fullpage.destroy('all')
                        instanceAboutSetPopup = InitOverlayScrollbars({
                            popup: this.wrap[0]
                        })
                    } else {
                        removeClass(body, 'popup-open_third', 'fixed2')
                    }


                    if (this.content[0].classList.contains('popup_fourth')) {
                        addClass(body, 'popup-open_fourth')
                        removeClass(body, 'popup-open_second-branch')
                        $.fn.fullpage.destroy('all')
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
                        removeClass(body, 'popup-open_third', 'popup-open_fourth', 'popup-open_menu')
                        $.fn.fullpage.destroy('all')
                        console.log($.fn)
                        setTimeout(function () {
                            console.log('after 150 ms')
                            InitFullPagePopup(headerLayout)
                        }, 150)


                    } else {
                        removeClass(body, 'popup-open_second-branch')
                    }


                    if (this.content[0].classList.contains('menu-popup')) {
                        $.fn.fullpage.destroy('all')
                        console.log('OPEN MENU')
                        addClass(body, 'popup-open_menu', 'fixed')
                    } else {
                        removeClass(body, 'popup-open_menu', 'fixed')
                    }


                    if (this.content[0].classList.contains('payment-popup')) {
                        console.log('paymant')
                        $.fn.fullpage.destroy('all')
                        addClass(body, 'fixed1')
                        instanceSecondBranchPopup = InitOverlayScrollbars({
                            popup: this.wrap[0]
                        })
                    } else {
                        removeClass(body, 'fixed1')
                    }

                },
                open() {
                    addClass(body, 'popup-open', 'popup-open_second-branch')
                    // $.fn.fullpage.destroy('all')
                    // InitFullPagePopup()
                },

                close() {

                    removeClass(body, 'popup-open', 'popup-open_second-branch', 'popup-open_secondary')
                    $('html, body').animate({
                        scrollTop: 0
                    }, 2, function () {
                        $.fn.fullpage.destroy('all')
                        InitFullPage(data)
                    })


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