import {
    $
} from "../../../libs/libs"

const ClosePopup = (btns) => {

    function clickHandler(e) {
        console.log('dfdff')
        $.magnificPopup.close()
    }

    function forEachBtn(elem) {
        elem.addEventListener('click', clickHandler)
    }

    btns.forEach(forEachBtn)
}


export default ClosePopup