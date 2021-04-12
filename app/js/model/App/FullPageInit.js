import { fullpage } from '../../../libs/libs'

const FullPageInit = () => {
    // console.log($.fn.fullpage)
    console.log($('.fullpage').fullpage({
		//options here
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
		// autoScrolling:true,
		// scrollHorizontally: true
	}))
    // console.log($.fn.fullpage.setAllowScrolling)
}


export default FullPageInit