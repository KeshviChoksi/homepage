/**
 * skillBars.js - Animates skill bar fills and percentage counters
 * when the bars section scrolls into view.
 * ES6 Module - original JS functionality
 */

export function animateSkillBars() {
  const fills = document.querySelectorAll(".bar-item__fill");
  const pcts = document.querySelectorAll(".bar-item__pct");

  if (!fills.length) return;

  /**
   * Counts a percentage element up from 0 to its target value.
   * @param {HTMLElement} el - The element whose text content to animate.
   * @param {number} target - Target percentage (0–100).
   */
  function countUp(el, target) {
    const duration = 1200;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = `${Math.round(eased * target)}%`;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        fills.forEach((fill) => {
          const pct = Number(fill.dataset.pct);
          fill.style.width = `${pct}%`;
        });

        pcts.forEach((pct) => {
          const target = Number(pct.dataset.pct);
          countUp(pct, target);
        });

        observer.disconnect();
      });
    },
    { threshold: 0.3 }
  );

  const barsSection = document.getElementById("skill-bars");
  if (barsSection) observer.observe(barsSection);
}
