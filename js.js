function validateForm (id){
    const $form = document.getElementById(id)
    if(!$form){
        return
    }
    
    const $fields = $form.querySelector('fieldset')
    const $submit = $form.querySelector('button[type="submit"]')
    
    $fields.addEventListener('input', function(event){
        let isValid = true
        $fields.querySelectorAll('input').forEach(function(el){
            if(!el.value){
                isValid = false
            }
        })
        isValid ? $submit.removeAttribute('disabled') : $submit.setAttribute('disabled', '')
    })
}

validateForm('form-login')