
let lastScrollTop = 0;
const header = document.getElementById("eventHeader");
const bottomNav = document.getElementById("bottomNav");


// ================================
// Toggle market collapse/expand
// ================================
function toggleMarket(headerEl) {
  const marketGroup = headerEl.closest(".market-group");
  marketGroup.classList.toggle("collapsed");
}


// ================================
// Market filter tabs 
// ================================
document.querySelectorAll(".market-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".market-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});


document.querySelectorAll(".odd-value").forEach((odd) => {
  odd.addEventListener("click", () => {
    console.log("Selected odd:", odd.textContent);
  });
});


// Add scroll listener
window.addEventListener('scroll', function() {
  const header = document.getElementById('eventHeader');
  const scrollPosition = window.scrollY || window.pageYOffset;
  
  if (scrollPosition > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

