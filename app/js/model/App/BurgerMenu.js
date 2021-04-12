import { throttle } from './Helpers'

const BurgerMenu = (menuBtn, items, parent, body) => {
	let menuOpen = false

	console.log(manuOpen)

	function createMenu(items){
		let menuItems = Array.from(items)
		let menu = `
			<div class="mobile-menu__list-wrapper">
	      <ul class="mobile-menu__list">
	      	${menuItems.map(item => {
	      		let clone = item.cloneNode(true)
	      		return `
	      			<li class="mobile-menu__list-item">
	      				${clone.outerHTML}
	      			</li>
	      		`
	      	}).join(' ')}
	      </ul>
	      <div class="mobile-menu__close close-btn"></div>
	    </div>
      <div class="mobile-menu__overlay"></div>
		`
		return menu
	}


	let menuHTML = createMenu(items)
	parent.insertAdjacentHTML('beforeend', menuHTML)
	let menu = parent.querySelector('.mobile-menu__list-wrapper')
	let closeBtn = parent.querySelector('.mobile-menu__close')


	function openMenu (e){
		
		if(!menuOpen) {
				body.classList.add('menu-open')
				menu.classList.add('fixed')
				menuOpen = true
		}
	}

	function closeMenu (e) {
		if(menuOpen) {
			menu.classList.remove('fixed')
			body.classList.remove('menu-open')
			menuOpen = false
		}
	}

	function resizeFunc(){
		if(this.innerWidth > 768 && menuOpen) {
			closeMenu()
		}
	}


	menuBtn.addEventListener('click', openMenu)
	closeBtn.addEventListener('click', closeMenu)
	resizeFunc = throttle(resizeFunc, 150)
	window.addEventListener('resize', resizeFunc)
}


export default BurgerMenu