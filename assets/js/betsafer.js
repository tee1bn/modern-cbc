// ==========================================
// STATE MANAGEMENT
// ==========================================
let selectedPicks = {};          // { 1: 'original', 2: 'alt-1' }
let acceptedEvents = new Set();  // accepted event IDs
let analysisLoaded = false;

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadSavedState();  // Load saved state first
  initEventListeners();
  initializeDefaults();
  
  // If analysis was previously loaded, show results
  if (analysisLoaded) {
    showResults();
  }
});

// ==========================================
// SAVE STATE TO LOCALSTORAGE
// ==========================================
function saveState() {
  const state = {
    selectedPicks: selectedPicks,
    acceptedEvents: Array.from(acceptedEvents),
    analysisLoaded: analysisLoaded
  };
  localStorage.setItem('betSaferState', JSON.stringify(state));
}

// ==========================================
// LOAD STATE FROM LOCALSTORAGE
// ==========================================
function loadSavedState() {
  const savedState = localStorage.getItem('betSaferState');
  if (!savedState) return;
  
  try {
    const state = JSON.parse(savedState);
    selectedPicks = state.selectedPicks || {};
    acceptedEvents = new Set(state.acceptedEvents || []);
    analysisLoaded = state.analysisLoaded || false;
    
    // Restore UI state
    if (analysisLoaded) {
      document.getElementById('empty-state')?.style.setProperty('display', 'none');
      document.getElementById('results-section')?.style.setProperty('display', 'block');
    }
  } catch (error) {
    console.error('Error loading saved state:', error);
  }
}

// ==========================================
// DEFAULT STATE
// ==========================================
function initializeDefaults() {
  // Restore selected radios from saved state
  Object.keys(selectedPicks).forEach(eventId => {
    const value = selectedPicks[eventId];
    const radio = document.querySelector(`input[name="event-${eventId}"][value="${value}"]`);
    if (radio) radio.checked = true;
  });


  // If no saved state, initialize from HTML defaults
  if (Object.keys(selectedPicks).length === 0) {
    document.querySelectorAll('.pick-item input[type="radio"]:checked').forEach(radio => {
      const eventId = radio.name.split('-')[1];
      selectedPicks[eventId] = radio.value;
    });
  }

  document.querySelectorAll('.safer-event-card').forEach(card => {
    const eventNumber = card.querySelector('.event-number')?.textContent;
    if (eventNumber) {
      acceptedEvents.add(parseInt(eventNumber));
    }
  });

  updateAddButtonCount();
  updateOddsSummary();
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function initEventListeners() {
  // Tabs
  document.querySelectorAll('.safer-input-tab').forEach(tab => {
    tab.addEventListener('click', handleTabSwitch);
  });

  // Paste buttons
  document.querySelectorAll('.safer-paste-btn').forEach(btn => {
    btn.addEventListener('click', handlePaste);
  });

  // File upload
  const fileInput = document.getElementById('safer-file-input');
  if (fileInput) {
    fileInput.addEventListener('change', handleFileUpload);
  }

  // Analyze form
  const form = document.getElementById('safer-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }

  // Picks
  document.querySelectorAll('.pick-item input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', handlePickChange);
  });


  // Bulk actions
  document.getElementById('select-highest')?.addEventListener('click', selectHighestOdds);
  document.getElementById('select-lowest')?.addEventListener('click', selectLowestOdds);

  // Add to editor
  document.getElementById('add-to-editor')?.addEventListener('click', addToEditor);
}

// ==========================================
// TAB SWITCHING
// ==========================================
function handleTabSwitch(e) {
  const inputType = this.dataset.input;

  document.querySelectorAll('.safer-input-tab').forEach(t => t.classList.remove('active'));
  this.classList.add('active');

  document.querySelectorAll('.safer-input-content').forEach(c => c.style.display = 'none');

  const target = document.getElementById(`${inputType}-input`);
  if (target) target.style.display = 'block';
}

// ==========================================
// CLIPBOARD PASTE
// ==========================================
async function handlePaste() {
  try {
    const text = await navigator.clipboard.readText();
    const input = this.previousElementSibling;
    if (input) input.value = text.trim();
  } catch {
    alert('Paste manually (Ctrl + V)');
  }
}

// ==========================================
// FILE UPLOAD
// ==========================================
function handleFileUpload(e) {
  const fileName = e.target.files[0]?.name;
  if (!fileName) return;

  const title = document.querySelector('.safer-upload-title');
  if (title) title.textContent = `Selected: ${fileName}`;
}

// ==========================================
// ANALYZE FORM
// ==========================================
function handleFormSubmit(e) {
  e.preventDefault();

  const activeTab = document.querySelector('.safer-input-tab.active');
  if (!activeTab) return;

  const inputType = activeTab.dataset.input;
  let valid = false;

  if (inputType === 'betting-code') {
    valid =
      document.getElementById('bet-code-field')?.value &&
      document.getElementById('origin-bookie')?.value;
  } else if (inputType === 'upload-file') {
    valid = document.getElementById('safer-file-input')?.files.length;
  } else {
    valid = activeTab.nextElementSibling?.querySelector('input')?.value;
  }

  if (!valid) {
    alert('Please complete the input');
    return;
  }

  showLoadingState();

  setTimeout(() => {
    analysisLoaded = true;
    saveState(); // Save state after analysis
    showResults();
    showToast('✓ Bet analyzed successfully');
  }, 800);
}

// ==========================================
// LOADING STATE
// ==========================================
function showLoadingState() {
  const empty = document.getElementById('empty-state');
  if (empty) {
    empty.innerHTML =
      '<p class="safer-empty-text"><i class="bi bi-hourglass-split"></i> Analyzing your bet...</p>';
  }
}

// ==========================================
// SHOW RESULTS
// ==========================================
function showResults() {
  document.getElementById('empty-state')?.style.setProperty('display', 'none');
  const results = document.getElementById('results-section');
  if (results) {
    results.style.display = 'block';
    results.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Show and update odds summary
  updateOddsSummary();
}

// ==========================================
// PICK CHANGE
// ==========================================
function handlePickChange(e) {
  const radio = e.target;
  const eventId = radio.name.split('-')[1];
  selectedPicks[eventId] = radio.value;
  updateAddButtonCount();
  updateOddsSummary();
  saveState(); // Save state after pick change
}


// ==========================================
// UPDATE ODDS SUMMARY
// ==========================================
function updateOddsSummary() {
  const summaryBox = document.getElementById('odds-summary');
  if (!summaryBox) return;

  // Only show if analysis is loaded
  if (!analysisLoaded) {
    summaryBox.style.display = 'none';
    return;
  }

  let originTotal = 1;
  let selectedTotal = 1;
  let eventCount = 0;

  acceptedEvents.forEach(eventId => {
    // Get origin odds (original pick)
    const originRadio = document.querySelector(
      `input[name="event-${eventId}"][value="original"]`
    );
    
    // Get selected odds (current selection)
    const selectedValue = selectedPicks[eventId];
    const selectedRadio = document.querySelector(
      `input[name="event-${eventId}"][value="${selectedValue}"]`
    );
    
    if (originRadio && selectedRadio) {
      originTotal *= parseFloat(originRadio.dataset.odds);
      selectedTotal *= parseFloat(selectedRadio.dataset.odds);
      eventCount++;
    }
  });

  // Only show if we have events
  if (eventCount === 0) {
    summaryBox.style.display = 'none';
    return;
  }

  // Update display values
  document.getElementById('origin-total-odds').textContent = `@${originTotal.toFixed(2)}`;
  document.getElementById('selected-total-odds').textContent = `@${selectedTotal.toFixed(2)}`;
  
  // Calculate and display difference

  

  // Show the summary box
  summaryBox.style.display = 'block';
}

// ==========================================
// BULK: HIGHEST ODDS
// ==========================================
function selectHighestOdds() {
  document.querySelectorAll('.safer-event-card').forEach(card => {
    let best = null;
    card.querySelectorAll('input[type="radio"]').forEach(r => {
      if (!best || parseFloat(r.dataset.odds) > parseFloat(best.dataset.odds)) {
        best = r;
      }
    });
    best?.click();
  });
  showToast('✓ Highest odds selected');
  saveState(); // Save after bulk action
}

// ==========================================
// BULK: LOWEST ODDS
// ==========================================
function selectLowestOdds() {
  document.querySelectorAll('.safer-event-card').forEach(card => {
    let best = null;
    card.querySelectorAll('input[type="radio"]').forEach(r => {
      if (!best || parseFloat(r.dataset.odds) < parseFloat(best.dataset.odds)) {
        best = r;
      }
    });
    best?.click();
  });
  showToast('✓ Lowest odds selected');
  saveState(); // Save after bulk action
}

// ==========================================
// UPDATE BUTTON COUNT
// ==========================================
function updateAddButtonCount() {
  const btn = document.getElementById('add-to-editor');
  if (btn) {
    btn.innerHTML = `<i class="bi bi-pencil-square"></i> Add to Bet Editor (${acceptedEvents.size})`;
  }
}

// ==========================================
// ADD TO EDITOR
// ==========================================
function addToEditor() {
  if (!analysisLoaded) {
    alert('Analyze bet first');
    return;
  }

  const selections = [];

  acceptedEvents.forEach(eventId => {
    const value = selectedPicks[eventId];
    const radio = document.querySelector(`input[name="event-${eventId}"][value="${value}"]`);
    if (!radio) return;

    selections.push({
      eventId,
      match: radio.closest('.safer-event-card').querySelector('.event-match').textContent,
      pick: radio.nextElementSibling.textContent,
      odds: radio.dataset.odds
    });
  });

  console.log('Editor selections:', selections);
  showToast(`✓ Added ${selections.length} selections`);
}

// ==========================================
// CLEAR STATE (Optional - for testing)
// ==========================================
function clearSavedState() {
  localStorage.removeItem('betSaferState');
  location.reload();
}

// ==========================================
// TOAST
// ==========================================
function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    color: #fff;
    padding: 12px 18px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    z-index: 10000;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}