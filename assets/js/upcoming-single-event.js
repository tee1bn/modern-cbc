
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



