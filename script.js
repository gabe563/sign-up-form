function validate(){
    const password = document.getElementById('pass');
    const confirmPassword = document.getElementById('confirm-pass');
    const incorrect = document.getElementById('incorrect');
    const submit = document.querySelector('button');
    const pass = password.value;
    let isCorrect = true;

    if (pass.length < 6) {
        incorrect.innerHTML = 'Your password must be at least 6 characters'; 
        isCorrect = false;
        password.classList.add('invalid');
        password.classList.remove('valid');
    }

    if(pass.search(/[a-z]/) < 0){
        incorrect.innerHTML = 'Your password must contain at least one lowercase letter';
        isCorrect = false;
        password.classList.add('invalid');
        password.classList.remove('valid');
    }

    if(pass.search(/[A-Z]/) < 0){
        incorrect.innerHTML = 'Your password must contain at least one uppercase letter';
        isCorrect = false;
        password.classList.add('invalid');
        password.classList.remove('valid');
    }

    if (pass.search(/[0-9]/) < 0) {
        incorrect.innerHTML = 'Your password must contain at least one digit';
        isCorrect = false;
        password.classList.add('invalid');
        password.classList.remove('valid');
    }

    if (isCorrect === true) {
        incorrect.innerHTML = '';
        password.classList.remove('invalid');
        password.classList.add('valid');
    }

    if(password.classList.contains('invalid') || confirmPassword.classList.contains('invalid')){
        submit.style.cursor = 'auto';
        submit.disabled = true;
        submit.style.opacity = (0.7);
    }
}



function confirmPass(){
    const password = document.getElementById('pass');
    const confirmPassword = document.getElementById('confirm-pass');
    const incorrect = document.getElementById('incorrect');
    const submit = document.querySelector('button');

    if(password.value != confirmPassword.value){
        password.classList.remove('valid');
        confirmPassword.classList.remove('valid');

        password.classList.add('invalid');
        confirmPassword.classList.add('invalid');

        incorrect.innerHTML = '* Passwords do not match';
    } else {
        password.classList.remove('invalid');
        confirmPassword.classList.remove('invalid');

        password.classList.add('valid');
        confirmPassword.classList.add('valid');

        incorrect.innerHTML = '';
        submit.disabled = false;
        submit.style.opacity = (1);
        submit.style.cursor = 'pointer';
    }
}



