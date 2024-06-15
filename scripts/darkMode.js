/**
 * logic for dark mode
 */

const darkMode = document.getElementById("darkmode");
darkMode.addEventListener("click", darkModeChanges);

function darkModeChanges() {
    const body = document.getElementById("body");
    const h1 = document.getElementById("heroH1");
    const paragraphs = document.querySelectorAll("p");
    
    if (body.classList.contains("lightBody")) {
        body.classList.remove("lightBody");
        body.classList.add("darkBody");
    } else {
        body.classList.add("lightBody");
        body.classList.remove("darkBody");
    }
}