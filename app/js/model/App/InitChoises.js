import {
    Choices
} from "../../../libs/libs"
import {
    DEPARTMENT_SELECT
} from "./Constants"
import {
    townChoosenEvent
} from "./CustomEvents"
import {
    debounce
} from "./Helpers"



const InitChoices = (choices) => {

    const res = []
    const apiKey = "769d4d840985b21e16045ca913379840"
    const url = "https://api.novaposhta.ua/v2.0/json/"



    function forEachChoice(el) {
        const instance = new Choices(el, {
            noResultsText: 'Нічого не знайдено',
            noChoicesText: 'Список порожній',
            shouldSort: false,
            searchResultLimit: 9999,
            searchPlaceholderValue: el.classList.contains('department-select-2') ? 'Пошук відділення' : 'Пошук населеного пункту',
            itemSelectText: '',
            classNames: {
                containerOuter: 'choices order-popup__select-field_outer',
                containerInner: 'choices__inner order-popup__select-field_inner',
                // listDropdown: 'order-popup__select-list-dropdown',
            },
        })



        if (instance.passedElement.element.classList.contains(DEPARTMENT_SELECT)) {
            if (instance.passedElement.element.classList.contains('department-select-1')) {

                async function searchHandler(event) {
                    try {
                        let response = await fetch(url, {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json;charset=utf-8'
                            },
                            body: JSON.stringify({
                                "apiKey": "" + apiKey + "",
                                "modelName": "Address",
                                "calledMethod": "getCities",
                                "methodProperties": {
                                    "FindByString": "" + event.detail.value + "",
                                    // "Limit": 500
                                }
                            })
                        })

                        if (response.ok) {
                            let json = await response.json()
                            const data = json.data
                            const result = data.map(el => {
                                return {
                                    value: el.Description + ', ' + el.AreaDescription,
                                    label: el.Description + ', ' + el.AreaDescription,
                                    customProperties: {
                                        ref: el.Ref
                                    }
                                }


                            }).filter(Boolean)

                            instance.clearChoices()
                            if (result.length) instance.setChoices([...result])


                        } else {
                            alert("Помилка HTTP: " + response.status);
                        }
                    } catch (err) {
                        console.error(err)
                    }

                }

                async function choiceHandler(e) {

                    try {
                        let response = await fetch(url, {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json;charset=utf-8'
                            },
                            body: JSON.stringify({
                                "apiKey": "" + apiKey + "",
                                "modelName": "Address",
                                "calledMethod": "getWarehouses",
                                "methodProperties": {
                                    "CityRef": e.detail.choice.customProperties.ref,
                                    "Limit": 500
                                }
                            })
                        })

                        if (response.ok) {
                            let json = await response.json()
                            const data = json.data
                            const result = data.map(el => {
                                if (el.CategoryOfWarehouse !== 'Postomat') {
                                    return {
                                        value: el.Description,
                                        label: el.Description,
                                    }
                                }

                            }).filter(Boolean)

                            townChoosenEvent.detail.result = result
                            document.dispatchEvent(townChoosenEvent)


                        } else {
                            alert("Помилка HTTP: " + response.status);
                        }

                    } catch (err) {
                        console.error(err)
                    }
                }

                const debouncedSearchHandler = debounce(searchHandler, 500)
                instance.passedElement.element.addEventListener('search', debouncedSearchHandler, false)

                instance.passedElement.element.addEventListener('choice', choiceHandler)


                instance.setChoices([{
                    value: 'Виберіть населений пункт',
                    label: 'Виберіть населений пункт',
                    disabled: true,
                    selected: true
                }])


            } else {
                instance.setChoices([{
                    value: 'Виберіть відповідне відділення',
                    label: 'Виберіть відповідне відділення',
                    disabled: true,
                    selected: true
                }])

                document.addEventListener('townchoosen', function (e) {
                    const result = e.detail.result
                    instance.clearChoices()
                    instance.removeActiveItems()
                    if (result.length) {
                        instance.setChoices([{
                            value: 'Виберіть відповідне відділення',
                            label: 'Виберіть відповідне відділення',
                            disabled: true,
                            selected: true
                        }, ...result])
                    } else {
                        instance.setChoices([{
                            value: 'Не знайдено підходящих відділень',
                            label: 'Не знайдено підходящих відділень',
                            disabled: true,
                            selected: true
                        }])
                    }
                })
            }


        } else {

            async function searchHandler(event) {
                try {
                    let response = await fetch(url, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({
                            "apiKey": "" + apiKey + "",
                            "modelName": "Address",
                            "calledMethod": "getCities",
                            "methodProperties": {
                                "FindByString": "" + event.detail.value + "",
                                // "Limit": 500
                            }
                        })
                    })

                    if (response.ok) {
                        let json = await response.json()
                        const data = json.data
                        const result = data.map(el => {
                            return {
                                value: el.Description,
                                label: el.Description,
                            }

                        })

                        instance.clearChoices()
                        instance.setChoices([{
                            value: 'Виберіть населений пункт',
                            label: 'Виберіть населений пункт',
                            disabled: true,
                            selected: true
                        }])
                        if (result.length) instance.setChoices([...result])


                    } else {
                        alert("Помилка HTTP: " + response.status);
                    }

                } catch (err) {
                    console.error(err)
                }

            }
            const debouncedSearchHandler = debounce(searchHandler, 500)
            instance.passedElement.element.addEventListener('search', debouncedSearchHandler, false)
            instance.setChoices([{
                value: 'Виберіть населений пункт',
                label: 'Виберіть населений пункт',
                disabled: true,
                selected: true
            }])

        }

        res.push(instance)

    }

    choices.forEach(forEachChoice)

    return res
}


export default InitChoices