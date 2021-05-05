import {
    $
} from '../../../libs/libs'
import {
    $backgroundVideoAnimation1
} from '../../view'
import {
    SIDEBAR__LAYOUT
} from './Constants'


const InitFullPage = () => {
    $('.fullpage').fullpage({
        normalScrollElements: '.' + SIDEBAR__LAYOUT,
        scrollOverflow: true,
        scrollOverflowReset: true,
        lazyLoading: true,
        scrollingSpeed: 350,
        anchors: ['main-screen', 'screen-2', 'screen-3', 'screen-4', 'screen-5'],
        // fadingEffect:true,
        //options here
        // navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips: ['firstSlide', 'secondSlide'],
        // autoScrolling:true,
        // scrollHorizontally: true
        afterLoad,
    })


    function afterLoad(origin, destination, direction) {

        $.fn.fullpage.reBuild()
        if (destination === 1) {
            $backgroundVideoAnimation1.play()
        }
    }

}

export default InitFullPage