import {
    Redom
} from '../../../../libs/libs'

import {
   CleanBasket
} from './CleanBasket'


const MountCleanBasket = (roots) => {


    function forEachEl(el, ind) {
        const cleanBasket = new CleanBasket('catalog')

        Redom.mount(el, cleanBasket)

    }

    roots.forEach(forEachEl)

}


export {
    MountCleanBasket
}