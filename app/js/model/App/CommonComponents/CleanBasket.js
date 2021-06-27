import {
    CartLS,
    Redom
} from '../../../../libs/libs'



class CleanBasket {
    constructor(clazz) {
        this.el = Redom.el(`button.popup__basket-clear.${clazz}-popup__basket-clear.transparent-btn.with-underline`,
            Redom.el('span', 'Очистити корзину'))


        this.clickHandler = (e) => {
            CartLS.destroy()
        }


        this.el.addEventListener('click', this.clickHandler)
    }

    update(data) {}

}

export {
    CleanBasket
}