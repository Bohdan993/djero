import {
    CartLS,
    Redom
} from '../../../../libs/libs'
import { OrderFormMain } from './OrderFormMain'




const MountOrder = (root) => {


    const orderForm = new OrderFormMain()

    Redom.mount(root, orderForm)
    orderForm.update(CartLS.list())

}


export {
    MountOrder
}