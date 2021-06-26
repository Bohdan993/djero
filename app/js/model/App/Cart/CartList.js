import {
    CartLS,
    Redom
} from '../../../../libs/libs'
import {
    CartItem
} from './CartItem'


class CartList {
    constructor(type) {
        this.type = type
        this.el = Redom.el("div.popup__cards-wrapper.cart-popup__cards-wrapper")
        this.list = Redom.list(this.el, CartItem, 'id', this.type)



    }

    update(data) {
        this.list.update(data)
    }


}

export {
    CartList
}