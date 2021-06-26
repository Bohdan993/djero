import {
    Redom,
    CartLS
} from '../../../../libs/libs'
import {
    OrderForm
} from './OrderForm'
import {
    OrderPreview
} from './OrderPreview'




class OrderFormMain {
    constructor() {
        this.mainEl = Redom.place(Redom.el("form.order-popup__form#order-popup__form", {
                method: 'POST'
            },
            Redom.el('div.order-popup__form-layer',
                this.form = new OrderForm()
            ),
            Redom.el('div.order-popup__preview-layer',
                this.preview = new OrderPreview()
            ),
        ))

        this.emptyEl = Redom.place(Redom.el('div.order-popup__empty', 'Ви ще не додали в корзину жодного товару'))

        this.el = Redom.el('div.order-popup__form-wrapper',
            (this.mainEl),
            (this.emptyEl)
        )

        this.submitHandler = (e) => {
            e.preventDefault()

        }

        this.cartupdateeventHandler = (e) => {
            this.update(CartLS.list())
        }

        this.mainEl._el.addEventListener('submit', this.submitHandler)
    }

    update(data) {

        data.length ? (this.mainEl.update(true), this.emptyEl.update(false)) :
            (this.mainEl.update(false), this.emptyEl.update(true))

        this.preview.update(data)
    }

    onmount() {
        document.addEventListener('cartupdateevent', this.cartupdateeventHandler)
    }


    onunmoun() {
        document.removeEventListener('cartupdateevent', this.cartupdateeventHandler)
    }

}

export {
    OrderFormMain
}