<div class="filters-wrapper">
  <!-- Filter Tabs Bar -->
  <div class="filters-tabs">
    <div class="filter-tab" data-filter="sports">
      <svg class="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a10 10 0 0 0 0 20"></path>
        <path d="M2 12h20"></path>
      </svg>
      <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>

    <div class="filter-tab" data-filter="leagues">
      <span>Leagues</span>
      <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>

    <div class="filter-tab" data-filter="markets">
      <span>Markets</span>
      <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>

    <div class="filter-tab" data-filter="date">
      <svg class="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>

    <div class="filter-tab" data-filter="odds">
      <svg class="filter-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      </svg>
      <span>Odds</span>
      <svg class="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </div>

  <!-- Dropdown Content Panels -->
  <div class="filters-content">
    <!-- Sports Panel -->
    <div class="filter-panel" data-panel="sports">
      <div class="filter-option" data-value="football">
        <svg class="sport-icon" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <span class="option-label">Football</span>
        <span class="option-count">800</span>
      </div>
      <div class="filter-option" data-value="basketball">
        <svg class="sport-icon" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <span class="option-label">Basketball</span>
        <span class="option-count">138</span>
      </div>
      <div class="filter-option" data-value="efootball">
        <svg class="sport-icon" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        </svg>
        <span class="option-label">eFootball</span>
        <span class="option-count">24</span>
      </div>
      <div class="filter-option active" data-value="tennis">
        <svg class="sport-icon" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <span class="option-label">Tennis</span>
        <span class="option-count">206</span>
      </div>
    </div>

    <!-- Leagues Panel -->
    <div class="filter-panel" data-panel="leagues">
      <div class="panel-section">
        <h4 class="section-title">POPULAR LEAGUES</h4>
        <div class="filter-option-checkbox">
          <input type="checkbox" id="league-popular-all" value="all" />
          <label for="league-popular-all">
            <span class="checkbox-label">All Popular Leagues</span>
            <span class="option-count">21</span>
          </label>
        </div>
        <div class="filter-option-checkbox">
          <input type="checkbox" id="league-premier" value="premier" />
          <label for="league-premier">
            <svg class="flag-icon" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <span class="checkbox-label">Premier League</span>
            <span class="option-count">11</span>
          </label>
        </div>
        <div class="filter-option-checkbox">
          <input type="checkbox" id="league-laliga" value="laliga" />
          <label for="league-laliga">
            <svg class="flag-icon" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <span class="checkbox-label">La Liga</span>
            <span class="option-count">10</span>
          </label>
        </div>
      </div>

      <div class="panel-section">
        <h4 class="section-title">POPULAR COUNTRIES</h4>
        <div class="filter-option-checkbox">
          <input type="checkbox" id="country-international" value="international" />
          <label for="country-international">
            <svg class="flag-icon" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <span class="checkbox-label">INTERNATIONAL</span>
            <span class="option-count">21</span>
          </label>
        </div>
        <div class="filter-option-checkbox">
          <input type="checkbox" id="country-spain" value="spain" />
          <label for="country-spain">
            <span class="checkbox-label">Spain</span>
            <span class="option-count">11</span>
          </label>
        </div>
        <div class="filter-option-checkbox">
          <input type="checkbox" id="country-england" value="england" />
          <label for="country-england">
            <span class="checkbox-label">England</span>
            <span class="option-count">10</span>
          </label>
        </div>
      </div>

      <div class="filter-actions">
        <button class="btn-reset">RESET FILTERS</button>
        <button class="btn-apply">APPLY</button>
      </div>
    </div>

    <!-- Markets Panel -->
    <div class="filter-panel" data-panel="markets">
      <div class="filter-option" data-value="winner">
        <span class="option-label">Match Winner</span>
      </div>
      <div class="filter-option" data-value="total">
        <span class="option-label">Total Games</span>
      </div>
      <div class="filter-option" data-value="handicap">
        <span class="option-label">Game Handicap</span>
      </div>
    </div>

    <!-- Date Panel -->
    <div class="filter-panel" data-panel="date">
      <div class="filter-option active" data-value="all">
        <span class="option-label">All</span>
        <span class="option-count">206</span>
      </div>
      <div class="filter-option" data-value="today">
        <span class="option-label">Today</span>
        <span class="option-count">3</span>
      </div>
      <div class="filter-option" data-value="tomorrow">
        <span class="option-label">Tomorrow</span>
        <span class="option-count">141</span>
      </div>
      <div class="filter-option" data-value="wednesday">
        <span class="option-label">Wednesday</span>
        <span class="option-count">60</span>
      </div>
      <div class="filter-option" data-value="thursday">
        <span class="option-label">Thursday</span>
        <span class="option-count">2</span>
      </div>
      <div class="filter-option" data-value="friday">
        <span class="option-label">Friday</span>
        <span class="option-count">0</span>
      </div>
      <div class="filter-option" data-value="saturday">
        <span class="option-label">Saturday</span>
        <span class="option-count">0</span>
      </div>
      <div class="filter-option" data-value="sunday">
        <span class="option-label">Sunday</span>
        <span class="option-count">0</span>
      </div>
    </div>

    <!-- Odds Panel -->
    <div class="filter-panel" data-panel="odds">
      <div class="filter-option" data-value="all">
        <span class="option-label">All Odds</span>
      </div>
      <div class="filter-option" data-value="1-25">
        <span class="option-label">Odds 1 ~ 25</span>
      </div>
      <div class="filter-option" data-value="26-50">
        <span class="option-label">Odds 26 ~ 50</span>
      </div>
      <div class="filter-option" data-value="51-100">
        <span class="option-label">Odds 51 ~ 100</span>
      </div>
      <div class="filter-option" data-value="101-200">
        <span class="option-label">Odds 101 ~ 200</span>
      </div>
    </div>
  </div>
</div>