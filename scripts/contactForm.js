/**
 * logic behind the user submiting a form
 */

const form = document.querySelector("form")
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitButton = document.querySelector("input[type=submit]")
    submitButton.style.backgroundColor = "gray";
    submitButton.value = "Sending message...";

    const firstName = document.querySelector("input[name=firstname]").value
    const lastName = document.querySelector("input[name=lastname]").value
    const email = document.querySelector("input[name=email]").value
    const message = document.querySelector("textarea[name=message]").value

    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    }

    // sending the information to formspree.io
    const response = await fetch("https://formspree.io/f/xleqqoqk", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.ok) {
        submitButton.style.backgroundColor = "#4070F4";
        submitButton.value = "Send Message";
        form.reset();
    } else {
        console.log("error");
    }
})