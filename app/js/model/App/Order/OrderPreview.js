import {
    CartLS,
    Redom
} from '../../../../libs/libs'
import {
    declOfNum
} from '../Helpers'
import {
    OrderItem
} from './OrderItem'



class OrderPreview {
    constructor() {
        this.discountPrice = 0
        this.deliveryPrice = 0
        this.el = Redom.el('div.order-popup__preview',
            Redom.el('div.order-popup__preview-section.total-product-section',
                Redom.el('p.order-popup__product-text', 'Ваше замовлення'),
                this.productCount = Redom.el('p.order-popup__product-count')),
            Redom.el('div.order-popup__preview-section.product-list-section',
                this.orderList = Redom.list('ul.order-popup__product-list', OrderItem, 'id'),
                Redom.el('div.order-popup__return-basket-btn-wrapper',
                    Redom.el('a.order-popup__return-basket-btn.transparent-btn.with-underline.open-popup-link', {
                        href: '#cart-popup'
                    }, Redom.el('span', 'Повернутися в корзину')))),
            Redom.el('div.order-popup__preview-section.product-stats-section',
                Redom.el('ul.order-popup__list',
                    Redom.el('li.order-popup__list-item',
                        Redom.el('p.order-popup__list-item-text', 'Товар  на суму'),
                        this.productPrice = Redom.el('p.order-popup__list-item-price')),
                    Redom.el('li.order-popup__list-item',
                        Redom.el('p.order-popup__list-item-text', 'Вигода від знижок'),
                        this.discount = Redom.el('p.order-popup__list-item-price')),
                    Redom.el('li.order-popup__list-item',
                        Redom.el('p.order-popup__list-item-text', 'Доставка'),
                        this.delivery = Redom.el('p.order-popup__list-item-price')))),
            Redom.el('div.order-popup__preview-section.total-section',
                Redom.el('div.popup__total.order-popup__total',
                    Redom.el('p.popup__total-text.order-popup__total-text', 'Разом'),
                    Redom.el('p.popup__total-price.order-popup__total-price',
                        this.totalPrice = Redom.el('span'))),
                this.submit = Redom.el('button.popup__btn.order-popup__btn.btn.red-orange.big', {
                        type: 'submit'
                    },
                    Redom.el('span', 'Замовлення підтверджую')))
        )
    }


    update(data) {
        console.log(data)
        Redom.setAttr(this.productCount, {
            innerText: `${data.length} ${declOfNum(data.length, ['товар', 'товара', 'товарів'])}`
        })

        Redom.setAttr(this.productPrice, {
            innerText: `${CartLS.total()} грн`
        })

        Redom.setAttr(this.discount, {
            innerText: `0 грн`
        })

        Redom.setAttr(this.delivery, {
            innerText: CartLS.total() > 500 ? 'Безкоштовна' : 'За тарифами перевізника'
        })


        Redom.setAttr(this.totalPrice, {
            innerText: `${+CartLS.total() - this.discountPrice + this.deliveryPrice} грн`
        })

        this.orderList.update(data)

    }
}


export {
    OrderPreview
}