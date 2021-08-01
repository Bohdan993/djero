import {
    $
} from "../../../libs/libs"
import {
    $backgroundVideoAnimation1,
    $backgroundVideoAnimation2
} from "../../view";


const ChangeVideoSource = () => {
    const windowWidth = $(window).width()

    if (windowWidth < 576) {
        //It is a small screen
        $backgroundVideoAnimation1.insertAdjacentHTML("beforeend", "<source src='video/Djero-animation-2-360.mp4' type='video/mp4' >")
        $backgroundVideoAnimation2.insertAdjacentHTML("beforeend", "<source src='video/Djero-animation1-360.mp4' type='video/mp4' >")
    } else {
        //It is a big screen or desktop
        $backgroundVideoAnimation1.insertAdjacentHTML("beforeend", "<source src='video/Djero-Main-Animation-2.mp4' type='video/mp4' >")
        $backgroundVideoAnimation2.insertAdjacentHTML("beforeend", "<source src='video/Djero-Main-Animation-1.mp4' type='video/mp4' >")
    }
}


export default ChangeVideoSource
