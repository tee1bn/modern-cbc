const AppLayout = {
  bottomNav: `
        <nav class="bottom-nav">
        <a onclick="navigateTo('index.html')"class="nav-item">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            <span>Home</span>
        </a>
        <a onclick="navigateTo('convert.html')" class="btn nav-item">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            <span>Convert</span>
        </a>
        <a onclick="navigateTo('betviewer.html')" class="nav-item">
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span>View Bet</span>
        </a>
        <a onclick="navigateTo('edit-bet.html')" class="nav-item">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
            <span>Edit</span>
        </a>
        <button class="nav-item" onclick="toggleSideMenu()" style="border: none; background: none;">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <span>Menu</span>
        </button>
    </nav>
    `,

  // Expandable Menu (+ button popup)
  expandableMenu: `
        <div class="expandable-menu" id="expandableMenu">
        <div class="expandable-menu-overlay" onclick="toggleExpandableMenu()"></div>
        <div class="expandable-menu-content">
            <div class="menu-grid">
                <a href="#" class="menu-grid-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                    <span>Hot Prediction</span>
                </a>
                <a href="#" class="menu-grid-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
                    </svg>
                    <span>Free Bet Codes</span>
                </a>
                <a href="#" class="menu-grid-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    <span>Bet Viewer</span>
                </a>
                <a href="#" class="menu-grid-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                    <span>Pools Bet Codes</span>
                </a>
            </div>
        </div>
    </div>
    `,

  // Desktop Navbar
  desktopNav: `
                <nav class="desktop-nav">
        <div class="container">
            <div class="logo">CONVERT.io</div>
            <ul class="nav-links">
                <li><a href="#"><span></span> Bet Converter</a></li>
                <li><a href="#"><span></span> Hot Predictions</a></li>
                <li><a href="#"><span></span> Boosts</a></li>
            </ul>
        </div>
    </nav>
    `,

  // Side Menu
  sideMenu: `
        <div class="side-menu hidden">
            <div class="menu-overlay" id="menuOverlay" onclick="toggleSideMenu()"></div>
            <div class="side-menu" id="sideMenu">
                <div class="menu-header">
                    <h2>Menu</h2>
                    <button class="close-btn" onclick="toggleSideMenu()">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div class="menu-links">
                    <a href="#">Home</a>
                    <a href="#">Convert</a>
                    <a href="#">Bet Viewer</a>
                    <a href="#">Free Codes</a>
                    <a href="#">Predictions</a>
                    <a href="#">Pools</a>
                    <a href="#">Pricing</a>
                    <a href="#">API</a>
                    <hr>
                    <a href="#">Profile</a>
                    <a href="#">Settings</a>
                    <a href="#" class="logout">Logout</a>
                </div>
            </div>
        </div>
    `,

  // Initialize layout
  init() {
    document.getElementById("bottom-nav").innerHTML = this.bottomNav;
    document.getElementById("expandable-menu").innerHTML = this.expandableMenu;
    document.getElementById("desktop-nav").innerHTML = this.desktopNav;
    document.getElementById("side-menu").innerHTML = this.sideMenu;
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

const state = {
  expandableMenuOpen: false,
  sideMenuOpen: false,
};

// Menu toggle functions
function toggleExpandableMenu() {
  state.expandableMenuOpen = !state.expandableMenuOpen;
  const menu = document.querySelector("#expandable-menu > .menu-overlay");

  if (state.expandableMenuOpen) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}

function toggleSideMenu() {
  state.sideMenuOpen = !state.sideMenuOpen;
  const menu = document.querySelector("#side-menu > .side-menu");

  if (state.sideMenuOpen) {
    menu.classList.remove("hidden");
  } else {
    setTimeout(() => menu.classList.add("hidden"), 300);
  }
}

function navigateTo(page) {
  window.location.href = page;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => AppLayout.init());
