/**
 * logic for mobile icon: hamburger
 */

const icon = document.getElementById("menu_icon");
const menu_links = document.getElementById("menu_links");

//adding a click event listener to icon
icon.addEventListener("click", () => {
  if (icon.classList.contains("exit")) {
    icon.classList.remove("exit");
    icon.classList.add("reverse_animation");
    menu_links.classList.add("noshow");
    menu_links.classList.remove("show");
    if (menu_links.classList.contains("noshow"))
      document.getElementById("menu_links").style.display = "none";
    else document.getElementById("menu_links").style.display = "flex";
  } else {
    icon.classList.add("exit");
    icon.classList.remove("reverse_animation");
    menu_links.classList.remove("noshow");
    menu_links.classList.add("show");

    if (menu_links.classList.contains("noshow"))
      document.getElementById("menu_links").style.display = "none";
    else document.getElementById("menu_links").style.display = "flex";
  }
});

// make mobile menu div disappear when a link is clicked

const mobileNavLinks = document.querySelectorAll(".menu_links a");
for (let link of mobileNavLinks) {
    link.addEventListener("click", () => {
        document.getElementById("menu_links").style.display = "none";
        icon.classList.remove("exit");
        icon.classList.add("reverse_animation");
    })
}