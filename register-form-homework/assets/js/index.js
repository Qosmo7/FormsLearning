const emailRegExp = /(.+)@(.+){2,}\.(.+){2,}/
const minL = 6
const maxL = 16

function validateForm(id){
    const $form = document.getElementById(id)
    if(!$form){
        return
    }

    const $fields = $form.querySelector('fieldset')
    const $email = $fields.querySelector('#email')
    const $checkbox = $fields.querySelector('input[type="checkbox"]')
    const $submit = $form.querySelector('button[type="submit"]')
    
    $fields.addEventListener('input', function(event){
        let isValid = true
        $fields.querySelectorAll('input').forEach(function(el){
            switch (el.type){
                case 'text' :
                    switch (el.getAttribute('name')){
                        case 'name' :
                            validateInputLength(el) ? null : isValid = false
                            break
                        case 'email' :
                            validateInputLength(el) ? null : isValid = false
                            validateEmail(el) ? null : isValid = false
                            break
                    }
                    break
                case 'password' :
                    validateInputLength(el) ? null : isValid = false
                    $fields.querySelector('[name="password"]').value == $fields.querySelector('[name="password-repeat"]').value ? null : isValid = false
                    break
                case 'checkbox' :
                    validateCheckbox(el) ? null : isValid = false
                    break
            }
        })
        isValid ? $submit.removeAttribute('disabled') : $submit.setAttribute('disabled', '')
    })

    $fields.addEventListener('click', function(event){
        if(event.target.closest('.password-toggler')){
            $fields.querySelectorAll('input[id^="password"]').forEach(function(el){
                if(el.getAttribute('type') === 'password'){
                    el.setAttribute('type', 'text')
                    el.nextElementSibling.classList.add('password-toggler--active')
                }
                else {
                    el.setAttribute('type', 'password')
                    el.nextElementSibling.classList.remove('password-toggler--active')
                }
            })
        }
    })
}

function validateInputLength(el){
    return (el.value.length >= minL) && (el.value.length <= maxL)
}
function validateEmail(el){
    return emailRegExp.test(el.value)
}
function validateCheckbox(el){
    return el.checked
}

validateForm('register-form')