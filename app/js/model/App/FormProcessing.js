import {
    $,
    CartLS
} from "../../../libs/libs"



const FormProcessing = (form) => {


    function undloadHandler(e) {
        CartLS.destroy()
    }

    function sendForm() {
        const form_id = '#' + form.id
        const msg = $(form_id).serialize()
        console.log(msg)
        $.ajax({
            type: 'POST',
            url: 'payment/payment.php',
            data: msg,
            success: function (json) {
                const data = JSON.parse(json)

                if (data.responce == "send_error") {
                    alert('Виникла непередбачувана помилка.')
                    return
                }
                
                if (data.responce == "send_success") {
                    window.location.replace(data.url)
                    window.addEventListener('unload', undloadHandler)
                    return
                }
            },
            error: function (xhr, str) {
                alert('Помилка: ' + xhr.responseCode + ' Спробуйте, будь ласка, пізніше.')
            }
        });
    }

    sendForm()
}


export {
    FormProcessing
}