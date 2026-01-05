// Mock API Response Structure
const mockAnalysisData = {
  originalCode: 'ABC123',
  sourceBookie: 'Sportybet Nigeria',
  totalSelections: 4,
  originalOdds: 15.63,
  saferOdds: 3.85,
  selections: [
    {
      id: 1,
      teams: 'Liverpool vs Man City',
      league: 'Premier League',
      market: '1X2',
      selection: 'Home',
      odds: 2.50,
      riskLevel: 'high',
      winProbability: 33,
      alternatives: [
        {
          market: 'Double Chance',
          selection: '1X',
          odds: 1.55,
          winProbability: 66,
          explanation: 'Liverpool wins OR draw = You win. Only Man City win = You lose.',
          benefits: ['Covers 2 outcomes instead of 1', 'Doubles your winning chances']
        },
        {
          market: 'Asian Handicap',
          selection: 'Liverpool 0.0',
          odds: 1.85,
          winProbability: 52,
          explanation: 'If Liverpool wins, you win. If draw, stake refunded. Only lose if Man City wins.',
          benefits: ['Refund protection on draw', 'Better odds than Double Chance']
        },
        {
          market: 'Over/Under',
          selection: 'Over 1.5 Goals',
          odds: 1.30,
          winProbability: 75,
          explanation: 'Just need 2+ goals in the match regardless of winner.',
          benefits: ['Very high probability', 'Match quality independent']
        }
      ],
      bestOdds: [
        { bookie: '1xBet', odds: 2.58, isBest: true },
        { bookie: 'Sportybet', odds: 2.50, isBest: false },
        { bookie: 'Bet9ja', odds: 2.45, isBest: false },
        { bookie: 'BetKing', odds: 2.48, isBest: false }
      ]
    },
    {
      id: 2,
      teams: 'Chelsea vs Arsenal',
      league: 'Premier League',
      market: 'Over/Under',
      selection: 'Over 2.5',
      odds: 1.85,
      riskLevel: 'medium',
      winProbability: 55,
      alternatives: [
        {
          market: 'Over/Under',
          selection: 'Over 1.5 Goals',
          odds: 1.30,
          winProbability: 75,
          explanation: 'Lower threshold = Easier to win. Just 2 goals needed instead of 3.',
          benefits: ['20% higher win probability', 'More forgiving threshold']
        },
        {
          market: 'Both Teams To Score',
          selection: 'Yes',
          odds: 1.65,
          winProbability: 62,
          explanation: 'Both teams score at least once. Safer than total goals bet.',
          benefits: ['Better odds than Over 1.5', 'High-scoring teams']
        }
      ],
      bestOdds: [
        { bookie: 'BetKing', odds: 1.90, isBest: true },
        { bookie: 'Sportybet', odds: 1.85, isBest: false },
        { bookie: '1xBet', odds: 1.83, isBest: false }
      ]
    },
    {
      id: 3,
      teams: 'Barcelona vs Getafe',
      league: 'La Liga',
      market: 'Double Chance',
      selection: '1X',
      odds: 1.15,
      riskLevel: 'low',
      winProbability: 85,
      alternatives: [],
      bestOdds: [
        { bookie: '22bet', odds: 1.17, isBest: true },
        { bookie: 'Sportybet', odds: 1.15, isBest: false },
        { bookie: '1xBet', odds: 1.15, isBest: false }
      ]
    },
    {
      id: 4,
      teams: 'Real Madrid vs Atletico Madrid',
      league: 'La Liga',
      market: 'BTTS',
      selection: 'Yes',
      odds: 1.70,
      riskLevel: 'medium',
      winProbability: 58,
      alternatives: [
        {
          market: 'Over/Under',
          selection: 'Over 1.5 Goals',
          odds: 1.25,
          winProbability: 78,
          explanation: 'Easier condition than both teams scoring. Any team can score 2+ goals.',
          benefits: ['20% higher probability', 'One-sided match still wins']
        },
        {
          market: 'Total Corners',
          selection: 'Over 8.5',
          odds: 1.55,
          winProbability: 68,
          explanation: 'High-intensity derby typically produces many corners.',
          benefits: ['Alternative market', 'Good odds-probability ratio']
        }
      ],
      bestOdds: [
        { bookie: 'Bet9ja', odds: 1.75, isBest: true },
        { bookie: 'Sportybet', odds: 1.70, isBest: false },
        { bookie: 'BetKing', odds: 1.72, isBest: false }
      ]
    }
  ]
};

// State management
let currentAnalysis = null;
let acceptedSuggestions = new Set();

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeEventListeners();
});

// Initialize all event listeners
function initializeEventListeners() {
  // Input type tab switching
  document.querySelectorAll('.safer-input-tab').forEach(tab => {
    tab.addEventListener('click', handleTabSwitch);
  });

  // Paste buttons
  document.querySelectorAll('.safer-paste-btn').forEach(btn => {
    btn.addEventListener('click', handlePaste);
  });

  // File input
  const fileInput = document.getElementById('safer-file-input');
  if (fileInput) {
    fileInput.addEventListener('change', handleFileUpload);
  }

  // Manual input auto-detect
  const betCodeField = document.getElementById('bet-code-field');
  if (betCodeField) {
    betCodeField.addEventListener('input', handleInputChange);
  }

  // Form submission
  const form = document.getElementById('safer-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }

  // Footer action buttons
  const acceptAllBtn = document.getElementById('accept-all-btn');
  if (acceptAllBtn) {
    acceptAllBtn.addEventListener('click', handleAcceptAll);
  }

  const generateCodeBtn = document.getElementById('generate-code-btn');
  if (generateCodeBtn) {
    generateCodeBtn.addEventListener('click', handleGenerateCode);
  }

  const addEditorBtn = document.getElementById('add-editor-btn');
  if (addEditorBtn) {
    addEditorBtn.addEventListener('click', handleAddToEditor);
  }

  // Copy share link
  const copyLinkBtn = document.getElementById('copy-link-btn');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', handleCopyLink);
  }
}

// Handle tab switching
function handleTabSwitch() {
  const inputType = this.dataset.input;
  
  // Update active tab
  document.querySelectorAll('.safer-input-tab').forEach(t => t.classList.remove('active'));
  this.classList.add('active');
  
  // Hide all input content
  document.querySelectorAll('.safer-input-content').forEach(content => {
    content.style.display = 'none';
  });
  
  // Show selected input type
  const selectedInput = document.getElementById(`${inputType}-input`);
  if (selectedInput) {
    selectedInput.style.display = 'block';
  }
  
  // Hide auto-detect
  const autoDetect = document.getElementById('auto-detect');
  if (autoDetect) {
    autoDetect.style.display = 'none';
  }
}

// Handle paste from clipboard
async function handlePaste() {
  try {
    const text = await navigator.clipboard.readText();
    const input = this.previousElementSibling;
    if (input && text) {
      input.value = text.trim();
      input.focus();
      simulateAutoDetect(text.trim());
    }
  } catch (err) {
    console.log('Failed to read clipboard:', err);
    alert('Please paste manually (Ctrl+V or Cmd+V)');
  }
}

// Handle file upload
function handleFileUpload(e) {
  const fileName = e.target.files[0]?.name;
  if (fileName) {
    const uploadTitle = document.querySelector('.safer-upload-title');
    if (uploadTitle) {
      uploadTitle.textContent = `Selected: ${fileName}`;
    }
  }
}

// Handle input change for auto-detect
function handleInputChange(e) {
  const value = e.target.value.trim();
  if (value.length >= 6) {
    simulateAutoDetect(value);
  } else {
    const autoDetect = document.getElementById('auto-detect');
    if (autoDetect) {
      autoDetect.style.display = 'none';
    }
  }
}

// Simulate auto-detection
function simulateAutoDetect(code) {
  const bookiePatterns = {
    'Sportybet Nigeria': /^[A-Z0-9]{6}$/i,
    'Bet9ja Nigeria': /^[0-9]{8,10}$/,
    '1xBet': /^[A-Z0-9]{8,12}$/i,
    '22bet': /^[A-Z0-9]{7,10}$/i
  };
  
  let detectedBookie = null;
  
  for (const [bookie, pattern] of Object.entries(bookiePatterns)) {
    if (pattern.test(code)) {
      detectedBookie = bookie;
      break;
    }
  }
  
  const autoDetect = document.getElementById('auto-detect');
  const detectedBookieEl = document.getElementById('detected-bookie');
  const sourceBookieGroup = document.getElementById('source-bookie-group');
  
  if (detectedBookie && autoDetect && detectedBookieEl) {
    detectedBookieEl.textContent = detectedBookie;
    autoDetect.style.display = 'flex';
    if (sourceBookieGroup) {
      sourceBookieGroup.style.display = 'none';
    }
  } else {
    if (autoDetect) autoDetect.style.display = 'none';
    if (sourceBookieGroup) sourceBookieGroup.style.display = 'block';
  }
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  const activeTab = document.querySelector('.safer-input-tab.active');
  if (!activeTab) return;
  
  const inputType = activeTab.dataset.input;
  let inputValue = '';
  
  // Get value based on active tab
  if (inputType === 'betting-code') {
    inputValue = document.getElementById('bet-code-field')?.value.trim();
  } else if (inputType === 'ticket-code') {
    inputValue = document.querySelector('#ticket-code-input input')?.value.trim();
  } else if (inputType === 'bet-link') {
    inputValue = document.querySelector('#bet-link-input input')?.value.trim();
  } else if (inputType === 'upload-file') {
    const file = document.getElementById('safer-file-input')?.files[0];
    if (!file) {
      alert('Please select a file to upload');
      return;
    }
    inputValue = file.name;
  }
  
  if (!inputValue) {
    alert('Please enter a value');
    return;
  }
  
  // Show loading state
  showLoadingState();
  
  // Simulate API call
  setTimeout(() => {
    currentAnalysis = mockAnalysisData;
    renderResults(currentAnalysis);
    showResults();
  }, 1000);
}

// Show loading state
function showLoadingState() {
  const emptyState = document.getElementById('empty-state');
  if (emptyState) {
    emptyState.innerHTML = '<div class="safer-empty-text">Analyzing your bet...</div>';
  }
}

// Render results
function renderResults(data) {
  const resultsSection = document.getElementById('results-section');
  if (!resultsSection) return;
  
  resultsSection.innerHTML = data.selections.map(selection => 
    renderSelectionCard(selection, data.selections.length)
  ).join('');
  
  // Attach event listeners to new elements
  attachSelectionEventListeners();
}

// Render individual selection card
function renderSelectionCard(selection, totalSelections) {
  const riskLabels = {
    high: { icon: 'exclamation-circle', text: 'High Risk' },
    medium: { icon: 'dash-circle', text: 'Medium Risk' },
    low: { icon: 'check-circle', text: 'Already Safe' }
  };
  
  const risk = riskLabels[selection.riskLevel];
  
  return `
    <div class="safer-selection-card" data-selection-id="${selection.id}">
      <div class="safer-selection-header">
        <span class="selection-number">Selection ${selection.id} of ${totalSelections}</span>
        <span class="risk-badge risk-${selection.riskLevel}">
          <i class="bi bi-${risk.icon}"></i> ${risk.text}
        </span>
      </div>
      
      <div class="safer-selection-body">
        <!-- Original Pick -->
        <div class="original-pick">
          <div class="pick-info">
            <div>
              <div class="pick-teams">${selection.teams}</div>
              <div class="pick-market">${selection.market}: ${selection.selection}</div>
            </div>
            <div class="pick-odds">${selection.odds.toFixed(2)}</div>
          </div>
        </div>
        
        ${selection.alternatives.length > 0 ? 
          selection.alternatives.map((alt, index) => renderAlternative(selection, alt, index)).join('') :
          renderAlreadySafe()
        }
        
        ${renderBestOdds(selection.bestOdds)}
      </div>
    </div>
  `;
}

// Render alternative suggestion
function renderAlternative(original, alternative, index) {
  const benefits = alternative.benefits.map(b => 
    `<i class="bi bi-check2"></i> ${b}`
  ).join('<br>');
  
  return `
    <div class="safer-alternative" data-alt-index="${index}">
      <div class="safer-alt-header">
        <i class="bi bi-lightbulb"></i>
        <span>SAFER ALTERNATIVE ${alternative.alternatives?.length > 1 ? `#${index + 1}` : ''}</span>
      </div>
      
      <div class="safer-alt-content">
        <div class="safer-alt-market">${alternative.market}: ${alternative.selection}</div>
        <div class="safer-alt-explanation">
          ${alternative.explanation}
        </div>
        <div class="safer-alt-explanation">
          ${benefits}
        </div>
        
        <div class="safer-comparison">
          <div class="comparison-item">
            <div class="comparison-label">Original Odds</div>
            <div class="comparison-value">${original.odds.toFixed(2)}</div>
            <div class="comparison-subtext">${original.winProbability}% win chance</div>
          </div>
          <div class="comparison-item">
            <div class="comparison-label">Safer Odds</div>
            <div class="comparison-value">${alternative.odds.toFixed(2)}</div>
            <div class="comparison-subtext">${alternative.winProbability}% win chance</div>
          </div>
        </div>
      </div>
      
      <div class="safer-actions">
        <button class="btn-accept" data-selection-id="${original.id}" data-alt-index="${index}">
          <i class="bi bi-check-lg"></i> Accept Suggestion
        </button>
        <button class="btn-keep">Keep Original</button>
      </div>
    </div>
  `;
}

// Render already safe message
function renderAlreadySafe() {
  return `
    <div class="already-safe">
      <i class="bi bi-check-circle"></i>
      <span>This selection is already safe. No suggestions needed.</span>
    </div>
  `;
}

// Render best odds comparison
function renderBestOdds(bookies) {
  return `
    <div class="odds-comparison">
      <div class="odds-comparison-title">Best Odds at:</div>
      ${bookies.map(bookie => `
        <div class="bookie-row ${bookie.isBest ? 'best-odds' : ''}">
          <span class="bookie-name">
            ${bookie.bookie} ${bookie.isBest ? '<span class="best-badge">BEST</span>' : ''}
          </span>
          <span class="bookie-odds">${bookie.odds.toFixed(2)}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// Show results section
function showResults() {
  const emptyState = document.getElementById('empty-state');
  const resultsSection = document.getElementById('results-section');
  const footerActions = document.getElementById('footer-actions');
  const shareSection = document.getElementById('share-section');
  
  if (emptyState) emptyState.style.display = 'none';
  if (resultsSection) resultsSection.style.display = 'block';
  if (footerActions) footerActions.style.display = 'flex';
  if (shareSection) shareSection.style.display = 'block';
  
  // Scroll to results
  if (resultsSection) {
    resultsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Attach event listeners to selection cards
function attachSelectionEventListeners() {
  // Accept individual suggestion
  document.querySelectorAll('.btn-accept').forEach(btn => {
    btn.addEventListener('click', handleAcceptSuggestion);
  });
  
  // Keep original
  document.querySelectorAll('.btn-keep').forEach(btn => {
    btn.addEventListener('click', handleKeepOriginal);
  });
}

// Handle accept suggestion
function handleAcceptSuggestion() {
  const selectionId = this.dataset.selectionId;
  const altIndex = this.dataset.altIndex;
  
  acceptedSuggestions.add(`${selectionId}-${altIndex}`);
  
  const card = this.closest('.safer-alternative');
  if (card) {
    card.style.background = '#f5f5f5';
    card.style.borderColor = '#000';
  }
  
  this.innerHTML = '<i class="bi bi-check-lg"></i> Accepted';
  this.disabled = true;
  this.style.opacity = '0.6';
}

// Handle keep original
function handleKeepOriginal() {
  const card = this.closest('.safer-alternative');
  if (card) {
    card.style.opacity = '0.5';
  }
  
  this.innerHTML = '<i class="bi bi-x-lg"></i> Kept Original';
  this.disabled = true;
  this.style.opacity = '0.6';
}

// Handle accept all suggestions
function handleAcceptAll() {
  document.querySelectorAll('.btn-accept:not(:disabled)').forEach(btn => {
    btn.click();
  });
}

// Handle generate safer code
function handleGenerateCode() {
  if (!currentAnalysis) return;
  
  const acceptedAlternatives = [];
  
  currentAnalysis.selections.forEach(selection => {
    let accepted = false;
    selection.alternatives.forEach((alt, index) => {
      if (acceptedSuggestions.has(`${selection.id}-${index}`)) {
        acceptedAlternatives.push({
          teams: selection.teams,
          market: alt.market,
          selection: alt.selection,
          odds: alt.odds
        });
        accepted = true;
      }
    });
    
    if (!accepted && selection.alternatives.length === 0) {
      acceptedAlternatives.push({
        teams: selection.teams,
        market: selection.market,
        selection: selection.selection,
        odds: selection.odds
      });
    }
  });
  
  console.log('Generating code for:', acceptedAlternatives);
  alert(`Generating safer code with ${acceptedAlternatives.length} selections...`);
}

// Handle add to editor
function handleAddToEditor() {
  if (!currentAnalysis) return;
  
  const editorBets = currentAnalysis.selections.map(selection => {
    let alternative = null;
    selection.alternatives.forEach((alt, index) => {
      if (acceptedSuggestions.has(`${selection.id}-${index}`)) {
        alternative = alt;
      }
    });
    
    const bet = alternative || selection;
    return {
      market: `${bet.market}: ${bet.selection} @${bet.odds}`,
      league: `soccer, ${selection.league}`,
      teams: selection.teams,
      datetime: 'Sat Dec.28.25, 17:30',
      odds: bet.odds.toString(),
      selected: true
    };
  });
  
  if (window.betslipRail && window.betslipRail.addSelection) {
    editorBets.forEach((bet, i) => {
      const sel = {
        matchId: 'safer-' + Date.now() + '-' + i,
        teams: bet.teams,
        date: bet.datetime,
        market: bet.market.split(':')[0] || '1x2',
        value: bet.market.split(':')[1] ? bet.market.split(':')[1].split('@')[0].trim() : 'home',
        odd: bet.odds
      };
      window.betslipRail.addSelection(sel);
    });
  } else {
    localStorage.setItem('editorBets', JSON.stringify(editorBets));
  }
  
  alert(`Added ${editorBets.length} selections to bet editor!`);
}

// Handle copy share link
function handleCopyLink() {
  const shareLink = document.getElementById('share-link');
  if (!shareLink) return;
  
  shareLink.select();
  navigator.clipboard.writeText(shareLink.value).then(() => {
    const btn = document.getElementById('copy-link-btn');
    if (btn) {
      btn.innerHTML = '<i class="bi bi-check-lg"></i> Copied!';
      setTimeout(() => {
        btn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
      }, 2000);
    }
  });
}