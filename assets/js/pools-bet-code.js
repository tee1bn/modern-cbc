// POOLS BET CODE - JavaScript

// State
let selections = [];
let currentEditingMatchId = null;

// Match data
const matches = {
  1: { teams: 'Aston Villa vs Nottingham Forest', date: '1- 2026-01-03', odds: { home: '1.95', draw: '3.40', away: '4.20' } },
  2: { teams: 'Liverpool vs Man City', date: '1- 2026-01-03', odds: { home: '2.10', draw: '3.20', away: '3.60' } },
  3: { teams: 'Chelsea vs Arsenal', date: '1- 2026-01-03', odds: { home: '1.85', draw: '3.50', away: '4.00' } },
  4: { teams: 'Real Madrid vs Barcelona', date: '1- 2026-01-03', odds: { home: '2.40', draw: '3.00', away: '2.80' } },
  5: { teams: 'Bayern Munich vs Dortmund', date: '1- 2026-01-04', odds: { home: '1.70', draw: '3.90', away: '5.10' } }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initializeMatchOptions();
  initializeBetslipBadge();
  initializeBetslipSheet();
  initializeMarketModal();
  initializeWeekSelector();
  initializeMarketTabs();
  initializeCopyButtons();
});

// ========== MATCH SELECTION ========== //
function initializeMatchOptions() {
  const matchOptions = document.querySelectorAll('.match-option');
  
  matchOptions.forEach(option => {
    option.addEventListener('click', function() {
      const matchId = this.dataset.matchId;
      const selectedOption = this.dataset.option;
      
      // Remove selected from siblings
      const siblings = this.closest('.match-options').querySelectorAll('.match-option');
      siblings.forEach(sibling => sibling.classList.remove('selected'));
      
      // Add selected to clicked option
      this.classList.add('selected');
      
      // Add to selections
      addSelection(matchId, selectedOption);
      
      // Show betslip badge
      updateBetslipBadge();
    });
  });
}

function addSelection(matchId, option) {
  // Check if match already exists in selections
  const existingIndex = selections.findIndex(s => s.matchId === matchId);
  
  const selection = {
    matchId: matchId,
    teams: matches[matchId].teams,
    date: matches[matchId].date,
    market: '1x2',
    value: option,
    odd: (matches[matchId].odds && matches[matchId].odds[option]) ? matches[matchId].odds[option] : '—'
  };
  
  if (existingIndex >= 0) {
    // Update existing selection
    selections[existingIndex] = selection;
  } else {
    // Add new selection
    selections.push(selection);
  }
}

// ========== BETSLIP BADGE ========== //
function initializeBetslipBadge() {
  const badge = document.getElementById('betslip-badge');
  
  badge.addEventListener('click', function() {
    openBetslip();
  });
}

function updateBetslipBadge() {
  const badge = document.getElementById('betslip-badge');
  const count = document.getElementById('betslip-count');
  
  if (selections.length > 0) {
    badge.style.display = 'flex';
    count.textContent = selections.length;
  } else {
    badge.style.display = 'none';
  }
}

// ========== BETSLIP BOTTOM SHEET ========== //
function initializeBetslipSheet() {
  const overlay = document.getElementById('betslip-overlay');
  const sheet = document.getElementById('betslip-sheet');
  const closeBtn = document.getElementById('close-betslip');
  const clearAllBtn = document.getElementById('clear-all-btn');
  const bookBtn = document.getElementById('book-bet-btn');
  
  // Close betslip
  closeBtn.addEventListener('click', closeBetslip);
  overlay.addEventListener('click', closeBetslip);
  
  // Clear all selections
  clearAllBtn.addEventListener('click', function() {
    selections = [];
    updateBetslipDisplay();
    updateBetslipBadge();
    clearAllMatchSelections();
  });
  
  // Book bet
  bookBtn.addEventListener('click', function() {
    generateBookingCode();
  });
}

function openBetslip() {
  const overlay = document.getElementById('betslip-overlay');
  const sheet = document.getElementById('betslip-sheet');
  
  updateBetslipDisplay();
  
  overlay.classList.add('active');
  sheet.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBetslip() {
  const overlay = document.getElementById('betslip-overlay');
  const sheet = document.getElementById('betslip-sheet');
  
  overlay.classList.remove('active');
  sheet.classList.remove('active');
  document.body.style.overflow = '';
}

function updateBetslipDisplay() {
  const container = document.getElementById('betslip-selections');
  const headerCount = document.getElementById('betslip-header-count');
  const bookCount = document.getElementById('book-count');
  
  // Update counts
  headerCount.textContent = selections.length;
  bookCount.textContent = selections.length;
  
  // Clear container
  container.innerHTML = '';
  
  // Render selections
  selections.forEach((selection, index) => {
    const selectionEl = createSelectionElement(selection, index);
    container.appendChild(selectionEl);
  });
}

function createSelectionElement(selection, index) {
  const div = document.createElement('div');
  div.className = 'betslip-selection';
  div.dataset.selectionId = selection.matchId;
  
  div.innerHTML = `
    <div class="selection-content">
      <div class="selection-info">
        <div class="selection-teams">${selection.teams}</div>
        <div class="selection-market">${selection.market} : ${selection.value}</div>
      </div>      <div class="selection-odd"><div class="odd-value">${selection.odd || '—'}</div></div>      <button class="selection-edit" data-match-id="${selection.matchId}">
        <i class="bi bi-pencil"></i>
      </button>
    </div>
    <label class="selection-checkbox">
      <input type="checkbox" data-index="${index}" />
      <i class="bi bi-x-lg checkbox-custom"></i>
    </label>
  `;
  
  // Edit button handler
  const editBtn = div.querySelector('.selection-edit');
  editBtn.addEventListener('click', function() {
    const matchId = this.dataset.matchId;
    openMarketModal(matchId);
  });
  
  // Checkbox handler (for removal)
  const checkbox = div.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      removeSelection(parseInt(this.dataset.index));
    }
  });
  
  return div;
}

function removeSelection(index) {
  selections.splice(index, 1);
  updateBetslipDisplay();
  updateBetslipBadge();
  
  if (selections.length === 0) {
    closeBetslip();
    clearAllMatchSelections();
  }
}

function clearAllMatchSelections() {
  const matchOptions = document.querySelectorAll('.match-option');
  matchOptions.forEach(option => option.classList.remove('selected'));
}

// ========== BOOKING CODE GENERATION ========== //
function generateBookingCode() {
  const codeSection = document.getElementById('betslip-code');
  const errorSection = document.getElementById('betslip-error');
  const bookieSelect = document.getElementById('bookie-select');
  
  // Hide error
  errorSection.style.display = 'none';
  
  // Simulate API call
  setTimeout(() => {
    // Random success/fail (90% success)
    const success = Math.random() > 0.1;
    
    if (success) {
      // Generate random code
      const code = generateRandomCode();
      document.getElementById('generated-code').value = code;
      codeSection.style.display = 'block';
    } else {
      errorSection.style.display = 'flex';
      setTimeout(() => {
        errorSection.style.display = 'none';
      }, 3000);
    }
  }, 500);
}

function generateRandomCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 9; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// ========== MARKET EDITOR MODAL ========== //
function initializeMarketModal() {
  const overlay = document.getElementById('market-modal-overlay');
  const modal = document.getElementById('market-modal');
  const closeBtn = document.getElementById('close-market-modal');
  const saveBtn = document.getElementById('save-market-btn');
  
  // Close modal
  closeBtn.addEventListener('click', closeMarketModal);
  overlay.addEventListener('click', closeMarketModal);
  
  // Save selection
  saveBtn.addEventListener('click', saveMarketSelection);
  
  // Market option selection
  const optionChoices = modal.querySelectorAll('.option-choice');
  optionChoices.forEach(choice => {
    choice.addEventListener('click', function() {
      const market = this.dataset.market;
      
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
    });
  });
}

function openMarketModal(matchId) {
  const overlay = document.getElementById('market-modal-overlay');
  const modal = document.getElementById('market-modal');
  const modalTeams = document.getElementById('modal-teams');
  const modalDate = document.getElementById('modal-date');
  
  currentEditingMatchId = matchId;
  
  // Set match info
  modalTeams.textContent = matches[matchId].teams;
  modalDate.textContent = matches[matchId].date;
  
  // Load current selection
  const currentSelection = selections.find(s => s.matchId === matchId);
  if (currentSelection) {
    // Highlight current selection
    const optionChoices = modal.querySelectorAll('.option-choice');
    optionChoices.forEach(choice => {
      choice.classList.remove('selected');
      if (choice.dataset.market === currentSelection.market && 
          choice.dataset.value === currentSelection.value) {
        choice.classList.add('selected');
      }
    });
  }
  
  // Open modal
  overlay.classList.add('active');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMarketModal() {
  const overlay = document.getElementById('market-modal-overlay');
  const modal = document.getElementById('market-modal');
  
  overlay.classList.remove('active');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  
  currentEditingMatchId = null;
}

function saveMarketSelection() {
  const modal = document.getElementById('market-modal');
  const selectedOption = modal.querySelector('.option-choice.selected');
  
  if (!selectedOption || !currentEditingMatchId) return;
  
  const market = selectedOption.dataset.market;
  const value = selectedOption.dataset.value;
  
  // Update selection
  const selectionIndex = selections.findIndex(s => s.matchId === currentEditingMatchId);
  if (selectionIndex >= 0) {
    selections[selectionIndex].market = market;
    selections[selectionIndex].value = value;
    selections[selectionIndex].odd = (matches[currentEditingMatchId].odds && matches[currentEditingMatchId].odds[value]) ? matches[currentEditingMatchId].odds[value] : '—';
  }
  
  // Update main match display
  updateMainMatchDisplay(currentEditingMatchId, value);
  
  // Update betslip display
  updateBetslipDisplay();
  
  // Close modal
  closeMarketModal();
}

function updateMainMatchDisplay(matchId, value) {
  const matchRow = document.querySelector(`[data-match-id="${matchId}"]`).closest('.match-row');
  const options = matchRow.querySelectorAll('.match-option');
  
  options.forEach(option => {
    option.classList.remove('selected');
    if (option.dataset.option === value) {
      option.classList.add('selected');
    }
  });
}

// ========== WEEK SELECTOR ========== //
function initializeWeekSelector() {
  const prevBtn = document.getElementById('prev-week');
  const nextBtn = document.getElementById('next-week');
  const weekValue = document.getElementById('current-week');
  
  prevBtn.addEventListener('click', () => {
    // Logic to change week (placeholder)
    console.log('Previous week');
  });
  
  nextBtn.addEventListener('click', () => {
    // Logic to change week (placeholder)
    console.log('Next week');
  });
}

// ========== MARKET TABS ========== //
function initializeMarketTabs() {
  const tabs = document.querySelectorAll('.pools-market-tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Logic to filter matches by market (placeholder)
      console.log('Market filter:', this.dataset.market);
    });
  });
}

// ========== COPY BUTTONS ========== //
function initializeCopyButtons() {
  const embedCopyBtn = document.getElementById('copy-embed-btn');
  const codeCopyBtn = document.getElementById('copy-code-btn');
  const shareCodeBtn = document.getElementById('share-code-btn');
  
  embedCopyBtn.addEventListener('click', () => {
    copyToClipboard(document.getElementById('embed-code').value);
    showCopyFeedback(embedCopyBtn);
  });
  
  codeCopyBtn.addEventListener('click', () => {
    copyToClipboard(document.getElementById('generated-code').value);
    showCopyFeedback(codeCopyBtn);
  });
  
  shareCodeBtn.addEventListener('click', () => {
    const code = document.getElementById('generated-code').value;
    if (navigator.share) {
      navigator.share({
        title: 'Pools Bet Code',
        text: `My Pools Bet Code: ${code}`,
      }).catch(err => console.log('Share cancelled'));
    } else {
      copyToClipboard(code);
      showCopyFeedback(shareCodeBtn);
    }
  });
}

function copyToClipboard(text) {
  // Modern clipboard API
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    // Fallback
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }
}

function showCopyFeedback(button) {
  const originalHTML = button.innerHTML;
  button.innerHTML = '<i class="bi bi-check-lg"></i>';
  button.style.background = 'var(--pools-text)';
  button.style.color = 'white';
  
  setTimeout(() => {
    button.innerHTML = originalHTML;
    button.style.background = '';
    button.style.color = '';
  }, 1500);
}

// ========== BACK BUTTON ========== //
document.getElementById('back-btn').addEventListener('click', () => {
  window.history.back();
});