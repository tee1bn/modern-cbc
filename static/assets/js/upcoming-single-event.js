function toggleMarket(headerEl) {
  const marketGroup = headerEl.closest(".market-group");
  marketGroup.classList.toggle("collapsed");
}

document.querySelectorAll(".market-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".market-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

const eventHeader = document.getElementById("eventHeader");
const COLLAPSE_AT = 120;
let isCollapsed = false;
window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;

    // Collapse once
    if (y > COLLAPSE_AT && !isCollapsed) {
      eventHeader.classList.add("collapsed");
      isCollapsed = true;
    }

    // Expand only when near top
    if (y < 40 && isCollapsed) {
      eventHeader.classList.remove("collapsed");
      isCollapsed = false;
    }
  },
  { passive: true },
);
