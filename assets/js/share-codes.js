
const generatedBookies = ["bet9ja", "sportybet", "betway"];

function generateVersion(bookie) {
  if (generatedBookies.includes(bookie)) {
    alert("This version already exists! Scroll down to see it.");
    const bookieCard = document.querySelector(`[data-bookie="${bookie}"]`);
    if (bookieCard) {
      bookieCard.scrollIntoView({ behavior: "smooth", block: "center" });
      // Flash the card
      bookieCard.style.background = "#3333";
      setTimeout(() => {
        bookieCard.style.background = "#fff";
      }, 1000);
    }
    return;
  }

  const btn = document.querySelector(`.generate-btn[data-bookie="${bookie}"]`);
  btn.disabled = true;
  btn.innerHTML = "<span>Generating...</span>";


  setTimeout(() => {
    generatedBookies.push(bookie);

    const newCard = createBookieCard(bookie);

    const grid = document.getElementById("conversionsGrid");
    grid.insertBefore(newCard, grid.firstChild);


    btn.innerHTML = "Generated";
    btn.classList.add("generated");

    newCard.scrollIntoView({ behavior: "smooth", block: "center" });

    // Flash animation
    newCard.style.background = "#3333";
    setTimeout(() => {
      newCard.style.background = "#fff";
    }, 1000);
  }, 1500);
}

// Show more bookies modal/dropdown (placeholder)
function showMoreBookies() {
  alert(
    "More bookies dropdown coming soon!\n\nAvailable: 1xBet, 22Bet, BetKing, NairaBet, etc."
  );
  // TODO: Implement modal or dropdown with all bookies
}

// Helper function to create bookie card (simplified)
function createBookieCard(bookie) {
  const card = document.createElement("div");
  card.className = "bookie-card";
  card.setAttribute("data-bookie", bookie);
  card.setAttribute("data-matched", "3");
  card.setAttribute("data-total", "6");
  card.setAttribute("data-odds", "6.15");

  card.innerHTML = `
    <div class="bookie-card-header" onclick="toggleBookieCard('${bookie}Events', this)">
      <div class="bookie-info">
        <span class="bookie-name">${capitalizeBookieName(bookie)}</span>
        <span class="status-badge warning">3/6 Matched</span>
      </div>
      <button class="expand-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
    <div class="bookie-card-body">
      <div class="bookie-card-summary">
        <div class="summary-stats"><span>3/6</span> Matched</div>
        <div class="summary-stats">Odds: <span>@6.15</span></div>
      </div>
      <div class="odds-comparison">
        <div class="odds-item">
          <span class="odds-label">Converted Odds</span>
          <span class="odds-value">@6.15</span>
        </div>
        <div class="odds-diff negative">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          vs @10.53
        </div>
      </div>
      <div class="events-summary collapsed" id="${bookie}Events" style="max-height: 0;">
        <div class="summary-header">
          <span class="summary-title">Matched Events (3)</span>
        </div>
        <div class="mini-events-list">
          <div class="mini-event">✓ Manchester United vs Liverpool</div>
          <div class="mini-event">✓ Barcelona vs Real Madrid</div>
          <div class="mini-event">✓ Juventus vs AC Milan</div>
        </div>
        <div class="missing-events">
          <span class="missing-title">Missing Events (3)</span>
          <div class="mini-event missing">✗ Werder Bremen vs Bayer Leverkusen</div>
          <div class="mini-event missing">✗ Bayern Munich vs Dortmund</div>
          <div class="mini-event missing">✗ PSG vs Marseille</div>
        </div>
      </div>
      <a href="#" class="cta-btn secondary-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        Play on ${capitalizeBookieName(bookie)}
      </a>
    </div>
  `;

  return card;
}

// Helper to capitalize bookie name
function capitalizeBookieName(bookie) {
  const names = {
    bet9ja: "Bet9ja",
    sportybet: "SportyBet",
    betway: "Betway",
    "1xbet": "1xBet",
    "22bet": "22Bet",
    betking: "BetKing",
    nairabet: "NairaBet",
  };
  return names[bookie] || bookie.charAt(0).toUpperCase() + bookie.slice(1);
}

// Toggle events list
function toggleEvents() {
  const eventsList = document.getElementById("eventsList");
  const toggleBtn = document.getElementById("toggleEventsList");
  const toggleText = toggleBtn.querySelector(".toggle-text");

  eventsList.classList.toggle("expanded");
  toggleBtn.classList.toggle("expanded");

  if (eventsList.classList.contains("expanded")) {
    toggleText.textContent = "Show Less";
  } else {
    toggleText.textContent = "Show More";
  }
}

// Expand bookie card events
document.querySelectorAll(".expand-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const target = document.getElementById(targetId);

    target.classList.toggle("collapsed");
    this.classList.toggle("expanded");
  });
});

// Accordion functionality
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;

    content.classList.toggle("collapsed");
    this.classList.toggle("expanded");
  });
});

// Copy code functionality
document
  .getElementById("copyCodeBtn")
  .addEventListener("click", async function () {
    const code = document.querySelector(".code-text").getAttribute("data-code");
    try {
      await navigator.clipboard.writeText(code);
      // alert("Code copied: " + code);
    } catch (err) {
      // alert("Failed to copy");
    }
  });

// Share buttons
document
  .getElementById("copyLinkBtn")
  .addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // alert("Link copied!");
    } catch (err) {
      // alert("Failed to copy link");
    }
  });

document
  .getElementById("shareWhatsappBtn")
  .addEventListener("click", function () {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${url}`, "_blank");
  });

document
  .getElementById("shareTwitterBtn")
  .addEventListener("click", function () {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
  });
