// import { timers } from 'jquery';
import {
	FullPageInit,
	BurgerMenu,
	InitTippy,
	ShareButtonToggle,
	InitSplide,
	BallClickAnimation,
	InitMagnificPopups,
	ClosePopup,
	InitChoices
} from '../model';
import {
	SOCIAL_SHARE_BTN
} from '../model/App/Constants';
import {
	$body,
	$socialShareList,
	$socialShareBtn,
	$mainScreenFooterBall,
	$backgroundVideoAnimation1,
	$backgroundVideoAnimation2,
	$mainScreenHeaderLayer,
	$mainScreenBodyLayer,
	$mainScreenFooterLayer,
	$header,
	$mainScreenFooterBallWrapper,
	$closePopup,
	$choices
	// $popupMain
} from '../view';

const app = {
	init() {
		this.bm()
		this.fpi()
		this.it()
		this.stb()
		this.is()
		this.bca()
		this.imp()
		this.cp()
		this.ic()
		// this.iosb()
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
		BallClickAnimation({
			ball: $mainScreenFooterBall,
			ballWrapper: $mainScreenFooterBallWrapper,
			firstAnimation: $backgroundVideoAnimation1,
			secondAnimation: $backgroundVideoAnimation2,
			pageHeader: $header,
			header: $mainScreenHeaderLayer,
			body: $mainScreenBodyLayer,
			footer: $mainScreenFooterLayer
		})
	},
	imp() {
		InitMagnificPopups()
	},
	cp(){
		ClosePopup($closePopup)
	},
	ic(){
		InitChoices($choices)
	}
	// iosb() {
	// 	InitOverlayScrollbars({
	// 		popup: $popupMain
	// 	})
	// }

}


export {
	app
}