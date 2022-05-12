function validateForm (id, minL, maxL){
    const $form = document.getElementById(id)
    if(!$form){
        return
    }

    const $fields = $form.querySelector('fieldset')
    const $submit = $form.querySelector('button[type="submit"]')
    
    $fields.addEventListener('input', function(event){
        let isValid = true
        $fields.querySelectorAll('input').forEach(function(el){
            if(el.value.length < minL || el.value.length > maxL){
                isValid = false
            }
        })
        isValid ? $submit.removeAttribute('disabled') : $submit.setAttribute('disabled', '')
    })
}

validateForm('form-login', 6, 16);