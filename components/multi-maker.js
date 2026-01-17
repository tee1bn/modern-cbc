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

// Master checkbox functionality
const masterCheckbox = document.getElementById('select-all');
const matchCheckboxes = document.querySelectorAll('.match-check-input');

masterCheckbox.addEventListener('change', function() {
  matchCheckboxes.forEach(checkbox => {
    checkbox.checked = this.checked;
  });
  updateSelectionCount();
});

// Individual checkbox change
matchCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    updateMasterCheckbox();
    updateSelectionCount();
  });
});

// Update master checkbox based on individual checkboxes
function updateMasterCheckbox() {
  const totalCheckboxes = matchCheckboxes.length;
  const checkedCheckboxes = document.querySelectorAll('.match-check-input:checked').length;
  
  masterCheckbox.checked = totalCheckboxes === checkedCheckboxes;
  masterCheckbox.indeterminate = checkedCheckboxes > 0 && checkedCheckboxes < totalCheckboxes;
}

// Update selection count
function updateSelectionCount() {
  const checkedCount = document.querySelectorAll('.match-check-input:checked').length;
  document.getElementById('selections-count').textContent = checkedCount;
}