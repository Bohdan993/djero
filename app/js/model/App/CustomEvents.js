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


const screenLeaveEvent = new CustomEvent('screenleaveevent', {
    detail: {
        name: 'screenleaveevent'
    }
})


export {
    menuClickEvent,
    townChoosenEvent,
    screenLeaveEvent
}