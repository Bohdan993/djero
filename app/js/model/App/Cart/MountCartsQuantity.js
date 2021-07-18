import {
    CartLS,
    Redom
} from '../../../../libs/libs'

import {
    CartQuantity
} from './CartQuantity'




const MountCartsQuantity = (roots) => {

    const data = {
        0: {
            id: 'pack',
            name: '1 упаковка',
            price: 35,
            src: "img/cookies-sandwich-big.png",
            weight: 120
        },
        1: {
            id: 'box',
            name: '1 ящик (30 упаковок)',
            price: 855,
            src: "img/box.png",
            weight: 3600
        }
    }

    function forEachEl(el, ind) {
        const quantity = new CartQuantity(data[ind])

        Redom.mount(el, quantity)

        quantity.update(CartLS.get(data[ind].id))

        
    }

    roots.forEach(forEachEl)

}


export {
    MountCartsQuantity
}