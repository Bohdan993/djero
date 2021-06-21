import {
    tippy
} from "../../../libs/libs"


const InitTippy = (element, content) => {

    function createTippy(element, content, settings = {
        content,
        allowHTML: true,
        interactive: true,
        interactiveBorder: 5,
        interactiveDebounce: 0,
        placement: 'left',
        offset: [0, 0],
        hideOnClick: true,
        trigger: 'click',
        animation: 'shift-away-extreme',
        zIndex: 9999,
        popperOptions: {
            // strategy: 'fixed',
            modifiers: [
                {
                    name: 'preventOverflow',
                    options: {
                        // altAxis: true,
                        // tether: true,
                        mainAxis: false, // true by default
                    },
                },
            ],
        },
        appendTo: () => document.body,
    }) {
        content.style.display = 'flex'
        return tippy(element, settings)
    }

    console.log(element, content)


    createTippy(element, content)
}


export default InitTippy