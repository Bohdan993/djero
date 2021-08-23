import {
	InitFullPage,
	InitTippy,
	ShareButtonToggle,
	InitSplide,
	BallClickAnimation,
	InitMagnificPopups,
	InitMagnificPopupSecondBranch,
	ClosePopup,
	PlayVideo,
	PlayVideoYoutube,
	MoveToScreens,
	MountCart,
	MountCartsQuantity,
	MountTotals,
	MountOrder,
	MountCleanBasket,
	MountProductCounter,
	ContactsFormsProcessing,
	ChangeVideoSource,
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
	$screenPlayVideo,
	$youtubePlayVideo,
	$menuLinks,
	$cart,
	$cartsQuantity,
	$popupTotalPrices,
	$orderPopupFContainer,
	$popupBasketClearWrappers,
	$sidebarCartCounterWrapper,
	$forms

} from '../view';




const app = {
	init() {
		this.cvs()
		this.ifp()
		this.it()
		this.stb()
		this.is()
		this.bca()
		this.imp()
		this.impsb()
		this.cp()
		this.pv()
		this.pvy()
		this.mts()
		this.mcq()
		this.mc()
		this.mt()
		this.mo()
		this.mcb()
		this.mpc()
		this.cfp()
	},
	cvs(){
		ChangeVideoSource()
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
		PlayVideoYoutube($youtubePlayVideo)
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
	mcb(){
		MountCleanBasket($popupBasketClearWrappers)
	},
	mpc(){
		MountProductCounter($sidebarCartCounterWrapper)
	},
	cfp(){
		ContactsFormsProcessing($forms)
	}


}


export {
	app
}