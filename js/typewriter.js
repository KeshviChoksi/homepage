/**
 * typewriter.js - Creative original feature
 * Cycles through role descriptors with a typewriter effect
 * in the hero code card on the homepage.
 * ES6 Module
 */

const ROLES = [
  "AI/ML + Full-Stack",
  "RAG Pipeline Builder",
  "MLOps Engineer",
  "React + FastAPI Dev",
  "Data Science + LLMs",
];

export function initTypewriter() {
  // Finding the role string span inside the code card
  const codeLines = document.querySelectorAll(".code-line");
  if (!codeLines.length) return;

  // The role line is the second .code-line (index 1)
  const roleLine = codeLines[1];
  if (!roleLine) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const TYPING_SPEED = 80;
  const DELETING_SPEED = 45;
  const PAUSE_AFTER_WORD = 1800;
  const PAUSE_BEFORE_TYPE = 400;

  /**
   * Updates the role line.
   * @param {string} text - Current partial text to display.
   */
  function setRoleText(text) {
    roleLine.innerHTML = `  role: <span class="c-str">"${text}"</span>,`;
  }

  function tick() {
    const currentRole = ROLES[roleIndex];

    if (isDeleting) {
      charIndex -= 1;
    } else {
      charIndex += 1;
    }

    setRoleText(currentRole.slice(0, charIndex));

    let delay = isDeleting ? DELETING_SPEED : TYPING_SPEED;

    if (!isDeleting && charIndex === currentRole.length) {
      // Finished typing - pause then start deleting
      delay = PAUSE_AFTER_WORD;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting - move to next role
      isDeleting = false;
      roleIndex = (roleIndex + 1) % ROLES.length;
      delay = PAUSE_BEFORE_TYPE;
    }

    setTimeout(tick, delay);
  }

  // Start after a short delay so page load is visible first
  setTimeout(tick, 1500);
}
