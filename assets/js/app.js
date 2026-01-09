// Desktop Navigation JavaScript
class DesktopNavigation {
  constructor() {
    this.header = null;
    this.menuToggle = null;
    this.searchInput = null;
    this.mobileSearchOverlay = null;
    this.lastScrollTop = 0;
    this.scrollThreshold = 10;
    
    this.init();
  }
  
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }
  
  setup() {
    this.header = document.querySelector('.desktop-header');
    this.menuToggle = document.querySelector('.desktop-menu-toggle');
    this.searchInput = document.querySelectorAll('.desktop-search-input');
    this.mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
    
    if (!this.header) return;
    
    // Add event listeners
    this.addScrollListener();
    this.addMenuToggleListener();
    this.addSearchListeners();
    this.addThemeToggleListener();
  }
  
  addScrollListener() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }
  
  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class when scrolled down
    if (scrollTop > 50) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll (optional - uncomment to enable)
    /*
    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      this.header.classList.add('hide-on-scroll');
      this.header.classList.remove('show-on-scroll');
    } else {
      this.header.classList.remove('hide-on-scroll');
      this.header.classList.add('show-on-scroll');
    }
    */
    
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
  
  // Menu toggle
  addMenuToggleListener() {
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => {
        this.menuToggle.classList.toggle('active');
      });
    }
  }
  
  // Search functionality
  addSearchListeners() {
    this.searchInput.forEach(input => {
      // Focus animation
      input.addEventListener('focus', () => {
        input.closest('.desktop-search-box').style.transform = 'scale(1.02)';
      });
      
      input.addEventListener('blur', () => {
        input.closest('.desktop-search-box').style.transform = 'scale(1)';
      });
      
      // Search with debounce
      let searchTimeout;
      input.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const value = e.target.value;
        
        if (value.length > 0) {
          input.classList.add('loading');
          
          searchTimeout = setTimeout(() => {
            this.performSearch(value);
            input.classList.remove('loading');
          }, 500);
        }
      });
      
      // Submit on Enter
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.performSearch(input.value);
        }
      });
    });
  }
  
  performSearch(query) {
    console.log('Searching for:', query);
    // Add your search logic here
    // Example: window.location.href = `/search?q=${encodeURIComponent(query)}`;
  }
  
  // Theme toggle
  addThemeToggleListener() {
    const themeToggle = document.querySelector('.desktop-theme-toggle');
    
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
  }
  
  toggleTheme() {
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
  
  // Mobile search toggle
  toggleMobileSearch() {
    if (this.mobileSearchOverlay) {
      this.mobileSearchOverlay.classList.toggle('active');
      
      // Focus on input when opened
      if (this.mobileSearchOverlay.classList.contains('active')) {
        const input = this.mobileSearchOverlay.querySelector('.desktop-search-input');
        setTimeout(() => input && input.focus(), 300);
      }
    }
  }
}

// Global function for mobile search toggle
function toggleMobileSearch() {
  const overlay = document.getElementById('mobileSearchOverlay');
  if (overlay) {
    overlay.classList.toggle('active');
    
    // Focus on input when opened
    if (overlay.classList.contains('active')) {
      const input = overlay.querySelector('.desktop-search-input');
      setTimeout(() => input && input.focus(), 300);
    }
  }
}

// Toggle Side Menu
function toogleSideMenu() {
  const overlay = document.getElementById('sideMenuOverlay');
  if (overlay) {
    overlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
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

// Close menu when clicking overlay (not the menu itself)
document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('sideMenuOverlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeSideMenu();
      }
    });
  }
});

// Toggle Menu Section (Collapsible)
function toggleMenuSection(headerElement) {
  const section = headerElement.closest('.side-menu-section');
  if (section) {
    section.classList.toggle('collapsed');
  }
}

// Initialize when DOM is ready
const desktopNav = new DesktopNavigation();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DesktopNavigation;
}