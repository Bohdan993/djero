import {
    $
} from "../../../libs/libs"
import { OPEN_POPUP_LINK } from "./Constants";

import settings from './MagnificPopupSettings';


const InitMagnificPopups = () => {
    
    $(OPEN_POPUP_LINK).magnificPopup(settings);

}


export default InitMagnificPopups