import {
    CartLS,
    Redom
} from '../../../../libs/libs'



class ProductsCounter {
    constructor() {
        this.el = Redom.el("span.sidebar__cart-counter")

        this.cartupdateeventHandler = (e) => {
            this.update(CartLS.total(function(a, b, c){
                return a + +b.quantity
            }))
        }
    }

    update(data) {
        Redom.setAttr(this.el, {
            innerText: `${data}`
        })
    }

    onmount() {

        document.addEventListener('cartupdateevent', this.cartupdateeventHandler)
    }


    onunmount() {
        document.removeEventListener('cartupdateevent', this.cartupdateeventHandler)

    }
}

export {
    ProductsCounter
}