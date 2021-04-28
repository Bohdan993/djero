import {
    $
} from "../../../libs/libs"

import settings from './MagnificPopupSettings';


const InitMagnificPopups = () => {
    $('.open-popup-link').magnificPopup(settings);

}


export default InitMagnificPopups