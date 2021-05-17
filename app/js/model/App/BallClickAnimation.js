import {
    $
} from '../../../libs/libs'
import {
    BOTTOM_ANIMATION_CLASS,
    LEFT_ANIMATION_CLASS,
    TOP_ANIMATION_CLASS
} from "./Constants"
import {
    addClass,
    removeClass
} from "./Helpers"

import PlayAndOrderPopupShow from './PlayAndOrderPopupShow';


function changeClassesReverse(data) {
    const {
        ballWrapper,
        firstAnimation,
        secondAnimation,
        header,
        body,
        footer,
        pageHeader
    } = data
    addClass(ballWrapper, 'active')
    addClass(firstAnimation, 'active')
    removeClass(secondAnimation, 'active')
    removeClass(pageHeader, TOP_ANIMATION_CLASS)
    removeClass(header, TOP_ANIMATION_CLASS)
    removeClass(body, LEFT_ANIMATION_CLASS)
    removeClass(footer, BOTTOM_ANIMATION_CLASS)

}


const BallClickAnimation = (data) => {

    const {
        ball,
        ballWrapper,
        firstAnimation,
        secondAnimation,
        header,
        body,
        footer,
        pageHeader
    } = data

    function ballClickHandler(e) {
        changeClasses()
        secondAnimationAction()

        // console.log('click')
    }

    function changeClasses() {
        removeClass(ballWrapper, 'active')
        removeClass(firstAnimation, 'active')
        addClass(secondAnimation, 'active')
        addClass(pageHeader, TOP_ANIMATION_CLASS)
        addClass(header, TOP_ANIMATION_CLASS)
        addClass(body, LEFT_ANIMATION_CLASS)
        addClass(footer, BOTTOM_ANIMATION_CLASS)

    }



    function secondAnimationAction() {
        firstAnimation.pause()
        secondAnimation.play()
    }

    function secondAnimationEndedHandler(e) {
        PlayAndOrderPopupShow()
    }

    function popupOpenHandler(e) {
        const instance = $.magnificPopup.instance
        if (instance.currItem.src = "#play-and-order-popup") {
            instance.bgOverlay[0].addEventListener('transitionend', transitionEndHandler)
        }

    }


    function transitionEndHandler() {
        changeClassesReverse(data)
        secondAnimation.currentTime = 0;
        firstAnimation.play()
    }




    // let promise1 = new Promise(function (res, rej) {
    //     header.addEventListener('animationend', headerAnimationHandler)

    //     function headerAnimationHandler(e) {
    //         console.log('ended')
    //         res('ok')
    //     }
    // })

    // let promise2 = new Promise(function (res, rej) {
    //     body.addEventListener('animationend', bodyAnimationHandler)

    //     function bodyAnimationHandler(e) {


    //         res('ok')
    //     }
    // })

    // let promise3 = new Promise(function (res, rej) {
    //     footer.addEventListener('animationend', footerAnimationHandler)

    //     function footerAnimationHandler(e) {

    //         res('ok')
    //     }
    // })

    // Promise.all([promise1, promise2, promise3])
    //     .then(res => {

    //     })
    //     .catch(err => console.error(err))

    ball.addEventListener('click', ballClickHandler)
    secondAnimation.addEventListener('ended', secondAnimationEndedHandler)
    $(document).on('mfpOpen', popupOpenHandler);




}


export default BallClickAnimation


export {
    changeClassesReverse
}