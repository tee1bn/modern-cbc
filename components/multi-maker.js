(function() {
  'use strict';

  // ==================== INITIALIZATION ====================
  function init() {
    calculateTotalOdds();
  }

  // ==================== CALCULATE TOTAL ODDS ====================
  function calculateTotalOdds() {
    const matchCards = document.querySelectorAll('.match-odd-box');
    let totalOdds = 1;
    let count = 0;
    
    matchCards.forEach(card => {
      const oddValue = parseFloat(card.textContent.trim());
      if (!isNaN(oddValue)) {
        totalOdds *= oddValue;
        count++;
      }
    });
    
    // Update selections count
    const selectionsCount = document.getElementById('selections-count');
    if (selectionsCount) {
      selectionsCount.textContent = count;
    }
    
    // Update total odds
    const totalOddsElement = document.querySelector('.odds-value');
    if (totalOddsElement) {
      totalOddsElement.textContent = totalOdds.toFixed(2);
    }
  }

  // ==================== INITIALIZE ====================
  document.addEventListener('DOMContentLoaded', init);

})();

// Handle sticky header scroll effects
document.addEventListener('DOMContentLoaded', () => {
  const sportTabs = document.querySelector('.sport-tabs');
  const filterBar = document.querySelector('.filter-bar');
  
  if (sportTabs && filterBar) {
    window.addEventListener('scroll', () => {
      // Add shadow effects when scrolling
      if (window.scrollY > 52) {
        sportTabs.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      } else {
        sportTabs.style.boxShadow = 'none';
      }
      
      if (window.scrollY > 96) {
        filterBar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      } else {
        filterBar.style.boxShadow = 'none';
      }
    });
  }
});