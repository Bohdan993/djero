import {
    $
} from "../../../libs/libs"
import {
    OPEN_POPUP_LINK,
    OPEN_POPUP_LINK_SECONDARY
} from "./Constants";

import settings from './MagnificPopupSettings';


const settingsSecondary = {
        ...settings,
        ...{
            mainClass: 'popup-secondary zoom-in-animation my-mfp-zoom-in',
            callbacks: {
            },
            closeOnBgClick: true
        }
    }


const InitMagnificPopups = () => {


    $(OPEN_POPUP_LINK).magnificPopup(settings)
    $(OPEN_POPUP_LINK_SECONDARY).magnificPopup(settingsSecondary)
    

}


export default InitMagnificPopups