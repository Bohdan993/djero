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


const MoveToScreens = (links, body, data) => {

    const timeout = 500

    function clickHandler(e) {

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
            console.log('rrrhhhr')
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
            console.log('dfrrrr')
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


    function forEachLink(el, ind) {
        el.addEventListener('click', clickHandler)
    }

    links.forEach(forEachLink)

}


export default MoveToScreens