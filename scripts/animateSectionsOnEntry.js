/**
 * animate on the entry of a section
 */

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".noanimate");

  for (let section of sections) {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) section.classList.add("animate");
    else section.classList.remove("animate");
  }
});