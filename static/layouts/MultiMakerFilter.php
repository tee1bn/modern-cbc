    <div class="filters-wrapper">
        <!-- Filter Tabs Bar -->
        <div class="filters-tabs">
            <div class="filter-tab" data-filter="sports">
                <svg
                    class="filter-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a10 10 0 0 0 0 20"></path>
                    <path d="M2 12h20"></path>
                </svg>
                <svg
                    class="arrow-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>

            <div class="filter-tab" data-filter="time">
                <svg class="filter-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Time</span>
                <svg class="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>

            <div class="filter-tab" data-filter="leagues">
                <span>Leagues</span>
                <svg
                    class="arrow-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>

            <div class="filter-tab" data-filter="markets">
                <span>Markets</span>
                <svg
                    class="arrow-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>

            <div class="filter-tab" data-filter="odds">
                <svg
                    class="filter-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                <span>Odds</span>
                <svg
                    class="arrow-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
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

            <!-- Sports Panel - Auto-close on selection -->
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

            <!-- Odds Panel -->
            <div class="filter-panel" data-panel="odds">
                <div id="odds-options"></div>

                <div class="filter-custom-range">
                    <label>Custom Range</label>
                    <div class="custom-range-inputs">
                        <input
                            type="number"
                            id="odds-min"
                            placeholder="1"
                            min="1"
                            max="2000"
                            step="0.01" />
                        <span>~</span>
                        <input
                            type="number"
                            id="odds-max"
                            placeholder="2000"
                            min="1"
                            max="2000"
                            step="0.01" />
                    </div>
                    <div class="range-slider">
                        <input
                            type="range"
                            id="odds-slider"
                            min="1"
                            max="2000"
                            value="2000" />
                        <div class="range-label">1 ~ 2000</div>
                    </div>
                </div>

                <div class="filter-actions">
                    <button class="btn-reset">Reset</button>
                    <button class="btn-apply">Apply</button>
                </div>
            </div>

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
                        <input type="checkbox" id="league-gt" value="gt" />
                        <label for="league-gt">
                            <svg
                                class="flag-icon"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                            <span class="checkbox-label">Premier League</span>
                            <span class="option-count">11</span>
                        </label>
                    </div>
                    <div class="filter-option-checkbox">
                        <input
                            type="checkbox"
                            id="league-eadriatic"
                            value="eadriatic" />
                        <label for="league-eadriatic">
                            <svg
                                class="flag-icon"
                                viewBox="0 0 24 24"
                                fill="currentColor">
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
                        <input
                            type="checkbox"
                            id="country-international"
                            value="international" />
                        <label for="country-international">
                            <svg
                                class="flag-icon"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                            <span class="checkbox-label">INTERNATIONAL</span>
                            <span class="option-count">21</span>
                        </label>
                    </div>
                    <div class="filter-option-checkbox">
                        <input type="checkbox" id="country-gt" value="gt-leagues" />
                        <label for="country-gt">
                            <span class="checkbox-label">Spain</span>
                            <span class="option-count">11</span>
                        </label>
                    </div>
                    <div class="filter-option-checkbox">
                        <input
                            type="checkbox"
                            id="country-eadriatic"
                            value="eadriatic-league" />
                        <label for="country-eadriatic">
                            <span class="checkbox-label">England</span>
                            <span class="option-count">10</span>
                        </label>
                    </div>
                </div>

                <!-- Action Buttons for Leagues -->
                <div class="filter-actions">
                    <button class="btn-reset">RESET FILTERS</button>
                    <button class="btn-apply">APPLY</button>
                </div>
            </div>

            <!-- Markets Panel - Auto-close on selection -->
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
        </div>
    </div>