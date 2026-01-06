// ================================
// Scroll handling
// ================================
let lastScrollTop = 0;
const header = document.getElementById("eventHeader");
const bottomNav = document.getElementById("bottomNav");
const scrollThreshold = 100;

// Replace the existing scroll event listener with this:
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Compact header
  if (scrollTop > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Hide / show bottom nav (if you have it)
  if (bottomNav) {
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
      bottomNav.classList.add("hidden");
    } else {
      bottomNav.classList.remove("hidden");
    }
  }

  lastScrollTop = scrollTop;
});

// ================================
// Toggle market collapse/expand
// ================================
function toggleMarket(headerEl) {
  const marketGroup = headerEl.closest(".market-group");
  marketGroup.classList.toggle("collapsed");
}

// ================================
// Market Info Modal
// ================================
const marketInfoModal = document.getElementById("marketInfoModal");
const marketInfoTitle = document.getElementById("marketInfoTitle");
const marketInfoDescription = document.getElementById("marketInfoDescription");
const marketInfoCloseBtn = document.querySelector(".market-info-close");

// Detailed market information
const marketInfoTexts = {
  "1x2": {
    title: "1X2 Market Explained",
    description:
      "The 1X2 market allows you to bet on the final outcome of a match:\n\n" +
      "1 (Home Win): Bet on the home team winning the match\n" +
      "X (Draw): Bet on the match ending in a draw\n" +
      "2 (Away Win): Bet on the away team winning the match\n\n" +
      "Example: If you bet on '1', the home team must win for your bet to be successful.",
  },
  "1x2-1up": {
    title: "1 Goal Up Market",
    description:
      "In the 1 Goal Up market, your bet wins if the selected team goes one goal ahead:\n\n" +
      "- Bet on the team you think will score first\n" +
      "- Bet wins if that team maintains its lead\n" +
      "- Provides an exciting early-game betting option",
  },
  "over-under": {
    title: "Over/Under Market",
    description:
      "Bet on the total number of goals scored in the match:\n\n" +
      "- Bookmakers set a goal line (e.g., 2.5 goals)\n" +
      "- Over: Bet that total goals will exceed the line\n" +
      "- Under: Bet that total goals will be less than the line\n\n" +
      "Example: Over 2.5 wins if 3 or more goals are scored",
  },
  "double-chance": {
    title: "Double Chance Market",
    description:
      "Reduce your risk by covering two possible outcomes:\n\n" +
      "1X (Home Win or Draw): Wins if home team wins or match draws\n" +
      "12 (Home or Away Win): Wins if either team wins\n" +
      "X2 (Draw or Away Win): Wins if match draws or away team wins\n\n" +
      "Provides more security compared to standard 1X2 betting",
  },
};

function showMarketInfo(event, marketType) {
  event.stopPropagation();

  const info = marketInfoTexts[marketType] || {
    title: "Market Information",
    description: "No detailed information available for this market.",
  };

  marketInfoTitle.textContent = info.title;
  marketInfoDescription.textContent = info.description;
  marketInfoModal.style.display = "block";
}

// Close modal when close button is clicked
marketInfoCloseBtn.addEventListener("click", () => {
  marketInfoModal.style.display = "none";
});


// ================================
// Market filter tabs (UI only)
// ================================
document.querySelectorAll(".market-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".market-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

// ================================
// Odds click (future betslip hook)
// ================================
document.querySelectorAll(".odd-value").forEach((odd) => {
  odd.addEventListener("click", () => {
    console.log("Selected odd:", odd.textContent);
  });
});

// Add this script to upcoming-single-event.html before closing </body> tag

// ==================== WAIT FOR RAIL ====================
function waitForRail() {
  return new Promise((resolve) => {
    if (window.betslipRail) {
      resolve();
    } else {
      const checkInterval = setInterval(() => {
        if (window.betslipRail) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 50);
    }
  });
}

// ==================== ADD ODD TO BETSLIP ====================
async function addOddToBetslip(bookieName, market, outcomeType, oddValue) {
  await waitForRail();
  
  const matchInfo = {
    teams: 'Leeds United vs Man Utd',
    league: 'Football - England - Premier League',
    date: '04/01 Sunday 13:30'
  };

  const selection = {
    matchId: 'event-' + Date.now(),
    teams: matchInfo.teams,
    date: matchInfo.date,
    market: market,
    value: outcomeType,
    odd: oddValue,
    odds: oddValue,
    league: matchInfo.league,
    bookie: bookieName,
    selected: true
  };

  if (window.betslipRail && window.betslipRail.addSelection) {
    window.betslipRail.addSelection(selection);
    window.betslipRail.flashBadge();
  }
}


// ==================== SETUP ODD CLICK LISTENERS ====================
document.addEventListener('DOMContentLoaded', async () => {
  await waitForRail();
  
  // Add click listeners to all odd values
  document.querySelectorAll('.bookie-row').forEach(row => {
    const bookieLogo = row.querySelector('.bookie-logo');
    const bookieName = bookieLogo ? bookieLogo.textContent.trim() : 'Unknown';
    
    // Get the market name from parent
    const marketGroup = row.closest('.market-group');
    const marketName = marketGroup ? marketGroup.querySelector('.market-title').textContent.trim() : '1X2';
    
    // Get all odd values in this row
    const oddElements = row.querySelectorAll('.odd-value');
    
    oddElements.forEach((oddEl, index) => {
      oddEl.style.cursor = 'pointer';
      oddEl.style.transition = 'all 0.2s ease';
      
      oddEl.addEventListener('mouseenter', function() {
        this.style.background = '#000';
        this.style.color = '#fff';
        this.style.transform = 'scale(1.05)';
      });
      
      oddEl.addEventListener('mouseleave', function() {
        this.style.background = '';
        this.style.color = '';
        this.style.transform = '';
      });
      
      oddEl.addEventListener('click', function() {
        const oddValue = this.textContent.trim();
        let outcomeType = '';
        
        // Determine outcome type based on market and position
        if (marketName.toLowerCase().includes('1x2')) {
          const outcomes = ['home', 'draw', 'away'];
          outcomeType = outcomes[index] || 'home';
        } else if (marketName.toLowerCase().includes('over/under')) {
          outcomeType = index === 0 ? 'over' : 'under';
        } else if (marketName.toLowerCase().includes('double chance')) {
          const outcomes = ['1X', 'X2', '12'];
          outcomeType = outcomes[index] || '1X';
        } else {
          outcomeType = 'home';
        }
        
        // Add visual feedback
        this.style.background = '#333';
        this.style.color = '#fff';
        setTimeout(() => {
          this.style.background = '';
          this.style.color = '';
        }, 300);
        
        // Add to betslip
        addOddToBetslip(bookieName, marketName, outcomeType, oddValue);
      });
    });
  });
});



