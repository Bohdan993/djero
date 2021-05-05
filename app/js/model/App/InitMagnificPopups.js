import {
    $
} from "../../../libs/libs"
import {
    OPEN_POPUP_LINK,
    OPEN_POPUP_LINK_MENU,
    OPEN_POPUP_LINK_SECONDARY
} from "./Constants";
import {
    addClass,
    removeClass
} from "./Helpers";

import settings from './MagnificPopupSettings';





const InitMagnificPopups = (body) => {

    const settingsSecondary = {
        ...settings,
        ...{
            mainClass: 'zoom-in-animation my-mfp-zoom-in',
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


    const settingMenu = {
        ...settings,
        ...{
            mainClass: 'zoom-in-animation my-mfp-zoom-in',
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


    $(OPEN_POPUP_LINK).magnificPopup(settings)
    $(OPEN_POPUP_LINK_SECONDARY).magnificPopup(settingsSecondary)
    $(OPEN_POPUP_LINK_MENU).magnificPopup(settingMenu)


}


export default InitMagnificPopups