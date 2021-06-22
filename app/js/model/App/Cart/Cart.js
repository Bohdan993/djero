import {
    CartLS,
    Redom
} from '../../../../libs/libs'
import {
    CartItem
} from './CartItem'


class Cart {
    constructor(type) {
        this.type = type
        this.el = Redom.el("div.popup__cards-wrapper.cart-popup__cards-wrapper")
        this.list = Redom.list(this.el, CartItem, 'id', this.type)


        this.cartupdateeventHandler = (e) => {
            this.update(CartLS.list())
        }
    }

    update(data) {
        this.list.update(data)
    }

    onmount() {


        document.addEventListener('cartupdateevent', this.cartupdateeventHandler)
    }


    onunmount() {
        document.removeEventListener('cartupdateevent', this.cartupdateeventHandler)
    }
}

export {
    Cart
}