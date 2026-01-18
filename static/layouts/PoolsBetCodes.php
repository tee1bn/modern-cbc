
<!-- Sports, Leagues, Markets, Week (with search) -->
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

    <div class="filter-tab" data-filter="week">
      <span>Week</span>
      <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
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

    <!-- Week Panel (with search) -->
    <div class="filter-panel" data-panel="week">
      <!-- Search Box -->
      <div class="week-search-box">
        <div class="week-search-wrapper">
          <svg class="week-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21L16.65 16.65"></path>
          </svg>
          <input type="text" class="week-search-input" placeholder="Search weeks..." />
        </div>
      </div>

      <!-- Week Options List -->
      <div class="week-options-list">
        <div class="filter-option week-option active" data-value="week-2">
          <div class="week-main">
            <span class="week-label">WEEK 2</span>
            <span class="week-badge current">CURRENT</span>
            <span class="option-count">49</span>
          </div>
          <span class="week-date">Jan 13 - Jan 19, 2026</span>
        </div>

        <div class="filter-option week-option" data-value="week-3">
          <div class="week-main">
            <span class="week-label">WEEK 3</span>
            <span class="week-badge upcoming">UPCOMING</span>
            <span class="option-count">49</span>
          </div>
          <span class="week-date">Jan 20 - Jan 26, 2026</span>
        </div>

        <div class="filter-option week-option" data-value="week-4">
          <div class="week-main">
            <span class="week-label">WEEK 4</span>
            <span class="week-badge upcoming">UPCOMING</span>
            <span class="option-count">49</span>
          </div>
          <span class="week-date">Jan 27 - Feb 02, 2026</span>
        </div>

        <div class="filter-option week-option" data-value="week-5">
          <div class="week-main">
            <span class="week-label">WEEK 5</span>
            <span class="week-badge upcoming">UPCOMING</span>
            <span class="option-count">49</span>
          </div>
          <span class="week-date">Feb 03 - Feb 09, 2026</span>
        </div>

        <div class="filter-option week-option" data-value="week-6">
          <div class="week-main">
            <span class="week-label">WEEK 6</span>
            <span class="week-badge upcoming">UPCOMING</span>
            <span class="option-count">52</span>
          </div>
          <span class="week-date">Feb 10 - Feb 16, 2026</span>
        </div>

        <div class="filter-option week-option" data-value="week-7">
          <div class="week-main">
            <span class="week-label">WEEK 7</span>
            <span class="week-badge upcoming">UPCOMING</span>
            <span class="option-count">48</span>
          </div>
          <span class="week-date">Feb 17 - Feb 23, 2026</span>
        </div>

        <div class="filter-option week-option disabled" data-value="week-1">
          <div class="week-main">
            <span class="week-label">WEEK 1</span>
            <span class="week-badge past">PAST</span>
            <span class="option-count">49</span>
          </div>
          <span class="week-date">Jan 06 - Jan 12, 2026</span>
        </div>
      </div>

      <!-- No Results Message -->
      <div class="week-no-results" style="display: none;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21L16.65 16.65"></path>
        </svg>
        <p>No weeks found</p>
      </div>
    </div>
  </div>
</div>