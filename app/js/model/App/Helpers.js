function throttle(f, ms){
	
	let isThrottled = false,
	t, a

	function d(){
		
		if (isThrottled) {
			t = this;
			a = arguments;
			return
		}

		f.apply(this, arguments)

		isThrottled = true;

		setTimeout(function(){
			isThrottled = false;
			if(a) {
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
	// console.log(clazz)
	elem.classList.add(...clazz)

	return elem
}

function removeClass(elem, clazz) {
	elem.classList.remove(clazz)

	return elem
}





export {
	throttle,
	addText,
	addClass,
	removeClass
}