// components/predictions.js

(function() {
  'use strict';

  // ==================== STATE ====================
  let currentSport = 'football';
  let currentMarket = '1x2';
  let predictions = [];

  // ==================== INITIALIZATION ====================
  function init() {
    setupEventListeners();
    loadPredictions();
  }

  // ==================== EVENT LISTENERS ====================
  function setupEventListeners() {
    // Sport tabs
    document.querySelectorAll('.sport-filter-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        document.querySelectorAll('.sport-filter-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        currentSport = this.dataset.sport;
        loadPredictions();
        console.log('Selected sport:', currentSport);
      });
    });

    // Market filter dropdown button
    const marketFilterBtn = document.getElementById('market-filter-btn');
    const marketModal = document.getElementById('market-modal');
    const closeMarketModal = document.getElementById('close-market-modal');

    if (marketFilterBtn) {
      marketFilterBtn.addEventListener('click', () => {
        marketModal.classList.remove('hidden');
        marketFilterBtn.classList.add('active');
      });
    }

    if (closeMarketModal) {
      closeMarketModal.addEventListener('click', () => {
        marketModal.classList.add('hidden');
        marketFilterBtn.classList.remove('active');
      });
    }

    // Market list items
    document.querySelectorAll('.market-list-item').forEach(item => {
      item.addEventListener('click', function() {
        // Remove active from all
        document.querySelectorAll('.market-list-item').forEach(i => i.classList.remove('active'));
        
        // Add active to clicked
        this.classList.add('active');
        
        // Update button label
        const label = this.dataset.label;
        const selectedLabel = document.getElementById('selected-market-label');
        if (selectedLabel) {
          selectedLabel.textContent = label;
        }
        
        // Update current market
        currentMarket = this.dataset.market;
        
        // Close modal
        marketModal.classList.add('hidden');
        marketFilterBtn.classList.remove('active');
        
        // Load predictions
        loadPredictions();
        console.log('Selected market:', currentMarket);
      });
    });

    // Close modal on outside click
    if (marketModal) {
      marketModal.addEventListener('click', (e) => {
        if (e.target === marketModal) {
          marketModal.classList.add('hidden');
          marketFilterBtn.classList.remove('active');
        }
      });
    }

    // Filter modal
    const filterModal = document.getElementById('filter-modal');
    const openFilterBtn = document.getElementById('open-filter-btn');
    const closeFilterBtn = document.getElementById('close-filter-btn');
    const submitFilterBtn = document.getElementById('submit-filter-btn');
    const resetFilterBtn = document.getElementById('reset-filter-btn');

    if (openFilterBtn) {
      openFilterBtn.addEventListener('click', () => {
        filterModal.classList.remove('hidden');
      });
    }

    if (closeFilterBtn) {
      closeFilterBtn.addEventListener('click', () => {
        filterModal.classList.add('hidden');
      });
    }

    if (submitFilterBtn) {
      submitFilterBtn.addEventListener('click', () => {
        filterModal.classList.add('hidden');
        applyFilters();
        console.log('Filters applied');
      });
    }

    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', () => {
        resetFilters();
      });
    }

    // Close modal on outside click
    if (filterModal) {
      filterModal.addEventListener('click', (e) => {
        if (e.target === filterModal) {
          filterModal.classList.add('hidden');
        }
      });
    }

    // Pagination
    document.querySelectorAll('.pagination-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        if (!this.disabled && !this.querySelector('i')) {
          document.querySelectorAll('.pagination-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          loadPredictions();
        }
      });
    });

    // Add to betslip buttons - delegate event
    document.addEventListener('click', (e) => {
      if (e.target.closest('.prediction-action-btn.primary')) {
        const card = e.target.closest('.prediction-card');
        if (card) {
          addToBetslip(card);
        }
      }
    });

    // Info buttons
    document.addEventListener('click', (e) => {
      if (e.target.closest('.prediction-action-btn:not(.primary)')) {
        const card = e.target.closest('.prediction-card');
        if (card) {
          showPredictionInfo(card);
        }
      }
    });
  }

  // ==================== LOAD PREDICTIONS ====================
  function loadPredictions() {
    // In a real app, this would fetch from an API
    console.log(`Loading predictions for ${currentSport} - ${currentMarket}`);
    
    // For now, just update the page info
    const pageInfo = document.getElementById('page-info');
    if (pageInfo) {
      pageInfo.textContent = `Page 1, Showing 25/80`;
    }
  }

  // ==================== ADD TO BETSLIP ====================
  function addToBetslip(card) {
    // Extract prediction data from card
    const teamsElement = card.querySelector('.prediction-teams-compact');
    const oddsElement = card.querySelector('.prediction-odds-box');
    const marketElement = card.querySelector('.prediction-market-badge');
    const dateElement = card.querySelector('.prediction-datetime-compact');
    const leagueElement = card.querySelector('.prediction-sport-indicator span');
    
    if (!teamsElement || !oddsElement) {
      console.error('Missing required elements');
      return;
    }

    const homeTeam = teamsElement.querySelector('.prediction-team-home')?.textContent || '';
    const awayTeam = teamsElement.querySelector('.prediction-team-away')?.textContent || '';
    const teams = `${homeTeam} vs ${awayTeam}`;
    const odd = oddsElement.textContent || '1.00';
    const marketText = marketElement?.textContent || '1X2';
    const date = dateElement?.textContent || '';
    const league = leagueElement?.textContent || '';

    // Parse market to get type and value
    const [marketType, marketValue] = parseMarket(marketText);

    const selection = {
      matchId: 'pred-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
      teams: teams,
      date: date,
      market: marketType,
      value: marketValue,
      odd: odd,
      odds: odd,
      league: league,
      selected: true
    };

    // Check if betslip rail is available
    if (window.betslipRail && window.betslipRail.addSelection) {
      window.betslipRail.addSelection(selection);
      
      // Visual feedback
      const btn = card.querySelector('.prediction-action-btn.primary');
      if (btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="bi bi-check-lg"></i>';
        btn.style.background = '#333';
        btn.style.borderColor = '#3333';
        
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.style.borderColor = '';
        }, 1000);
      }

      // Flash betslip badge
      if (window.betslipRail.flashBadge) {
        window.betslipRail.flashBadge();
      }
    } else {
      console.error('Betslip rail not available');
      alert('Betslip is not available. Please refresh the page.');
    }
  }

  // ==================== PARSE MARKET ====================
  function parseMarket(marketText) {
    // Examples: "1X2: 1", "O/U: Over", "DC: 1X"
    const parts = marketText.split(':').map(s => s.trim());
    
    if (parts.length === 2) {
      const type = parts[0].toLowerCase().replace(/\//g, '');
      let value = parts[1].toLowerCase();
      
      // Map common values
      const valueMap = {
        '1': 'home',
        '2': 'away',
        'x': 'draw',
        'over': 'over',
        'under': 'under',
        '1x': '1x',
        '12': '12',
        'x2': 'x2'
      };
      
      value = valueMap[value] || value;
      
      return [type, value];
    }
    
    return ['1x2', 'home'];
  }

  // ==================== SHOW PREDICTION INFO ====================
  function showPredictionInfo(card) {
    const teamsElement = card.querySelector('.prediction-teams-compact');
    const homeTeam = teamsElement.querySelector('.prediction-team-home')?.textContent || '';
    const awayTeam = teamsElement.querySelector('.prediction-team-away')?.textContent || '';
    
    alert(`Prediction Details\n\nMatch: ${homeTeam} vs ${awayTeam}\n\nClick "Add to Betslip" to add this prediction to your betslip.`);
  }

  // ==================== FILTER FUNCTIONS ====================
  function applyFilters() {
    // Get filter values
    const oddsMin = document.querySelector('.filter-odds-range input:first-child')?.value || '';
    const oddsMax = document.querySelector('.filter-odds-range input:last-child')?.value || '';
    const playingOn = document.querySelector('.filter-select[name="playing-on"]')?.value || '';
    const teams = document.querySelector('.filter-input[placeholder="Search teams..."]')?.value || '';
    const league = document.querySelector('.filter-select option:checked')?.value || '';
    const orderByPopularity = document.getElementById('order-popularity')?.checked || false;

    console.log('Applying filters:', {
      oddsMin,
      oddsMax,
      playingOn,
      teams,
      league,
      orderByPopularity
    });

    // In a real app, this would filter the predictions
    loadPredictions();
  }

  function resetFilters() {
    document.querySelectorAll('.filter-input, .filter-select').forEach(input => {
      input.value = '';
    });
    
    const checkbox = document.getElementById('order-popularity');
    if (checkbox) {
      checkbox.checked = false;
    }

    console.log('Filters reset');
  }

  // ==================== INITIALIZE ====================
  document.addEventListener('DOMContentLoaded', init);

})();