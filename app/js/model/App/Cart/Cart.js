import {
    CartLS,
    Redom
} from '../../../../libs/libs'
import { moveToScreenFuncion } from '../MoveToScreens'
import {
    CartList
} from './CartList'


class Cart {
    constructor(type, body, propData) {
        console.log(body, propData)
        this.type = type
        this.mainEl = Redom.place(Redom.el("div.cart-popup__cart-main-wrapper",
            this.cartList = new CartList('Cart'),
            this.netto = Redom.el('p.popup__note.cart-popup__note', '* Вага нетто'),
            this.summary = Redom.el('div.cart-popup__summary',
                Redom.el('div.popup__card-btn-wrapper.cart-popup__card-btn-wrapper',
                    this.backToMain = Redom.el('a.popup__card-btn.cart-popup__card-btn.btn.transparent.menu-link', {
                        href: '#',
                        'data-is-popup': false,
                        'data-to': 'main-screen',
                        'data-position': 'popup',
                        'data-silent': true,
                        innerText: 'На головну'
                    })),
                Redom.el('button.popup__basket-clear.cart-popup__basket-clear.transparent-btn.with-underline',
                    Redom.el('span', 'Очистити корзину')),
                Redom.el('div.cart-popup__total',
                    Redom.el('p.popup__total-price.cart-popup__total-price',
                        this.totalPrice = Redom.el('span')),
                    Redom.el('a.popup__btn.cart-popup__btn btn.red-orange.open-popup-link',
                        Redom.el('span', 'Оформити замовлення'), {
                            href: '#order-popup'
                        })))

        ))
        this.emptyEl = Redom.place(Redom.el('div.order-popup__empty', 'Корзина порожня'))

        this.el = Redom.el('div.cart-popup__cart-wrapper',
            this.mainEl,
            this.emptyEl
        )

        this.cartupdateeventHandler = (e) => {
            this.update(CartLS.list())
        }


        this.backToMain.addEventListener('click', moveToScreenFuncion.bind(this.backToMain, body, propData, 1000))


    }

    update(data) {
        data.length ? (this.mainEl.update(true), this.emptyEl.update(false)) :
            (this.mainEl.update(false), this.emptyEl.update(true))
        Redom.setAttr(this.totalPrice, {
            innerText: `${CartLS.total()} грн`
        })

        this.cartList.update(data)
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