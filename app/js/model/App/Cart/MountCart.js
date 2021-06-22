import {
    CartLS,
    Redom
} from '../../../../libs/libs'

import {
    Cart
} from './Cart'


const MountCart = (root) => {

    const cart = new Cart('Cart')

    Redom.mount(root, cart)
    cart.update(CartLS.list())


}


export {
    MountCart
}