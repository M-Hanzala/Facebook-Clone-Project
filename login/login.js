let email = document.getElementById("email");
let emailIcon = document.getElementById("email-icon");
let emailError = document.getElementById("email-error");

let password = document.getElementById("password");
let passwordIcon = document.getElementById("pass-icon");
let passwordError = document.getElementById("pass-error");

let loginBtn = document.getElementById("login");
let createNewAccount = document.getElementById("signUpBtn");

// Window location to Signup Page
createNewAccount.addEventListener("click", () => {
    window.location.href = '/register/register.html';
})

// Sweet Alert Function
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
        emailError.style.display = "block";
    } else {
        email.classList.remove("input-error");
        emailIcon.style.display = "none";
        emailError.style.display = "none";
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

    // Get previous user from local storage
    let getPrevUsers = JSON.parse(localStorage.getItem("users"));
    let isEmailExist = false;
    let isPasswordExist = false;
    let loggedInUser = null;

    // Account does not exist, so create an account !
    if (!getPrevUsers) {
        email.classList.add("input-error");
        emailIcon.style.display = "block";
        emailError.style.display = "block";
    }

    for (var i = 0; i < getPrevUsers?.length; i++) {
        let user = getPrevUsers[i];

        if (user?.email == email.value.trim()) {
            isEmailExist = true;

            // Password matches from same user 
            if (user?.password == password.value.trim()) {
                isPasswordExist = true;
                loggedInUser = user;
                break;
            }
        }
    }

    // If email and password is not exist so show error
    if (isEmailExist == false && isPasswordExist == false) {
        email.classList.add("input-error");
        emailIcon.style.display = "block";
        emailError.style.display = "block";
        password.classList.add("input-error");
        passwordIcon.style.display = "block";
    }

    // If email exist and just password is incorrect so show error on password
    if (isEmailExist == true && isPasswordExist == false) {
        email.classList.remove("input-error");
        emailIcon.style.display = "none";
        emailError.style.display = "none";
        password.classList.add("input-error");
        passwordIcon.style.display = "block";
        passwordError.style.display = "block";
    }

    // If both exist so login successful
    if (isEmailExist == true && isPasswordExist == true) {
        sweetAlert("success", "Login Successfully", "Congratulations! Login Successfully");
        email.classList.remove("input-error");
        emailIcon.style.display = "none";
        emailError.style.display = "none";
        password.classList.remove("input-error");
        passwordIcon.style.display = "none";
        setTimeout(() => {
            window.location.href = '/dashboard/dashboard.html'
        }, 1200)

        // Sets current user who login, at localStorage.
        localStorage.setItem("CurrentUser", JSON.stringify(loggedInUser));
    }

}
loginBtn.addEventListener("click", loginHandler);