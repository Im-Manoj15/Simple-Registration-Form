function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let submitBtn = document.getElementById("submitBtn");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    let isValid = true;

    // Name Validation
    if (name === "") {
        nameError.classList.remove("hidden");
        isValid = false;
    } else {
        nameError.classList.add("hidden");
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.classList.remove("hidden");
        isValid = false;
    } else {
        emailError.classList.add("hidden");
    }

    // Password Validation
    if (password.length < 6) {
        passwordError.classList.remove("hidden");
        isValid = false;
    } else {
        passwordError.classList.add("hidden");
    }

    // Enable or Disable Submit Button
    if (isValid) {
        submitBtn.classList.remove("cursor-not-allowed", "opacity-50");
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.add("cursor-not-allowed", "opacity-50");
        submitBtn.disabled = true;
    }
}
