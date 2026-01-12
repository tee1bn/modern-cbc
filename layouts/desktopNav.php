desktopNav: `
<header class="desktop-header">
  <div class="desktop-header-container">
    
    <!-- Left Section - Menu + Logo -->
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
    
    <!-- Right Section - Search + Auth Buttons -->
    <div class="desktop-header-right">
      
      <!-- Search Button -->

      
      <!-- Login Button -->
      <button class="desktop-login-btn" onclick="navigateTo('login.html')">
        LOGIN
      </button>
      
      <!-- Join Now Button - Highlighted -->
      <button class="desktop-join-btn" onclick="navigateTo('register.html')">
        JOIN NOW
      </button>
      
      <!-- Account Button -->
      <button class="desktop-account-btn" onclick="navigateTo('profile.html')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        <span>ACCOUNT</span>
      </button>
      
    </div>
    
  </div>
  
  <!-- Search Overlay (Dropdown) -->
  <div class="desktop-search-overlay" id="mobileSearchOverlay">
    <div class="desktop-search-overlay-content">
      <button class="desktop-search-close" onclick="toggleMobileSearch()">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div class="desktop-search-box">
        <svg class="desktop-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input type="text" class="desktop-search-input" placeholder="Search for teams, events, sports..." />
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