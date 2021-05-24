import {
    $
} from '../../../libs/libs'
import settings from './MagnificPopupSettings'
import {
    SetSecondBranchPopupSettings
} from './InitMagnificPopupSecondBranch'


const MoveToScreens = (links, body, data) => {


    function clickHandler(e) {

        const partialSettings = {
            items: {
                src: '#second-branch-popup'
            }
        }

        const fullSettings = Object.assign({}, settings, partialSettings, SetSecondBranchPopupSettings(body, data))



        const isPopupScreen = this.getAttribute('data-is-popup') === 'true' ? true : false
        const anchor = this.getAttribute('data-to')
        const position = this.getAttribute('data-position')


        if (position === 'popup') {
            if (isPopupScreen) {
                $.fn.fullpage.moveTo(anchor)
                return
            }

            $.magnificPopup.instance.close()

            setTimeout(function () {
                $.fn.fullpage.moveTo(anchor)
            }, 500)

            return
        }


        if (position === 'main') {

            if (!isPopupScreen) {
                $.fn.fullpage.moveTo(anchor)
                return
            }

            $.magnificPopup.open(fullSettings)

            setTimeout(function () {
                $.fn.fullpage.moveTo(anchor)
            }, 500)


            return
        }

        if (position === 'menu') {

            if (isPopupScreen) {
                $.fn.fullpage.moveTo(anchor)
                return
            }


            $.magnificPopup.open(fullSettings)
            

            setTimeout(function () {
                $.fn.fullpage.moveTo(anchor)
            }, 500)

            return
        }




    }


    function forEachLink(el, ind) {
        el.addEventListener('click', clickHandler)
    }

    links.forEach(forEachLink)

}


export default MoveToScreens