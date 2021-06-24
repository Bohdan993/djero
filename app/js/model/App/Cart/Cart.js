import {
    CartLS,
    Redom
} from '../../../../libs/libs'
import {
    CartList
} from './CartList'


class Cart {
    constructor(type) {
        this.type = type
        this.el = Redom.el("div.cart-popup__cart-main-wrapper",
            this.cartList = new CartList('Cart'),
            this.netto = Redom.el('p.popup__note.cart-popup__note', '* Вага нетто'),
            this.summary = Redom.el('div.cart-popup__summary',
                Redom.el('div.popup__card-btn-wrapper.cart-popup__card-btn-wrapper',
                Redom.el('a.popup__card-btn.cart-popup__card-btn.btn.transparent.menu-link', {
                    href: '#',
                    'data-is-popup': false,
                    'data-to': 'main-screen',
                    'data-position': 'popup',
                    'data-silent': true
                })),
                Redom.el('button.popup__basket-clear.cart-popup__basket-clear.transparent-btn.with-underline',
                    Redom.el('span', 'Очистити корзину')),
                Redom.el('div.cart-popup__total',
                    Redom.el('p.popup__total-price.cart-popup__total-price',
                        Redom.el('span')),
                    Redom.el('a.popup__btn.cart-popup__btn btn.red-orange.open-popup-link',
                        Redom.el('span', 'Оформити замовлення'), {
                            href: '#order-popup'
                        })))

        )


    }

    update(data) {
        // this.list.update(data)
    }

}

export {
    CartList
}