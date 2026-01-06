
// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Copy text to clipboard
 */
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`Code copied: ${text}`);
      })
      .catch(err => {
        // Fallback method
        fallbackCopy(text);
      });
  } else {
    fallbackCopy(text);
  }
}

/**
 * Fallback copy method for older browsers
 */
function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  
  try {
    document.execCommand('copy');
    alert(`Code copied: ${text}`);
  } catch (err) {
    alert('Failed to copy code. Please copy manually.');
  }
  
  document.body.removeChild(textarea);
}

/**
 * Share using Web Share API or fallback to copy
 */
function shareCode(code) {
  const text = `Check out my bet code: ${code}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Bet Code',
      text: text,
      url: window.location.href
    }).catch(err => {
      if (err.name !== 'AbortError') {
        // User didn't cancel, something went wrong
        copyToClipboard(code);
      }
    });
  } else {
    // Web Share not supported, just copy
    copyToClipboard(code);
  }
}

// ============================================================================
// VIEW TOGGLE FUNCTIONALITY
// ============================================================================


function handleViewToggle(view) {
  const gamesList = document.getElementById('gamesList');
  if (!gamesList) return;
  
  // Remove all view classes
  gamesList.classList.remove('view-grouped', 'view-origin', 'view-target');
  
  // Add new view class
  gamesList.classList.add(`view-${view}`);
  
  // Update active button
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeBtn = document.querySelector(`[data-view="${view}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  // Show/hide elements based on view
  const allGroups = document.querySelectorAll('.conversion-group');
  const allOriginCards = document.querySelectorAll('.card-origin');
  const allTargetCards = document.querySelectorAll('.card-target');
  const allConnectors = document.querySelectorAll('.conversion-connector');
  
  // Reset all visibility
  allGroups.forEach(group => group.style.display = '');
  allOriginCards.forEach(card => card.style.display = '');
  allTargetCards.forEach(card => card.style.display = '');
  allConnectors.forEach(connector => connector.style.display = '');
  
  if (view === 'origin') {
    // Show only origin cards, hide target cards and connectors
    allTargetCards.forEach(card => card.style.display = 'none');
    allConnectors.forEach(connector => connector.style.display = 'none');
    
    // All origin cards visible (including failed ones)
  } else if (view === 'target') {
    // Show only target cards, hide origin cards and connectors
    allOriginCards.forEach(card => card.style.display = 'none');
    allConnectors.forEach(connector => connector.style.display = 'none');
    
    // IMPORTANT: Hide failed conversion groups entirely in target view
    allGroups.forEach(group => {
      const status = group.getAttribute('data-status');
      if (status === 'failed') {
        group.style.display = 'none'; // Completely hide failed conversions
      }
    });
  }
}


// ============================================================================
// FILTER FUNCTIONALITY
// ============================================================================

function handleFilterChange(filterValue) {
  const allGroups = document.querySelectorAll('.conversion-group');
  const currentView = document.querySelector('.games-list').classList.contains('view-target') ? 'target' : 
                     document.querySelector('.games-list').classList.contains('view-origin') ? 'origin' : 'grouped';
  
  allGroups.forEach(group => {
    const status = group.getAttribute('data-status');
    
    // In target-only view, NEVER show failed conversions
    if (currentView === 'target' && status === 'failed') {
      group.style.display = 'none';
      return;
    }
    
    if (filterValue === 'all') {
      group.style.display = '';
    } else if (filterValue === 'converted' && status === 'converted') {
      group.style.display = '';
    } else if (filterValue === 'failed' && status === 'failed') {
      group.style.display = '';
    } else {
      group.style.display = 'none';
    }
  });
  
  // Update total games count
  updateFilterCount(filterValue);
}

/**
 * Update the displayed count based on filter
 */
function updateFilterCount(filterValue) {
  const totalGamesElement = document.querySelector('.total-games');
  if (!totalGamesElement) return;
  
  const allGroups = document.querySelectorAll('.conversion-group');
  const currentView = document.querySelector('.games-list').classList.contains('view-target') ? 'target' : 
                     document.querySelector('.games-list').classList.contains('view-origin') ? 'origin' : 'grouped';
  
  let visibleCount = 0;
  
  allGroups.forEach(group => {
    const status = group.getAttribute('data-status');
    
    // In target view, don't count failed conversions
    if (currentView === 'target' && status === 'failed') {
      return;
    }
    
    if (filterValue === 'all') {
      visibleCount++;
    } else if (filterValue === 'converted' && status === 'converted') {
      visibleCount++;
    } else if (filterValue === 'failed' && status === 'failed') {
      visibleCount++;
    }
  });
  
  // Calculate totals from DOM
  const totalEvents = allGroups.length;
  const convertedEvents = document.querySelectorAll('[data-status="converted"]').length;
  
  // Update text based on filter and view
  if (currentView === 'target') {
    // Target view only shows converted
    totalGamesElement.textContent = `${convertedEvents} converted games`;
  } else if (filterValue === 'all') {
    totalGamesElement.textContent = `${convertedEvents} / ${totalEvents} games converted`;
  } else if (filterValue === 'converted') {
    totalGamesElement.textContent = `${visibleCount} converted games`;
  } else if (filterValue === 'failed') {
    totalGamesElement.textContent = `${visibleCount} failed games`;
  }
}

// ============================================================================
// EVENT LISTENERS INITIALIZATION
// ============================================================================

/**
 * Initialize all event listeners
 */
function initializeEventListeners() {
  
  // 1. View Toggle Buttons
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const view = this.getAttribute('data-view');
      if (view) {
        handleViewToggle(view);
      }
    });
  });
  
  // 2. Filter Dropdown
  const filterSelect = document.getElementById('gameFilter');
  if (filterSelect) {
    filterSelect.addEventListener('change', function() {
      const filterValue = this.value;
      handleFilterChange(filterValue);
    });
  }
  
  // 3. Copy Icons
  const copyIcons = document.querySelectorAll('.copy-icon');
  copyIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const code = this.getAttribute('data-copy');
      if (code) {
        copyToClipboard(code);
      }
    });
  });
  
  // 4. Share Icon
  const shareIcons = document.querySelectorAll('.share-icon');
  shareIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      // Get the target code (closest summary-code)
      const summaryCode = this.closest('.summary-code');
      if (summaryCode) {
        const codeElement = summaryCode.querySelector('[data-code]');
        const code = codeElement ? codeElement.getAttribute('data-code') : '';
        if (code) {
          shareCode(code);
        }
      }
    });
  });
  
  console.log('Conversion Summary interactions initialized');
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize when DOM is ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeEventListeners);
} else {
  initializeEventListeners();
}

// ============================================================================
// PUBLIC API (Optional - for external use)
// ============================================================================

window.ConversionSummary = {
  setView: handleViewToggle,
  setFilter: handleFilterChange,
  copyCode: copyToClipboard,
  shareCode: shareCode
};