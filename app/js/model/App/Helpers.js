import {
	$
} from "../../../libs/libs"

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
	console.log('dfdd')
	const {detail: {
		anchor
	}} = e
	const loadedSection = $(document).find(`[data-anchor="${anchor}"]`)
	const screen = loadedSection.find('.is-screen')
	if (screen.height() > loadedSection.height()) {
		const IScroll = loadedSection.find('.fp-scrollable').data('iscrollInstance')
		IScroll.scrollTo(0, 0, 0)
	}
}





export {
	throttle,
	addText,
	addClass,
	removeClass,
	addStyle,
	menuclickeventHandler
}