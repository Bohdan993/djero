import {
	FullPageInit,
	BurgerMenu,
	InitTippy,
	ShareButtonToggle,
	InitSplide,
	BallClickAnimation,
	InitMagnificPopups
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
	$mainScreenFooterBallWrapper
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
		BallClickAnimation(
			{
				ball: $mainScreenFooterBall,
				ballWrapper: $mainScreenFooterBallWrapper,
				firstAnimation:$backgroundVideoAnimation1,
				secondAnimation: $backgroundVideoAnimation2,
				pageHeader: $header,
				header: $mainScreenHeaderLayer,
				body: $mainScreenBodyLayer,
				footer: $mainScreenFooterLayer
			}
		)
	},
	imp(){
		InitMagnificPopups()
	}

}


export {
	app
}