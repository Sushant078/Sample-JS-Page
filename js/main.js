"use strict"

document.getElementById("submit").addEventListener("click", verifyDetails);
let userLoggedIn = document.getElementById("user-logged-in");
let userLogin = document.getElementById("user-login");
userLoggedIn.style.display = "none";

function verifyDetails() {
    let inputFields = document.getElementsByClassName("input-field");
    let email = ""
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value === "") {
            alert("All fields are mandatory");
            return;
        }
        if (inputFields[i].name === "email") {
            email = inputFields[i].value;
        }
    }

    if (validateEmail(email)) {
        window.location.href = "page.html" + `?${email}`;
    } else {
        alert("Please enter a valid email address");
    }
}


function validateEmail(email) {
    let regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)$/
    return regex.test(email)
}
