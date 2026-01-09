const AppLayout = {
    
  mobileNav: `
    <footer id="bottom-nav" class="adminuiux-mobile-footer hide-on-scrolldown style-2 d-block d-md-none">
      <div class="container">
        <ul class="nav nav-pills nav-justified">
          <li class="nav-item">
            <a class="nav-link" onclick="navigateTo('index.html')">
              <span>
                <i class="nav-icon bi bi-house"></i>
                <span class="nav-text">Home</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="initSidebar()">
              <span>
                <i class="nav-icon bi bi-menu-button-wide-fill"></i>
                <span class="nav-text">AZ Menu</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="navigateTo('convert.html')">
              <span>
                <i class="nav-icon bi bi-arrow-clockwise"></i>
                <span class="nav-text">Converter</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a onclick="navigateTo('bet-editor.html')" class="nav-link">
              <span>
                <i class="bi bi-credit-card-2-front"></i>
                <span class="nav-text">Bet Editor</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="navigateTo('profile.html')">
              <span>
                <i class="nav-icon avatar avatar-20 coverimg rounded-circle">
                  <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                </i>
                <span class="nav-text">Profile</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
    `,

  // Desktop Navbar
desktopNav: `
<header class="desktop-header">
  <div class="desktop-header-container">
    
    <!-- Left Section -->
    <div class="desktop-header-left">
      <button class="desktop-menu-toggle" onclick="toogleSideMenu()">
        <div class="desktop-menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      
      <a class="desktop-logo" onclick="navigateTo('index.html')">
        <div class="desktop-logo-text">Convert<span style="font-weight: 900;">.IO</span></div>
      </a>
    </div>
    
    <!-- Center Section - Search -->
    <div class="desktop-header-center">
      <div class="desktop-search-box">
        <svg class="desktop-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input type="text" class="desktop-search-input" placeholder="Search here..." />
        <button class="desktop-search-filter">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Right Section -->
    <div class="desktop-header-right">
      
      <!-- Mobile Search Toggle -->
      <button class="desktop-search-mobile" onclick="toggleMobileSearch()">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
      
      <!-- Dark Mode Toggle -->
      <button class="desktop-theme-toggle" id="btn-layout-modes-dark">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      </button>
      
      <!-- Notifications -->
      <button class="desktop-notification-btn" data-bs-toggle="offcanvas" data-bs-target="#view-notification">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
        </svg>
        <span class="desktop-notification-badge">9+</span>
      </button>
      
    </div>
    
  </div>
  
  <!-- Mobile Search Overlay -->
  <div class="desktop-search-overlay" id="mobileSearchOverlay">
    <div class="desktop-search-overlay-content">
      <button class="desktop-search-close" onclick="toggleMobileSearch()">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
      </button>
      <div class="desktop-search-box" style="flex: 1;">
        <svg class="desktop-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input type="text" class="desktop-search-input" placeholder="Type something here..." />
        <button class="desktop-search-filter">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  
</header>
`,

  // Side Menu
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
      
      <!-- Top Navigation Grid -->
      <div class="side-menu-nav-grid">
        <a class="side-menu-nav-item active" onclick="navigateTo('index.html')">
          <svg class="side-menu-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          <span class="side-menu-nav-text">Home</span>
        </a>
        
        <a class="side-menu-nav-item">
          <svg class="side-menu-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span class="side-menu-nav-text">Sports</span>
          <span class="side-menu-nav-badge">23</span>
        </a>
        
        <a class="side-menu-nav-item">
          <svg class="side-menu-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
          <span class="side-menu-nav-text">Events</span>
        </a>
        
        <a class="side-menu-nav-item">
          <svg class="side-menu-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
          </svg>
          <span class="side-menu-nav-text">Casino</span>
        </a>
        
        <a class="side-menu-nav-item" onclick="navigateTo('convert.html')">
          <svg class="side-menu-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
          </svg>
          <span class="side-menu-nav-text">Converter</span>
        </a>
        
        <a class="side-menu-nav-item" onclick="navigateTo('betviewer.html')">
          <svg class="side-menu-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
          <span class="side-menu-nav-text">Viewer</span>
        </a>
        
        <a class="side-menu-nav-item" onclick="navigateTo('bet-editor.html')">
          <svg class="side-menu-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
          <span class="side-menu-nav-text">Editor</span>
        </a>
        
        <a class="side-menu-nav-item" onclick="navigateTo('profile.html')">
          <svg class="side-menu-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          <span class="side-menu-nav-text">Profile</span>
        </a>
      </div>
      
      <!-- Category Pills -->
      <div class="side-menu-categories">
        <div class="side-menu-category-scroll">
          <button class="side-menu-category-pill">
            <svg class="side-menu-category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            Basketball
          </button>
          <button class="side-menu-category-pill">
            <svg class="side-menu-category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            eFootball
          </button>
          <button class="side-menu-category-pill active">
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
      
      <!-- Bet Converter Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">Bet Converter</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item" onclick="navigateTo('convert.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
                <span class="side-menu-item-text">Converter</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item" onclick="navigateTo('convertresult-success.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="side-menu-item-text">Converter Result</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Bet Viewer Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">Bet Viewer</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item" onclick="navigateTo('betviewer.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                <span class="side-menu-item-text">Bet Viewer Screen</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item" onclick="navigateTo('betviewer-result.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                <span class="side-menu-item-text">Bet Viewer Result</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Upcoming Events Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">Upcoming Events</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item" onclick="navigateTo('upcoming-events.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span class="side-menu-item-text">Upcoming Events</span>
                </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item" onclick="navigateTo('upcoming-single-event.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                <span class="side-menu-item-text">Single Event</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Bet Editor Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">Bet Editor</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item" onclick="navigateTo('bet-editor.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                <span class="side-menu-item-text">Edit Bet</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item" onclick="navigateTo('bet-editor-load.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
                <span class="side-menu-item-text">Load Bet</span>
              </div>
            </a>
          </li>
          <li>
            <a class="side-menu-item" onclick="navigateTo('bet-editor-add.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span class="side-menu-item-text">Add Game/Selection</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Free Bet Codes Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">Free Bet Codes</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item" onclick="navigateTo('free-bet-codes.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="side-menu-item-text">Free Bet Codes</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Free Predictions Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">Free Predictions</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item" onclick="navigateTo('free-prediction.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                <span class="side-menu-item-text">Free Prediction</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Bet Safer Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">Bet Safer</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item" onclick="navigateTo('bet-safer.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <span class="side-menu-item-text">Bet Safer</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Pool Bet Codes Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">Pool Bet Codes</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item" onclick="navigateTo('pools-bet-code.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span class="side-menu-item-text">Pools Bet Codes</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Blog Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">Blog</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item" onclick="navigateTo('blog.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
                <span class="side-menu-item-text">Blog</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Share Codes Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">Share Codes</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item" onclick="navigateTo('share-codes.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <span class="side-menu-item-text">Share Codes</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Pricing Section -->
      <div class="side-menu-section">
        <div class="side-menu-section-header" onclick="toggleMenuSection(this)">
          <h3 class="side-menu-section-title">Pricing</h3>
          <button class="side-menu-section-toggle">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="side-menu-list">
          <li>
            <a class="side-menu-item" onclick="navigateTo('pricing.html')">
              <div class="side-menu-item-content">
                <svg class="side-menu-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
                <span class="side-menu-item-text">Pricing</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
    
    <!-- Quick Links Footer -->
    <div class="side-menu-footer">
      <div class="side-menu-quick-links">

      </div>
    </div>
    
  </div>
</div>
`,


  filterCanvas: `
      <div
      class="offcanvas offcanvas-end shadow border-0"
      tabindex="-1"
      id="filter"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      aria-labelledby="filterlabel"
    >
      <div class="offcanvas-header border-bottom">
        <div>
          <h5 class="offcanvas-title" id="filterlabel">Filter</h5>
          <p class="text-secondary small">Grab the trimmed details</p>
        </div>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <h6 class="offcanvas-title">Duration</h6>
        <p class="text-secondary small mb-3">
          Filter details with desired period
        </p>
        <div class="row gx-2 align-items-center mb-3 mb-lg-4">
          <div class="col">
            <div class="input-group input-group-md">
              <input
                type="text"
                class="form-control bg-transparent"
                value=""
                id="datepicker"
              />
              <span
                class="input-group-text text-theme-1 bg-transparent width-40"
                id="titlecalendar"
                onclick="this.previousElementSibling.click()"
                ><i class="bi bi-calendar-event"></i
              ></span>
            </div>
          </div>
          <div class="col-auto text-secondary small">-</div>
          <div class="col">
            <div class="input-group input-group-md">
              <input
                type="text"
                class="form-control bg-transparent datepicker-single"
                value=""
              />
              <span
                class="input-group-text text-theme-1 bg-transparent width-40"
                id="titlecalendar"
                onclick="this.previousElementSibling.click()"
                ><i class="bi bi-calendar-event"></i
              ></span>
            </div>
          </div>
        </div>
        <h6 class="offcanvas-title">Country Selection</h6>
        <p class="text-secondary small mb-3">
          Change country for operational details
        </p>
        <div class="mb-3 mb-lg-4">
          <div
            class="input-group input-group-md rounded"
            style="--mw-dynamic: calc(100% - 42px)"
          >
            <span class="input-group-text text-theme-1"
              ><i class="bi bi-box"></i
            ></span>
            <select class="form-control choices" id="titltfilterlist" multiple>
              <option value="San Francisco">San Francisco</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Chicago">Chicago</option>
              <option value="India" selected="">India</option>
              <option value="Sydney">Sydney</option>
              <option value="Seattle">Seattle</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="India">India</option>
            </select>
          </div>
          <div class="invalid-feedback">
            You have already selected maximum option allowed. (This is
            Configurable)
          </div>
        </div>

        <h6 class="offcanvas-title">Orders</h6>
        <p class="text-secondary small mb-2">1256 orders last week</p>
        <div class="row mb-3 mb-lg-4">
          <div class="col-12 px-0">
            <ul class="list-group list-group-flush bg-transparent border-0">
              <li class="list-group-item">
                <div class="row gx-3 gx-lg-4">
                  <div class="col">Online Orders</div>
                  <div class="col-auto">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="titleswitch1"
                      />
                      <label
                        class="form-check-label"
                        for="titleswitch1"
                      ></label>
                    </div>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row gx-3 gx-lg-4">
                  <div class="col">Offline Orders</div>
                  <div class="col-auto">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="titleswitch2"
                        checked=""
                      />
                      <label
                        class="form-check-label"
                        for="titleswitch2"
                      ></label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr class="mb-4" />
        <a
          href="adminux-company-help-center.html"
          class="row gx-3 align-items-center style-none text-theme-1 mb-3 mb-lg-4"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        >
          <div class="col-auto">
            <i
              class="bi bi-life-preserver avatar avatar-30 bg-theme-1-subtle text-theme-1 rounded"
            ></i>
          </div>
          <div class="col">
            <p class="">Need help?</p>
          </div>
        </a>
        <a
          href="https://1.envato.market/nQzeo"
          target="_blank"
          class="row gx-3 align-items-center style-none text-theme-1 mb-3 mb-lg-4"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        >
          <div class="col-auto">
            <span
              class="bi bi-basket avatar avatar-30 bg-theme-1-subtle text-theme-1 rounded position-relative"
            >
              <span
                class="position-absolute top-0 end-0 p-1 bg-green border border-light rounded-circle"
              >
                <span class="visually-hidden">New alerts</span>
              </span>
            </span>
          </div>
          <div class="col">
            <p class="">Buy now and support us!</p>
          </div>
        </a>
      </div>
      <div class="offcanvas-header border-top">
        <div class="col">
          <button class="btn btn-theme" data-bs-dismiss="offcanvas">
            Apply
          </button>
        </div>
        <div class="col-auto">
          <button class="btn btn-link theme-red" data-bs-dismiss="offcanvas">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `,

footer: `
  <!-- Main Footer -->
  <footer class="footer-main">
    <div class="container">
      
      <!-- Join Now Section -->
      <div class="footer-join-section">
        <button class="footer-join-btn" onclick="navigateTo('register.html')">
          JOIN NOW
        </button>
      </div>

      <!-- Sports & Social Links -->
      <div class="footer-sports">
        <div class="footer-sports-links">
          <a href="#" class="footer-sports-link">Football</a>
          <a href="#" class="footer-sports-link">Basketball</a>
          <a href="#" class="footer-sports-link">eFootball</a>
          <a href="#" class="footer-sports-link">Tennis</a>
        </div>
        
        <div class="footer-social">
          <a href="#" class="footer-social-link">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="footer-social-link">
            <i class="bi bi-twitter-x"></i>
          </a>
          <a href="#" class="footer-social-link">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>

      <!-- Footer Links -->
      <div class="footer-links-section">
        <div class="footer-links-grid">
          <a href="#" class="footer-link-item">Home</a>
          <a href="#" class="footer-link-item">About</a>
          <a href="#" class="footer-link-item">Terms</a>
          <a href="#" class="footer-link-item">Data Privacy Policy</a>
          <a href="#" class="footer-link-item">Cookies Policy</a>
          <a href="#" class="footer-link-item">Rules</a>
          <a href="#" class="footer-link-item">Lottery Rules</a>
          <a href="#" class="footer-link-item">Help</a>
          <a href="#" class="footer-link-item">Responsible Gambling</a>
          <a href="#" class="footer-link-item">News</a>
        </div>
      </div>

      <!-- Brand & Country -->
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="footer-logo-text">Convert<span class="footer-logo-highlight">bet</span></span>
        </div>
        
        <div class="footer-country">
          <span>🇳🇬</span>
          <span>Nigeria</span>
          <span>Change</span>
        </div>
      </div>

    </div>
  </footer>

  <!-- Footer Info -->
  <div class="footer-info">
    <div class="container">
      <p class="footer-info-text">
        Your bets and payouts are processed by Choplife Gaming Limited, which is licensed and regulated by the Lagos State Lotteries and Gaming Authority of Nigeria.
      </p>
      <p class="footer-license">
        Licence No. LSLGA/OP/OSB/CL071124
      </p>
    </div>
  </div>

  <!-- Footer Warning -->
  <div class="footer-warning">
    <div class="container">
      <p class="footer-warning-text">
        You have to be 18 years and above to bet.
      </p>
      <p class="footer-warning-text">
        Betting is addictive and can be psychologically harmful.
      </p>
      <p class="footer-warning-text">
        Contact an experienced counsellor at any time 24/7 Monday to Sunday via toll free numbers:
      </p>
      
      <div class="footer-contact">
        <a href="tel:09117581454" class="footer-contact-item">Phone: 0911 758 1454</a>
        <a href="tel:09078884268" class="footer-contact-item">Phone: 0907 888 4268</a>
      </div>

      <p class="footer-warning-text" style="margin-top: 15px;">
        or WhatsApp only: 0907 888 4268 or email via <a href="mailto:eap@tranquilandquest.org.ng" style="color: #c8ff00;">eap@tranquilandquest.org.ng</a>
      </p>
      <p class="footer-warning-text">
        Please only contact the number above if you need counselling. For help related to your account, contact our <a href="#" style="color: #c8ff00;">Customer Support Team</a>
      </p>

      <div class="footer-support-links">
        <a href="#" class="footer-support-link">Tranquil & Quest</a>
      </div>
    </div>
  </div>

  <!-- Copyright -->
  <div class="footer-copyright">
    <div class="container">
      <p>Copyright @2025, Designed by <a href="https://adminuiux.com/" target="_blank">Adminuiux</a></p>
    </div>
  </div>

  <!-- Fixed Buttons -->
  <div class="position-fixed bottom-0 end-0 m-3 z-index-5" id="fixedbuttons">

    <br />
    <button
      class="btn btn-square shadow mt-2 d-none rounded-circle"
      id="backtotop"
      style="background: #000; color: #fff; width: 48px; height: 48px;"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  </div>
`,

init() {
  if (document.getElementById("mobile-nav")) {
    document.getElementById("mobile-nav").innerHTML = this.mobileNav;
  }

  if (document.getElementById("filter-canvas")) {
    document.getElementById("filter-canvas").innerHTML = this.filterCanvas;
  }

  if (document.getElementById("desktop-nav") && window.innerWidth >= 1024) {
    document.getElementById("desktop-nav").innerHTML = this.desktopNav;
  }

  if (document.getElementById("side-menu")) {
    document.getElementById("side-menu").innerHTML = this.sideMenu;
  }

  if (document.getElementById("footer")) {
    document.getElementById("footer").innerHTML = this.footer;
  }

  this.setActiveNav();
},

  // Set active navigation state
  setActiveNav() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-item, .nav-link").forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  },
};



function navigateTo(page) {
  window.location.href = page;
}

function pageTitle(title) {
    return title
}



// Initialize on page load
document.addEventListener("DOMContentLoaded", () => AppLayout.init());
