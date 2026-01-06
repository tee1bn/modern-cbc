// predictions.js - Phase 7 Fix

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
    initLeagueCollapse();
  }

  // ==================== LEAGUE COLLAPSE ====================
  function initLeagueCollapse() {
    document.addEventListener('click', function(e) {
      const leagueHeader = e.target.closest('.league-header');
      if (leagueHeader) {
        const leagueEvents = leagueHeader.nextElementSibling;
        const toggleIcon = leagueHeader.querySelector('.toggle-icon');
        
        if (leagueEvents && leagueEvents.classList.contains('league-events')) {
          // Toggle collapsed state
          leagueHeader.classList.toggle('collapsed');
          leagueEvents.classList.toggle('collapsed');
          
          if (toggleIcon) {
            toggleIcon.classList.toggle('rotated');
          }
        }
      }
    });

    // Initially collapse all leagues except the first one
    const leagueGroups = document.querySelectorAll('.league-group');
    leagueGroups.forEach((group, index) => {
      if (index > 0) { // Keep first league open
        const header = group.querySelector('.league-header');
        const events = group.querySelector('.league-events');
        const toggleIcon = group.querySelector('.toggle-icon');
        
        if (header && events) {
          header.classList.add('collapsed');
          events.classList.add('collapsed');
          if (toggleIcon) {
            toggleIcon.classList.add('rotated');
          }
        }
      }
    });
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
        document.querySelectorAll('.market-list-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        const label = this.dataset.label;
        const selectedLabel = document.getElementById('selected-market-label');
        if (selectedLabel) {
          selectedLabel.textContent = label;
        }
        
        currentMarket = this.dataset.market;
        marketModal.classList.add('hidden');
        marketFilterBtn.classList.remove('active');
        
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
      if (e.target.closest('.prediction-action-btn')) {
        const card = e.target.closest('.prediction-card');
        if (card) {
          addToBetslip(card);
        }
      }
    });
  }

  // ==================== LOAD PREDICTIONS ====================
  function loadPredictions() {
    console.log(`Loading predictions for ${currentSport} - ${currentMarket}`);
    
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
    const leagueGroup = card.closest('.league-group');
    const leagueName = leagueGroup?.querySelector('.league-name')?.textContent || '';
    
    if (!teamsElement || !oddsElement) {
      console.error('Missing required elements');
      return;
    }

    const homeTeam = teamsElement.querySelector('.prediction-team-home')?.textContent || '';
    const awayTeam = teamsElement.querySelector('.prediction-team-away')?.textContent || '';
    const teams = `${homeTeam} vs ${awayTeam}`;
    const odd = oddsElement.textContent || '1.00';
    const marketText = marketElement?.textContent || '1X2';
    const date = dateElement?.textContent.replace(/🕐\s*/g, '').trim() || '';

    // Create unique match ID
    const matchId = 'pred-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);

    // Parse market to get type and value
    const [marketType, marketValue] = parseMarket(marketText);

    const selection = {
      matchId: matchId,
      teams: teams,
      date: date,
      market: marketType,
      value: marketValue,
      odd: odd,
      odds: odd,
      league: leagueName,
      selected: true
    };

    // Check if betslip rail is available
    if (window.betslipRail && window.betslipRail.addSelection) {
      window.betslipRail.addSelection(selection);
      
      // Visual feedback
      const btn = card.querySelector('.prediction-action-btn');
      if (btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="bi bi-check-lg"></i> Added';
        btn.style.background = '#10b981';
        btn.style.borderColor = '#10b981';
        
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.style.borderColor = '';
        }, 1500);
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

  // ==================== INITIALIZE ====================
  document.addEventListener('DOMContentLoaded', init);

})();