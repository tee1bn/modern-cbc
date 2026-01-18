<aside class="sidebar-right">

  <input
    type="checkbox"
    id="rail-toggle"
    class="rail-toggle-input"
    style="display: none"
  />

  <label for="rail-toggle" class="rail-badge">
    <span class="rail-badge-count">6</span>
    <span>Betslip</span>
  </label>

  <label for="rail-toggle" class="rail-overlay"></label>

  <!-- Rail container -->
  <div class="rail-container active">

    <div id="betslip-view">
      <div class="page-header">
        <label for="rail-toggle" class="back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </label>

        <h1 class="page-title">
          Editor
          <span class="editor-badge">6</span>
        </h1>

        <div style="display: flex; align-items: center; gap: 8px">
          <button
            class="rail-load-btn"
            id="rail-load-btn"
            title="Load New Bet Code"
          >
            <i class="bi bi-plus-square"></i>
          </button>
          <!-- ADD THIS: Expand button (mobile only) -->
          <button
            class="rail-action-btn"
            id="rail-expand-btn"
            title="Fullscreen"
          >
            <i class="bi bi-arrows-fullscreen"></i>
          </button>
        </div>
      </div>

      <!-- Bulk actions -->
      <div class="rail-bulk-actions">
        <label class="rail-checkbox-all">
          <input type="checkbox" id="select-all-checkbox" />
          <span>Select All</span>
        </label>
        <button class="rail-bulk-btn" id="clear-all-btn">
          <i class="bi bi-trash"></i> Clear All
        </button>
      </div>

      <!-- Bets list (same as before) -->
      <div class="rail-bets-list">
        <!-- All your bet items here -->
        <div class="rail-bet-item selected">
          <div class="rail-bet-checkbox">
            <input type="checkbox" class="bet-checkbox" checked />
          </div>

          <div class="rail-bet-content">
            <div class="rail-bet-teams-row">
              <div class="rail-bet-sport-icon football">
                <i class="bi bi-dribbble"></i>
              </div>
              <div class="rail-bet-teams">Nottingham Forest vs Man City</div>
            </div>
            <div class="rail-bet-market">1x2: Away</div>
            <div class="rail-bet-meta">
              <span class="rail-bet-date">Sat 12/27/25, 13:30</span>
            </div>
          </div>

          <div class="rail-bet-actions">
            <div class="rail-bet-odd">1.62</div>
            <div class="rail-bet-action-icons">
              <a
                href="upcoming-single-event.html"
                class="rail-bet-edit-btn"
                title="Edit"
              >
                <i class="bi bi-pencil"></i>
              </a>
              <button
                class="rail-bet-remove-btn"
                title="Remove"
                disabled
                style="opacity: 0.3; cursor: not-allowed"
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Add more bet items... -->
      </div>

      <!-- Footer with bookmaker comparison -->
      <div class="rail-footer">
        <!-- Bookmaker comparison (if on bet-safer page) -->
        <div class="rail-bookmaker-section" id="rail-bookmaker-section">
          <div class="bookmaker-list" id="bookmaker-list">
            <div class="bookmaker-item">
              <div class="bookmaker-name">
                <span class="bookie-logo">1xBet</span>
                <span class="best-badge">BEST ODDS</span>
              </div>
              <div class="bookmaker-odds">
                <span class="odds-value">@2.65</span>
              </div>
            </div>

            <div class="bookmaker-item">
              <div class="bookmaker-name">
                <span class="bookie-logo">BetKing</span>
              </div>
              <div class="bookmaker-odds">
                <span class="odds-value">@2.52</span>
              </div>
            </div>

            <div class="bookmaker-item">
              <div class="bookmaker-name">
                <span class="bookie-logo">SportyBet</span>
                <span class="current-badge">CURRENT</span>
              </div>
              <div class="bookmaker-odds">
                <span class="odds-value">@2.38</span>
              </div>
            </div>

            <!-- Hidden bookmakers -->
            <div class="bookmaker-item hidden" data-expandable>
              <div class="bookmaker-name">
                <span class="bookie-logo">Bet9ja</span>
              </div>
              <div class="bookmaker-odds">
                <span class="odds-value">@2.31</span>
              </div>
            </div>

            <div class="bookmaker-item hidden" data-expandable>
              <div class="bookmaker-name">
                <span class="bookie-logo">22bet</span>
              </div>
              <div class="bookmaker-odds">
                <span class="odds-value">@2.28</span>
              </div>
            </div>
          </div>

          <button class="show-more-bookies" id="show-more-bookies-rail">
            <i class="bi bi-chevron-down"></i>
            <span>Compare More Bookmakers</span>
          </button>
        </div>

        <div class="rail-total">
          <span class="rail-total-label">Total Odds:</span>
          <span class="rail-total-value">8.05</span>
        </div>

        <div class="rail-bookie-select">
          <select class="rail-bookie-dropdown">
            <option value="sportybet:ng">Sportybet NG</option>
            <option value="bet9ja:ng">Bet9ja NG</option>
            <option value="1xbet:ng">1xBet NG</option>
            <option value="betking:ng">BetKing NG</option>
            <option value="22bet:ng">22bet NG</option>
          </select>
        </div>

        <button class="rail-book-btn" id="rail-book-btn">Book All (6)</button>
      </div>
    </div>


    <div id="load-form-view" style="display: none">
      
      <div class="page-header">
        <button class="back-btn" id="load-back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <h1 class="page-title">Load Bet Code</h1>

        <div style="width: 36px"></div>
        <!-- Spacer for alignment -->
      </div>

      <div class="empty-load-form">
        <div class="empty-load-form-header">
          <h4>Please insert booking code</h4>
          <i
            class="bi bi-info-circle"
            title="Enter your bet code to load selections"
          ></i>
        </div>

        <form
          id="empty-load-code-form"
          onsubmit="
            event.preventDefault();
          "
        >
          <div class="empty-form-group">
            <label>Bet Code</label>
            <div class="empty-input-wrapper">
              <input
                type="text"
                id="empty-bet-code-input"
                placeholder="Enter bet code (e.g., M8BULE)"
                required
              />
              <button
                type="button"
                id="empty-paste-btn"
                class="empty-paste-btn"
              >
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
            <button
              type="button"
              id="empty-cancel-btn"
              class="empty-cancel-btn"
            >
              Cancel
            </button>
            <button type="submit" class="empty-submit-btn">
              <i class="bi bi-plus-square"></i> Load Code
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</aside>