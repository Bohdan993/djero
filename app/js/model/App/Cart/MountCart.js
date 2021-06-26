import {
    CartLS,
    Redom
} from '../../../../libs/libs'

import {
    Cart
} from './Cart'


const MountCart = (root, body, data) => {

    const cart = new Cart('Cart', body, data)

    Redom.mount(root, cart)
    cart.update(CartLS.list())


}


export {
    MountCart
}

