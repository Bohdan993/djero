import {
    CartLS,
    Redom
} from '../../../../libs/libs'
import {
    declOfNum,
    // calcDiscount
} from '../Helpers'




class OrderItem {
    constructor() {
        this.el = Redom.el('li.order-popup__product-list-item',
            Redom.el('div.order-popup__product-item-img-wrapper',
                this.img = Redom.el('img.order-popup__product-item-img')),
            this.count = Redom.el('p.order-popup__product-item-count'),
            this.price = Redom.el('p.order-popup__product-item-price'))
    }


    update(data) {
        Redom.setAttr(this.img, {
            src: data.src,
            alt: data.title
        })

        Redom.setAttr(this.count, {
            innerText: `${data.quantity} ${ declOfNum(+data.quantity, data.id === 'box' ? ['ящик', 'ящики', 'ящиків'] : ['упаковка', 'упаковки', 'упаковок'])}`
        })

        Redom.setAttr(this.price, {
            innerText: `${ data.price * data.quantity} грн`
        })


    }
}


export {
    OrderItem
}