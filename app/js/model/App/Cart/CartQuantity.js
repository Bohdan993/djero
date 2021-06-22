import {
    CartLS,
    Redom
} from '../../../../libs/libs'


class CartQuantity {
    constructor({
        id = '',
        name = '',
        price = '',
        src = '',
        weight = ''
    }) {
        this.data = {}
        this.prevQuantity = 0
        this.id = id
        this.name = name
        this.price = price
        this.src = src
        this.weight = weight
        this.el = Redom.el('div.popup__card-quantity-layer.cart-popup__card-quantity-layer',
            this.minus = Redom.el('span.popup__card-quantity-minus.popup__card-quantity-control.cart-popup__card-quantity-minus', '-'),
            this.count = Redom.el('span.popup__card-quantity-count.popup__card-quantity-count', '0'),
            this.plus = Redom.el('span.popup__card-quantity-plus.popup__card-quantity-control.cart-popup__card-quantity-plus', '+')
        )


        this.minusHandler = (e) => {

            CartLS.quantity(this.id || this.data?.id, -1)

            Redom.setAttr(this.count, {
                innerHTML: CartLS.get(this.id || this.data?.id) && CartLS.get(this.id || this.data?.id).quantity || 0
            })
        }

        this.plusHandler = (e) => {

            if (!CartLS.exists(this.id || this.data?.id)) {
                CartLS.add({
                    id: this.id || this.data?.id,
                    name: this.name || this.data.name,
                    price: this.price || this.data.price,
                    weight: this.weight || this.data.weight,
                    src: this.src || this.data.src
                })

                Redom.setAttr(this.count, {
                    innerHTML: CartLS.get(this.id || this.data?.id) && CartLS.get(this.id || this.data?.id).quantity || 0
                })

                return
            }

            CartLS.quantity(this.id || this.data?.id, 1)

            Redom.setAttr(this.count, {
                innerHTML: CartLS.get(this.id || this.data?.id) && CartLS.get(this.id || this.data?.id).quantity || 0
            })
        }

        this.cartupdateeventHandler = (e) => {
            if(this.prevQuantity !==  CartLS.get(this.id || this.data?.id)?.quantity) {
                this.update(CartLS.get(this.id || this.data?.id))
                this.prevQuantity = CartLS.get(this.id || this.data?.id)?.quantity
            }
            
        }


        this.plus.addEventListener('click', this.plusHandler)
        this.minus.addEventListener('click', this.minusHandler)

    }

    update(data) {

        if (data) {
            Redom.setAttr(this.count, {
                innerHTML: data.quantity
            })
        } else {
            Redom.setAttr(this.count, {
                innerHTML: 0
            })
        }

        this.data = data
    }

    onmount() {
        document.addEventListener('cartupdateevent', this.cartupdateeventHandler)
    }


    onunmoun(){
        document.removeEventListener('cartupdateevent', this.cartupdateeventHandler)
    }
}


export {
    CartQuantity
}