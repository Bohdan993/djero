import {
    $
} from "../../../libs/libs"


import settings from './MagnificPopupSettings';

const PlayAndOrderPopupShow = () => {
    const pertialSettings = {
        items: {
            src: '#play-and-order-popup'
        }
    }

    const fullSettings = Object.assign({}, settings, pertialSettings)

    $.magnificPopup.open(fullSettings, 0);
}


export default PlayAndOrderPopupShow