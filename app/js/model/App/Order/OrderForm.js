import {
    Redom,
    CartLS
} from '../../../../libs/libs'
import {
    InitChoices
} from '../..'
import {
    el,
    setAttr
} from 'redom'



function createLegeng(text) {
    return Redom.el('legend.legend.order-popup__legend', `${text}`)
}

function createFieldRow(...inputs) {
    const result = inputs.map((input) => {
        return Redom.el('div', {
                ...input.wrapper
            },
            Redom.el('input', {
                ...input.input
            }),
            Redom.el('label', {
                ...input.label
            }),
        )
    })
    return inputs.some(el => 'row' in el) ? Redom.el('div.field-row', {
            ...inputs.filter(x => 'row' in x)[0]?.row
        }, result) :
        Redom.el('div.field-row', result)
}


class HiddenInput {
    constructor(){
        this.el = Redom.el('input.hidden', {
            type: 'hidden',
            name: 'products[]'
        })
    }

    update(data){
        Redom.setAttr(this.el, {
            value: `${data.id}|${data.quantity}`
        })
    }
}


class HiddenFieldset {
    constructor() {
        this.data = {}
        this.el = Redom.place(this.list = Redom.list('fieldset.fieldset', HiddenInput))
    }


    update(data, context) {
        this.el.update(data)
        this.list.update(context)
        this.data = context
    }

}


class OrderForm {
    constructor() {
        this.choices = null
        this.el = Redom.el("div.order-popup__form-wrapper",
            Redom.el('fieldset.fieldset',
                createLegeng('Данні покупця'),
                createFieldRow({
                    input: {
                        class: 'field',
                        id: 'name-input',
                        type: 'text',
                        name: 'name-input',
                        required: true,
                        placeholder: ' ',
                    },
                    label: {
                        class: 'text-field-label',
                        innerText: `Iм'я`,
                        for: 'name-input'
                    },
                    wrapper: {
                        class: 'field-wrapper'
                    }

                }, {
                    input: {
                        class: 'field',
                        id: 'surname-input',
                        name: 'surname-input',
                        type: 'text',
                        required: true,
                        placeholder: ' ',
                    },
                    label: {
                        class: 'text-field-label',
                        innerText: `Прізвище`,
                        for: 'surname-input'
                    },
                    wrapper: {
                        class: 'field-wrapper'
                    }

                }),
                createFieldRow({
                    input: {
                        class: 'field',
                        id: 'tel-input',
                        name: 'tel-input',
                        type: 'tel',
                        placeholder: ' ',
                    },
                    label: {
                        class: 'text-field-label',
                        innerText: `Телефон`,
                        for: 'tel-input'
                    },
                    wrapper: {
                        class: 'field-wrapper'
                    }

                }, {
                    input: {
                        class: 'field',
                        id: 'email-input',
                        name: 'email-input',
                        type: 'email',
                        placeholder: ' ',
                    },
                    label: {
                        class: 'text-field-label',
                        innerText: `E-mail`,
                        for: 'email-input'
                    },
                    wrapper: {
                        class: 'field-wrapper'
                    }

                }),
                Redom.el('div.field-row',
                    Redom.el('div.field-wrapper.textarea-field-wrapper',
                        Redom.el('textarea.field.textarea', {
                            name: 'comment-textarea',
                            rows: '5',
                            placeholder: ' ',
                            id: 'comment-textarea',
                            value: ''
                        }),
                        Redom.el('label.textarea-field-label', 'Коментар', {
                            for: 'comment-textarea'
                        })))
            ),
            Redom.el('fieldset.fieldset',
                createLegeng('Спосіб оплати'),
                createFieldRow({
                    input: {
                        class: 'field',
                        id: 'payment-radio-1',
                        checked: true,
                        type: 'radio',
                        name: 'payment-radio',
                        value: 'cash'
                    },
                    label: {
                        innerText: `Готівкою`,
                        for: 'payment-radio-1'
                    },
                    wrapper: {
                        class: 'field-wrapper order-popup__radio-field-wrapper'
                    }

                }, {
                    input: {
                        class: 'field',
                        id: 'payment-radio-2',
                        checked: false,
                        type: 'radio',
                        name: 'payment-radio',
                        value: 'card'
                    },
                    label: {
                        innerText: `Банківською картою`,
                        for: 'payment-radio-2'
                    },
                    wrapper: {
                        class: 'field-wrapper order-popup__radio-field-wrapper'
                    }

                }),
                createFieldRow({
                    input: {
                        class: 'field',
                        id: 'payment-radio-3',
                        checked: false,
                        type: 'radio',
                        name: 'payment-radio',
                        value: 'account'
                    },
                    label: {
                        innerText: `Розрахунковий рахунок`,
                        for: 'payment-radio-3'
                    },
                    wrapper: {
                        class: 'field-wrapper order-popup__radio-field-wrapper'
                    }

                })
            ),
            Redom.el('fieldset.fieldset',
                createLegeng('Доставка'),
                this.delivery = createFieldRow({
                    input: {
                        class: 'field',
                        id: 'delivery-radio-1',
                        checked: true,
                        type: 'radio',
                        name: 'delivery-radio',
                        'data-delivery-type': 'self-pickup',
                        value: 'self-pickup'
                    },
                    label: {
                        innerText: `Cамовивіз з Нової Пошти`,
                        for: 'delivery-radio-1'
                    },
                    wrapper: {
                        class: 'field-wrapper order-popup__radio-field-wrapper'
                    }

                }, {
                    input: {
                        class: 'field',
                        id: 'delivery-radio-2',
                        checked: false,
                        type: 'radio',
                        name: 'delivery-radio',
                        'data-delivery-type': 'courier',
                        value: 'courier'
                    },
                    label: {
                        innerText: `Кур'єр Нова Пошта`,
                        for: 'delivery-radio-2'
                    },
                    wrapper: {
                        class: 'field-wrapper order-popup__radio-field-wrapper'
                    }

                }),
                this.deliveryRow1 = Redom.place(Redom.el('div.field-row', {
                        'data-delivery': 'self-pickup'
                    },
                    Redom.el('div.field-wrapper.order-popup__select-field-wrapper',
                        this.departmentChoice = Redom.el('select.choice order-popup__select-field.department-select', {
                            name: 'department-select'
                        })))),
                this.deliveryRow2 = Redom.place(Redom.el('div.field-row', {
                        'data-delivery': 'courier'
                    },
                    Redom.el('div.field-wrapper.order-popup__select-field-wrapper',
                        this.townChoice = Redom.el('select.choice order-popup__select-field.town-select', {
                            name: 'town-select'
                        })),
                    Redom.el('div.field-wrapper',
                        Redom.el('input.field', {
                            type: 'text',
                            placeholder: ' ',
                            id: 'street-input',
                            name: 'street-input'
                        }),
                        Redom.el('label.text-field-label', {
                            for: 'street-input',
                            innerText: 'Вулиця'
                        })))),

                this.deliveryRow3 = Redom.place(createFieldRow({
                    input: {
                        class: 'field',
                        id: 'house-input',
                        type: 'text',
                        placeholder: ' ',
                        name: 'house-input'
                    },
                    label: {
                        innerText: `Будинок`,
                        class: 'text-field-label',
                        for: 'house-input'
                    },
                    wrapper: {
                        class: 'field-wrapper'
                    },
                    row: {
                        'data-delivery': 'courier'
                    }

                }, {
                    input: {
                        class: 'field',
                        id: 'flat-input',
                        type: 'text',
                        placeholder: ' ',
                        name: 'flat-input'
                    },
                    label: {
                        innerText: `Квартира`,
                        class: 'text-field-label',
                        for: 'flat-input'
                    },
                    wrapper: {
                        class: 'field-wrapper'
                    }

                }))
            ),
            Redom.el('fieldset.fieldset',
                createLegeng('Контактні данні отримувача замовлення'),
                this.contacts = createFieldRow({
                    input: {
                        class: 'field',
                        id: 'contacts-radio-1',
                        checked: true,
                        type: 'radio',
                        name: 'contacts-radio',
                        'data-contacts-type': 'me',
                        value: 'me'
                    },
                    label: {
                        innerText: `Я`,
                        for: 'contacts-radio-1'
                    },
                    wrapper: {
                        class: 'field-wrapper order-popup__radio-field-wrapper small'
                    },
                    row: {
                        class: 'field-row order-popup__field-row_small'
                    }

                }, {
                    input: {
                        class: 'field',
                        id: 'contacts-radio-2',
                        checked: false,
                        type: 'radio',
                        name: 'contacts-radio',
                        'data-contacts-type': 'other-person',
                        value: 'other-person'
                    },
                    label: {
                        innerText: `Інша особа`,
                        for: 'contacts-radio-2'
                    },
                    wrapper: {
                        class: 'field-wrapper order-popup__radio-field-wrapper small'
                    }

                }),
                this.contactsRow1 = Redom.place(createFieldRow({
                    input: {
                        class: 'field',
                        id: 'name-input-2',
                        type: 'text',
                        placeholder: ' ',
                        name: 'name-input-2'
                    },
                    label: {
                        innerText: `Ім'я`,
                        class: 'text-field-label',
                        for: 'name-input-2'
                    },
                    wrapper: {
                        class: 'field-wrapper'
                    },
                    row: {
                        'data-contacts': 'other-person'
                    }

                }, {
                    input: {
                        class: 'field',
                        id: 'surname-input-2',
                        type: 'text',
                        placeholder: ' ',
                        name: 'surname-input-2'
                    },
                    label: {
                        innerText: `Прізвище`,
                        class: 'text-field-label',
                        for: 'surname-input-2'
                    },
                    wrapper: {
                        class: 'field-wrapper'
                    }

                })),
                this.contactsRow2 = Redom.place(createFieldRow({
                    input: {
                        class: 'field',
                        id: 'middle-name-input',
                        type: 'text',
                        placeholder: ' ',
                        name: 'middle-name-input'
                    },
                    label: {
                        innerText: `По батькові`,
                        class: 'text-field-label',
                        for: 'middle-name-input'
                    },
                    wrapper: {
                        class: 'field-wrapper'
                    },
                    row: {
                        'data-contacts': 'other-person'
                    }

                }, {
                    input: {
                        class: 'field',
                        id: 'mob-tel-input',
                        type: 'tel',
                        placeholder: ' ',
                        name: 'mob-tel-input'
                    },
                    label: {
                        innerText: `Мобільний телефон`,
                        class: 'text-field-label',
                        for: 'mob-tel-input'
                    },
                    wrapper: {
                        class: 'field-wrapper'
                    }

                }))
            ),
            this.hiddenFieldset = new HiddenFieldset())

        this.deliveryRow1.update(true)
        this.contactsRow1.update(false)
        this.contactsRow2.update(false)

        CartLS.list().length ?  this.hiddenFieldset.update(true, CartLS.list()) : this.hiddenFieldset.update(false)

        this.deliveryInputHandler = function (input, e) {
            if (input.getAttribute('data-delivery-type') === 'self-pickup') {
                this.deliveryRow1.update(true)
                this.deliveryRow2.update(false)
                this.deliveryRow3.update(false)
                return
            }

            if (input.getAttribute('data-delivery-type') === 'courier') {
                this.deliveryRow1.update(false)
                this.deliveryRow2.update(true)
                this.deliveryRow3.update(true)
                return
            }

        }

        this.contactsInputHandler = function (input, e) {
            if (input.getAttribute('data-contacts-type') === 'me') {
                this.contactsRow1.update(false)
                this.contactsRow2.update(false)
                return
            }

            if (input.getAttribute('data-contacts-type') === 'other-person') {
                this.contactsRow1.update(true)
                this.contactsRow2.update(true)
                return
            }

        }


        this.cartupdateeventHandler = (e) => {
            this.update(CartLS.list())
        }

        this.delivery.querySelectorAll('input').forEach(input => {
            this.deliveryInputHandlerBinded = this.deliveryInputHandler.bind(this, input)
            input.addEventListener('change', this.deliveryInputHandlerBinded)
        })

        this.contacts.querySelectorAll('input').forEach(input => {
            this.contactsInputHandlerBinded = this.contactsInputHandler.bind(this, input)
            input.addEventListener('change', this.contactsInputHandlerBinded)
        })


    }

    update(data) {
        data.length ?
            this.hiddenFieldset.update(true, data) :
            this.hiddenFieldset.update(false)
    }

    onmount() {
        this.choices = InitChoices([this.departmentChoice, this.townChoice])
        document.addEventListener('cartupdateevent', this.cartupdateeventHandler)
    }

    onunmount() {
        this.choices && this.choices.forEach(choice => choice.destroy())
        document.removeEventListener('cartupdateevent', this.cartupdateeventHandler)
    }

}

export {
    OrderForm
}