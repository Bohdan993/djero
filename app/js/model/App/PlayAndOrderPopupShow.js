import {
    $
} from "../../../libs/libs"


import settings from './MagnificPopupSettings';

const PlayAndOrderPopupShow = () => {
    
    const partialSettings = {
        items: {
            src: '#play-and-order-popup'
        }
    }

    const fullSettings = Object.assign({}, settings, partialSettings)

    $.magnificPopup.open(fullSettings, 0)

}


export default PlayAndOrderPopupShow