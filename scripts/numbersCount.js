/**
 * logic behind the numbers counting up from zero
 */

// Initialize counters started status
let yearsExperienceStarted = false;
let projectsCompletedStarted = false;
let awardsWonStarted = false;

document.addEventListener('scroll', () => {
  const yearsExperience = document.getElementById('yearsExperience');
  const projectsCompleted = document.getElementById('projectsCompleted');
  const awardsWon = document.getElementById('awardsWon');
  
  const offset = window.innerHeight * 0.9;
  
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