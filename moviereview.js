function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location").value;
    var formMessage = document.getElementById("formMessage");

    var nameRegex = /^[A-Za-z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(fullName)) {
        formMessage.innerHTML = "Please enter a valid full name (letters only).";
        formMessage.style.color = "red";
        return false;
    }

    if (!emailRegex.test(email)) {
        formMessage.innerHTML = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return false;
    }

    if (location.trim() === "") {
        formMessage.innerHTML = "Location is required.";
        formMessage.style.color = "red";
        return false;
    }

    formMessage.innerHTML = "Form submitted successfully!";
    formMessage.style.color = "green";
    return true;
}
