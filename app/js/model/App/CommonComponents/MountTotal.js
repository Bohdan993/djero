import {
    CartLS,
    Redom
} from '../../../../libs/libs'

import {
    Total
} from './Total'


const MountTotals = (roots) => {


    function forEachEl(el, ind) {
        const total = new Total()

        Redom.mount(el, total)

        total.update(CartLS.total())

    }

    roots.forEach(forEachEl)

}


export {
    MountTotals
}