
const validationPatterns = {
		email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		date:/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4([1][9]\d\d|2[0][0][0-9])$/,
		requaired({value}){
			return value.length !== 0
		},
		minLength({value,num}) {
			return  value.length >= num;
		}
	}


export const validationTexts = {
	requaired: 'Обязательное поле',
	date: 'Введите корректную дату рождения',
	email: 'Введите корректный email',
	passwordMinLength(num) {
		return `Пароль должен быть больше ${num} символов`
	}
}

const Validation = (value, options = {}) => {

	if(typeof validationPatterns[options.type] === 'function') {
		return validationPatterns[options.type]({value, ...options})
	}


	return validationPatterns[options.type].test(value)

}




export default Validation
