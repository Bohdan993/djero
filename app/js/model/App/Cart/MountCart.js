import {
    CartLS,
    Redom
} from '../../../../libs/libs'

import {
    CartList
} from './CartList'


const MountCart = (root) => {

    const cartList = new CartList('Cart')

    Redom.mount(root, cartList)
    cartList.update(CartLS.list())


}


export {
    MountCart
}