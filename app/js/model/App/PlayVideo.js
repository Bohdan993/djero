import {
    get
} from "jquery"
import {
    NO_VIDEO_PLAY,
    SCREEN_VIDEO_LAYER
} from "./Constants"


import {
    addStyle
} from './Helpers'

const PlayVideo = (btsn) => {

    function forEachBtn(el) {
        if (el.classList.contains(NO_VIDEO_PLAY)) return
        el.addEventListener('click', clickHandler)

    }

    function clickHandler(e) {

        const video = this.closest(`.${SCREEN_VIDEO_LAYER}`).querySelector('video')
        video.play()
        addStyle(video, {
            zIndex: '32'
        })
        video.setAttribute('controls', true)
        addStyle(this, {
            display: 'none'
        })
        onVideoEnded(video, this)
    }

    function onVideoEnded(video, btn) {
        video.addEventListener('ended', videoEndedHandler.bind(video, btn))
    }

    function videoEndedHandler(btn, e) {
        this.removeAttribute('controls')
        this.setAttribute('poster', this.getAttribute('poster'))
        addStyle(btn, {
            display: 'flex'
        })
        addStyle(this, {
            zIndex: '-1'
        })
    }

    btsn.forEach(forEachBtn)



    // const P = (f = (a) => a) => new Proxy(f, {get:(m, t)=>P((...a) => m(`<${ t }>${ a.join`` }</${ t }>`))})

    // const Format = P();

    // console.log(Format)
    // console.log(Format.div.span.tag.r.vggg.fdfe.sd.ew.gh.df.er.dlll('Hello world'))

    // TODO: complete this object/class

    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    // function PaginationHelper(collection, itemsPerPage) {
    //     this.collection = collection
    //     this.itemsPerPage = itemsPerPage
    // }

    // // returns the number of items within the entire collection
    // PaginationHelper.prototype.itemCount = function () {
    //     return this.collection.length
    // }

    // // returns the number of pages
    // PaginationHelper.prototype.pageCount = function () {
    //     return Math.ceil(this.collection.length / this.itemsPerPage)
    // }

    // // returns the number of items on the current page. page_index is zero based.
    // // this method should return -1 for pageIndex values that are out of range
    // PaginationHelper.prototype.pageItemCount = function (pageIndex) {

    //     if (pageIndex > this.pageCount() || pageIndex < 0) {
    //         return -1
    //     }

    //     for (let i = 0; i < this.pageCount(); i++) {
    //         return 
    //     }


    // }

    // // determines what page an item is on. Zero based indexes
    // // this method should return -1 for itemIndex values that are out of range
    // PaginationHelper.prototype.pageIndex = function (itemIndex) {
    //     if (itemIndex > this.itemCount() || itemIndex < 0 || this.itemCount() === 0) return -1
    //     if (itemIndex === 0) return 0
    //     return Math.ceil(itemIndex / this.itemsPerPage) - 1
    // }

    // var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 6);

    // console.log(helper.pageItemCount(0))




}

export default PlayVideo