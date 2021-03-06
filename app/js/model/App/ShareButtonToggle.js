import {
    addClass,
    removeClass
} from "./Helpers"

const ShareButtonToggle = (btn) => {

    let isActive = false

    function toggleHandler(e) {

        const target = e.target
        const name = btn.className.split(' ')[0]

        if (target.classList.contains('sidebar__social-share-list') || target.closest(`.sidebar__social-share-list`)) {
            return
        }

        if (isActive) {
            removeClass(btn, 'active')
            isActive = false
            return
        }


        if (!target.classList.contains(name) || !target.closest(`.${name}`)) return


        if (!isActive) {
            addClass(btn, 'active')
            isActive = true
            return
        }



    }


    document.addEventListener('click', toggleHandler)
}

export default ShareButtonToggle