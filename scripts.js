const menu = document.getElementsByClassName("menu-itm");
const icon = document.getElementById("menu_icon");
const header = document.getElementById("header");
const menu_mobile = document.getElementById("menu_mobile");
const mobile_menu = document.getElementsByClassName("mobile_menu-itm");



//adding a click event listener to icon
icon.addEventListener('click', ()=> {
    if (icon.classList.contains("exit"))
    {
        icon.classList.remove("exit");
        icon.classList.add("reverse_animation");
        menu_mobile.classList.add("noshow");
        menu_mobile.classList.remove("show");
        if (menu_mobile.classList.contains("noshow"))
            document.getElementById("menu_mobile").style.display = "none";
        else
            document.getElementById("menu_mobile").style.display = "flex";
    }
    else
    {
        icon.classList.add("exit");
        icon.classList.remove("reverse_animation");
        menu_mobile.classList.remove("noshow");
        menu_mobile.classList.add("show");
        
        if (menu_mobile.classList.contains("noshow"))
            document.getElementById("menu_mobile").style.display = "none";
        else
            document.getElementById("menu_mobile").style.display = "flex";
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

// make div disappear when a link is clicked

const mobileNavLinks = document.querySelectorAll(".menu_mobile a");
for (let link of mobileNavLinks) {
    link.addEventListener("click", () => {
        document.getElementById("menu_mobile").style.display = "none";
        icon.classList.remove("exit");
        icon.classList.add("reverse_animation");
    })
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

// for count achievements

// Initialize counters started status
let yearsExperienceStarted = false;
let projectsCompletedStarted = false;
let awardsWonStarted = false;

document.addEventListener('scroll', () => {
  const yearsExperience = document.getElementById('yearsExperience');
  const projectsCompleted = document.getElementById('projectsCompleted');
  const awardsWon = document.getElementById('awardsWon');
  
  const offset = window.innerHeight * 0.9; // Adjust as needed
  
  if (!yearsExperienceStarted && yearsExperience.getBoundingClientRect().top < offset) {
    startCounting('yearsExperience', 2); // Start counting from 0 to 2
    yearsExperienceStarted = true;
  }
  if (!projectsCompletedStarted && projectsCompleted.getBoundingClientRect().top < offset) {
    startCounting('projectsCompleted', 5); // Start counting from 0 to 5
    projectsCompletedStarted = true;
  }
  if (!awardsWonStarted && awardsWon.getBoundingClientRect().top < offset) {
    startCounting('awardsWon', 10); // Start counting from 0 to 10
    awardsWonStarted = true;
  }
});


function startCounting(id, target) {
  let count = 0;
  const element = document.getElementById(id).querySelector('h3');
  const interval = setInterval(() => {
    if (count >= target) {
      clearInterval(interval);
    } else {
      count++;
      element.textContent = count + '+';
    }
  }, 100);
}

// Animations on scroll

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll(".noanimate");
    
    for (let section of sections) {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionPosition < screenPosition)
            section.classList.add("animate");
        else
            section.classList.remove("animate");
    }
});