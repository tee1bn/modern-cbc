// FREE BET CODES - UPDATED TO MATCH CODE HUB DESIGN

(function() {
  'use strict';

  // ==================== FILTER OPTIONS (CODE HUB STYLE) ====================
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

  let filters = {
    time: ['All'],
    folds: ['All'],
    odds: ['All'],
    sort: 'All'
  };
  const mockFreeCodes = [
    {
      id: '425668',
      type: 'free',
      folds: 3,
      odds: '2.05',
      bookie: 'betbaba',
      country: '🇳🇬',
      by: '@guest',
      popularity: '31+',
      events: [
        { type: 'home', outcome: 'Home @1.45 | 1X2', teams: 'Liverpool vs Wolves', time: 'Sat 27/12, 16:00' },
        { type: 'away', outcome: 'Away @1.62 | 1X2', teams: 'Nottingham Forest vs Man City', time: 'Sat 27/12, 13:30' },
        { type: 'home', outcome: 'Home @1.39 | 1X2', teams: 'AC Milan vs Verona', time: 'Sun 28/12, 12:30' }
      ]
    },
    {
      id: '425013',
      type: 'free',
      folds: 4,
      odds: '2.18',
      bookie: 'betbaba',
      country: '🇳🇬',
      by: '@guest',
      popularity: '11+',
      events: [
        { type: 'home', outcome: 'Home @1.28 | 1X2', teams: 'Inter vs Bologna', time: 'Today 20:45' },
        { type: 'away', outcome: 'Away @2.00 | 1X2', teams: 'Real Sociedad vs Atletico', time: 'Today 21:00' },
        { type: 'draw', outcome: 'Draw @2.93 | 1X2', teams: 'Guinea vs Cameroon', time: 'Today 20:00' },
        { type: 'home', outcome: 'Home @1.44 | 1X2', teams: 'Chelsea vs Aston Villa', time: 'Sat 27/12, 18:30' }
      ]
    }
  ];

  const mockConvertedCodes = [
    {
      id: 'converted-1',
      type: 'converted',
      origin: {
        code: 'XUUKN',
        bookie: '22bet',
        country: '🇳🇬',
        folds: 6,
        odds: '3.8'
      },
      target: {
        code: '8ZZLN',
        bookie: '1xbet',
        folds: 6,
        odds: '4.2'
      },
      time: '7 minutes ago',
      likes: 1,
      events: [
        { type: 'home', outcome: 'Home @1.28 | 1X2', teams: 'Liverpool vs Wolverhampton', time: 'Sat 27/12, 16:00' },
        { type: 'home', outcome: 'Home Handicap 0 @1.34 | Handicap', teams: 'Chelsea vs Aston Villa', time: 'Sat 27/12, 18:30' },
        { type: 'away', outcome: 'Away Handicap 0 @1.05 | Handicap', teams: 'Pisa 1909 vs Juventus', time: 'Sat 27/12, 20:45' },
        { type: 'home', outcome: 'Home @1.62 | 1X2', teams: 'Nottingham Forest vs Man City', time: 'Sat 27/12, 13:30' },
        { type: 'away', outcome: 'Away @2.10 | 1X2', teams: 'Real Sociedad vs Atletico', time: 'Today 21:00' },
        { type: 'home', outcome: 'Home @1.44 | 1X2', teams: 'Inter vs Bologna', time: 'Today 20:45' }
      ]
    },
    {
      id: 'converted-2',
      type: 'converted',
      origin: {
        code: 'M7XLN',
        bookie: '1xbet',
        country: '🇳🇬',
        folds: 8,
        odds: '5.9'
      },
      target: {
        code: 'HEYLN',
        bookie: '1xbet',
        folds: 8,
        odds: '6.38'
      },
      time: '9 minutes ago',
      likes: 1,
      events: [
        { type: 'home', outcome: 'Home @2.10 | 1X2', teams: 'Barcelona vs Real Madrid', time: 'Sun 28/12, 20:00' },
        { type: 'home', outcome: 'Over 2.5 @1.75 | Over/Under', teams: 'Bayern vs Dortmund', time: 'Sun 28/12, 17:30' },
        { type: 'away', outcome: 'Away @2.50 | 1X2', teams: 'Man United vs Arsenal', time: 'Mon 29/12, 20:00' },
        { type: 'home', outcome: 'GG Yes @1.65 | GG/NG', teams: 'Inter vs AC Milan', time: 'Mon 29/12, 19:45' },
        { type: 'home', outcome: 'Home @1.39 | 1X2', teams: 'PSG vs Lyon', time: 'Sun 28/12, 21:00' },
        { type: 'away', outcome: 'Away @1.88 | 1X2', teams: 'Atletico vs Sevilla', time: 'Sun 28/12, 18:30' },
        { type: 'draw', outcome: 'Draw @3.20 | 1X2', teams: 'Roma vs Napoli', time: 'Mon 29/12, 20:45' },
        { type: 'home', outcome: 'Home @1.52 | 1X2', teams: 'Juventus vs Fiorentina', time: 'Mon 29/12, 18:00' }
      ]
    },
    {
      id: 'converted-3',
      type: 'converted',
      origin: {
        code: '3V5TFYB',
        bookie: 'bet9ja',
        country: '🇳🇬',
        folds: 6,
        odds: '10.66'
      },
      target: {
        code: 'JQ2MSX',
        bookie: 'sportybet',
        country: '🇳🇬',
        folds: 4,
        odds: '3.07'
      },
      time: '9 minutes ago',
      likes: 3,
      events: [
        { type: 'home', outcome: 'Home @2.50 | 1X2', teams: 'Man United vs Arsenal', time: 'Mon 29/12, 20:00' },
        { type: 'home', outcome: 'GG Yes @1.65 | GG/NG', teams: 'Inter vs AC Milan', time: 'Mon 29/12, 19:45' },
        { type: 'away', outcome: 'Away @1.88 | 1X2', teams: 'Atletico vs Sevilla', time: 'Sun 28/12, 18:30' },
        { type: 'home', outcome: 'Home @1.52 | 1X2', teams: 'Juventus vs Fiorentina', time: 'Mon 29/12, 18:00' }
      ]
    }
  ];

  const allCodes = [...mockFreeCodes, ...mockConvertedCodes];

  // ==================== RENDER FILTERS (CODE HUB STYLE) ====================
  function renderFilters() {
    // Time filter
    const timeList = document.getElementById('time-list');
    if (timeList) {
      timeList.innerHTML = filterOptions.time.map(option => `
        <div class="filter-item ${filters.time.includes(option) ? 'selected' : ''}" data-value="${option}">
          <span>${option}</span>
          <i class="bi bi-check-square-fill check-icon"></i>
        </div>
      `).join('');
    }

    // Folds filter
    const foldsList = document.getElementById('folds-list');
    if (foldsList) {
      foldsList.innerHTML = filterOptions.folds.map(option => `
        <div class="filter-item ${filters.folds.includes(option) ? 'selected' : ''}" data-value="${option}">
          <span>${option}</span>
          <i class="bi bi-check-square-fill check-icon"></i>
        </div>
      `).join('');
    }

    // Odds filter
    const oddsList = document.getElementById('odds-list');
    if (oddsList) {
      oddsList.innerHTML = filterOptions.odds.map(option => `
        <div class="filter-item ${filters.odds.includes(option) ? 'selected' : ''}" data-value="${option}">
          <span>${option}</span>
          <i class="bi bi-check-square-fill check-icon"></i>
        </div>
      `).join('');
    }

    // Sort filter
    const sortList = document.getElementById('sort-list');
    if (sortList) {
      sortList.innerHTML = filterOptions.sort.map(option => `
        <div class="filter-item ${filters.sort === option ? 'selected' : ''}" data-value="${option}">
          <span>${option}</span>
          <i class="bi bi-check-square-fill check-icon"></i>
        </div>
      `).join('');
    }

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
  function openFilter(filterType) {
    const modal = document.getElementById(`${filterType}-modal`);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeFilter(filterType) {
    const modal = document.getElementById(`${filterType}-modal`);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function resetFilter(filterType) {
    filters[filterType] = filterType === 'sort' ? 'All' : ['All'];
    renderFilters();
  }

  function applyFilter(filterType) {
    closeFilter(filterType);
    renderCodes();
    console.log('Applied filters:', filters);
  }
  function renderCodes() {
    const container = document.getElementById('codes-list');
    if (!container) return;

    container.innerHTML = allCodes.map(code => {
      if (code.type === 'free') {
        return renderFreeCode(code);
      } else {
        return renderConvertedCode(code);
      }
    }).join('');

    attachEventListeners();
  }

  // ==================== RENDER FREE CODE ====================
  function renderFreeCode(code) {
    return `
      <div class="code-card" data-code-id="${code.id}">
        <div class="code-header">
          <div class="code-info">
            <div class="code-id-section">
              <div class="code-id">${code.id}</div>
              <span class="code-flag">${code.country}</span>
            </div>
            <div class="code-bookie">${code.bookie}</div>
          </div>
          <div class="code-stats">
            <div class="code-stat">
              <span class="label">Folds:</span>
              <span class="value">${code.folds}</span>
            </div>
            <div class="code-stat">
              <span class="label">Odds:</span>
              <span class="value">${code.odds}</span>
            </div>
          </div>
          <div class="code-badges">
            <div class="code-badge guest">${code.by}</div>
            <div class="code-badge">
              <i class="bi bi-fire badge-fire"></i> ${code.popularity}
            </div>
          </div>
        </div>

        <button class="code-expand-toggle" data-code-id="${code.id}">
          <span>View Events</span>
          <i class="bi bi-chevron-down"></i>
        </button>

        <div class="code-events" data-code-id="${code.id}">
          ${code.events.map(event => `
            <div class="code-event">
              <i class="bi bi-${getEventIcon(event.type)} event-icon"></i>
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
          <button class="code-action-btn primary" onclick="openBookie('${code.bookie}', '${code.id}')">
            <i class="bi bi-play-circle"></i>
            Play now
          </button>
        </div>
      </div>
    `;
  }

  // ==================== RENDER CONVERTED CODE ====================
  function renderConvertedCode(code) {
    return `
      <div class="code-card" data-code-id="${code.id}">
        <div class="converted-header">
          <div class="converted-code-info">
            <div class="converted-origin">
              <div class="converted-label">ORIGIN</div>
              <div class="converted-code-display">
                <div class="converted-code-id">${code.origin.code}</div>
                ${code.origin.country ? `<span class="code-flag">${code.origin.country}</span>` : ''}
              </div>
              <div class="converted-bookie-name">${code.origin.bookie}</div>
            </div>

            <i class="bi bi-arrow-right converted-arrow-icon"></i>

            <div class="converted-target">
              <div class="converted-label">TARGET</div>
              <div class="converted-code-display">
                <div class="converted-code-id">${code.target.code}</div>
                ${code.target.country ? `<span class="code-flag">${code.target.country}</span>` : ''}
              </div>
              <div class="converted-bookie-name">${code.target.bookie}</div>
            </div>
          </div>

          <div class="code-stats">
            <div class="code-stat">
              <span class="label">Origin:</span>
              <span class="value">${code.origin.folds} @ ${code.origin.odds}</span>
            </div>
            <div class="code-stat">
              <span class="label">Target:</span>
              <span class="value">${code.target.folds} @ ${code.target.odds}</span>
            </div>
          </div>
        </div>

        <div class="converted-meta" style="padding: 8px 16px; background: #fafafa; border-bottom: 1px solid #f0f0f0;">
          <div class="converted-time">
            <i class="bi bi-clock"></i>
            ${code.time} • <i class="bi bi-heart"></i> ${code.likes}
          </div>
        </div>

        <button class="code-expand-toggle" data-code-id="${code.id}">
          <span>View Events</span>
          <i class="bi bi-chevron-down"></i>
        </button>

        <div class="code-events" data-code-id="${code.id}">
          ${code.events.map(event => `
            <div class="code-event">
              <i class="bi bi-${getEventIcon(event.type)} event-icon"></i>
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
            <i class="bi bi-plus-square"></i>
            Add to Betslip
          </button>
        </div>
      </div>
    `;
  }

  // ==================== HELPER FUNCTIONS ====================
  function getEventIcon(type) {
    const icons = {
      home: 'house-fill',
      away: 'airplane-fill',
      draw: 'dash-circle-fill'
    };
    return icons[type] || 'circle-fill';
  }

  // ==================== EXPAND/COLLAPSE ====================
  function attachEventListeners() {
    document.querySelectorAll('.code-expand-toggle').forEach(button => {
      button.addEventListener('click', function() {
        const codeId = this.dataset.codeId;
        const eventsContainer = document.querySelector(`.code-events[data-code-id="${codeId}"]`);
        
        if (eventsContainer) {
          const isExpanded = eventsContainer.classList.contains('expanded');
          
          if (isExpanded) {
            eventsContainer.classList.remove('expanded');
            this.classList.remove('expanded');
            this.querySelector('span').textContent = 'View Events';
          } else {
            eventsContainer.classList.add('expanded');
            this.classList.add('expanded');
            this.querySelector('span').textContent = 'Hide Events';
          }
        }
      });
    });
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

  // ==================== OPEN BOOKIE ====================
  window.openBookie = function(bookie, code) {
    const bookieUrls = {
      betbaba: 'https://www.betbaba.ng/',
      sportybet: 'https://www.sportybet.com/ng/',
      bet9ja: 'https://www.bet9ja.com/',
      '1xbet': 'https://www.1xbet.ng/',
      '22bet': 'https://www.22bet.ng/',
      betking: 'https://www.betking.ng/'
    };

    const url = bookieUrls[bookie] || '#';
    window.open(url, '_blank');
  };

  // ==================== ADD TO BETSLIP ====================
  window.addCodeToBetslip = async function(codeId) {
    const code = allCodes.find(c => c.id === codeId);
    if (!code || code.type !== 'converted') return;

    const button = event.target.closest('.code-action-btn.add');
    if (!button) return;

    // Wait for betslip rail to be available
    await waitForRail();

    // Show loading state
    button.classList.add('loading');
    button.disabled = true;
    const originalText = button.innerHTML;

    try {
      // Add events to betslip
      let addedCount = 0;
      for (const event of code.events) {
        const outcomeMatch = event.outcome.match(/(@[\d.]+)/);
        const odd = outcomeMatch ? outcomeMatch[1].replace('@', '') : '1.00';
        const valueMatch = event.outcome.match(/^(Away|Home|Draw|Over|Under|GG|Home Handicap|Away Handicap)/);
        const value = valueMatch ? valueMatch[1] : 'Home';
        
        const bet = {
          matchId: `${codeId}-${addedCount}`,
          teams: event.teams,
          date: event.time,
          market: event.outcome.includes('Handicap') ? 'handicap' : 
                  event.outcome.includes('Over') || event.outcome.includes('Under') ? 'over/under' :
                  event.outcome.includes('GG') ? 'gg/ng' : '1x2',
          value: value,
          odd: odd,
          odds: odd,
          league: 'Free Bet Code',
          selected: true
        };

        if (window.betslipRail && window.betslipRail.addSelection) {
          window.betslipRail.addSelection(bet);
          addedCount++;
        }
      }

      // Flash badge
      if (window.betslipRail && window.betslipRail.flashBadge) {
        window.betslipRail.flashBadge();
      }

      // Show success
      setTimeout(() => {
        button.classList.remove('loading');
        button.classList.add('success');
        button.innerHTML = `<i class="bi bi-check-circle"></i> Added ${addedCount}!`;

        // Open betslip
        setTimeout(() => {
          if (window.betslipRail && window.betslipRail.openRail) {
            window.betslipRail.openRail();
          }
        }, 300);

        // Reset button
        setTimeout(() => {
          button.classList.remove('success');
          button.disabled = false;
          button.innerHTML = originalText;
        }, 2000);
      }, 500);

    } catch (error) {
      console.error('Failed to add to betslip:', error);
      button.classList.remove('loading');
      button.disabled = false;
      button.innerHTML = originalText;
      alert('Failed to add to betslip. Please try again.');
    }
  };

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

  // ==================== INIT FILTERS (CODE HUB STYLE) ====================
  function initFilters() {
    // Filter button listeners
    const timeFilterBtn = document.getElementById('time-filter-btn');
    const foldsFilterBtn = document.getElementById('folds-filter-btn');
    const oddsFilterBtn = document.getElementById('odds-filter-btn');
    const sortFilterBtn = document.getElementById('sort-filter-btn');

    if (timeFilterBtn) timeFilterBtn.addEventListener('click', () => openFilter('time'));
    if (foldsFilterBtn) foldsFilterBtn.addEventListener('click', () => openFilter('folds'));
    if (oddsFilterBtn) oddsFilterBtn.addEventListener('click', () => openFilter('odds'));
    if (sortFilterBtn) sortFilterBtn.addEventListener('click', () => openFilter('sort'));

    // Close buttons
    document.getElementById('close-time-filter')?.addEventListener('click', () => closeFilter('time'));
    document.getElementById('close-folds-filter')?.addEventListener('click', () => closeFilter('folds'));
    document.getElementById('close-odds-filter')?.addEventListener('click', () => closeFilter('odds'));
    document.getElementById('close-sort-filter')?.addEventListener('click', () => closeFilter('sort'));

    // Reset buttons
    document.getElementById('reset-time-filter')?.addEventListener('click', () => resetFilter('time'));
    document.getElementById('reset-folds-filter')?.addEventListener('click', () => resetFilter('folds'));
    document.getElementById('reset-odds-filter')?.addEventListener('click', () => resetFilter('odds'));
    document.getElementById('reset-sort-filter')?.addEventListener('click', () => resetFilter('sort'));

    // Apply buttons
    document.getElementById('apply-time-filter')?.addEventListener('click', () => applyFilter('time'));
    document.getElementById('apply-folds-filter')?.addEventListener('click', () => applyFilter('folds'));
    document.getElementById('apply-odds-filter')?.addEventListener('click', () => applyFilter('odds'));
    document.getElementById('apply-sort-filter')?.addEventListener('click', () => applyFilter('sort'));

    // Click outside to close modals
    document.querySelectorAll('.filter-modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // ==================== INITIALIZATION ====================
  document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderCodes();
    initFilters();
  });

})();