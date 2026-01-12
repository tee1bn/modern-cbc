// Desktop Navigation JavaScript - Vanilla JS (No Classes)

// Global variables
let header = null;
let menuToggle = null;
let searchInputs = null;
let mobileSearchOverlay = null;
let lastScrollTop = 0;
let scrollThreshold = 10;

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
});

// Main initialization function
function initializeNavigation() {
  // Get elements
  header = document.querySelector('.desktop-header');
  menuToggle = document.querySelector('.desktop-menu-toggle');
  searchInputs = document.querySelectorAll('.desktop-search-input');
  mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
  
  if (!header) return;
  
  // Setup all event listeners
  setupScrollListener();
  setupMenuToggleListener();
  setupSearchListeners();
  setupSideMenuListeners();
  setupTabsNavScroll();
  setupSearchOverlayClose();
}

// Scroll listener with animation frame
function setupScrollListener() {
  let ticking = false;
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
}

// Handle scroll behavior
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Add scrolled class when scrolled down
  if (scrollTop > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Optional: Hide/show header on scroll (uncomment to enable)
  /*
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.classList.add('hide-on-scroll');
    header.classList.remove('show-on-scroll');
  } else {
    header.classList.remove('hide-on-scroll');
    header.classList.add('show-on-scroll');
  }
  */
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Menu toggle listener
function setupMenuToggleListener() {
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
    });
  }
}

// Search input listeners
function setupSearchListeners() {
  if (!searchInputs) return;
  
  searchInputs.forEach(function(input) {
    // Focus animation
    input.addEventListener('focus', function() {
      const searchBox = input.closest('.desktop-search-box');
      if (searchBox) {
        searchBox.style.transform = 'scale(1.02)';
      }
    });
    
    input.addEventListener('blur', function() {
      const searchBox = input.closest('.desktop-search-box');
      if (searchBox) {
        searchBox.style.transform = 'scale(1)';
      }
    });
    
    // Search with debounce
    let searchTimeout;
    input.addEventListener('input', function(e) {
      clearTimeout(searchTimeout);
      const value = e.target.value;
      
      if (value.length > 0) {
        input.classList.add('loading');
        
        searchTimeout = setTimeout(function() {
          performSearch(value);
          input.classList.remove('loading');
        }, 500);
      }
    });
    
    // Submit on Enter
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch(input.value);
      }
    });
  });
}

// Perform search function
function performSearch(query) {
  console.log('Searching for:', query);
  // Add your search logic here
}

// Toggle Mobile/Desktop Search Overlay
function toggleMobileSearch() {
  const overlay = document.getElementById('mobileSearchOverlay');
  const input = overlay ? overlay.querySelector('.desktop-search-input') : null;
  
  if (overlay) {
    overlay.classList.toggle('active');
    
    // Focus input when overlay opens
    if (overlay.classList.contains('active') && input) {
      setTimeout(function() {
        input.focus();
      }, 300);
    }
  }
}

// Setup close search overlay on outside click
function setupSearchOverlayClose() {
  // Close search overlay when clicking outside
  document.addEventListener('click', function(event) {
    const overlay = document.getElementById('mobileSearchOverlay');
    const searchBtn = document.querySelector('.desktop-search-btn');
    
    if (overlay && overlay.classList.contains('active')) {
      // Check if click is outside overlay and search button
      if (!overlay.contains(event.target) && !searchBtn.contains(event.target)) {
        overlay.classList.remove('active');
      }
    }
  });
  
  // Close search overlay on ESC key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const overlay = document.getElementById('mobileSearchOverlay');
      if (overlay && overlay.classList.contains('active')) {
        overlay.classList.remove('active');
      }
    }
  });
}

// Toggle Side Menu
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

// Setup tabs navigation scroll behavior
function setupTabsNavScroll() {
  const tabsNav = document.querySelector('.tabs-nav');
  const scrollThreshold = 100; // Start sticky after 100px scroll
  
  if (tabsNav) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > scrollThreshold) {
        tabsNav.classList.add('scrolled');
      } else {
        tabsNav.classList.remove('scrolled');
      }
    });
  }
}

// Theme toggle function (if needed in future)
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.contains('dark-theme');
  
  if (isDark) {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
  
  // Add transition effect
  body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

// Load saved theme on page load
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
}

// Initialize theme on load
document.addEventListener('DOMContentLoaded', function() {
  loadSavedTheme();
});