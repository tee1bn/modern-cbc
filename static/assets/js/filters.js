(function() {
  'use strict';

  const filterTabs = document.querySelectorAll('.filter-tab');
  const filterPanels = document.querySelectorAll('.filter-panel');
  const filtersContent = document.querySelector('.filters-content');
  let currentActiveTab = null;

  function togglePanel(tab) {
    const filterName = tab.getAttribute('data-filter');
    const panel = document.querySelector(`[data-panel="${filterName}"]`);
    
    // If clicking the same tab, close it
    if (currentActiveTab === tab) {
      closeAllPanels();
      currentActiveTab = null;
    } else {
      // Close all and open the clicked one
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

  // Attach click listeners
  filterTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      togglePanel(this);
    });
  });
})();