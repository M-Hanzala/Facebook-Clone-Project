let email = document.getElementById("email");
let emailIcon = document.getElementById("email-icon");
let emailError = document.getElementById("email-error");

let password = document.getElementById("password");
let passwordIcon = document.getElementById("pass-icon");
let passwordError = document.getElementById("pass-error");

let loginBtn = document.getElementById("login");
let createNewAccount = document.getElementById("signUpBtn");

createNewAccount.addEventListener("click", () => {
    window.location.href = 'file:///D:/Muhammad%20Hanzala/Project/Facebook/register/register.html';
})

const sweetAlert = (icon, title, text) => {
    Swal.fire({
        icon: icon,           //"error"
        title: title,        //"Oops..."
        text: text,         //"Something went wrong!"
    });
}

const hideAllErrorMessage = () => {
    emailError.style.display = "none";
    passwordError.style.display = "none";
}

// If any field is focused and empty so it show error 
const showErrorOnFocusIfEmpty = (field, errorElem) => {
    field.addEventListener("focus", () => {
        if (field.value.trim() === "") {
            hideAllErrorMessage();
            errorElem.style.display = "block";
        }
    })

    field.addEventListener("blur", hideAllErrorMessage);
}

// Login Handler 
const loginHandler = () => {
    hideAllErrorMessage();

    // Email
    if (email.value.trim() === "") {
        email.classList.add("input-error");
        emailIcon.style.display = "block";
    } else {
        email.classList.remove("input-error");
        emailIcon.style.display = "none";
    }

    // Password
    if (password.value.trim() === "") {
        password.classList.add("input-error");
        passwordIcon.style.display = "block";
    } else {
        password.classList.remove("input-error");
        passwordIcon.style.display = "none";
    }

    showErrorOnFocusIfEmpty(email, emailError);
    showErrorOnFocusIfEmpty(password, passwordError);
}
loginBtn.addEventListener("click", loginHandler);