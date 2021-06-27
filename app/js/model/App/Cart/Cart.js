import {
    $,
    CartLS,
    Redom
} from '../../../../libs/libs'
import {
    CleanBasket
} from '../CommonComponents/CleanBasket'
import { fullSettingsFunction } from '../Helpers'
import {
    moveToScreenFuncion
} from '../MoveToScreens'
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
                new CleanBasket('cart'),
                Redom.el('div.cart-popup__total',
                    Redom.el('p.popup__total-price.cart-popup__total-price',
                        this.totalPrice = Redom.el('span')),
                    this.orderLink = Redom.el('a.popup__btn.cart-popup__btn btn.red-orange.open-popup-link',
                        Redom.el('span', 'Оформити замовлення'), {
                            href: '#order-popup'
                        })))

        ))
        this.emptyEl = Redom.place(Redom.el('div.popup__empty.cart-popup__empty',
            Redom.el('span.popup__empty-text.cart-popup__empty-text', 'Корзина порожня'),
            this.returnToCatalogLink = Redom.el(`button.popup__empty-return.cart-popup__return.transparent-btn.with-underline`,
                Redom.el('span', 'Перейти в каталог'))
        ))

        this.el = Redom.el('div.cart-popup__cart-wrapper',
            this.mainEl,
            this.emptyEl
        )

        this.cartupdateeventHandler = (e) => {
            this.update(CartLS.list())
        }

        this.orderLinkHandler = (e) => {
            $.magnificPopup.open(fullSettingsFunction('#order-popup'))
        }

        this.returnToCatalogHandler = (e) => {
            $.magnificPopup.open(fullSettingsFunction('#catalog-popup'))
        }


        this.backToMain.addEventListener('click', moveToScreenFuncion.bind(this.backToMain, body, propData, 1000))
        this.orderLink.addEventListener('click', this.orderLinkHandler)
        this.returnToCatalogLink.addEventListener('click', this.returnToCatalogHandler)

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