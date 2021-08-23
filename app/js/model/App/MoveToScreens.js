import {
    $
} from '../../../libs/libs'
import settings from './MagnificPopupSettings'
import {
    SetSecondBranchPopupSettings
} from './InitMagnificPopupSecondBranch'
import {
    menuClickEvent
} from './CustomEvents'



function clickHandler(body, data, timeout, e) {

    const partialSettings = {
        items: {
            src: '#second-branch-popup'
        }
    }

    const fullSettings = Object.assign({}, settings, partialSettings, SetSecondBranchPopupSettings(body, data))



    const isPopupScreen = this.getAttribute('data-is-popup') === 'true' ? true : false
    const isSilentLink = this.getAttribute('data-silent') === 'true' ? true : false
    const anchor = this.getAttribute('data-to')
    const position = this.getAttribute('data-position')


    if (position === 'popup') {

        menuClickEvent.detail.anchor = anchor
        document.dispatchEvent(menuClickEvent)

        if (isPopupScreen) {
            $.fn.fullpage.moveTo(anchor)
            return
        }

        $.magnificPopup.instance.close()

        if (isSilentLink) {
            $.fn.fullpage.silentMoveTo(anchor)
            return
        }

        setTimeout(function () {
            $.fn.fullpage.moveTo(anchor)
        }, timeout)

        return
    }


    if (position === 'main') {
        menuClickEvent.detail.anchor = anchor
        document.dispatchEvent(menuClickEvent)

        if (!isPopupScreen) {
            $.fn.fullpage.moveTo(anchor)
            return
        }

        $.magnificPopup.open(fullSettings)

        setTimeout(function () {
            $.fn.fullpage.moveTo(anchor)
        }, timeout)


        return
    }

    if (position === 'menu') {

        if (!isPopupScreen) {
            $.magnificPopup.instance.close()
            setTimeout(function () {
                $.fn.fullpage.moveTo(anchor)
            }, timeout)
            return
        }


        $.magnificPopup.open(fullSettings)


        setTimeout(function () {
            $.fn.fullpage.moveTo(anchor)
        }, timeout)

        return
    }


}


const MoveToScreens = (links, body, data) => {

    const timeout = 1000

    function forEachLink(el, ind) {
        el.addEventListener('click', clickHandler.bind(el, body, data, timeout))
    }

    links.forEach(forEachLink)

}


export default MoveToScreens


export {
    clickHandler as moveToScreenFuncion
}