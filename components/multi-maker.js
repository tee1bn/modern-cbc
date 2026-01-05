// components/multi-maker.js

(function() {
  'use strict';

  // ==================== STATE ====================
  let matches = [];
  let selectedMatches = new Set();
  let lockedMatches = new Set();
  let filters = {
    time: ['all'],
    market: ['1x2'],
    league: ['all'],
    oddsMin: 1.0,
    oddsMax: 10.0
  };

  // ==================== MOCK DATA ====================
  const mockMatches = [
    {
      id: 'mm-1',
      teams: 'Morocco vs Mali',
      league: 'Africa Cup of Nations',
      datetime: '26/12 Fri 21:00',
      market: '1x2',
      outcome: 'Home',
      odd: '1.54',
      time: 'today'
    },
    {
      id: 'mm-2',
      teams: 'Nottingham Forest vs Man City',
      league: 'Premier League',
      datetime: '27/12 Sat 13:30',
      market: '1x2',
      outcome: 'Away',
      odd: '1.62',
      time: 'today'
    },
    {
      id: 'mm-3',
      teams: 'AC Milan vs Verona',
      league: 'Serie A',
      datetime: '28/12 Sun 12:30',
      market: '1x2',
      outcome: 'Home',
      odd: '1.39',
      time: 'tomorrow'
    },
    {
      id: 'mm-4',
      teams: 'Liverpool vs Wolves',
      league: 'Premier League',
      datetime: '27/12 Sat 16:00',
      market: '1x2',
      outcome: 'Home',
      odd: '1.28',
      time: 'today'
    },
    {
      id: 'mm-5',
      teams: 'Chelsea vs Arsenal',
      league: 'Premier League',
      datetime: '28/12 Sun 15:00',
      market: '1x2',
      outcome: 'Away',
      odd: '2.10',
      time: 'tomorrow'
    }
  ];

  const timeOptions = [
    { value: 'all', label: 'All' },
    { value: '3hours', label: '3 hours' },
    { value: 'today', label: 'Today' },
    { value: 'monday', label: 'Monday' },
    { value: 'tuesday', label: 'Tuesday' },
    { value: 'wednesday', label: 'Wednesday' },
    { value: 'thursday', label: 'Thursday' },
    { value: 'friday', label: 'Friday' },
    { value: 'saturday', label: 'Saturday' }
  ];

  const marketOptions = [
    { value: '1x2', label: '1X2' },
    { value: 'ou', label: 'O/U' },
    { value: 'dc', label: 'DC' },
    { value: 'homeou', label: 'Home O/U' },
    { value: 'awayou', label: 'Away O/U' },
    { value: '1halfou', label: '1st Half O/U' },
    { value: 'cornersou', label: 'Corners O/U' },
    { value: 'ggng', label: 'GG/NG' },
    { value: 'handicap', label: 'Handicap' },
    { value: '1half1x2', label: '1st Half 1X2' }
  ];

  const leagueOptions = [
    { value: 'all', label: 'All Leagues' },
    { value: 'premier', label: 'Premier League' },
    { value: 'ligue1', label: 'Ligue 1' },
    { value: 'bundesliga', label: 'Bundesliga' },
    { value: 'fifaworldcup', label: 'FIFA World Cup' },
    { value: 'epofloto', label: 'Epofloto' },
    { value: 'seriea', label: 'Serie A' },
    { value: 'laliga', label: 'La Liga' },
    { value: 'brasileiro', label: 'Brasileiro Serie A' },
    { value: 'superlig', label: 'Super Lig' }
  ];

  // ==================== INITIALIZATION ====================
  function init() {
    matches = [...mockMatches];
    selectedMatches = new Set(matches.map(m => m.id));
    
    renderMatches();
    renderFilterLists();
    setupEventListeners();
    updateBottomBar();
  }

  // ==================== RENDER MATCHES ====================
  function renderMatches() {
    const container = document.getElementById('matches-list');
    const filteredMatches = getFilteredMatches();
    
    if (filteredMatches.length === 0) {
      container.innerHTML = `
        <div style="padding: 40px 20px; text-align: center; color: #999;">
          <i class="bi bi-inbox" style="font-size: 48px; margin-bottom: 16px; display: block;"></i>
          <p>No matches found with current filters</p>
        </div>
      `;
      return;
    }
    
    container.innerHTML = filteredMatches.map(match => `
      <div class="match-card" data-match-id="${match.id}">
        <div class="match-header">
          <div class="match-selection">
            <i class="bi bi-circle-fill"></i>
            <span>${match.outcome} | ${match.market.toUpperCase()}</span>
          </div>
        </div>
        <div class="match-content">
          <button class="match-remove" data-match-id="${match.id}">
            <i class="bi bi-x-lg"></i>
          </button>
          <div class="match-details">
            <div class="match-outcome-row">
              <div class="match-teams">${match.teams}</div>
            </div>
            <div class="match-datetime">${match.datetime}</div>
          </div>
          <div class="match-odd-box">${match.odd}</div>
          <button class="match-lock ${lockedMatches.has(match.id) ? 'locked' : ''}" data-match-id="${match.id}">
            <i class="bi bi-${lockedMatches.has(match.id) ? 'lock-fill' : 'unlock'}"></i>
          </button>
        </div>
      </div>
    `).join('');
    
    attachMatchEventListeners();
  }

  // ==================== FILTER MATCHES ====================
  function getFilteredMatches() {
    return matches.filter(match => {
      // Time filter
      if (!filters.time.includes('all') && !filters.time.includes(match.time)) {
        return false;
      }
      
      // Market filter
      if (!filters.market.includes(match.market)) {
        return false;
      }
      
      // League filter (simplified - check if league name contains filter)
      if (!filters.league.includes('all')) {
        const matchFound = filters.league.some(league => 
          match.league.toLowerCase().includes(league.toLowerCase())
        );
        if (!matchFound) return false;
      }
      
      // Odds filter
      const odd = parseFloat(match.odd);
      if (odd < filters.oddsMin || odd > filters.oddsMax) {
        return false;
      }
      
      return true;
    });
  }

  // ==================== RENDER FILTER LISTS ====================
  function renderFilterLists() {
    // Time filter
    const timeList = document.getElementById('time-list');
    timeList.innerHTML = timeOptions.map(opt => `
      <div class="filter-item ${filters.time.includes(opt.value) ? 'selected' : ''}" data-value="${opt.value}">
        <div class="filter-checkbox">
          ${filters.time.includes(opt.value) ? '<i class="bi bi-check"></i>' : ''}
        </div>
        <div class="filter-label">${opt.label}</div>
      </div>
    `).join('');
    
    // Market filter
    const marketList = document.getElementById('market-list');
    marketList.innerHTML = marketOptions.map(opt => `
      <div class="filter-item ${filters.market.includes(opt.value) ? 'selected' : ''}" data-value="${opt.value}">
        <div class="filter-checkbox">
          ${filters.market.includes(opt.value) ? '<i class="bi bi-check"></i>' : ''}
        </div>
        <div class="filter-label">${opt.label}</div>
      </div>
    `).join('');
    
    // League filter
    const leagueList = document.getElementById('league-list');
    leagueList.innerHTML = leagueOptions.map(opt => `
      <div class="filter-item ${filters.league.includes(opt.value) ? 'selected' : ''}" data-value="${opt.value}">
        <div class="filter-checkbox">
          ${filters.league.includes(opt.value) ? '<i class="bi bi-check"></i>' : ''}
        </div>
        <div class="filter-label">${opt.label}</div>
      </div>
    `).join('');
    
    attachFilterEventListeners();
  }

  // ==================== EVENT LISTENERS ====================
  function setupEventListeners() {
    // Filter buttons
    document.getElementById('time-filter').addEventListener('click', () => openFilterModal('time'));
    document.getElementById('market-filter').addEventListener('click', () => openFilterModal('market'));
    document.getElementById('league-filter').addEventListener('click', () => openFilterModal('league'));
    document.getElementById('odds-filter').addEventListener('click', () => openFilterModal('odds'));
    
    // Bottom action buttons
    document.getElementById('refresh-btn').addEventListener('click', refreshMatches);
    document.getElementById('remove-all-btn').addEventListener('click', removeAllSelections);
    document.getElementById('lock-all-btn').addEventListener('click', toggleLockAll);
    document.getElementById('add-more-btn').addEventListener('click', addMoreSelections);
    document.getElementById('add-to-betslip').addEventListener('click', showConfirmModal);
    
    // Odds range sliders
    const oddsMin = document.getElementById('odds-min');
    const oddsMax = document.getElementById('odds-max');
    
    oddsMin.addEventListener('input', (e) => {
      const min = parseFloat(e.target.value);
      const max = parseFloat(oddsMax.value);
      
      if (min > max) {
        e.target.value = max;
        return;
      }
      
      document.getElementById('odds-min-value').textContent = min.toFixed(1);
      updateOddsProgress();
    });
    
    oddsMax.addEventListener('input', (e) => {
      const min = parseFloat(oddsMin.value);
      const max = parseFloat(e.target.value);
      
      if (max < min) {
        e.target.value = min;
        return;
      }
      
      document.getElementById('odds-max-value').textContent = max.toFixed(1);
      updateOddsProgress();
    });
    
    // Odds tabs
    document.querySelectorAll('.odds-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        document.querySelectorAll('.odds-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Sport tabs
    document.querySelectorAll('.sport-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        document.querySelectorAll('.sport-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

  function attachMatchEventListeners() {
    // Remove buttons
    document.querySelectorAll('.match-remove').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const matchId = this.dataset.matchId;
        removeMatch(matchId);
      });
    });
    
    // Lock buttons
    document.querySelectorAll('.match-lock').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const matchId = this.dataset.matchId;
        toggleLock(matchId);
      });
    });
  }

  function attachFilterEventListeners() {
    // Time filter items
    document.querySelectorAll('#time-list .filter-item').forEach(item => {
      item.addEventListener('click', function() {
        const value = this.dataset.value;
        toggleFilterSelection('time', value);
        renderFilterItem(this, filters.time.includes(value));
      });
    });
    
    // Market filter items
    document.querySelectorAll('#market-list .filter-item').forEach(item => {
      item.addEventListener('click', function() {
        const value = this.dataset.value;
        toggleFilterSelection('market', value);
        renderFilterItem(this, filters.market.includes(value));
      });
    });
    
    // League filter items
    document.querySelectorAll('#league-list .filter-item').forEach(item => {
      item.addEventListener('click', function() {
        const value = this.dataset.value;
        toggleFilterSelection('league', value);
        renderFilterItem(this, filters.league.includes(value));
      });
    });
  }

  function renderFilterItem(element, isSelected) {
    const checkbox = element.querySelector('.filter-checkbox');
    if (isSelected) {
      element.classList.add('selected');
      checkbox.innerHTML = '<i class="bi bi-check"></i>';
    } else {
      element.classList.remove('selected');
      checkbox.innerHTML = '';
    }
  }

  // ==================== FILTER FUNCTIONS ====================
  function toggleFilterSelection(type, value) {
    if (value === 'all') {
      filters[type] = ['all'];
    } else {
      if (filters[type].includes('all')) {
        filters[type] = [value];
      } else {
        if (filters[type].includes(value)) {
          filters[type] = filters[type].filter(v => v !== value);
          if (filters[type].length === 0) {
            filters[type] = ['all'];
          }
        } else {
          filters[type].push(value);
        }
      }
    }
  }

  window.openFilterModal = function(type) {
    const modal = document.getElementById(`${type}-modal`);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Update filter button UI
      const btn = document.getElementById(`${type}-filter`);
      btn.classList.add('active');
      btn.querySelector('i').className = 'bi bi-chevron-up';
    }
  };

  window.closeFilterModal = function(type) {
    const modal = document.getElementById(`${type}-modal`);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      
      // Update filter button UI
      const btn = document.getElementById(`${type}-filter`);
      btn.classList.remove('active');
      btn.querySelector('i').className = 'bi bi-chevron-down';
    }
  };

  window.applyFilter = function(type) {
    if (type === 'odds') {
      filters.oddsMin = parseFloat(document.getElementById('odds-min').value);
      filters.oddsMax = parseFloat(document.getElementById('odds-max').value);
    }
    
    closeFilterModal(type);
    renderMatches();
    updateBottomBar();
    
    // Update filter button label
    if (type === 'market' && filters.market.length > 0 && !filters.market.includes('all')) {
      const btn = document.getElementById('market-filter');
      btn.childNodes[0].textContent = filters.market[0].toUpperCase() + ' ';
    }
  };

  function updateOddsProgress() {
    const min = parseFloat(document.getElementById('odds-min').value);
    const max = parseFloat(document.getElementById('odds-max').value);
    const progress = document.getElementById('odds-progress');
    
    const minPercent = ((min - 1) / 9) * 100;
    const maxPercent = ((max - 1) / 9) * 100;
    
    progress.style.left = minPercent + '%';
    progress.style.width = (maxPercent - minPercent) + '%';
  }

  // ==================== MATCH ACTIONS ====================
  function removeMatch(matchId) {
    if (lockedMatches.has(matchId)) {
      alert('This selection is locked. Unlock it first to remove.');
      return;
    }
    
    matches = matches.filter(m => m.id !== matchId);
    selectedMatches.delete(matchId);
    renderMatches();
    updateBottomBar();
  }

  function toggleLock(matchId) {
    if (lockedMatches.has(matchId)) {
      lockedMatches.delete(matchId);
    } else {
      lockedMatches.add(matchId);
    }
    renderMatches();
  }

  function refreshMatches() {
    const btn = document.getElementById('refresh-btn');
    const icon = btn.querySelector('i');
    
    icon.style.animation = 'spin 1s linear infinite';
    
    setTimeout(() => {
      icon.style.animation = '';
      renderMatches();
      alert('Matches refreshed!');
    }, 1000);
  }

  function removeAllSelections() {
    const lockedCount = lockedMatches.size;
    if (lockedCount > 0) {
      if (!confirm(`${lockedCount} selection(s) are locked. Remove all unlocked selections?`)) {
        return;
      }
    }
    
    matches = matches.filter(m => lockedMatches.has(m.id));
    selectedMatches = new Set(matches.map(m => m.id));
    renderMatches();
    updateBottomBar();
  }

  function toggleLockAll() {
    const btn = document.getElementById('lock-all-btn');
    const icon = btn.querySelector('i');
    
    if (lockedMatches.size === matches.length) {
      // Unlock all
      lockedMatches.clear();
      icon.className = 'bi bi-unlock';
    } else {
      // Lock all
      matches.forEach(m => lockedMatches.add(m.id));
      icon.className = 'bi bi-lock-fill';
    }
    
    renderMatches();
  }

function addMoreSelections() {
  const input = document.getElementById('add-count-input');
  const count = parseInt(input.value) || 2;
  
  if (count < 1 || count > 50) {
    alert('Please enter a number between 1 and 50');
    return;
  }
  
  // Generate new matches based on count
  const newMatches = [];
  const teams = [
    ['Barcelona', 'Real Madrid'],
    ['Bayern Munich', 'Dortmund'],
    ['PSG', 'Marseille'],
    ['Inter Milan', 'Juventus'],
    ['Atletico Madrid', 'Valencia']
  ];
  
  for (let i = 0; i < count; i++) {
    const teamPair = teams[i % teams.length];
    newMatches.push({
      id: 'mm-' + Date.now() + '-' + i,
      teams: `${teamPair[0]} vs ${teamPair[1]}`,
      league: 'Top League',
      datetime: '29/12 Mon 20:00',
      market: '1x2',
      outcome: i % 2 === 0 ? 'Home' : 'Away',
      odd: (1.5 + Math.random() * 1.5).toFixed(2),
      time: 'monday'
    });
  }
  
  matches = [...matches, ...newMatches];
  newMatches.forEach(m => selectedMatches.add(m.id));
  
  renderMatches();
  updateBottomBar();
  
  // Show feedback
  const btn = document.getElementById('add-more-btn');
  const originalText = btn.textContent;
  btn.textContent = `Added ${count}!`;
  btn.style.background = 'var(--primary-color)';
  btn.style.color = 'white';
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    btn.style.color = '';
  }, 1500);
  
  // Scroll to bottom
  setTimeout(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, 100);
}
  // ==================== BOTTOM BAR ====================
function updateBottomBar() {
  const count = matches.length;
  document.getElementById('selections-count').textContent = count;
  
  const totalOdds = matches.reduce((acc, m) => acc * parseFloat(m.odd), 1).toFixed(2);
  document.getElementById('total-odds').textContent = totalOdds;
  
  // Disable add to betslip if no matches
  const addBetslipBtn = document.getElementById('add-to-betslip');
  addBetslipBtn.disabled = count === 0;
  if (count === 0) {
    addBetslipBtn.style.opacity = '0.5';
    addBetslipBtn.style.cursor = 'not-allowed';
  } else {
    addBetslipBtn.style.opacity = '1';
    addBetslipBtn.style.cursor = 'pointer';
  }
}

  // ==================== CONFIRMATION MODAL ====================
  function showConfirmModal() {
    if (matches.length === 0) return;
    
    const modal = document.getElementById('confirm-modal');
    document.getElementById('confirm-count').textContent = matches.length;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  window.closeConfirmModal = function() {
    const modal = document.getElementById('confirm-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

window.confirmAddToBetslip = async function() {
  closeConfirmModal();
  
  // Show loading state
  const btn = document.getElementById('add-to-betslip');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="bi bi-hourglass-split"></i> Adding...';
  btn.disabled = true;
  
  // Wait for betslip rail to be available
  await waitForRail();
  
  // Add each match to betslip
  matches.forEach(match => {
    if (window.betslipRail && window.betslipRail.addSelection) {
      window.betslipRail.addSelection({
        matchId: match.id,
        teams: match.teams,
        date: match.datetime,
        market: match.market,
        value: match.outcome.toLowerCase(),
        odd: match.odd,
        odds: match.odd,
        league: match.league,
        selected: true
      });
    }
  });
  
  // Flash badge
  if (window.betslipRail && window.betslipRail.flashBadge) {
    window.betslipRail.flashBadge();
  }
  
  // Show success state
  btn.innerHTML = '<i class="bi bi-check-circle"></i> Added!';
  btn.style.background = '#444';
  
  // Wait a moment then open betslip rail
  setTimeout(() => {
    if (window.betslipRail && window.betslipRail.openRail) {
      window.betslipRail.openRail();
    }
  }, 800);
  
  // Reset button state
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = '';
    btn.disabled = false;
  }, 2000);
};

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

  // ==================== INITIALIZE ====================
  document.addEventListener('DOMContentLoaded', init);

  // Add spin animation CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

})();