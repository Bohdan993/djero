import {
    CartLS,
    Redom
} from '../../../../libs/libs'



class Total {
    constructor() {
        this.el = Redom.el("span")

        this.cartupdateeventHandler = (e) => {
            this.update(CartLS.total())
        }
    }

    update(data) {
        Redom.setAttr(this.el, {
            innerText: `${data} грн.`
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
    Total
}