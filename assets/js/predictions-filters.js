// predictions-filters.js

(function() {
  'use strict';

  // ==================== STATE ====================
  let filters = {
    time: ['all'],
    market: ['1x2'],
    league: ['all'],
    oddsMin: 1.0,
    oddsMax: 10.0
  };

  // ==================== FILTER OPTIONS ====================
  const timeOptions = [
    { value: 'all', label: 'All Time' },
    { value: '3hours', label: 'Next 3 Hours' },
    { value: 'today', label: 'Today' },
    { value: 'tomorrow', label: 'Tomorrow' },
    { value: 'monday', label: 'Monday' },
    { value: 'tuesday', label: 'Tuesday' },
    { value: 'wednesday', label: 'Wednesday' },
    { value: 'thursday', label: 'Thursday' },
    { value: 'friday', label: 'Friday' },
    { value: 'saturday', label: 'Saturday' },
    { value: 'sunday', label: 'Sunday' }
  ];

  const marketOptions = [
    { value: '1x2', label: '1X2', count: 419 },
    { value: 'double-chance', label: 'Double Chance', count: 75 },
    { value: 'handicap', label: 'Handicap', count: 5 },
    { value: 'over-under', label: 'Over/Under', count: 253 },
    { value: 'gg-ng', label: 'GG/NG', count: 44 },
    { value: 'european-handicap', label: 'European Handicap', count: 7 },
    { value: 'btts', label: 'Both Teams To Score', count: 38 },
    { value: 'correct-score', label: 'Correct Score', count: 92 },
    { value: 'half-time', label: 'Half Time Result', count: 156 },
    { value: 'draw-no-bet', label: 'Draw No Bet', count: 34 },
    { value: 'total-goals', label: 'Total Goals', count: 128 },
    { value: 'asian-handicap', label: 'Asian Handicap', count: 23 }
  ];

  const leagueOptions = [
    { value: 'all', label: 'All Leagues' },
    { value: 'premier', label: 'Premier League' },
    { value: 'ligue1', label: 'Ligue 1' },
    { value: 'bundesliga', label: 'Bundesliga' },
    { value: 'fifaworldcup', label: 'FIFA World Cup' },
    { value: 'seriea', label: 'Serie A' },
    { value: 'laliga', label: 'La Liga' },
    { value: 'brasileiro', label: 'Brasileiro Serie A' },
    { value: 'superlig', label: 'Super Lig' },
    { value: 'champions', label: 'UEFA Champions League' },
    { value: 'europa', label: 'UEFA Europa League' },
    { value: 'conference', label: 'UEFA Conference League' }
  ];

  // ==================== INITIALIZATION ====================
  function init() {
    renderFilterLists();
    setupEventListeners();
    updateOddsProgress();
  }

  // ==================== RENDER FILTER LISTS ====================
  function renderFilterLists() {
    // Time filter
    const timeList = document.getElementById('time-list');
    if (timeList) {
      timeList.innerHTML = timeOptions.map(opt => `
        <div class="pred-filter-item ${filters.time.includes(opt.value) ? 'selected' : ''}" data-value="${opt.value}">
          <div class="pred-filter-checkbox">
            ${filters.time.includes(opt.value) ? '<i class="bi bi-check"></i>' : ''}
          </div>
          <div class="pred-filter-label">${opt.label}</div>
        </div>
      `).join('');
      attachFilterItemListeners('time');
    }

    // Market filter
    const marketList = document.getElementById('market-list');
    if (marketList) {
      marketList.innerHTML = marketOptions.map(opt => `
        <div class="pred-filter-item ${filters.market.includes(opt.value) ? 'selected' : ''}" data-value="${opt.value}">
          <div class="pred-filter-checkbox">
            ${filters.market.includes(opt.value) ? '<i class="bi bi-check"></i>' : ''}
          </div>
          <div class="pred-filter-label">${opt.label}</div>
        </div>
      `).join('');
      attachFilterItemListeners('market');
    }

    // League filter
    const leagueList = document.getElementById('league-list');
    if (leagueList) {
      leagueList.innerHTML = leagueOptions.map(opt => `
        <div class="pred-filter-item ${filters.league.includes(opt.value) ? 'selected' : ''}" data-value="${opt.value}">
          <div class="pred-filter-checkbox">
            ${filters.league.includes(opt.value) ? '<i class="bi bi-check"></i>' : ''}
          </div>
          <div class="pred-filter-label">${opt.label}</div>
        </div>
      `).join('');
      attachFilterItemListeners('league');
    }
  }

  // ==================== EVENT LISTENERS ====================
  function setupEventListeners() {
    // Filter button clicks
    const timeBtn = document.getElementById('time-filter-btn');
    const marketBtn = document.getElementById('market-filter-btn');
    const leagueBtn = document.getElementById('league-filter-btn');
    const oddsBtn = document.getElementById('odds-filter-btn');

    if (timeBtn) {
      timeBtn.addEventListener('click', () => openPredFilter('time'));
    }

    if (marketBtn) {
      marketBtn.addEventListener('click', () => openPredFilter('market'));
    }

    if (leagueBtn) {
      leagueBtn.addEventListener('click', () => openPredFilter('league'));
    }

    if (oddsBtn) {
      oddsBtn.addEventListener('click', () => openPredFilter('odds'));
    }

    // Odds range sliders
    const oddsMin = document.getElementById('pred-odds-min');
    const oddsMax = document.getElementById('pred-odds-max');

    if (oddsMin) {
      oddsMin.addEventListener('input', (e) => {
        const min = parseFloat(e.target.value);
        const max = parseFloat(oddsMax.value);

        if (min > max) {
          e.target.value = max;
          return;
        }

        document.getElementById('pred-odds-min-value').textContent = min.toFixed(1);
        updateOddsProgress();
      });
    }

    if (oddsMax) {
      oddsMax.addEventListener('input', (e) => {
        const min = parseFloat(oddsMin.value);
        const max = parseFloat(e.target.value);

        if (max < min) {
          e.target.value = min;
          return;
        }

        document.getElementById('pred-odds-max-value').textContent = max.toFixed(1);
        updateOddsProgress();
      });
    }

    // Close modal on backdrop click
    document.querySelectorAll('.pred-filter-modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          const modalId = modal.id.replace('-modal', '');
          closePredFilter(modalId);
        }
      });
    });
  }

  function attachFilterItemListeners(type) {
    const listId = type + '-list';
    const list = document.getElementById(listId);
    
    if (!list) return;

    list.querySelectorAll('.pred-filter-item').forEach(item => {
      item.addEventListener('click', function() {
        const value = this.dataset.value;
        toggleFilterSelection(type, value);
        renderFilterItem(this, filters[type].includes(value));
      });
    });
  }

  function renderFilterItem(element, isSelected) {
    const checkbox = element.querySelector('.pred-filter-checkbox');
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

  window.openPredFilter = function(type) {
    const modal = document.getElementById(`${type}-modal`);
    const btn = document.getElementById(`${type}-filter-btn`);
    
    if (modal) {
      modal.classList.add('active');
      document.body.classList.add('pred-filter-open');
      
      if (btn) {
        btn.classList.add('active');
      }
    }
  };

  window.closePredFilter = function(type) {
    const modal = document.getElementById(`${type}-modal`);
    const btn = document.getElementById(`${type}-filter-btn`);
    
    if (modal) {
      modal.classList.remove('active');
      document.body.classList.remove('pred-filter-open');
      
      if (btn) {
        btn.classList.remove('active');
      }
    }
  };

  window.applyPredFilter = function(type) {
    if (type === 'odds') {
      filters.oddsMin = parseFloat(document.getElementById('pred-odds-min').value);
      filters.oddsMax = parseFloat(document.getElementById('pred-odds-max').value);
      console.log('Odds filter applied:', filters.oddsMin, '-', filters.oddsMax);
    } else if (type === 'market') {
      // Update the button label for market filter
      const selectedMarket = filters.market[0];
      const marketOption = marketOptions.find(opt => opt.value === selectedMarket);
      if (marketOption) {
        const selectedLabel = document.getElementById('selected-market-label');
        if (selectedLabel) {
          selectedLabel.textContent = marketOption.label;
        }
      }
      console.log('Market filter applied:', filters.market);
    } else {
      console.log(`${type} filter applied:`, filters[type]);
    }
    
    closePredFilter(type);
    
    // Trigger predictions reload
    if (window.loadPredictions) {
      window.loadPredictions();
    }
  };

  function updateOddsProgress() {
    const minInput = document.getElementById('pred-odds-min');
    const maxInput = document.getElementById('pred-odds-max');
    const progress = document.getElementById('pred-odds-progress');
    
    if (!minInput || !maxInput || !progress) return;
    
    const min = parseFloat(minInput.value);
    const max = parseFloat(maxInput.value);
    
    const minPercent = ((min - 1) / 9) * 100;
    const maxPercent = ((max - 1) / 9) * 100;
    
    progress.style.left = minPercent + '%';
    progress.style.width = (maxPercent - minPercent) + '%';
  }

  // ==================== EXPORT FILTERS ====================
  window.getPredictionFilters = function() {
    return { ...filters };
  };

  // ==================== INITIALIZE ====================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();