import {
    CartLS,
    Redom
} from '../../../../libs/libs'

import {
    ProductsCounter
} from './ProductsCounter'


const MountProductCounter = (root) => {

    const productCounter = new ProductsCounter()

    Redom.mount(root, productCounter)

    productCounter.update(CartLS.total(function(a, b, c){
        return a + +b.quantity
    }))

}


export {
    MountProductCounter
}