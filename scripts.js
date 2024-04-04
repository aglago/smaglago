const menu = document.getElementsByClassName("menu-itm");
const icon = document.getElementById("menu_icon");
const header = document.getElementById("header");
const menu_mobile = document.getElementById("menu_mobile");


//adding a click event listener to icon
icon.addEventListener('click', ()=> {
    if (icon.classList.contains("exit"))
    {
        icon.classList.remove("exit");
        icon.classList.add("reverse_animation");
        // menu_mobile.classList.add("noshow");
        // menu_mobile.classList.remove("show");
        
    }
    else
    {
        icon.classList.add("exit");
        icon.classList.remove("reverse_animation");
        // menu_mobile.classList.remove("noshow");
        // menu_mobile.classList.add("show");
    }
});

// LISTEN TO SCROLLING AND UPDATE BORDER WHEN NECESSARY
window.addEventListener('scroll', function(){
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 50 && rect.bottom >= 50) {
            if (index < navLinks.length)
                updateClass(navLinks[index]);
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

// Working on dark mode
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

// carosel

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.projects_wrapper .carousel > div');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'flex';
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});
