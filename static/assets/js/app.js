/* ==================== SideMenu Logic ==================== */
let header = null;
let menuToggle = null;

document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
});

function initializeNavigation() {

  header = document.querySelector('.desktop-header');
  menuToggle = document.querySelector('.desktop-menu-toggle');
  
  if (!header) return;
  
  setupMenuToggleListener();
  setupSideMenuListeners();
}

// Menu toggle listener
function setupMenuToggleListener() {
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
    });
  }
}

function toogleSideMenu() {
  const overlay = document.getElementById('sideMenuOverlay');
  if (overlay) {
    overlay.classList.toggle('active');
    
    if (overlay.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

// Close Side Menu
function closeSideMenu() {
  const overlay = document.getElementById('sideMenuOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Setup side menu listeners
function setupSideMenuListeners() {
  const overlay = document.getElementById('sideMenuOverlay');
  if (overlay) {
    // Close menu when clicking overlay (not the menu itself)
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeSideMenu();
      }
    });
  }
}

// Toggle menu section in side menu
function toggleMenuSection(headerElement) {
  const section = headerElement.closest('.side-menu-section');
  if (section) {
    section.classList.toggle('collapsed');
  }
}



