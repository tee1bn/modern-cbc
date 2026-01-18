
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
  
  console.log('Conversion Summary interactions initialized');
}

// ============================================================================
// INITIALIZATION
// ============================================================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeEventListeners);
} else {
  initializeEventListeners();
}
