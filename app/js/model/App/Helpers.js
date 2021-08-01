import {
	$,
	CartLS
} from "../../../libs/libs"
import settings from "./MagnificPopupSettings"




function debounce(f, ms) {
	let timer
	return function () {

		clearTimeout(timer)

		timer = setTimeout(() => {
			f.apply(this, arguments)
		}, ms)

	}
}


function throttle(f, ms) {

	let isThrottled = false,
		t, a

	function d() {

		if (isThrottled) {
			t = this;
			a = arguments;
			return
		}

		f.apply(this, arguments)

		isThrottled = true;

		setTimeout(function () {
			isThrottled = false;
			if (a) {
				d.apply(t, a);
				t = a = null;
			}
		}, ms)
	}

	return d
}



function addText(elem, text) {
	elem.textContent = text
	return elem
}

function addClass(elem, ...clazz) {

	elem.classList.add(...clazz)
	return elem
}

function removeClass(elem, ...clazz) {

	elem.classList.remove(...clazz)
	return elem
}

function addStyle(elem, styles) {
	for (let key in styles) {
		elem.style[key] = styles[key]
	}

	return elem
}


function menuclickeventHandler(e) {
	e.stopImmediatePropagation()

	const {
		detail: {
			anchor
		}
	} = e

	const loadedSection = $(document).find(`[data-anchor="${anchor}"]`)
	const screen = loadedSection.find('.is-screen')
	console.log(screen.outerHeight())
	console.log(loadedSection.height())
	if (screen.outerHeight() > loadedSection.height()) {
		const IScroll = loadedSection.find('.fp-scrollable').data('iscrollInstance')
		IScroll.scrollTo(0, 0, 0)
	}
}

function declOfNum(number, words) {
	return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}


const fullSettingsFunction = (link) => {
	const partialSettings = {
		items: {
			src: link
		}
	}

	return Object.assign({}, settings, partialSettings)
}


function calcDiscount(id) {
	let discount = 0
	if (CartLS.exists(id)) {
		let quantity = +CartLS.get(id).quantity
		switch (id) {
			case 'pack': {
				// console.log('pack')
				for (let i = 0; i <= quantity; i += 3) {
					if (i !== 0) discount += 6
				}
			}
			case 'box': {

			}

			default: {

			}
		}
	}
	return discount
}




export {
	throttle,
	addText,
	addClass,
	removeClass,
	addStyle,
	menuclickeventHandler,
	declOfNum,
	fullSettingsFunction,
	calcDiscount,
	debounce
}