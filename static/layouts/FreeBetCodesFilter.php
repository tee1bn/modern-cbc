
<!-- Time, Folds, Odds, Sort -->
 
<div class="filters-wrapper">
  <!-- Filter Tabs Bar -->
  <div class="filters-tabs">
    <div class="filter-tab" data-filter="time">
      <svg class="filter-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>Time</span>
      <svg class="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>

    <div class="filter-tab" data-filter="folds">
      <svg class="filter-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
      </svg>
      <span>Folds</span>
      <svg class="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
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

    <div class="filter-tab" data-filter="sort">
      <svg class="filter-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
      </svg>
      <span>Sort</span>
      <svg class="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </div>

  <!-- Dropdown Content Area -->
  <div class="filters-content">
    <!-- Time Panel -->
    <div class="filter-panel" data-panel="time">
      <div class="filter-option active" data-value="all">
        <span class="option-label">All</span>
      </div>
      <div class="filter-option" data-value="this-weekend">
        <span class="option-label">This Weekend</span>
      </div>
      <div class="filter-option" data-value="today">
        <span class="option-label">Sunday 04/01 (Today)</span>
      </div>
      <div class="filter-option" data-value="monday">
        <span class="option-label">Monday 05/01</span>
      </div>
      <div class="filter-option" data-value="tuesday">
        <span class="option-label">Tuesday 06/01</span>
      </div>
      <div class="filter-option" data-value="wednesday">
        <span class="option-label">Wednesday 07/01</span>
      </div>
      <div class="filter-option" data-value="thursday">
        <span class="option-label">Thursday 08/01</span>
      </div>
      <div class="filter-option" data-value="friday">
        <span class="option-label">Friday 09/01</span>
      </div>
      <div class="filter-option" data-value="saturday">
        <span class="option-label">Saturday 10/01</span>
      </div>
    </div>

    <!-- Folds Panel -->
    <div class="filter-panel" data-panel="folds">
      <div class="filter-option active" data-value="all">
        <span class="option-label">All</span>
      </div>
      <div class="filter-option" data-value="1-10">
        <span class="option-label">Folds 1 ~ 10</span>
      </div>
      <div class="filter-option" data-value="11-20">
        <span class="option-label">Folds 11 ~ 20</span>
      </div>
      <div class="filter-option" data-value="21-30">
        <span class="option-label">Folds 21 ~ 30</span>
      </div>
      <div class="filter-option" data-value="31-40">
        <span class="option-label">Folds 31 ~ 40</span>
      </div>

      <div class="filter-custom-range">
        <label>Custom Range</label>
        <div class="custom-range-inputs">
          <input type="number" placeholder="1" min="1" max="50" />
          <span>~</span>
          <input type="number" placeholder="50" min="1" max="50" />
        </div>
        <div class="range-slider">
          <input type="range" min="1" max="50" value="50" />
          <div class="range-label">1 ~ 50</div>
        </div>
      </div>

      <div class="filter-actions">
        <button class="btn-reset">Reset</button>
        <button class="btn-apply">Apply</button>
      </div>
    </div>

    <!-- Odds Panel -->
    <div class="filter-panel" data-panel="odds">
      <div class="filter-option active" data-value="all">
        <span class="option-label">All</span>
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

      <div class="filter-custom-range">
        <label>Custom Range</label>
        <div class="custom-range-inputs">
          <input type="number" placeholder="1" min="1" max="2000" step="0.01" />
          <span>~</span>
          <input type="number" placeholder="2000" min="1" max="2000" step="0.01" />
        </div>
        <div class="range-slider">
          <input type="range" min="1" max="2000" value="2000" />
          <div class="range-label">1 ~ 2000</div>
        </div>
      </div>

      <div class="filter-actions">
        <button class="btn-reset">Reset</button>
        <button class="btn-apply">Apply</button>
      </div>
    </div>

    <!-- Sort Panel -->
    <div class="filter-panel" data-panel="sort">
      <div class="filter-option active" data-value="all">
        <span class="option-label">All</span>
      </div>
      <div class="filter-option" data-value="folds-desc">
        <span class="option-label">Folds Descending</span>
      </div>
      <div class="filter-option" data-value="folds-asc">
        <span class="option-label">Folds Ascending</span>
      </div>
      <div class="filter-option" data-value="odds-desc">
        <span class="option-label">Odds Descending</span>
      </div>
      <div class="filter-option" data-value="odds-asc">
        <span class="option-label">Odds Ascending</span>
      </div>

      <div class="filter-actions">
        <button class="btn-reset">Reset</button>
        <button class="btn-apply">Apply</button>
      </div>
    </div>
  </div>
</div>