let ShowPasswordBtn = document.querySelector('.show-password')
let passwordInp = document.querySelector('.password-input')
let passwordChecklist = document.querySelectorAll('.list-item')

ShowPasswordBtn.addEventListener('click', () => {

    // toggle the icon
    ShowPasswordBtn.classList.toggle('fa-eye');
    ShowPasswordBtn.classList.toggle('fa-eye-slash');

    // passwordInp.nodeType = passwordInp.nodeType ===
})

// string password validation

let validationRegex = [
    { regex: /.{8,}/ }, // minimum of 8 letters
    { regex: /[0-9]/ }, //numbers from 0-9
    { regex: /[a-z]/ }, //lowercase a-z
    { regex: /[A-Z]/ }, // uppercase A-Z
    { regex: /[^A-Za-z0-9]/ } //Special characters
]

passwordInp.addEventListener('keyup', (event) => {
    validationRegex.forEach((item, i) => {
        let isValid = item.regex.test(passwordInp.value)

        if (isValid) {
            passwordChecklist[i].classList.add('checked')
        } else {
            passwordChecklist[i].classList.remove('checked')
        }
    })
});
