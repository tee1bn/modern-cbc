// MARKET EDIT MODAL COMPONENT - Reusable market editor
// Usage: Include after betslip-rail.js

(function() {
  'use strict';

  let currentMatchId = null;
  let currentSelection = null;
  let onSaveCallback = null;

  // ==================== OPEN MODAL ====================
  function openMarketModal(matchId, selection, onSave) {
    currentMatchId = matchId;
    currentSelection = selection;
    onSaveCallback = onSave;

    const overlay = document.getElementById('market-modal-overlay');
    const modal = document.getElementById('market-modal');

    if (!overlay || !modal) {
      console.error('Market modal elements not found');
      return;
    }

    // Set match info
    document.getElementById('modal-teams').textContent = selection.teams || 'Unknown Match';
    document.getElementById('modal-date').textContent = selection.date || '';

    // Highlight current selection
    const optionChoices = modal.querySelectorAll('.option-choice');
    optionChoices.forEach(choice => {
      choice.classList.remove('selected');
      if (choice.dataset.market === selection.market && 
          choice.dataset.value === selection.value) {
        choice.classList.add('selected');
      }
    });

    // Show modal
    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hide betslip badge while modal is open
    if (window.betslipRail && window.betslipRail.hideBadge) {
      window.betslipRail.hideBadge();
    }
  }

  // ==================== CLOSE MODAL ====================
  function closeMarketModal() {
    const overlay = document.getElementById('market-modal-overlay');
    const modal = document.getElementById('market-modal');

    if (overlay && modal) {
      overlay.classList.remove('active');
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Show betslip badge again
    if (window.betslipRail && window.betslipRail.showBadge) {
      window.betslipRail.showBadge();
    }

    currentMatchId = null;
    currentSelection = null;
    onSaveCallback = null;
  }

  // ==================== SAVE SELECTION ====================
  function saveMarketSelection() {
    const modal = document.getElementById('market-modal');
    const selectedOption = modal.querySelector('.option-choice.selected');

    if (!selectedOption || !currentMatchId) return;

    const market = selectedOption.dataset.market;
    const value = selectedOption.dataset.value;

    // Call the callback
    if (onSaveCallback) {
      onSaveCallback({
        matchId: currentMatchId,
        market: market,
        value: value
      });
    }

    closeMarketModal();
  }

  // ==================== INITIALIZE MODAL ====================
  function initMarketModal() {
    const modal = document.getElementById('market-modal');
    if (!modal) return;

    // Close button
    const closeBtn = document.getElementById('close-market-modal');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeMarketModal);
    }

    // Overlay click
    const overlay = document.getElementById('market-modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeMarketModal);
    }

    // Save button
    const saveBtn = document.getElementById('save-market-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', saveMarketSelection);
    }

    // Market option selection
    const optionChoices = modal.querySelectorAll('.option-choice');
    optionChoices.forEach(choice => {
      choice.addEventListener('click', function() {
        // Remove selected from same market group
        const marketGroup = this.closest('.market-option');
        marketGroup.querySelectorAll('.option-choice').forEach(opt => {
          opt.classList.remove('selected');
        });

        // Add selected to clicked option
        this.classList.add('selected');
      });
    });

    // Market tabs
    const modalTabs = modal.querySelectorAll('.market-modal-tab');
    modalTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        modalTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        // TODO: Filter markets by tab
      });
    });
  }

  // ==================== PUBLIC API ====================
  window.marketEditModal = {
    open: openMarketModal,
    close: closeMarketModal
  };

  // ==================== INITIALIZATION ====================
  document.addEventListener('DOMContentLoaded', () => {
    initMarketModal();
  });

})();