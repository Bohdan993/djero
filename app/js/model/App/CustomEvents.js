const menuClickEvent = new CustomEvent('menuclickevent', {
    detail: {
        position: 'position'
    }
})


const townChoosenEvent = new CustomEvent('townchoosen', {
    detail: {
        name: 'townchoosen'
    }
})


export {
    menuClickEvent,
    townChoosenEvent
}