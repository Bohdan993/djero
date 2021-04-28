import {OverlayScrollbars} from "../../../libs/libs"


const InitOverlayScrollbars = (elems) => {

    const {
        popup
    } = elems


    console.log(popup)
    const instance = OverlayScrollbars(popup, {
        className: "os-theme-dark",
        sizeAutoCapable: true,
        paddingAbsolute: true,
        scrollbars: {
            // clickScrolling: true,
            // autoHide: 'leave',
            // autoHideDelay: 50
        },
    })

    return instance
}


export default InitOverlayScrollbars