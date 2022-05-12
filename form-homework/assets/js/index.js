function validateForm (id, minL, maxL){
    const $form = document.getElementById(id)
    if(!$form){
        return
    }

    const $fields = $form.querySelector('fieldset')
    const $passwordToggle = $form.querySelector('.input__password-toggle')
    const $submit = $form.querySelector('button[type="submit"]')
    let regexp = /(.+)@(.+){2,}\.(.+){2,}/
    
    $fields.addEventListener('input', function(event){
        let isValid = true
        $fields.querySelectorAll('input').forEach(function(el){
            if(el.getAttribute('name') == 'email' && !regexp.test(el.value)){
                isValid = false
            }
            if(el.value.length < minL || el.value.length > maxL){
                isValid = false
            }
        })
        isValid ? $submit.removeAttribute('disabled') : $submit.setAttribute('disabled', '')
    })
    $passwordToggle.addEventListener('click', function(event){
        if($fields.querySelector('input[name="password"]').getAttribute('type') == 'password'){
            $fields.querySelector('input[name="password"]').setAttribute('type', 'text')
        }
        else {
            $fields.querySelector('input[name="password"]').setAttribute('type', 'password')
        }
    })
}

validateForm('form-login', 6, 16)