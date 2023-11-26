const menu = document.getElementsByClassName("menu-itm");

// LISTEN TO SCROLLING AND UPDATE BORDER WHEN NECESSARY
window.addEventListener('scroll', function(){
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 50 && rect.bottom >= 50) {
            if (index < navLinks.length)
            {
                console.log(`about to read class of: ${navLinks[index]}`);
            updateClass(navLinks[index]);
            }
        }
    });
});

// UPDATE THE CLASS IF SO
function updateClass(visibleElement)
{
    for (let section of menu)
        section.classList.remove("border");
    visibleElement.classList.add("border");
}