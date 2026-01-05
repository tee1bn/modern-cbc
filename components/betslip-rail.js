(function () {
  "use strict";

  // ==================== STATE ====================
  let bets = [];
  let isRailOpen = false;
  let isMinimized = false;
  let listeners = {
    "betslip:updated": [],
    "betslip:booked": [],
    "betslip:cleared": [],
  };

  // ==================== STORAGE ====================
  const STORAGE_KEY = "editorBets";

  function loadFromStorage() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      bets = data ? JSON.parse(data) : [];
      bets.forEach((b) => {
        b.odd = b.odd || b.odds || "";
      });
      return bets;
    } catch (e) {
      console.error("Failed to load betslip:", e);
      return [];
    }
  }

  function saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bets));
      emit("betslip:updated", { bets: [...bets] });
    } catch (e) {
      console.error("Failed to save betslip:", e);
    }
  }

  // ==================== EVENT EMITTER ====================
  function on(event, callback) {
    if (listeners[event]) {
      listeners[event].push(callback);
    }
  }

  function emit(event, data) {
    if (listeners[event]) {
      listeners[event].forEach((cb) => cb(data));
    }
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  }

  // ==================== SELECTION MANAGEMENT ====================
  function addSelection(selection) {
    const existingIndex = bets.findIndex(
      (b) => b.matchId === selection.matchId
    );

    if (existingIndex >= 0) {
      bets[existingIndex] = { ...bets[existingIndex], ...selection };
    } else {
      bets.push({
        matchId: selection.matchId || Date.now(),
        teams: selection.teams || "",
        date: selection.date || "",
        market: selection.market || "1x2",
        value: selection.value || "home",
        odd: selection.odd || selection.odds || "1.00",
        odds: selection.odd || selection.odds || "1.00",
        league: selection.league || "",
        selected: true,
      });
    }

    saveToStorage();
    renderRail();
    updateBadge();
    flashBadge();
  }

  function removeSelection(matchId) {
    const index = bets.findIndex((b) => b.matchId === matchId);
    if (index >= 0) {
      bets.splice(index, 1);
      saveToStorage();
      renderRail();
      updateBadge();

      if (bets.length === 0) {
        closeRail();
      }
    }
  }

  function updateSelection(matchId, updates) {
    const index = bets.findIndex((b) => b.matchId === matchId);
    if (index >= 0) {
      bets[index] = { ...bets[index], ...updates };
      saveToStorage();
      renderRail();
    }
  }

  function clearAll() {
    bets = [];
    saveToStorage();
    renderRail();
    updateBadge();
    closeRail();
    emit("betslip:cleared", {});
  }

  function toggleSelection(matchId) {
    const bet = bets.find((b) => b.matchId === matchId);
    if (bet) {
      bet.selected = !bet.selected;
      saveToStorage();
      renderRail();
    }
  }

  function selectAll() {
    bets.forEach((b) => (b.selected = true));
    saveToStorage();
    renderRail();
  }

  function deleteSelected() {
    bets = bets.filter((b) => !b.selected);
    saveToStorage();
    renderRail();
    updateBadge();

    if (bets.length === 0) {
      closeRail();
    }
  }

  // ==================== UI CONTROLS ====================
  function openRail() {
    isRailOpen = true;
    const overlay = document.getElementById("rail-overlay");
    const rail = document.getElementById("rail-container");

    if (overlay && rail) {
      overlay.classList.add("active");
      rail.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function expandFullScreen() {
    const rail = document.getElementById("rail-container");
    if (rail) {
      rail.classList.add("fullscreen");
    }
  }

  function exitFullScreen() {
    const rail = document.getElementById("rail-container");
    if (rail) {
      rail.classList.remove("fullscreen");
    }
  }

  function closeRail() {
    isRailOpen = false;
    const overlay = document.getElementById("rail-overlay");
    const rail = document.getElementById("rail-container");

    if (overlay && rail) {
      overlay.classList.remove("active");
      rail.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  function toggleMinimize() {
    isMinimized = !isMinimized;
    const rail = document.getElementById("rail-container");
    if (rail) {
      rail.classList.toggle("minimized", isMinimized);
    }
  }

  function showBadge() {
    const badge = document.getElementById("rail-badge");
    if (badge) badge.style.display = "flex";
  }

  function hideBadge() {
    const badge = document.getElementById("rail-badge");
    if (badge) badge.style.display = "none";
  }

  function flashBadge() {
    const badge = document.getElementById("rail-badge");
    if (!badge) return;

    badge.classList.add("flash");
    setTimeout(() => badge.classList.remove("flash"), 600);
  }

  function updateBadge() {
    const badge = document.getElementById("rail-badge");
    const count = document.getElementById("rail-badge-count");

    if (badge && count) {
      count.textContent = bets.length;

      if (bets.length > 0) {
        badge.classList.remove("empty");
        badge.style.display = "flex";
      } else {
        badge.classList.add("empty");
        // badge.style.opacity = '0.5';
      }
    }
  }

  // ==================== BOOKING ====================
  function bookSelections(bookie) {
    if (bets.length === 0) {
      alert("No bets to book");
      return;
    }

    const code = generateBookingCode();
    showBookingResult(code, bookie);

    emit("betslip:booked", {
      code: code,
      bookie: bookie || "sportybet:ng",
      bets: [...bets],
      totalOdds: calculateTotalOdds(),
    });
  }

  function showBookingResult(code, bookie) {
    expandFullScreen();

    const rail = document.getElementById("rail-container");
    if (!rail) return;

    const totalOdds = calculateTotalOdds();

    rail.innerHTML = `
      <div class="rail-header">
        <div class="rail-header-left">
          <h2 class="rail-title">Booking Successful</h2>
        </div>
        <div class="rail-header-actions">
          <button class="rail-close-btn" id="rail-close-btn">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>

      <div class="booking-result-container">
        <div class="booking-success-icon">
          <i class="bi bi-check-circle"></i>
        </div>

        <div class="booking-info-card">
          <div class="booking-bookie">${bookie || "sportybet:ng"}</div>
          <div class="booking-code-display">
            <div class="booking-code-label">Booking Code</div>
            <div class="booking-code-value" id="booking-code-value">${code}</div>
          </div>
          <div class="booking-meta">${
            bets.length
          } events @${totalOdds} odds</div>
        </div>

        <div class="booking-actions">
          <button class="booking-action-btn primary" id="copy-code-btn">
            <i class="bi bi-clipboard"></i> Copy Code
          </button>
          <button class="booking-action-btn" id="share-code-btn">
            <i class="bi bi-share"></i> Share
          </button>
        </div>

        <div class="share-options" id="share-options" style="display: none;">
          <div class="share-link-box">
            <input 
              type="text" 
              class="share-link-input" 
              id="share-link-input"
              value="https://convertbetcodes.com/bet/${code}" 
              readonly
            />
            <button class="share-copy-btn" id="copy-link-btn">
              <i class="bi bi-clipboard"></i>
            </button>
          </div>
          <div class="share-social">
            <button class="share-social-btn whatsapp" id="share-whatsapp">
              <i class="bi bi-whatsapp"></i> WhatsApp
            </button>
            <button class="share-social-btn twitter" id="share-twitter">
              <i class="bi bi-twitter"></i> Twitter
            </button>
            <button class="share-social-btn telegram" id="share-telegram">
              <i class="bi bi-telegram"></i> Telegram
            </button>
          </div>
        </div>

        <div class="booking-footer-actions">
          <button class="booking-footer-btn" id="view-bets-btn">
            <i class="bi bi-list-ul"></i> View Bets
          </button>
          <button class="booking-footer-btn" id="book-another-btn">
            <i class="bi bi-plus-circle"></i> Book Another
          </button>
          <button class="booking-footer-btn primary" id="play-now-btn">
            <i class="bi bi-play-circle"></i> Play Now
          </button>
        </div>
      </div>
    `;

    attachBookingEventListeners(code, bookie);
  }

  function attachBookingEventListeners(code, bookie) {
    const closeBtn = document.getElementById("rail-close-btn");
    if (closeBtn) closeBtn.addEventListener("click", closeRail);

    const copyCodeBtn = document.getElementById("copy-code-btn");
    if (copyCodeBtn) {
      copyCodeBtn.addEventListener("click", () => {
        copyToClipboard(code);
        showCopyFeedback(copyCodeBtn, "Copied!");
      });
    }

    const shareBtn = document.getElementById("share-code-btn");
    const shareOptions = document.getElementById("share-options");
    if (shareBtn && shareOptions) {
      shareBtn.addEventListener("click", () => {
        shareOptions.style.display =
          shareOptions.style.display === "none" ? "block" : "none";
      });
    }

    const copyLinkBtn = document.getElementById("copy-link-btn");
    const shareLinkInput = document.getElementById("share-link-input");
    if (copyLinkBtn && shareLinkInput) {
      copyLinkBtn.addEventListener("click", () => {
        copyToClipboard(shareLinkInput.value);
        showCopyFeedback(copyLinkBtn, "✓");
      });
    }

    const whatsappBtn = document.getElementById("share-whatsapp");
    if (whatsappBtn) {
      whatsappBtn.addEventListener("click", () => {
        const text = `Check out my bet! Code: ${code} (${
          bets.length
        } events @${calculateTotalOdds()} odds)`;
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
      });
    }

    const twitterBtn = document.getElementById("share-twitter");
    if (twitterBtn) {
      twitterBtn.addEventListener("click", () => {
        const text = `My bet code: ${code} (${
          bets.length
        } events @${calculateTotalOdds()} odds)`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}`;
        window.open(url, "_blank");
      });
    }

    const telegramBtn = document.getElementById("share-telegram");
    if (telegramBtn) {
      telegramBtn.addEventListener("click", () => {
        const text = `Check out my bet! Code: ${code} (${
          bets.length
        } events @${calculateTotalOdds()} odds)`;
        const url = `https://t.me/share/url?url=${encodeURIComponent(
          "https://convertbetcodes.com"
        )}&text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
      });
    }

    const viewBetsBtn = document.getElementById("view-bets-btn");
    if (viewBetsBtn) {
      viewBetsBtn.addEventListener("click", () => {
        exitFullScreen();
        renderRail();
      });
    }

    const bookAnotherBtn = document.getElementById("book-another-btn");
    if (bookAnotherBtn) {
      bookAnotherBtn.addEventListener("click", () => {
        exitFullScreen();
        renderRail();
      });
    }

    const playNowBtn = document.getElementById("play-now-btn");
    if (playNowBtn) {
      playNowBtn.addEventListener("click", () => {
        const bookieUrls = {
          "sportybet:ng": "https://www.sportybet.com/ng/",
          "bet9ja:ng": "https://www.bet9ja.com/",
          "1xbet:ng": "https://www.1xbet.ng/",
          "betking:ng": "https://www.betking.ng/",
          "22bet:ng": "https://www.22bet.ng/",
        };
        const url = bookieUrls[bookie] || "https://www.sportybet.com/ng/";
        window.open(url, "_blank");
      });
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const input = document.createElement("input");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
  }

  function showCopyFeedback(button, message) {
    const originalHTML = button.innerHTML;
    button.innerHTML = message;
    button.style.background = "var(--rail-text)";
    button.style.color = "white";

    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.style.background = "";
      button.style.color = "";
    }, 1500);
  }

  function generateBookingCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  function calculateTotalOdds() {
    if (bets.length === 0) return "0.00";
    return bets
      .reduce((total, bet) => {
        const odd = parseFloat(bet.odd || bet.odds || 1);
        return total * odd;
      }, 1)
      .toFixed(2);
  }

  // ==================== LOAD CODE - REMOVED showLoadCodeModal ====================
  // This function is removed to prevent conflicts
  // The empty state now directly shows the load form

  async function loadBetCodeFromEmpty(code, bookie) {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const mockBets = [
      {
        matchId: "load-" + Date.now() + "-1",
        teams: "Nottingham Forest vs Man City",
        date: "Sat 12/27/25, 13:30",
        market: "1x2",
        value: "Away",
        odd: "1.62",
        league: "Premier League",
        selected: true,
      },
      {
        matchId: "load-" + Date.now() + "-2",
        teams: "AC Milan vs Verona",
        date: "Sun 12/28/25, 12:30",
        market: "1x2",
        value: "Home",
        odd: "1.39",
        league: "Serie A",
        selected: true,
      },
      {
        matchId: "load-" + Date.now() + "-3",
        teams: "Liverpool vs Wolves",
        date: "Sat 12/27/25, 16:00",
        market: "1x2",
        value: "Home",
        odd: "1.26",
        league: "Premier League",
        selected: true,
      },
    ];

    mockBets.forEach((bet) => {
      bets.push(bet);
    });

    saveToStorage();
    renderRail();
    updateBadge();
    flashBadge();

    setTimeout(() => {
      alert(`Loaded ${mockBets.length} bets from ${code}`);
    }, 300);
  }

// ==================== RENDERING ====================
function renderRail() {
  const rail = document.getElementById('rail-container');
  if (!rail) return;

  const totalOdds = calculateTotalOdds();
  const selectedCount = bets.filter(b => b.selected).length;

  rail.innerHTML = `
    <div class="rail-header">
      <div class="rail-header-left">
        <h2 class="rail-title">
          Betslip 
          <span class="rail-count-badge" id="rail-count">${bets.length}</span>
        </h2>
      </div>
      <div class="rail-header-actions">
        ${bets.length > 0 ? '<button class="rail-action-btn" id="rail-expand-btn" title="Expand Full Screen"><i class="bi bi-arrows-fullscreen"></i></button>' : ''}
        <button class="rail-minimize-btn" id="rail-minimize-btn" title="${isMinimized ? 'Expand' : 'Minimize'}">
          <i class="bi bi-${isMinimized ? 'chevron-up' : 'chevron-down'}"></i>
        </button>
        <button class="rail-close-btn" id="rail-close-btn">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    </div>

    <!-- Always show navigation tabs -->
    <div class="empty-nav-tabs">
      <button class="empty-nav-tab active" id="empty-code-hub-btn">
        <i class="bi bi-code-square"></i>
        <span>Code Hub</span>
      </button>
      <button class="empty-nav-tab" id="empty-multi-maker-btn">
        <i class="bi bi-plus-square"></i>
        <span>Multi Maker</span>
      </button>
    </div>

    ${bets.length === 0 ? `
      <!-- Empty state: Show load form -->
      <div class="empty-load-form">
        <div class="empty-load-form-header">
          <h4>Please insert booking code</h4>
          <i class="bi bi-info-circle" title="Enter your bet code to load selections"></i>
        </div>

        <form id="empty-load-code-form">
          <div class="empty-form-group">
            <label>Bet Code</label>
            <div class="empty-input-wrapper">
              <input 
                type="text" 
                id="empty-bet-code-input"
                placeholder="Enter bet code (e.g., M8BULE)"
                required
              />
              <button type="button" id="empty-paste-btn" class="empty-paste-btn">
                <i class="bi bi-clipboard"></i>
              </button>
            </div>
          </div>

          <div class="empty-form-group">
            <label>Select Origin Bookie</label>
            <select id="empty-origin-bookie" required>
              <option value="">Choose a bookie</option>
              <option value="sportybet-nigeria">Sportybet - Nigeria</option>
              <option value="sportybet-ghana">Sportybet - Ghana</option>
              <option value="sportybet-kenya">Sportybet - Kenya</option>
              <option value="bet9ja-nigeria">Bet9ja - Nigeria</option>
              <option value="betking-nigeria">BetKing - Nigeria</option>
              <option value="1xbet-nigeria">1xBet - Nigeria</option>
              <option value="22bet-nigeria">22bet - Nigeria</option>
            </select>
          </div>

          <div class="empty-form-buttons">
            <button type="button" id="empty-cancel-btn" class="empty-cancel-btn">
              Cancel
            </button>
            <button type="submit" class="empty-submit-btn">
              <i class="bi bi-download"></i> Load Code
            </button>
          </div>
        </form>

        <!-- Loading State -->
        <div id="empty-loading-state" class="empty-loading-state" style="display: none;">
          <div class="empty-spinner"></div>
          <p>Loading bet code...</p>
        </div>

        <!-- Error State -->
        <div id="empty-error-state" class="empty-error-state" style="display: none;">
          <i class="bi bi-exclamation-circle"></i>
          <p>Failed to load bet code. Please try again.</p>
          <button id="empty-retry-btn" class="empty-retry-btn">Retry</button>
        </div>
      </div>
    ` : `
      <!-- Bets loaded: Show bulk actions and bets list -->
      <div class="rail-bulk-actions">
        <label class="rail-checkbox-all">
          <input type="checkbox" id="select-all-checkbox" ${bets.every(b => b.selected) ? 'checked' : ''} />
          <span>Select All</span>
        </label>
        <button class="rail-bulk-btn" id="clear-all-btn">
          <i class="bi bi-trash"></i> Clear All
        </button>
      </div>

      <div class="rail-bets-list">
        ${bets.map((bet, index) => `
          <div class="rail-bet-item ${bet.selected ? 'selected' : ''}" data-match-id="${bet.matchId}">
            <div class="rail-bet-checkbox">
              <input type="checkbox" class="bet-checkbox" data-match-id="${bet.matchId}" ${bet.selected ? 'checked' : ''} />
            </div>
            <div class="rail-bet-content" data-match-id="${bet.matchId}" style="cursor: pointer;">
              <div class="rail-bet-teams">${bet.teams || 'Unknown Match'}</div>
              <div class="rail-bet-market">${bet.market || '1x2'}: ${bet.value || 'home'}</div>
              <div class="rail-bet-meta">
                <span class="rail-bet-date">${bet.date || ''}</span>
                ${bet.league ? `<span class="rail-bet-league">${bet.league}</span>` : ''}
              </div>
            </div>
            <div class="rail-bet-actions">
              <div class="rail-bet-odd">${bet.odd || bet.odds || '—'}</div>
              <button class="rail-bet-edit-btn" data-match-id="${bet.matchId}" title="Edit">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="rail-bet-remove-btn" data-match-id="${bet.matchId}" title="Remove">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="rail-footer">
        <div class="rail-total">
          <span class="rail-total-label">Total Odds:</span>
          <span class="rail-total-value">${totalOdds}</span>
        </div>
        <div class="rail-bookie-select">
          <select class="rail-bookie-dropdown" id="rail-bookie-select">
            <option value="sportybet:ng">Sportybet NG</option>
            <option value="bet9ja:ng">Bet9ja NG</option>
            <option value="1xbet:ng">1xBet NG</option>
            <option value="betking:ng">BetKing NG</option>
            <option value="22bet:ng">22bet NG</option>
          </select>
        </div>
        <button class="rail-book-btn" id="rail-book-btn">
          Book All (${bets.length})
        </button>
      </div>
    `}
  `;

  attachEventListeners();
}

// ==================== EVENT LISTENERS ====================
function attachEventListeners() {
  const closeBtn = document.getElementById('rail-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeRail);

  const minimizeBtn = document.getElementById('rail-minimize-btn');
  if (minimizeBtn) minimizeBtn.addEventListener('click', toggleMinimize);

  const expandBtn = document.getElementById('rail-expand-btn');
  if (expandBtn) expandBtn.addEventListener('click', expandFullScreen);

  // Code Hub tab
  const codeHubBtn = document.getElementById('empty-code-hub-btn');
  if (codeHubBtn) {
    codeHubBtn.addEventListener('click', () => {
      document.querySelectorAll('.empty-nav-tab').forEach(tab => tab.classList.remove('active'));
      codeHubBtn.classList.add('active');
      window.location.href = 'codehub.html';
    });
  }

  // Multi Maker tab - Navigate to add games page
  const multiMakerBtn = document.getElementById('empty-multi-maker-btn');
  if (multiMakerBtn) {
    multiMakerBtn.addEventListener('click', () => {
      window.location.href = 'bet-editor-add.html';
    });
  }

  // Empty state form handlers
  const emptyPasteBtn = document.getElementById('empty-paste-btn');
  const emptyCodeInput = document.getElementById('empty-bet-code-input');
  if (emptyPasteBtn && emptyCodeInput) {
    emptyPasteBtn.addEventListener('click', async () => {
      try {
        const text = await navigator.clipboard.readText();
        emptyCodeInput.value = text.trim();
      } catch (err) {
        console.log('Paste failed:', err);
      }
    });
  }

  const emptyCancelBtn = document.getElementById('empty-cancel-btn');
  if (emptyCancelBtn) {
    emptyCancelBtn.addEventListener('click', () => {
      closeRail();
    });
  }

  const emptyLoadForm = document.getElementById('empty-load-code-form');
  if (emptyLoadForm) {
    emptyLoadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const code = document.getElementById('empty-bet-code-input').value.trim();
      const bookie = document.getElementById('empty-origin-bookie').value;
      
      if (!code || !bookie) {
        alert('Please fill in all fields');
        return;
      }

      emptyLoadForm.style.display = 'none';
      document.getElementById('empty-loading-state').style.display = 'flex';

      try {
        await loadBetCodeFromEmpty(code, bookie);
      } catch (error) {
        document.getElementById('empty-loading-state').style.display = 'none';
        document.getElementById('empty-error-state').style.display = 'flex';
      }
    });
  }

  const emptyRetryBtn = document.getElementById('empty-retry-btn');
  if (emptyRetryBtn) {
    emptyRetryBtn.addEventListener('click', () => {
      document.getElementById('empty-error-state').style.display = 'none';
      document.getElementById('empty-load-code-form').style.display = 'block';
    });
  }

  const selectAllCheckbox = document.getElementById('select-all-checkbox');
  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener('change', (e) => {
      if (e.target.checked) selectAll();
      else bets.forEach(b => b.selected = false);
      saveToStorage();
      renderRail();
    });
  }

  const clearAllBtn = document.getElementById('clear-all-btn');
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      if (confirm('Clear all bets?')) clearAll();
    });
  }

  // Checkbox selection
  document.querySelectorAll('.bet-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      toggleSelection(e.target.dataset.matchId);
    });
  });

  // Click on bet content to navigate to single event page
  document.querySelectorAll('.rail-bet-content').forEach(content => {
    content.addEventListener('click', (e) => {
      const matchId = e.currentTarget.dataset.matchId;
      const bet = bets.find(b => b.matchId == matchId);
      if (bet) {
        // Navigate to single event page
        window.location.href = 'upcoming-single-event.html';
      }
    });
  });

  // Edit button - also navigate to single event page
  document.querySelectorAll('.rail-bet-edit-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const matchId = e.currentTarget.dataset.matchId;
      const bet = bets.find(b => b.matchId == matchId);
      if (bet) {
        // Navigate to single event page
        window.location.href = 'upcoming-single-event.html';
      }
    });
  });

  // Remove button
  document.querySelectorAll('.rail-bet-remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const matchId = e.currentTarget.dataset.matchId;
      removeSelection(matchId);
    });
  });

  const bookBtn = document.getElementById('rail-book-btn');
  const bookieSelect = document.getElementById('rail-bookie-select');
  if (bookBtn && bookieSelect) {
    bookBtn.addEventListener('click', () => {
      bookSelections(bookieSelect.value);
    });
  }
}


  function initRailHTML() {
    const container = document.getElementById("betslip-rail");
    if (!container) return;

    container.innerHTML = `
      <div class="rail-badge ${
        bets.length === 0 ? "empty" : ""
      }" id="rail-badge">
        <span class="rail-badge-count" id="rail-badge-count">${
          bets.length
        }</span>
        <span>Betslip</span>
      </div>

      <div class="rail-overlay" id="rail-overlay"></div>

      <div class="rail-container" id="rail-container">
      </div>
    `;

    const badge = document.getElementById("rail-badge");
    if (badge) {
      badge.addEventListener("click", openRail);
    }

    const overlay = document.getElementById("rail-overlay");
    if (overlay) {
      overlay.addEventListener("click", closeRail);
    }

    renderRail();
    updateBadge();
  }

  // ==================== PUBLIC API ====================
  window.betslipRail = {
    addSelection,
    removeSelection,
    updateSelection,
    clearAll,
    selectAll,
    deleteSelected,
    openRail,
    closeRail,
    toggleMinimize,
    expandFullScreen,
    exitFullScreen,
    showBadge,
    hideBadge,
    flashBadge,
    bookSelections,
    calculateTotalOdds,
    getBets: () => [...bets],
    getSelectedBets: () => bets.filter((b) => b.selected),
    on,
    _state: () => ({ bets, isRailOpen, isMinimized }),
    _render: renderRail,
    _bookAction: () => {
      const bookieSelect = document.getElementById("rail-bookie-select");
      bookSelections(bookieSelect ? bookieSelect.value : "sportybet:ng");
    },
    update: () => {
      loadFromStorage();
      renderRail();
      updateBadge();
    },
  };

  // ==================== INITIALIZATION ====================
  document.addEventListener("DOMContentLoaded", () => {
    loadFromStorage();
    initRailHTML();
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      loadFromStorage();
      renderRail();
      updateBadge();
    }
  });
})();
