sideMenu: `
<div class="side-menu-overlay" id="sideMenuOverlay">
  <div class="side-menu-container">
    
    <!-- Menu Header -->
    <div class="side-menu-header">
      <a class="side-menu-logo" onclick="navigateTo('index.html')">
        <span class="side-menu-logo-text">Convert<span style="font-weight: 900;">.IO</span></span>
      </a>
      <button class="side-menu-close" onclick="closeSideMenu()">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    
    <!-- Menu Content -->
    <div class="side-menu-content">
      
      <!-- Main Navigation Items -->
      <div class="side-menu-main-nav">
        <a class="side-menu-main-item active" onclick="navigateTo('index.html')">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </div>
          <span class="side-menu-main-text">Home</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <span class="side-menu-main-text">Converter</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span class="side-menu-main-badge live">3</span>
          </div>
          <span class="side-menu-main-text">Events</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
          </div>
          <span class="side-menu-main-text">Bet Safer</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <span class="side-menu-main-text">Free Bets</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path>
            </svg>
          </div>
          <span class="side-menu-main-text">Pools Bet</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path>
            </svg>
          </div>
          <span class="side-menu-main-text">Bet Editor</span>
        </a>
        
        <a class="side-menu-main-item">
          <div class="side-menu-main-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <span class="side-menu-main-badge">26</span>
          </div>
          <span class="side-menu-main-text">Predictions</span>
        </a>
      </div>
      
      <!-- Category Pills -->
      <div class="side-menu-categories">
        <div class="side-menu-category-scroll">
          <button class="side-menu-category-pill active" >
            <svg class="side-menu-category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            Football
          </button>
          <button class="side-menu-category-pill">
            <svg class="side-menu-category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Basketball
          </button>
          <button class="side-menu-category-pill">
            <svg class="side-menu-category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
            </svg>
            Tennis
          </button>
          <button class="side-menu-category-pill">
            <svg class="side-menu-category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Cricket
          </button>
        </div>
      </div>
      
      <!-- Leagues Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">LEAGUES</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon">🏆</div>
                <span class="side-menu-item-text">United Cup</span>
                <span class="side-menu-item-count">1</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon">🏆</div>
                <span class="side-menu-item-text">ATP Hong Kong, Hong Kong Men Singles</span>
                <span class="side-menu-item-count">1</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon">🏆</div>
                <span class="side-menu-item-text">WTA Brisbane, Australia Women Singles</span>
                <span class="side-menu-item-count">1</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon">🏆</div>
                <span class="side-menu-item-text">ATP Auckland, New Zealand Men Singles</span>
                <span class="side-menu-item-count">4</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon">🏆</div>
                <span class="side-menu-item-text">ATP Adelaide, Australia Men Singles</span>
                <span class="side-menu-item-count">9</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon">🏆</div>
                <span class="side-menu-item-text">WTA Adelaide 1, Australia Women Singles</span>
                <span class="side-menu-item-count">6</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item">
              <div class="side-menu-item-content">
                <div class="side-menu-league-icon">🏆</div>
                <span class="side-menu-item-text">WTA Auckland, New Zealand Women Doubles</span>
                <span class="side-menu-item-count">1</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    
    </div>
    
  </div>
</div>
`,