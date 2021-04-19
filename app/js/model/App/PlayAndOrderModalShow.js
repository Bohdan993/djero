import {
    $
} from "../../../libs/libs"

const PlayAndOrderModalShow = () => {
    console.log($.magnificPopup)
    $.magnificPopup.open({
        items: {
            src: '#small-dialog'
        },
        type: 'inline',

        // fixedContentPos: false,
        // fixedBgPos: true,

        // overflowY: 'auto',

        // closeBtnInside: true,
        // preloader: false,

        // midClick: true,
        // removalDelay: 300,
        // mainClass: 'my-mfp-zoom-in'

        // You may add options here, they're exactly the same as for $.fn.magnificPopup call
        // Note that some settings that rely on click event (like disableOn or midClick) will not work here
    }, 0);
}


export default PlayAndOrderModalShow