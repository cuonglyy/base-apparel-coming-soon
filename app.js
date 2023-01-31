const form = document.querySelector('.sign-up');
const signUpBtn = document.querySelector('.sign-up__btn--submit');
const errorMsg = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error-icon');
const email = document.querySelector('.sign-up__field');

const signUp = (e) => {
    e.preventDefault();

    if (email.validity.typeMismatch || email.validity.valueMissing) {
        form.classList.add('error');
        errorMsg.style.opacity = '1';
        errorIcon.style.opacity = '1';
    } else {
        form.classList.remove('error');
        errorMsg.style.opacity = '0';
        errorIcon.style.opacity = '0';
    }
}




signUpBtn.addEventListener('click', signUp);