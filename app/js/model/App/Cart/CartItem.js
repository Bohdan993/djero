import {
    CartLS,
    Redom
} from '../../../../libs/libs'
import {
    CartQuantity
} from './CartQuantity'





class CartItem {

    constructor(type) {
        this.type = type
        this.data = {}
        this.el = Redom.el('div.popup__card-layer.cart-popup__card-layer',
            Redom.el('div.popup__card.cart-popup__card',
                Redom.el('figure.popup__card-boxing.cart-popup__card-boxing',
                    Redom.el('div.popup__card-img-wrapper.cart-popup__card-img-wrapper',
                        this.image = Redom.el('img.popup__card-img.cart-popup__card-img', {
                            alt: 'Cookies box',
                            src: ''
                        })),
                    Redom.el('figcaption.popup__card-mass.cart-popup__card-mass',
                        this.name = Redom.el('span', '1 упаковка'),
                        this.weight = Redom.el('span', '120 г.'))
                ),
                this.price = Redom.el('p.popup__card-price.cart-popup__card-price', '35 грн.'),
                this.cartQuantity = new CartQuantity(this.data),
                Redom.el('p.popup__card-total-price.cart-popup__card-total-price'),
                this.remove = Redom.el('button.popup__basket-remove.cart-popup__basket-remove.transparent-btn',
                    Redom.el('i.ico.rubbish-ico.cart-popup__rubbish-ico',
                        Redom.svg('svg',
                            Redom.svg('use', {
                                xlink: {
                                    href: "img/sprites/svg/symbol/sprite.svg#rubbish-bin"
                                }
                            }))),
                    Redom.el('span', 'Прибрати з корзини'))
            ))

        this.removeHandler = (e) => {
            CartLS.remove(this.data.id)
        }


        this.remove.addEventListener('click', this.removeHandler)

    }


    update(data, index, items, context) {

        Redom.setAttr(this.image, {
            src: data.src
        })
        Redom.setAttr(this.name, {
            innerText: data.name
        })
        Redom.setAttr(this.weight, {
            innerText: data.weight/1000 >= 1 ? `${(data.weight / 1000)} кг.`  : `${data.weight} г.`
        })
        Redom.setAttr(this.price, {
            innerText: `${data.price} грн.`
        })

        this.cartQuantity.update(CartLS.get(data.id))

        this.data = data
    }
}


export {
    CartItem
}