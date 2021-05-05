import {
    Choices
} from "../../../libs/libs"
import {
    DEPARTMENT_SELECT
} from "./Constants"

const InitChoices = (choices) => {


    // function showDropdownHandler(instance, e) {
    //     console.log(instance, e)
    // }


    function forEachChoice(el) {
        const instance = new Choices(el, {
            noResultsText: 'Нічого не знайдено',
            noChoicesText: 'Список порожній',
            shouldSort: false,
            searchPlaceholderValue: el.classList.contains(DEPARTMENT_SELECT) ? 'Введіть адресу відділення' : 'Введіть місто',
            itemSelectText: '',
            classNames: {
                containerOuter: 'choices order-popup__select-field_outer',
                containerInner: 'choices__inner order-popup__select-field_inner',

                // listDropdown: 'order-popup__select-list-dropdown',
            },
        })



        if (instance.passedElement.element.classList.contains(DEPARTMENT_SELECT)) {
            instance.setChoices([{
                    value: 'Виберіть відповідне відділення',
                    label: 'Виберіть відповідне відділення',
                    disabled: true,
                    selected: true
                },
                {
                    value: 'Відділення №1',
                    label: 'Відділення №1',
                },
                {
                    value: 'Відділення №2',
                    label: 'Відділення №2',
                },
                {
                    value: 'Відділення №3',
                    label: 'Відділення №3',
                },
            ])

        } else {
            instance.setChoices([{
                    value: 'Виберіть місто',
                    label: 'Виберіть місто',
                    disabled: true,
                    selected: true
                },
                {
                    value: 'Бердичів',
                    label: 'Бердичів',
                },
                 {
                    value: 'Вінниця',
                    label: 'Вінниця',
                },
                {
                    value: 'Житомир',
                    label: 'Житомир',
                },
                {
                    value: 'Київ',
                    label: 'Київ',
                },
            ])

        }

    }

    choices.forEach(forEachChoice)
}


export default InitChoices