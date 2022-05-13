function validateForm(id, minL, maxL){
    const $form = document.getElementById(id)
    if(!$form){
        return
    }

    const emailRegExp = /(.+)@(.+){2,}\.(.+){2,}/

    const $fields = $form.querySelector('fieldset')
    const $email = $form.querySelector('#email')
    const $checkbox = $form.querySelector('input[type="checkbox"]')
    const $submit = $form.querySelector('button[type="submit"]')
    
    $fields.addEventListener('input', function(event){
        let isValid = true
        $fields.querySelectorAll('input[type="text"],input[type="password"]').forEach(function(el){
            if(el.value.length < minL || el.value.length > maxL){
                isValid = false
            }
            if(!emailRegExp.test($email.value)){
                isValid = false
            }
            if($fields.querySelector('[name="password"]').value !== $fields.querySelector('[name="password-repeat"]').value){
                isValid = false
            }
            if(!$checkbox.checked){
                isValid = false
            }
        })
        isValid ? $submit.removeAttribute('disabled') : $submit.setAttribute('disabled', '')
    })

    $fields.addEventListener('click', function(event){
        if(event.target.closest('.input__password-toggler')){
            $fields.querySelectorAll('input[id^="password"]').forEach(function(el){
                if(el.getAttribute('type') === 'password'){
                    el.setAttribute('type', 'text')
                    el.nextElementSibling.classList.add('input__password-toggler--active')
                }
                else {
                    el.setAttribute('type', 'password')
                    el.nextElementSibling.classList.remove('input__password-toggler--active')
                }
            })
        }
    })
}

validateForm('register-form', 6, 16)