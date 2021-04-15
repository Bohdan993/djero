import {
	FullPageInit,
	BurgerMenu,
	InitTippy,
	ShareButtonToggle,
	InitSplide,
	BallClickAnimation
} from '../model';
import {
	SOCIAL_SHARE_BTN
} from '../model/App/Constants';
import {
	$body,
	$socialShareList,
	$socialShareBtn,
	$mainScreenFooterBall
} from '../view';

const app = {
	init() {
		this.bm()
		this.fpi()
		this.it()
		this.stb()
		this.is()
		this.bca()
	},
	bm() {
		// console.log(Fullpage, Splide)
		// BurgerMenu(body)
	},
	fpi() {
		FullPageInit()
	},
	it() {
		InitTippy(SOCIAL_SHARE_BTN, $socialShareList)
	},
	stb() {
		ShareButtonToggle($socialShareBtn)
	},
	is() {
		InitSplide()
	},
	bca() {
		BallClickAnimation($mainScreenFooterBall)
	}

}


export {
	app
}