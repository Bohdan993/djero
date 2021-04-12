import { FullPageInit, BurgerMenu } from '../model';
import {
	body
} from '../view';

const app = {
	init() {
		this.bm()
		this.fpi()
	},
	bm() {
		// console.log(Fullpage, Splide)
		// BurgerMenu(body)
	},
	fpi(){
		FullPageInit()
	},

}


export {
	app
}