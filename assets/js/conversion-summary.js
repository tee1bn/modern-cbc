/**
 * Conversion Summary Manager
 * Handles dynamic rendering of bet conversion results
 * Supports Grouped, Origin Only, and Target Only views
 */

// ============================================================================
// MOCK DATA - Replace with API data in production
// ============================================================================

const conversionData = {
  originCode: "49382KL",
  originBookie: "1xBet",
  originOdds: 10.53,
  targetCode: "7849362019",
  targetBookie: "Bet9ja",
  targetOdds: 7.21,
  
  events: [
    {
      id: 1,
      origin: {
        league: "Women Bundesliga",
        homeTeam: "Werder Bremen",
        awayTeam: "Bayer Leverkusen",
        market: "Over/Under",
        pick: "Over 0.5",
        odds: 1.03,
        kickoff: "Sat 12/12/25, 18:30 UTC"
      },
      target: {
        league: "Women Bundesliga",
        homeTeam: "Werder Bremen",
        awayTeam: "Bayer Leverkusen",
        market: "Over/Under",
        pick: "Over 0.5",
        odds: 1.03,
        kickoff: "Sat 12/12/25, 18:30 UTC",
        status: "converted"
      }
    },
    {
      id: 2,
      origin: {
        league: "English Premier League",
        homeTeam: "Manchester United",
        awayTeam: "Liverpool",
        market: "Full Time Result",
        pick: "Home Win",
        odds: 2.15,
        kickoff: "Sun 13/12/25, 15:00 UTC"
      },
      target: {
        league: "English Premier League",
        homeTeam: "Manchester United",
        awayTeam: "Liverpool",
        market: "Full Time Result",
        pick: "Home Win",
        odds: 2.10,
        kickoff: "Sun 13/12/25, 15:00 UTC",
        status: "converted"
      }
    },
    {
      id: 3,
      origin: {
        league: "La Liga",
        homeTeam: "Barcelona",
        awayTeam: "Real Madrid",
        market: "Both Teams To Score",
        pick: "Yes",
        odds: 1.72,
        kickoff: "Sun 13/12/25, 20:00 UTC"
      },
      target: {
        league: "La Liga",
        homeTeam: "Barcelona",
        awayTeam: "Real Madrid",
        market: "Both Teams To Score",
        pick: "Yes",
        odds: 1.68,
        kickoff: "Sun 13/12/25, 20:00 UTC",
        status: "converted"
      }
    },
    {
      id: 4,
      origin: {
        league: "Serie A",
        homeTeam: "Juventus",
        awayTeam: "AC Milan",
        market: "Double Chance",
        pick: "Home or Draw",
        odds: 1.28,
        kickoff: "Mon 14/12/25, 19:45 UTC"
      },
      target: {
        league: "Serie A",
        homeTeam: "Juventus",
        awayTeam: "AC Milan",
        market: "Double Chance",
        pick: "Home or Draw",
        odds: 1.25,
        kickoff: "Mon 14/12/25, 19:45 UTC",
        status: "converted"
      }
    },
    {
      id: 5,
      origin: {
        league: "Bundesliga",
        homeTeam: "Bayern Munich",
        awayTeam: "Dortmund",
        market: "Over/Under",
        pick: "Over 3.5",
        odds: 1.95,
        kickoff: "Sat 12/12/25, 14:30 UTC"
      },
      target: {
        status: "failed",
        reason: "Event already started"
      }
    },
    {
      id: 6,
      origin: {
        league: "Ligue 1",
        homeTeam: "PSG",
        awayTeam: "Marseille",
        market: "First Half Corner Handicap",
        pick: "Home -2.5",
        odds: 2.10,
        kickoff: "Sun 13/12/25, 16:00 UTC"
      },
      target: {
        status: "failed",
        reason: "Market not available"
      }
    }
  ]
};

// ============================================================================
// STATE MANAGEMENT
// ============================================================================

let currentView = "grouped"; // grouped, origin, target
let currentFilter = "all"; // all, converted, failed

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Calculate conversion statistics
 */
function getConversionStats() {
  const total = conversionData.events.length;
  const converted = conversionData.events.filter(e => e.target.status === "converted").length;
  const failed = total - converted;
  
  return { total, converted, failed };
}

/**
 * Update conversion summary text
 */
function updateConversionSummary() {
  const stats = getConversionStats();
  const summaryElement = document.querySelector('.total-games');
  
  if (!summaryElement) return;
  
  let summaryText = "";
  
  if (stats.converted === stats.total) {
    summaryText = "All games converted";
  } else if (stats.failed === stats.total) {
    summaryText = `Conversion failed: 0 of ${stats.total} games`;
  } else {
    summaryText = ` ${stats.converted} / ${stats.total} games converted`;
  }
  
  summaryElement.textContent = summaryText;
}

/**
 * Generate event card HTML
 */
function createEventCard(event, type, serial) {
  const data = type === "origin" ? event.origin : event.target;
  const isFailed = type === "target" && data.status === "failed";
  const isConverted = type === "target" && data.status === "converted";
  
  const cardClass = isFailed ? "game-card game-failed" : "game-card";
  const bookieBadge = type === "origin" 
    ? `<span class="bookie-badge bookie-origin">${conversionData.originBookie}</span>`
    : isConverted 
    ? `<span class="bookie-badge bookie-target">${conversionData.targetBookie}</span>`
    : "";
  
  if (isFailed) {
    return `
      <li class="${cardClass}">
        <div class="game-serial">${serial}</div>
        <div class="game-info">
          ${bookieBadge}
          <div class="game-league">Conversion Failed</div>
          <div class="game-title">Unable to convert this event</div>
          <div class="game-failed-reason">${data.reason}</div>
        </div>
        <div class="game-status">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
        </div>
      </li>
    `;
  }
  
  const statusIcon = isConverted ? `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ` : "";
  
  return `
    <li class="${cardClass}">
      <div class="game-serial">${serial}</div>
      <div class="game-info">
        ${bookieBadge}
        <div class="game-league">${data.league}</div>
        <div class="game-title">${data.homeTeam} vs ${data.awayTeam}</div>
        <div class="game-meta">${data.market} · <strong>${data.pick}</strong></div>
        <div class="game-meta"><strong>${data.odds} odds</strong></div>
        <div class="game-meta">${data.kickoff}</div>
      </div>
      ${statusIcon ? `<div class="game-status">${statusIcon}</div>` : ""}
    </li>
  `;
}

/**
 * Create arrow separator for grouped view
 */
function createArrow() {
  return `
    <div class="conversion-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <polyline points="19 12 12 19 5 12"/>
      </svg>
    </div>
  `;
}

// ============================================================================
// RENDERING FUNCTIONS
// ============================================================================

/**
 * Render events based on current view
 */
function renderEvents() {
  const container = document.getElementById('gamesList');
  if (!container) return;
  
  let html = "";
  let filteredEvents = conversionData.events;
  
  // Apply filter
  if (currentFilter === "converted") {
    filteredEvents = conversionData.events.filter(e => e.target.status === "converted");
  } else if (currentFilter === "failed") {
    filteredEvents = conversionData.events.filter(e => e.target.status === "failed");
  }
  
  // Update container class for styling
  container.className = `games-list view-${currentView}`;
  
  // Render based on view
  switch (currentView) {
    case "grouped":
      filteredEvents.forEach((event, index) => {
        const serial = event.id;
        // Wrap each group in a container for flex row layout
        html += '<div class="conversion-group">';
        html += createEventCard(event, "origin", serial);
        html += createArrow();
        html += createEventCard(event, "target", serial);
        html += '</div>';
      });
      break;
      
    case "origin":
      filteredEvents.forEach((event, index) => {
        const serial = event.id;
        html += createEventCard(event, "origin", serial);
      });
      break;
      
    case "target":
      filteredEvents.forEach((event, index) => {
        const serial = event.id;
        html += createEventCard(event, "target", serial);
      });
      break;
  }
  
  container.innerHTML = html;
  updateConversionSummary();
}

/**
 * Set active view
 */
function setView(view) {
  currentView = view;
  
  // Update button states
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeBtn = document.querySelector(`[data-view="${view}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  renderEvents();
}

/**
 * Set filter
 */
function setFilter(filter) {
  currentFilter = filter;
  renderEvents();
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

/**
 * Initialize event listeners
 */
function initEventListeners() {
  // View toggle buttons
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const view = e.target.getAttribute('data-view');
      if (view) setView(view);
    });
  });
  
  // Filter dropdown
  const filterSelect = document.querySelector('.game-filter');
  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
      const filterValue = e.target.value.toLowerCase();
      if (filterValue === "all games") {
        setFilter("all");
      } else {
        setFilter(filterValue);
      }
    });
  }
  
  // Copy code functionality
  window.copyCode = function(code) {
    navigator.clipboard.writeText(code)
      .then(() => {
        alert(`Code copied: ${code}`);
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };
  
  // Share code functionality
  window.shareCode = function() {
    const code = conversionData.targetCode;
    const text = `Check out my bet code: ${code}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Bet Code',
        text: text
      }).catch(err => console.log('Share failed:', err));
    } else {
      copyCode(code);
    }
  };
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize the conversion summary module
 */
function initConversionSummary() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      renderEvents();
      initEventListeners();
    });
  } else {
    renderEvents();
    initEventListeners();
  }
}

// Auto-initialize
initConversionSummary();

// ============================================================================
// PUBLIC API (for external use if needed)
// ============================================================================

window.ConversionSummary = {
  setView,
  setFilter,
  renderEvents,
  getStats: getConversionStats,
  updateData: (newData) => {
    Object.assign(conversionData, newData);
    renderEvents();
  }
};