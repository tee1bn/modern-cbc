// components/code-hub.js

(function() {
  'use strict';

  // ==================== STATE ====================
  let currentTab = 'popular';
  let filters = {
    time: ['All'],
    folds: ['All'],
    odds: ['All'],
    sort: 'All'
  };

  // ==================== FILTER OPTIONS ====================
  const filterOptions = {
    time: [
      'All',
      'This Weekend',
      'Sunday 04/01 (Today)',
      'Monday 05/01',
      'Tuesday 06/01',
      'Wednesday 07/01',
      'Thursday 08/01',
      'Friday 09/01',
      'Saturday 10/01'
    ],
    folds: [
      'All',
      'Folds 1 ~ 10',
      'Folds 11 ~ 20',
      'Folds 21 ~ 30',
      'Folds 31 ~ 40'
    ],
    odds: [
      'All',
      'Odds 1 ~ 25',
      'Odds 26 ~ 50',
      'Odds 51 ~ 100',
      'Odds 101 ~ 200'
    ],
    sort: [
      'All',
      'Folds Descending',
      'Folds Ascending',
      'Odds Descending',
      'Odds Ascending'
    ]
  };

  // ==================== MOCK DATA ====================
  const mockCodes = [
    {
      id: 'GCZWNU',
      folds: 4,
      odds: '16.99',
      events: [
        { type: 'away', outcome: 'Away @3.06 | 1X2', teams: 'FC Torino', time: 'Today 18:00' },
        { type: 'home', outcome: 'Home @1.94 | 1X2', teams: 'Alaves vs Real Oviedo', time: 'Today 18:30' },
        { type: 'home', outcome: 'Home @1.44 | 1X2', teams: 'Inter vs Bologna', time: 'Today 20:45' },
        { type: 'away', outcome: 'Away @2.00 | 1X2', teams: 'Real Sociedad vs Atletico Madrid', time: 'Today 21:00' }
      ]
    },
    {
      id: 'T18GYT',
      folds: 3,
      odds: '32.57',
      events: [
        { type: 'draw', outcome: 'Draw @2.93 | 1X2', teams: 'Guinea vs Cameroon', time: 'Today 20:00' },
        { type: 'draw', outcome: 'Draw @3.23 | 1X2', teams: 'Algeria vs Congo DR', time: '06/01 Tue 17:00' },
        { type: 'draw', outcome: 'Draw @3.46 | 1X2', teams: 'Ivory Coast vs Burkina Faso', time: '06/01 Tue 20:00' }
      ]
    }
  ];

  // ==================== TAB SWITCHING ====================
  function initTabs() {
    document.querySelectorAll('.hub-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        const tabType = this.dataset.tab;
        switchTab(tabType);
      });
    });
  }

  function switchTab(tabType) {
    currentTab = tabType;
    
    // Update active tab
    document.querySelectorAll('.hub-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === tabType);
    });
    
    // Show/hide content
    document.getElementById('popular-content').style.display = tabType === 'popular' ? 'block' : 'none';
    document.getElementById('load-content').style.display = tabType === 'load' ? 'block' : 'none';
  }

  // ==================== RENDER FILTERS ====================
  function renderFilters() {
    // Time filter
    const timeList = document.getElementById('time-list');
    timeList.innerHTML = filterOptions.time.map(option => `
      <div class="filter-item ${filters.time.includes(option) ? 'selected' : ''}" data-value="${option}">
        <span>${option}</span>
        <i class="bi bi-check-square-fill check-icon"></i>
      </div>
    `).join('');

    // Folds filter
    const foldsList = document.getElementById('folds-list');
    foldsList.innerHTML = filterOptions.folds.map(option => `
      <div class="filter-item ${filters.folds.includes(option) ? 'selected' : ''}" data-value="${option}">
        <span>${option}</span>
        <i class="bi bi-check-square-fill check-icon"></i>
      </div>
    `).join('');

    // Odds filter
    const oddsList = document.getElementById('odds-list');
    oddsList.innerHTML = filterOptions.odds.map(option => `
      <div class="filter-item ${filters.odds.includes(option) ? 'selected' : ''}" data-value="${option}">
        <span>${option}</span>
        <i class="bi bi-check-square-fill check-icon"></i>
      </div>
    `).join('');

    // Sort filter
    const sortList = document.getElementById('sort-list');
    sortList.innerHTML = filterOptions.sort.map(option => `
      <div class="filter-item ${filters.sort === option ? 'selected' : ''}" data-value="${option}">
        <span>${option}</span>
        <i class="bi bi-check-square-fill check-icon"></i>
      </div>
    `).join('');

    attachFilterItemListeners();
  }

  function attachFilterItemListeners() {
    document.querySelectorAll('#time-list .filter-item').forEach(item => {
      item.addEventListener('click', () => toggleFilter('time', item.dataset.value, item));
    });

    document.querySelectorAll('#folds-list .filter-item').forEach(item => {
      item.addEventListener('click', () => toggleFilter('folds', item.dataset.value, item));
    });

    document.querySelectorAll('#odds-list .filter-item').forEach(item => {
      item.addEventListener('click', () => toggleFilter('odds', item.dataset.value, item));
    });

    document.querySelectorAll('#sort-list .filter-item').forEach(item => {
      item.addEventListener('click', () => {
        filters.sort = item.dataset.value;
        document.querySelectorAll('#sort-list .filter-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
      });
    });
  }

  function toggleFilter(type, value, element) {
    if (value === 'All') {
      filters[type] = ['All'];
    } else {
      if (filters[type].includes('All')) {
        filters[type] = [value];
      } else {
        if (filters[type].includes(value)) {
          filters[type] = filters[type].filter(v => v !== value);
          if (filters[type].length === 0) filters[type] = ['All'];
        } else {
          filters[type].push(value);
        }
      }
    }
    
    // Update UI
    const container = element.parentElement;
    container.querySelectorAll('.filter-item').forEach(item => {
      const itemValue = item.dataset.value;
      item.classList.toggle('selected', filters[type].includes(itemValue));
    });
  }

  // ==================== FILTER MODAL CONTROLS ====================
  window.openFilter = function(filterType) {
    const modal = document.getElementById(`${filterType}-modal`);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeFilter = function(filterType) {
    const modal = document.getElementById(`${filterType}-modal`);
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.resetFilter = function(filterType) {
    filters[filterType] = filterType === 'sort' ? 'All' : ['All'];
    renderFilters();
  };

  window.applyFilter = function(filterType) {
    closeFilter(filterType);
    renderCodes();
    console.log('Applied filters:', filters);
  };

  // ==================== RENDER CODES ====================
  function renderCodes() {
    const container = document.getElementById('codes-list');
    
    let filteredCodes = [...mockCodes];
    
    // Apply filters (simplified - you can enhance this)
    // For now, just display all codes
    
    container.innerHTML = filteredCodes.map(code => `
      <div class="code-card" data-code-id="${code.id}">
        <div class="code-header">
          <div class="code-id">${code.id}</div>
          <div class="code-stats">
            <div class="code-stat folds">
              <span class="label">Folds:</span>
              <span class="value">${code.folds}</span>
            </div>
            <div class="code-stat odds">
              <span class="label">Odds:</span>
              <span class="value">${code.odds}</span>
            </div>
          </div>
        </div>
        
        <div class="code-events">
          ${code.events.map(event => `
            <div class="code-event">
              <i class="bi bi-${event.type === 'away' ? 'droplet-fill' : event.type === 'home' ? 'lightning-fill' : 'trophy-fill'} event-icon ${event.type}"></i>
              <div class="event-details">
                <div class="event-outcome">${event.outcome}</div>
                <div class="event-teams">${event.teams}</div>
                <div class="event-time">${event.time}</div>
              </div>
              <i class="bi bi-graph-up-arrow event-chart"></i>
            </div>
          `).join('')}
        </div>
        
        <div class="code-actions">
          <button class="code-action-btn share" onclick="shareCode('${code.id}')">
            <i class="bi bi-share"></i>
            Share
          </button>
          <button class="code-action-btn add" onclick="addCodeToBetslip('${code.id}')">
            <i class="bi bi-pencil"></i>
            Add to Betslip
          </button>
        </div>
      </div>
    `).join('');
  }

  // ==================== ADD CODE TO BETSLIP ====================
  window.addCodeToBetslip = function(codeId) {
    const code = mockCodes.find(c => c.id === codeId);
    if (!code) return;
    
    if (!window.betslipRail || !window.betslipRail.addSelection) {
      alert('Betslip not available. Please refresh the page.');
      return;
    }
    
    const button = event.target.closest('.code-action-btn.add');
    if (button) {
      button.classList.add('loading');
      button.disabled = true;
    }
    
    let addedCount = 0;
    code.events.forEach((event, index) => {
      const outcomeMatch = event.outcome.match(/(@[\d.]+)/);
      const odd = outcomeMatch ? outcomeMatch[1].replace('@', '') : '1.00';
      const valueMatch = event.outcome.match(/^(Away|Home|Draw)/);
      const value = valueMatch ? valueMatch[1] : 'Home';
      
      window.betslipRail.addSelection({
        matchId: `${codeId}-${index}`,
        teams: event.teams,
        date: event.time,
        market: '1x2',
        value: value,
        odd: odd,
        odds: odd,
        league: 'Popular Code',
        selected: true
      });
      addedCount++;
    });
    
    setTimeout(() => {
      if (button) {
        button.classList.remove('loading');
        button.classList.add('success');
        button.innerHTML = '<i class="bi bi-check-circle"></i> Added!';
      }
      
      setTimeout(() => openBetslipRail(), 300);
      
      setTimeout(() => {
        if (button) {
          button.classList.remove('success');
          button.innerHTML = '<i class="bi bi-pencil"></i> Add to Betslip';
          button.disabled = false;
        }
      }, 2000);
    }, 500);
  };

  function openBetslipRail() {
    if (window.betslipRail && window.betslipRail.openRail) {
      window.betslipRail.openRail();
      return;
    }
    
    const overlay = document.getElementById('rail-overlay');
    const rail = document.getElementById('rail-container');
    
    if (overlay && rail) {
      overlay.classList.add('active');
      rail.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      if (window.betslipRail && window.betslipRail._render) {
        window.betslipRail._render();
      }
    }
  }

  // ==================== SHARE CODE ====================
  window.shareCode = function(codeId) {
    const shareText = `Check out this betting code: ${codeId}`;
    const shareUrl = `https://convertbetcodes.com/code/${codeId}`;
    
    if (navigator.share) {
      navigator.share({ title: 'Betting Code', text: shareText, url: shareUrl })
        .catch(err => console.log('Share failed:', err));
    } else {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert('Code link copied to clipboard!');
      } else {
        alert(`Share this code: ${codeId}`);
      }
    }
  };

  // ==================== LOAD CODE FORM ====================
  function initLoadCodeForm() {
    const pasteBtn = document.getElementById('load-paste-btn');
    const codeInput = document.getElementById('booking-code-input');
    const loadForm = document.getElementById('load-code-form');
    
    if (pasteBtn && codeInput) {
      pasteBtn.addEventListener('click', async () => {
        try {
          const text = await navigator.clipboard.readText();
          codeInput.value = text.trim();
        } catch (err) {
          console.log('Paste failed:', err);
        }
      });
    }
    
    if (loadForm) {
      loadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await handleLoadCode();
      });
    }
  }

  async function handleLoadCode() {
    const bookingCode = document.getElementById('booking-code-input').value.trim();
    
    if (!bookingCode) {
      alert('Please enter a booking code');
      return;
    }
    
    // Show loading
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.classList.add('active');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock loaded bets
      const mockBets = [
        { matchId: 'load-1', teams: 'Nottingham Forest vs Man City', date: 'Sat 27/12, 13:30', market: '1x2', value: 'Away', odd: '1.62', league: 'Premier League', selected: true },
        { matchId: 'load-2', teams: 'AC Milan vs Verona', date: 'Sun 28/12, 12:30', market: '1x2', value: 'Home', odd: '1.39', league: 'Serie A', selected: true },
        { matchId: 'load-3', teams: 'Liverpool vs Wolves', date: 'Sat 27/12, 16:00', market: '1x2', value: 'Home', odd: '1.26', league: 'Premier League', selected: true },
        { matchId: 'load-4', teams: 'Zambia vs Comoros', date: 'Fri 26/12, 18:30', market: '1x2', value: 'Home', odd: '2.17', league: 'AFCON', selected: true }
      ];
      
      // Add to betslip
      mockBets.forEach(bet => {
        if (window.betslipRail && window.betslipRail.addSelection) {
          window.betslipRail.addSelection(bet);
        }
      });
      
      loadingOverlay.classList.remove('active');
      
      // Flash badge and open rail
      if (window.betslipRail && window.betslipRail.flashBadge) {
        window.betslipRail.flashBadge();
      }
      
      setTimeout(() => openBetslipRail(), 500);
      
      // Switch back to popular codes tab
      setTimeout(() => switchTab('popular'), 1000);
      
    } catch (error) {
      console.error('Load error:', error);
      loadingOverlay.classList.remove('active');
      alert('Failed to load booking code. Please try again.');
    }
  }

  // ==================== INITIALIZATION ====================
  document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    renderFilters();
    renderCodes();
    initLoadCodeForm();
    
    // Filter button listeners
    document.getElementById('time-filter-btn').addEventListener('click', () => openFilter('time'));
    document.getElementById('folds-filter-btn').addEventListener('click', () => openFilter('folds'));
    document.getElementById('odds-filter-btn').addEventListener('click', () => openFilter('odds'));
    document.getElementById('sort-filter-btn').addEventListener('click', () => openFilter('sort'));
  });

})();