import {
    Redom
} from '../../../../libs/libs'


function createLegeng(text) {
    return Redom.el('legend.legend.order-popup__legend', `${text}`)
}

function createFieldRow(...inputs) {
    return Redom.el('div.field-row',
        inputs.map((input) => {
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
        }).join(',')
    )
}


class OrderForm {
    constructor() {
        this.el = Redom.el("form.order-popup__form#order-popup__form", {
                method: 'POST'
            },
            Redom.el('fieldset.fieldset',
                createLegeng('Данні покупця'),
                createFieldRow({
                    input: {
                        class: 'field',
                        id: 'name-input',
                        type: 'text',
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
                        type: 'text',
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
                            name: '',
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
                createFieldRow({
                    input: {
                        class: 'field',
                        id: 'delivery-radio-1',
                        checked: true,
                        type: 'radio',
                        name: 'delivery-radio',
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
                    },
                    label: {
                        innerText: `Кур'єр Нова Пошта`,
                        for: 'delivery-radio-2'
                    },
                    wrapper: {
                        class: 'field-wrapper order-popup__radio-field-wrapper'
                    }

                }),
                Redom.el('div.field-row',
                    Redom.el('div.field-wrapper.order-popup__select-field-wrapper',
                        Redom.el('select.choice order-popup__select-field.department-select'))),
                Redom.el('div.field-row',
                    Redom.el('div.field-wrapper.order-popup__select-field-wrapper',
                        Redom.el('select.choice order-popup__select-field.town-select')),
                    Redom.el('div.field-wrapper',
                        Redom.el('input.field', {
                            type: 'text',
                            placeholder: ' ',
                            id: 'street-input'
                        }),
                        Redom.el('label.text-field-label', {
                            for: 'street-input',
                            innerText: 'Вулиця'
                        })))),
            Redom.el('fieldset.fieldset',
                createLegeng('Контактні данні отримувача замовлення')))
    }

    update(data) {
        this.list.update(data)
    }

}

export {
    OrderForm
}