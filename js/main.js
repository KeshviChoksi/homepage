/**
 * main.js - Keshvi Choksi Homepage
 * ES6 Module: nav scroll, typewriter hero tagline,
 * full-page particle background
 */

import { initNav } from "./nav.js";
import { animateSkillBars } from "./skillBars.js";
import { initTypewriter } from "./typewriter.js";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  animateSkillBars();
  initTypewriter();
});
