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
	// InitChoices,
	PlayVideo,
	PlayVideoYoutube,
	MoveToScreens,
	MountCart,
	MountCartsQuantity,
	MountTotals,
	MountOrder,
	args
} from '../model';
import {
	SOCIAL_SHARE_BTN
} from '../model/App/Constants';
import {
	$body,
	$socialShareList,
	$socialShareBtn,
	$closePopup,
	// $choices,
	$screenPlayVideo,
	$menuLinks,
	$cart,
	$cartsQuantity,
	$popupTotalPrices,
	$orderPopupFContainer
	// $orderPopupFormLayer,
	// $orderPopupPreviewLayer

} from '../view';


const app = {
	init() {
		this.bm()
		this.ifp()
		// this.it()
		// this.stb()
		this.is()
		this.bca()
		this.imp()
		this.impsb()
		this.cp()
		// this.ic()
		this.pv()
		this.pvy()
		this.mts()
		this.mcq()
		this.mc()
		this.mt()
		this.mo()
		// this.iosb()
	},
	bm() {
		// console.log(Fullpage, Splide)
		// BurgerMenu(body)
	},
	ifp() {
		InitFullPage(args)
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
		BallClickAnimation(args)
	},
	imp() {
		InitMagnificPopups($body, args)
	},
	impsb() {
		InitMagnificPopupSecondBranch($body, args)
	},
	cp() {
		ClosePopup($closePopup)
	},
	// ic() {
	// 	InitChoices($choices)
	// },
	pv() {
		PlayVideo($screenPlayVideo)
	},
	pvy() {
		PlayVideoYoutube()
	},
	mts() {
		MoveToScreens($menuLinks, $body, args)
	},
	mc() {
		MountCart($cart, $body, args)
	},
	mcq() {
		MountCartsQuantity($cartsQuantity)
	},
	mo() {
		MountOrder($orderPopupFContainer)
	},
	mt() {
		MountTotals($popupTotalPrices)
	},


}


export {
	app
}