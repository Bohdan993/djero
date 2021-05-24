// import { timers } from 'jquery';
import {
	InitFullPage,
	BurgerMenu,
	InitTippy,
	ShareButtonToggle,
	InitSplide,
	BallClickAnimation,
	InitMagnificPopups,
	InitMagnificPopupSecondBranch,
	ClosePopup,
	InitChoices,
	PlayVideo,
	PlayVideoYoutube,
	MoveToScreens
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
	$choices,
	$screenPlayVideo,
	$headerClosePopup,
	$menuLinks
	// $popupMain
} from '../view';

const app = {
	init() {
		this.bm()
		this.ifp()
		this.it()
		this.stb()
		this.is()
		this.bca()
		this.imp()
		this.impsb()
		this.cp()
		this.ic()
		this.pv()
		this.pvy()
		this.mts()
		// this.iosb()
	},
	bm() {
		// console.log(Fullpage, Splide)
		// BurgerMenu(body)
	},
	ifp() {
		InitFullPage({
			ball: $mainScreenFooterBall,
			ballWrapper: $mainScreenFooterBallWrapper,
			firstAnimation: $backgroundVideoAnimation1,
			secondAnimation: $backgroundVideoAnimation2,
			pageHeader: $header,
			header: $mainScreenHeaderLayer,
			body: $mainScreenBodyLayer,
			footer: $mainScreenFooterLayer,
			animation: $backgroundVideoAnimation1
		})
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
		InitMagnificPopups($body, {
			ball: $mainScreenFooterBall,
			ballWrapper: $mainScreenFooterBallWrapper,
			firstAnimation: $backgroundVideoAnimation1,
			secondAnimation: $backgroundVideoAnimation2,
			pageHeader: $header,
			header: $mainScreenHeaderLayer,
			body: $mainScreenBodyLayer,
			footer: $mainScreenFooterLayer,
			animation: $backgroundVideoAnimation1
		})
	},
	impsb(){
		InitMagnificPopupSecondBranch($body, {
			ball: $mainScreenFooterBall,
			ballWrapper: $mainScreenFooterBallWrapper,
			firstAnimation: $backgroundVideoAnimation1,
			secondAnimation: $backgroundVideoAnimation2,
			pageHeader: $header,
			header: $mainScreenHeaderLayer,
			body: $mainScreenBodyLayer,
			footer: $mainScreenFooterLayer,
			animation: $backgroundVideoAnimation1
		})
	},
	cp() {
		ClosePopup($closePopup)
	},
	ic() {
		InitChoices($choices)
	},
	pv() {
		PlayVideo($screenPlayVideo)
	},
	pvy() {
		PlayVideoYoutube()
	},
	mts() {
		MoveToScreens($menuLinks, $body, {
			ball: $mainScreenFooterBall,
			ballWrapper: $mainScreenFooterBallWrapper,
			firstAnimation: $backgroundVideoAnimation1,
			secondAnimation: $backgroundVideoAnimation2,
			pageHeader: $header,
			header: $mainScreenHeaderLayer,
			body: $mainScreenBodyLayer,
			footer: $mainScreenFooterLayer,
			animation: $backgroundVideoAnimation1
		})
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