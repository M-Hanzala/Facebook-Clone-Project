let firstName = document.getElementById("firstName");
let firstNameIcon = document.getElementById("firstNameIcon");
let firstNameError = document.getElementById("firstNameError");

let surname = document.getElementById("surName");
let surnameIcon = document.getElementById("surnameIcon");
let surnameError = document.getElementById("surnameError");

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let dobIcon = document.getElementById("dobIcon");
let dobError = document.getElementById("dobError");

let male = document.getElementById("genderM");
let female = document.getElementById("genderF");
let other = document.getElementById("genderO");
let genderIcon = document.getElementById("genderIcon");
let genderError = document.getElementById("genderError");

let email = document.getElementById("email");
let emailIcon = document.getElementById("emailIcon");
let emailError = document.getElementById("emailError");

let password = document.getElementById("password");
let passwordIcon = document.getElementById("passIcon");
let passwordError = document.getElementById("passError");

let signUpBtn = document.getElementById("signUpBtn");


// Hides All Fields Error
const hideAllErrorMessage = () => {
    firstNameError.style.display = "none";
    surnameError.style.display = "none";
    dobError.style.display = "none";
    genderError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
}

// Gender Radio Checking
const isGenderSelected = () => {
    return male.checked || female.checked || other.checked;
};

// Which field first empty shows field error message (Facebook behavior)
const errorShowMessage = () => {
    hideAllErrorMessage()

    if (firstName.value.trim() === "") {
        firstNameError.style.display = "block";
    } else if (surname.value.trim() === "") {
        surnameError.style.display = "block";
    } else if (day.value.trim() === "" || month.value.trim() === "" || year.value.trim() === "") {
        dobError.style.display = "block";
    } else if (!isGenderSelected()) {
        genderError.style.display = "block";
    } else if (email.value.trim() === "") {
        emailError.style.display = "block";
    } else if (password.value.trim() === "") {
        passwordError.style.display = "block";
    }
}

// Sign up Handler
const signUpHandler = () => {
    hideAllErrorMessage();

    // First Name
    if (firstName.value.trim() === "") {
        firstName.classList.add("input-error");
        firstNameIcon.style.display = "block";
    } else {
        firstName.classList.remove("input-error");
        firstNameIcon.style.display = "none"
    }

    // Surname
    if (surname.value.trim() === "") {
        surname.classList.add("input-error");
        surnameIcon.style.display = "block";
    } else {
        surname.classList.remove("input-error");
        surnameIcon.style.display = "none";
    }

    // Date of birth
    if (day.value === "" || month.value == "" || year.value == "") {
        day.classList.add("input-error");
        month.classList.add("input-error");
        year.classList.add("input-error");
        dobIcon.style.display = "block";
    } else {
        day.classList.remove("input-error");
        month.classList.remove("input-error");
        year.classList.remove("input-error");
        dobIcon.style.display = "none";
    }

    // Gender
    if (!isGenderSelected()) {
        genderIcon.style.display = "block";
        document.querySelector(".male").classList.add("input-error");
        document.querySelector(".female").classList.add("input-error");
        document.querySelector(".other").classList.add("input-error");
    } else {
        genderIcon.style.display = "none";
        document.querySelector(".male").classList.remove("input-error");
        document.querySelector(".female").classList.remove("input-error");
        document.querySelector(".other").classList.remove("input-error");
    }

    // Email
    if (email.value.trim() === "" || !isValidEmailOrPhone) {
        email.classList.add("input-error");
        emailIcon.style.display = "block";
    } else {
        email.classList.remove("input-error");
        emailIcon.style.display = "none";
    }

    // Password
    if (password.value.trim() === "" || !isStrongPassword) {
        password.classList.add("input-error");
        passwordIcon.style.display = "block";
    } else {
        password.classList.remove("input-error");
        passwordIcon.style.display = "none";
    }

    errorShowMessage();
}

signUpBtn.addEventListener("click", signUpHandler);

// Clicking errorIcon switches message (Facebook behavior)
const iconSwitchesMessage = (errorId, icon) => {
    hideAllErrorMessage();
    errorId.style.display = "block";
    icon.style.display = "none";
}

// Reset Icons. Mean hide all errorMessages & shows all errorIcons.
const resetErrorAndIcons = () => {
    // hide all errors
    hideAllErrorMessage();

    // show all icons
    firstNameIcon.style.display = "block";
    surnameIcon.style.display = "block";
    dobIcon.style.display = "block";
    genderIcon.style.display = "block";
    emailIcon.style.display = "block";
    passwordIcon.style.display = "block";
}

firstNameIcon.addEventListener("click", (e) => {
    e.stopPropagation();   // Use for: don’t let this click reach document.body
    resetErrorAndIcons();
    iconSwitchesMessage(firstNameError, firstNameIcon);
})

surnameIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    resetErrorAndIcons();
    iconSwitchesMessage(surnameError, surnameIcon);
})

dobIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    resetErrorAndIcons();
    iconSwitchesMessage(dobError, dobIcon);
})

genderIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    resetErrorAndIcons();
    iconSwitchesMessage(genderError, genderIcon);
})

emailIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    resetErrorAndIcons();
    iconSwitchesMessage(emailError, emailIcon);
})

passwordIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    resetErrorAndIcons();
    iconSwitchesMessage(passwordError, passwordIcon);
})

// document.addEventListener("click", resetErrorAndIcons);

// ------------

// Helper function for show & hide error
const showError = (errorEl, iconEl) => {
    errorEl.style.display = "block";
    if (iconEl) iconEl.style.display = "block";
};
const hideError = (errorEl, iconEl) => {
    errorEl.style.display = "none";
    if (iconEl) iconEl.style.display = "none";
};

// First & Sur Name on typing or filled 
firstName.addEventListener("input", () => {
    if (firstName.value.trim() !== "") {
        firstName.classList.remove("input-error");
        hideError(firstNameError, firstNameIcon);
    }
});

surname.addEventListener("input", () => {
    if (surname.value.trim() !== "") {
        surname.classList.remove("input-error");
        hideError(surnameError, surnameIcon);
    }
});

// For Date & Month & Year. If Selected
const dobErrorFixing = () => {
    if (day.value && month.value && year.value) {
        day.classList.remove("input-error");
        month.classList.remove("input-error");
        year.classList.remove("input-error");
        hideError(dobError, dobIcon);
    }
}

day.addEventListener("change", dobErrorFixing);
month.addEventListener("change", dobErrorFixing);
year.addEventListener("change", dobErrorFixing);

// If Gender is selected error disapppears
const genderErrorFixing = () => {
    if (male.checked || female.checked || other.checked) {
        document.querySelector(".male").classList.remove("input-error");
        document.querySelector(".female").classList.remove("input-error");
        document.querySelector(".other").classList.remove("input-error");
        hideError(genderError, genderIcon);
    }
}

male.addEventListener("change", genderErrorFixing);
female.addEventListener("change", genderErrorFixing);
other.addEventListener("change", genderErrorFixing);

// For email & phone that is valid or not
function isValidEmailOrPhone(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
};

email.addEventListener("input", () => {
    if (isValidEmailOrPhone(email.value.trim())) {
        email.classList.remove("input-error");
        hideError(emailError, emailIcon);
    }
});

// For password that is strong and valid or not 
function isStrongPassword(value) {
    return value.length >= 6 && /[A-Za-z]/.test(value) && /[0-9]/.test(value);
};

password.addEventListener("input", () => {
    if (isStrongPassword(password.value.trim())) {
        password.classList.remove("input-error");
        hideError(passwordError, passwordIcon);
    }
});


// Form Chala kr dekhna hai kya kya issue hain ! Facebook se compare krna hai