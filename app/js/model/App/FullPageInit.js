import {
    $
} from '../../../libs/libs'
import { $backgroundVideoAnimation1 } from '../../view'
import { SIDEBAR__LAYOUT } from './Constants'


const FullPageInit = () => {
    $('.fullpage').fullpage({
        normalScrollElements: '.' + SIDEBAR__LAYOUT,
        scrollOverflow: true,
        //options here
        // navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips: ['firstSlide', 'secondSlide'],
        // autoScrolling:true,
        // scrollHorizontally: true
        afterLoad,
    })


    function afterLoad(origin, destination, direction) {
        if(destination === 1) {
            $backgroundVideoAnimation1.play()
        }
    }

}

export default FullPageInit