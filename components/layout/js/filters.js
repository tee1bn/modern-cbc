
(function() {
  'use strict';

  const filterTabs = document.querySelectorAll('.filter-tab');
  const filterPanels = document.querySelectorAll('.filter-panel');
  const filtersContent = document.querySelector('.filters-content');
  let currentActiveTab = null;

  // Toggle panel function
  function togglePanel(tab) {
    const filterName = tab.getAttribute('data-filter');
    const panel = document.querySelector(`[data-panel="${filterName}"]`);
    
    // Check if clicking the same tab
    if (currentActiveTab === tab) {
      closeAllPanels();
      currentActiveTab = null;
    } else {
      closeAllPanels();
      tab.classList.add('active');
      panel.classList.add('active');
      filtersContent.classList.add('open');
      currentActiveTab = tab;
    }
  }

  function closeAllPanels() {
    filterTabs.forEach(tab => tab.classList.remove('active'));
    filterPanels.forEach(panel => panel.classList.remove('active'));
    filtersContent.classList.remove('open');
  }

  // Add click event to tabs
  filterTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      togglePanel(this);
    });
  });

  // Handle filter option clicks (Sports, Markets, Date - AUTO CLOSE)
  const filterOptions = document.querySelectorAll('.filter-option');
  filterOptions.forEach(option => {
    option.addEventListener('click', function() {
      const panel = this.closest('.filter-panel');
      const panelType = panel.getAttribute('data-panel');
      
      if (panelType === 'sports' || panelType === 'markets' || panelType === 'date') {
        // Remove active from siblings
        const siblings = panel.querySelectorAll('.filter-option');
        siblings.forEach(sib => sib.classList.remove('active'));
        
        // Add active to clicked
        this.classList.add('active');
        
        const value = this.getAttribute('data-value');
        const label = this.querySelector('.option-label').textContent;
        
        console.log(`Selected ${panelType}: ${label} (${value})`);
        
        // Auto-close the panel after selection
        setTimeout(() => {
          closeAllPanels();
          currentActiveTab = null;
        }, 200);
      }
    });
  });

  // Handle checkbox changes in Leagues panel (NO auto-close)
  const checkboxOptions = document.querySelectorAll('.filter-option-checkbox input[type="checkbox"]');
  checkboxOptions.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const label = this.nextElementSibling.querySelector('.checkbox-label').textContent;
      console.log(`${this.checked ? 'Checked' : 'Unchecked'}: ${label}`);
      // Panel stays open - user needs to click Apply
    });
  });

  // Reset button - Only for Leagues panel
  const resetBtn = document.querySelector('.btn-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      // Uncheck all checkboxes in leagues panel
      const leaguesPanel = document.querySelector('[data-panel="leagues"]');
      if (leaguesPanel) {
        const checkboxes = leaguesPanel.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
          checkbox.checked = false;
        });
      }
      
      console.log('Leagues filters reset');
    });
  }

  // Apply button - Only for Leagues panel
  const applyBtn = document.querySelector('.btn-apply');
  if (applyBtn) {
    applyBtn.addEventListener('click', function() {
      const selectedLeagues = [];
      
      // Get all checked leagues
      const leaguesPanel = document.querySelector('[data-panel="leagues"]');
      if (leaguesPanel) {
        const checkedBoxes = leaguesPanel.querySelectorAll('input[type="checkbox"]:checked');
        checkedBoxes.forEach(checkbox => {
          const label = checkbox.nextElementSibling.querySelector('.checkbox-label').textContent;
          selectedLeagues.push({
            value: checkbox.value,
            label: label
          });
        });
      }
      
      console.log('Applied leagues filters:', selectedLeagues);
      
      // Close panel after applying
      closeAllPanels();
      currentActiveTab = null;
      
      // Dispatch custom event for parent page to listen to
      document.dispatchEvent(new CustomEvent('leaguesFiltersApplied', { 
        detail: selectedLeagues 
      }));
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && currentActiveTab) {
      closeAllPanels();
      currentActiveTab = null;
    }
  });

  // Click outside to close
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.filters-wrapper')) {
      if (currentActiveTab) {
        closeAllPanels();
        currentActiveTab = null;
      }
    }
  });

})();

(function() {
  'use strict';

  // Filter Options Data
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

  // Current filter selections
  let filters = {
    time: ['All'],
    folds: ['All'],
    foldsCustomMin: null,
    foldsCustomMax: null,
    odds: ['All'],
    oddsCustomMin: null,
    oddsCustomMax: null,
    sort: 'All'
  };

  // DOM Elements
  const filterTabs = document.querySelectorAll('.filter-tab');
  const filterPanels = document.querySelectorAll('.filter-panel');
  const filtersContent = document.querySelector('.filters-content');
  let currentActiveTab = null;

  // Initialize filters
  function initFilters() {
    renderFilterOptions();
    attachTabListeners();
    attachCheckboxListeners();
    attachRangeListeners();
    attachActionButtons();
    attachEscapeListener();
    attachOutsideClickListener();
  }

  // Toggle panel function
  function togglePanel(tab) {
    const filterName = tab.getAttribute('data-filter');
    const panel = document.querySelector(`[data-panel="${filterName}"]`);
    
    // Check if clicking the same tab
    if (currentActiveTab === tab) {
      closeAllPanels();
      currentActiveTab = null;
    } else {
      closeAllPanels();
      tab.classList.add('active');
      panel.classList.add('active');
      filtersContent.classList.add('open');
      currentActiveTab = tab;
    }
  }

  function closeAllPanels() {
    filterTabs.forEach(tab => tab.classList.remove('active'));
    filterPanels.forEach(panel => panel.classList.remove('active'));
    filtersContent.classList.remove('open');
  }

  // Render filter options
  function renderFilterOptions() {
    // Time filter
    renderCheckboxOptions('time', filterOptions.time, filters.time);
    
    // Folds filter
    renderCheckboxOptions('folds', filterOptions.folds, filters.folds);
    
    // Odds filter
    renderCheckboxOptions('odds', filterOptions.odds, filters.odds);
    
    // Sort filter
    renderCheckboxOptions('sort', filterOptions.sort, [filters.sort]);
  }

  function renderCheckboxOptions(filterType, options, selectedValues) {
    const container = document.getElementById(`${filterType}-options`);
    if (!container) return;

    container.innerHTML = options.map(option => `
      <div class="filter-option-checkbox">
        <input 
          type="checkbox" 
          id="${filterType}-${option.replace(/\s+/g, '-')}" 
          value="${option}"
          ${selectedValues.includes(option) ? 'checked' : ''}
        />
        <label for="${filterType}-${option.replace(/\s+/g, '-')}">
          <span class="checkbox-label">${option}</span>
        </label>
      </div>
    `).join('');
  }

  // Attach tab listeners
  function attachTabListeners() {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        togglePanel(this);
      });
    });
  }

  // Attach checkbox listeners
  function attachCheckboxListeners() {
    document.querySelectorAll('.filter-option-checkbox input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const filterType = this.id.split('-')[0];
        const value = this.value;
        
        if (value === 'All') {
          // If "All" is checked, uncheck others and only select "All"
          if (this.checked) {
            const panel = this.closest('.filter-panel');
            const checkboxes = panel.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(cb => {
              if (cb !== this) cb.checked = false;
            });
            
            if (filterType === 'sort') {
              filters[filterType] = value;
            } else {
              filters[filterType] = ['All'];
            }
          }
        } else {
          // If a specific option is checked, uncheck "All"
          const allCheckbox = document.getElementById(`${filterType}-All`);
          if (allCheckbox && this.checked) {
            allCheckbox.checked = false;
          }
          
          // Update filters
          if (filterType === 'sort') {
            // For sort, only one can be selected
            const panel = this.closest('.filter-panel');
            const checkboxes = panel.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(cb => {
              if (cb !== this) cb.checked = false;
            });
            filters[filterType] = value;
          } else {
            // For others, allow multiple selections
            const checkedBoxes = Array.from(
              document.querySelectorAll(`#${filterType}-options input[type="checkbox"]:checked`)
            );
            filters[filterType] = checkedBoxes.map(cb => cb.value);
            
            // If no options are checked, default to "All"
            if (filters[filterType].length === 0) {
              filters[filterType] = ['All'];
              if (allCheckbox) allCheckbox.checked = true;
            }
          }
        }
        
        console.log(`${filterType} updated:`, filters[filterType]);
      });
    });
  }

  // Attach range input listeners
  function attachRangeListeners() {
    // Folds range
    const foldsMin = document.getElementById('folds-min');
    const foldsMax = document.getElementById('folds-max');
    const foldsSlider = document.getElementById('folds-slider');
    
    if (foldsMin && foldsMax && foldsSlider) {
      foldsMin.addEventListener('input', () => {
        filters.foldsCustomMin = foldsMin.value;
        console.log('Folds custom min:', filters.foldsCustomMin);
      });
      
      foldsMax.addEventListener('input', () => {
        filters.foldsCustomMax = foldsMax.value;
        foldsSlider.value = foldsMax.value;
        console.log('Folds custom max:', filters.foldsCustomMax);
      });
      
      foldsSlider.addEventListener('input', () => {
        foldsMax.value = foldsSlider.value;
        filters.foldsCustomMax = foldsSlider.value;
      });
    }
    
    // Odds range
    const oddsMin = document.getElementById('odds-min');
    const oddsMax = document.getElementById('odds-max');
    const oddsSlider = document.getElementById('odds-slider');
    
    if (oddsMin && oddsMax && oddsSlider) {
      oddsMin.addEventListener('input', () => {
        filters.oddsCustomMin = oddsMin.value;
        console.log('Odds custom min:', filters.oddsCustomMin);
      });
      
      oddsMax.addEventListener('input', () => {
        filters.oddsCustomMax = oddsMax.value;
        oddsSlider.value = oddsMax.value;
        console.log('Odds custom max:', filters.oddsCustomMax);
      });
      
      oddsSlider.addEventListener('input', () => {
        oddsMax.value = oddsSlider.value;
        filters.oddsCustomMax = oddsSlider.value;
      });
    }
  }

  // Attach action buttons
  function attachActionButtons() {
    // Reset buttons
    document.querySelectorAll('.btn-reset').forEach(btn => {
      btn.addEventListener('click', function() {
        const panel = this.closest('.filter-panel');
        const filterType = panel.getAttribute('data-panel');
        
        // Reset checkboxes
        const checkboxes = panel.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
        
        // Check "All" by default
        const allCheckbox = document.getElementById(`${filterType}-All`);
        if (allCheckbox) allCheckbox.checked = true;
        
        // Reset filter values
        if (filterType === 'sort') {
          filters[filterType] = 'All';
        } else {
          filters[filterType] = ['All'];
        }
        
        // Reset custom ranges if applicable
        if (filterType === 'folds') {
          filters.foldsCustomMin = null;
          filters.foldsCustomMax = null;
          const minInput = document.getElementById('folds-min');
          const maxInput = document.getElementById('folds-max');
          if (minInput) minInput.value = '';
          if (maxInput) maxInput.value = '';
        }
        
        if (filterType === 'odds') {
          filters.oddsCustomMin = null;
          filters.oddsCustomMax = null;
          const minInput = document.getElementById('odds-min');
          const maxInput = document.getElementById('odds-max');
          if (minInput) minInput.value = '';
          if (maxInput) maxInput.value = '';
        }
        
        console.log(`${filterType} filters reset`);
      });
    });
    
    // Apply buttons
    document.querySelectorAll('.btn-apply').forEach(btn => {
      btn.addEventListener('click', function() {
        const panel = this.closest('.filter-panel');
        const filterType = panel.getAttribute('data-panel');
        
        console.log(`Applied ${filterType} filters:`, filters);
        
        // Close panel after applying
        closeAllPanels();
        currentActiveTab = null;
        
        // Dispatch custom event for parent page to listen to
        document.dispatchEvent(new CustomEvent('filtersApplied', { 
          detail: { filterType, filters }
        }));
      });
    });
  }

  // Close on Escape key
  function attachEscapeListener() {
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && currentActiveTab) {
        closeAllPanels();
        currentActiveTab = null;
      }
    });
  }

  // Click outside to close
  function attachOutsideClickListener() {
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.filters-wrapper')) {
        if (currentActiveTab) {
          closeAllPanels();
          currentActiveTab = null;
        }
      }
    });
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFilters);
  } else {
    initFilters();
  }

})();

// Week Filter with Search Functionality
(function() {
  'use strict';

  // Week filter search functionality
  const weekSearchInput = document.getElementById('weekSearchInput');
  const weekOptionsList = document.getElementById('weekOptionsList');
  const weekNoResults = document.getElementById('weekNoResults');

  if (weekSearchInput && weekOptionsList) {
    weekSearchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();
      const weekOptions = weekOptionsList.querySelectorAll('.week-option');
      let hasVisibleResults = false;

      weekOptions.forEach(option => {
        const weekLabel = option.querySelector('.week-label').textContent.toLowerCase();
        const weekDate = option.querySelector('.week-date').textContent.toLowerCase();
        const weekBadge = option.querySelector('.week-badge');
        const badgeText = weekBadge ? weekBadge.textContent.toLowerCase() : '';
        
        // Check if search term matches week label, date, or badge
        const matches = weekLabel.includes(searchTerm) || 
                       weekDate.includes(searchTerm) || 
                       badgeText.includes(searchTerm);

        if (matches) {
          option.classList.remove('hidden');
          hasVisibleResults = true;
        } else {
          option.classList.add('hidden');
        }
      });

      // Show/hide no results message
      if (weekNoResults) {
        if (hasVisibleResults) {
          weekNoResults.style.display = 'none';
        } else {
          weekNoResults.style.display = 'block';
        }
      }
    });

    // Clear search when panel closes
    const weekTab = document.querySelector('[data-filter="week"]');
    if (weekTab) {
      weekTab.addEventListener('click', function() {
        // Small delay to check if panel is being opened
        setTimeout(() => {
          const weekPanel = document.querySelector('[data-panel="week"]');
          if (weekPanel && !weekPanel.classList.contains('active')) {
            // Panel is closing, clear search
            weekSearchInput.value = '';
            const weekOptions = weekOptionsList.querySelectorAll('.week-option');
            weekOptions.forEach(option => option.classList.remove('hidden'));
            if (weekNoResults) {
              weekNoResults.style.display = 'none';
            }
          }
        }, 50);
      });
    }
  }

  // Handle week option selection (auto-close)
  const weekOptions = document.querySelectorAll('.filter-option.week-option');
  weekOptions.forEach(option => {
    option.addEventListener('click', function() {
      // Don't allow selecting disabled weeks
      if (this.classList.contains('disabled')) {
        return;
      }

      // Remove active from all week options
      weekOptions.forEach(opt => opt.classList.remove('active'));
      
      // Add active to clicked option
      this.classList.add('active');
      
      const value = this.getAttribute('data-value');
      const weekLabel = this.querySelector('.week-label').textContent;
      const weekDate = this.querySelector('.week-date').textContent;
      
      console.log(`Selected Week: ${weekLabel} - ${weekDate} (${value})`);
      
      // Auto-close the panel after selection
      setTimeout(() => {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const filterPanels = document.querySelectorAll('.filter-panel');
        const filtersContent = document.querySelector('.filters-content');
        
        filterTabs.forEach(tab => tab.classList.remove('active'));
        filterPanels.forEach(panel => panel.classList.remove('active'));
        if (filtersContent) {
          filtersContent.classList.remove('open');
        }
        
        // Clear search
        if (weekSearchInput) {
          weekSearchInput.value = '';
          weekOptions.forEach(opt => opt.classList.remove('hidden'));
          if (weekNoResults) {
            weekNoResults.style.display = 'none';
          }
        }
      }, 200);
      
      // Dispatch custom event for parent page to listen to
      document.dispatchEvent(new CustomEvent('weekFilterChanged', { 
        detail: { 
          value: value,
          label: weekLabel,
          date: weekDate
        }
      }));
    });
  });

  // Focus search input when week panel opens
  const weekFilterTab = document.querySelector('[data-filter="week"]');
  if (weekFilterTab) {
    weekFilterTab.addEventListener('click', function() {
      setTimeout(() => {
        const weekPanel = document.querySelector('[data-panel="week"]');
        if (weekPanel && weekPanel.classList.contains('active') && weekSearchInput) {
          weekSearchInput.focus();
        }
      }, 100);
    });
  }

})();