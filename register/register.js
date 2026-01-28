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

let gender = document.getElementsByName("gender");
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

// Which field first empty show field error message (Facebook behavior)
const errorShowMessage = () => {
    hideAllErrorMessage()

    if (firstName.value.trim() === "") {
        firstNameError.style.display = "block";
    } else if (surname.value.trim() === "") {
        surnameError.style.display = "block";
    } else if (day.value.trim() === "" || month.value.trim() === "" || year.value.trim() === "") {
        dobError.style.display = "block";
    } else if (gender.value.trim() === "") {
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
    if (day.value.trim() === "" || month.value.trim() == "" || year.value.trim() == "") {
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
// ----------------------------- Ye Le
    errorShowMessage();
}

signUpBtn.addEventListener("click", signUpHandler());

// Clicking error icon switches message (Facebook behavior)
const iconSwitchesMessage = (errorId, icon) => {
    hideAllErrorMessage();
    errorId.style.display = "block";
    icon.style.display = "none";
}

const resetErrorAndIcons = () => {
    // hide all errors
    firstNameError.style.display = "none";
    surnameError.style.display = "none";

    // show all icons
    firstNameIcon.style.display = "block";
    surnameIcon.style.display = "block";
}

firstNameIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    resetErrorAndIcons();
    iconSwitchesMessage(firstNameError, firstNameIcon);
})

surnameIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    resetErrorAndIcons();
    iconSwitchesMessage(surnameError, surnameIcon);
})

document.addEventListener("click", resetErrorAndIcons);






// Step 1: Variables (same as you already use)
// var firstName = document.getElementById("firstName");
// var surName = document.getElementById("surName");

// var firstNameIcon = document.getElementById("firstNameIcon");
// var surNameIcon = document.getElementById("surnameIcon");

// var firstNameError = document.getElementById("firstNameError");
// var surNameError = document.getElementById("surnameError");

// var signUpBtn = document.getElementById("signUpBtn");

// Step 2: Hide ALL error messages (one simple function)
// function hideAllErrorMessages() {
//     firstNameError.style.display = "none";
//     surNameError.style.display = "none";
// }


// This ensures only one error message shows at a time.

// Step 3: Validate form (Facebook style)
// function validateForm() {

//     hideAllErrorMessages();   // first hide all messages

//     // FIRST NAME
//     if (firstName.value === "") {
//         firstName.classList.add("input-error");
//         firstNameIcon.style.display = "block";

//         // show FIRST error only
//         firstNameError.style.display = "block";
//     } else {
//         firstName.classList.remove("input-error");
//         firstNameIcon.style.display = "none";
//     }

//     // SURNAME
//     if (surName.value === "") {
//         surName.classList.add("input-error");
//         surNameIcon.style.display = "block";
//     } else {
//         surName.classList.remove("input-error");
//         surNameIcon.style.display = "none";
//     }
// }


// 👉 Notice:

// Both fields get red border + icon

// Only first name message appears first

// Step 4: Button click
// signUpBtn.onclick = function () {
//     validateForm();
// };

// Step 5: Clicking error icon switches message (Facebook behavior)
// firstNameIcon.onclick = function () {
//     hideAllErrorMessages();
//     firstNameError.style.display = "block";
// };

// surNameIcon.onclick = function () {
//     hideAllErrorMessages();
//     surNameError.style.display = "block";
// };

// ✅ Final Result (exactly what you wanted)

// ✔ Click Sign Up
// → Both inputs red
// → Both icons visible
// → Only First Name error message shows

// ✔ Click Surname icon
// → First error hides
// → Surname error shows

// ✔ Only ONE error message at a time

// Why this is better for you right now ❤️

// No loops

// No arrow functions

// No complex objects

// You can debug line by line

// You can add more fields easily by copy-pasting logic

// If you want, next I can:

// Explain each line in simple English

// Add mobile / email field

// Teach you for loop (not forEach) when you’re ready

// Refactor this step-by-step into cleaner code

// You’re doing great — this is exactly how real devs learn 💪






















// const showError = (errorId, iconId, inputId) => {
//     let errorIcon = document.getElementById(iconId);
//     let error = document.getElementById(errorId);
//     if (firstName.value === "") {
//         error.style.display = "block";
//         errorIcon.style.display = "block";
//         inputId.classList.add("input-error");
//     }
// }

// const hideError = (errorId, iconId, inputId) => {
//     let errorIcon = document.getElementById(iconId);
//     let error = document.getElementById(errorId);
//     if (firstName.value === "") {
//         error.style.display = "none";
//         errorIcon.style.display = "none";
//         inputId.classList.remove("input-error");
//     }
// }

// showError("surnameError", "surnameIcon", surname);