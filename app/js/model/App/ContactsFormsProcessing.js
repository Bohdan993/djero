import {
    $
} from "../../../libs/libs"



const ContactsFormsProcessing = (forms) => {


    function sendForm(form) {
        const form_id = '#' + form.id
        const msg = $(form_id).serialize()
        $.ajax({
            type: 'POST',
            url: 'mail/send.php',
            data: msg,
            success: function (data) {

                if (data == "send_error") {
                    alert('Виникла непередбачувана помилка.')
                    return
                }

                if (data == "send_success") {
                    alert('Дякуємо, менеджер скоро зв\'яжеться з Вами.')
                    return
                }
            },
            error: function (xhr, str) {
                alert('Помилка: ' + xhr.responseCode + ' Спробуйте, будь ласка, пізніше.')
            }
        });
    }


    function submitHandler(e) {
        e.preventDefault()
        sendForm(this)
    }

    function forEachForm(form) {
        form.addEventListener('submit', submitHandler)
    }

    forms.forEach(forEachForm)
}


export {
    ContactsFormsProcessing
}