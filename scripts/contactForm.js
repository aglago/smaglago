/**
 * logic behind the user submiting a form
 */

// Disable submit button when user clicks
const submitButton = document.querySelector("input.submit")
submitButton.addEventListener("click", (e) => { 
    submitButton.style.backgroundColor = "gray";
    submitButton.innerHTML = "Message sent ✔️";

    e.preventDefault();
    // collecting information from the contact form
    const firstName = document.querySelector("input[name=firstname]").value
    const lastName = document.querySelector("input[name=lastname]").value
    const email = document.querySelector("input[name=email]").value
    const message = document.querySelector("textarea[name=message]").value

    // sending the information to the server
    // sendToServer(firstName, lastName, email, message);
})

const sendToServer = (firstName, lastName, email, message) => {
    const form = document.querySelector("form")
    form.addEventListener("submit", async (e) => { 
        e.preventDefault();
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message
        }
        const response = await fetch("https://formspree.io/f/mlelmple", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await response.json();
        console.log(result);
        if (result.ok) {
            form.reset();
        } else {
            console.log("error");
        }
    })
}