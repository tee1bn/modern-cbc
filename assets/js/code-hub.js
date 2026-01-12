// components/code-hub.js - Simplified for Filter Controls Only

(function() {
  'use strict';

  // ==================== STATE ====================
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

  // ==================== RENDER FILTERS ====================
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
  window.openFilter = function(filterType) {
    const modal = document.getElementById(`${filterType}-modal`);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeFilter = function(filterType) {
    const modal = document.getElementById(`${filterType}-modal`);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  window.resetFilter = function(filterType) {
    filters[filterType] = filterType === 'sort' ? 'All' : ['All'];
    renderFilters();
  };

  window.applyFilter = function(filterType) {
    closeFilter(filterType);
  };

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


  // ==================== INITIALIZATION ====================
  document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    
    // Filter button listeners
    const timeBtn = document.getElementById('time-filter-btn');
    const foldsBtn = document.getElementById('folds-filter-btn');
    const oddsBtn = document.getElementById('odds-filter-btn');
    const sortBtn = document.getElementById('sort-filter-btn');
    
    if (timeBtn) timeBtn.addEventListener('click', () => openFilter('time'));
    if (foldsBtn) foldsBtn.addEventListener('click', () => openFilter('folds'));
    if (oddsBtn) oddsBtn.addEventListener('click', () => openFilter('odds'));
    if (sortBtn) sortBtn.addEventListener('click', () => openFilter('sort'));
  });

})();