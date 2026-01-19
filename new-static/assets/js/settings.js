// ========================================
// SETTINGS PAGE JAVASCRIPT
// ========================================

// Toggle section visibility
function toggleSection(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.toggle-icon');
  
  // Toggle active state
  button.classList.toggle('active');
  content.classList.toggle('collapsed');
  
  // Rotate icon
  if (content.classList.contains('collapsed')) {
    icon.style.transform = 'rotate(0deg)';
  } else {
    icon.style.transform = 'rotate(180deg)';
  }
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('settings-search');
  
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      const sections = document.querySelectorAll('.settings-section');
      
      sections.forEach(section => {
        const sectionTitle = section.querySelector('.section-title').textContent.toLowerCase();
        const items = section.querySelectorAll('.item-label');
        let hasMatch = false;
        
        // Check if section title matches
        if (sectionTitle.includes(searchTerm)) {
          hasMatch = true;
        }
        
        // Check if any item matches
        items.forEach(item => {
          const itemText = item.textContent.toLowerCase();
          const settingsItem = item.closest('.settings-item');
          
          if (itemText.includes(searchTerm) || searchTerm === '') {
            settingsItem.style.display = 'flex';
            if (searchTerm !== '') hasMatch = true;
          } else {
            settingsItem.style.display = 'none';
          }
        });
        
        // Show/hide section
        if (hasMatch || searchTerm === '') {
          section.style.display = 'block';
          // Expand section if searching
          if (searchTerm !== '') {
            const content = section.querySelector('.section-content');
            const button = section.querySelector('.section-header');
            content.classList.remove('collapsed');
            button.classList.add('active');
          }
        } else {
          section.style.display = 'none';
        }
      });
    });
  }
  
  // Initialize first section as expanded
  const firstSection = document.querySelector('.section-header');
  if (firstSection) {
    firstSection.classList.add('active');
    const firstContent = firstSection.nextElementSibling;
    if (firstContent) {
      firstContent.classList.remove('collapsed');
    }
  }
});

// Modal functions
function openBookieModal() {
  const modal = document.getElementById('bookieModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function openMarketsModal() {
  // Create markets modal if it doesn't exist
  const existingModal = document.getElementById('marketsModal');
  if (existingModal) {
    existingModal.classList.add('active');
    return;
  }
  
  const modalHTML = `
    <div class="modal" id="marketsModal">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Preferred Markets</h3>
          <button class="modal-close" onclick="closeModal('marketsModal')">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="checkbox-list">
            <label class="checkbox-item">
              <input type="checkbox" checked />
              <span class="checkbox-label">Match Result (1X2)</span>
            </label>
            <label class="checkbox-item">
              <input type="checkbox" checked />
              <span class="checkbox-label">Over/Under 2.5</span>
            </label>
            <label class="checkbox-item">
              <input type="checkbox" checked />
              <span class="checkbox-label">Both Teams to Score</span>
            </label>
            <label class="checkbox-item">
              <input type="checkbox" checked />
              <span class="checkbox-label">Double Chance</span>
            </label>
            <label class="checkbox-item">
              <input type="checkbox" />
              <span class="checkbox-label">Correct Score</span>
            </label>
            <label class="checkbox-item">
              <input type="checkbox" />
              <span class="checkbox-label">Half Time Result</span>
            </label>
            <label class="checkbox-item">
              <input type="checkbox" />
              <span class="checkbox-label">Asian Handicap</span>
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="modal-btn cancel" onclick="closeModal('marketsModal')">Cancel</button>
          <button class="modal-btn apply" onclick="applyMarketsSelection()">Apply</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  document.getElementById('marketsModal').classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

function applyBookieSelection() {
  const modal = document.getElementById('bookieModal');
  const checkboxes = modal.querySelectorAll('input[type="checkbox"]:checked');
  const count = checkboxes.length;
  
  // Update the display
  const valueSpan = document.querySelector('.settings-item.clickable[onclick="openBookieModal()"] .item-value');
  if (valueSpan) {
    valueSpan.textContent = `${count} selected`;
  }
  
  closeModal('bookieModal');
  showNotification('Comparison bookies updated');
}

function applyMarketsSelection() {
  const modal = document.getElementById('marketsModal');
  const checkboxes = modal.querySelectorAll('input[type="checkbox"]:checked');
  const count = checkboxes.length;
  
  // Update the display
  const valueSpan = document.querySelector('.settings-item.clickable[onclick="openMarketsModal()"] .item-value');
  if (valueSpan) {
    valueSpan.textContent = `${count} selected`;
  }
  
  closeModal('marketsModal');
  showNotification('Preferred markets updated');
}

// Save settings function
function saveSettings() {
  // Collect all settings
  const settings = {
    // General
    darkMode: document.getElementById('dark-mode')?.checked || false,
    fontSize: document.querySelector('.settings-group select')?.value || 'medium',
    
    // Language & Region
    language: document.querySelector('.settings-item .bi-translate').closest('.settings-item').querySelector('select')?.value || 'en',
    currency: document.querySelector('.settings-item .bi-cash-coin').closest('.settings-item').querySelector('select')?.value || 'ngn',
    dateFormat: document.querySelector('.settings-item .bi-calendar3').closest('.settings-item').querySelector('select')?.value || 'ddmmyyyy',
    timeFormat: document.querySelector('.settings-item .bi-clock').closest('.settings-item').querySelector('select')?.value || '12hr',
    
    // Betting Defaults
    defaultSourceBookie: document.querySelector('.settings-item .bi-box-arrow-in-right').closest('.settings-item').querySelector('select')?.value || 'sportybet',
    defaultTargetBookie: document.querySelector('.settings-item .bi-box-arrow-right').closest('.settings-item').querySelector('select')?.value || 'bet9ja',
    oddsFormat: document.querySelector('.settings-item .bi-bar-chart').closest('.settings-item').querySelector('select')?.value || 'decimal',
    
    // Bet Editor
    autoSave: document.querySelector('.settings-item .bi-save').closest('.settings-item').querySelector('input[type="checkbox"]')?.checked || false,
    defaultStake: document.querySelector('.settings-item .bi-cash').closest('.settings-item').querySelector('input[type="number"]')?.value || '100',
    betSaferSuggestions: document.querySelector('.settings-item .bi-shield-check').closest('.settings-item').querySelector('input[type="checkbox"]')?.checked || false,
    autoCalculateReturns: document.querySelector('.settings-item .bi-calculator').closest('.settings-item').querySelector('input[type="checkbox"]')?.checked || false,
    
    // Affiliates
    sportybetCode: document.querySelectorAll('.settings-item .bi-code-slash')[0]?.closest('.settings-item').querySelector('input[type="text"]')?.value || '',
    bet9jaCode: document.querySelectorAll('.settings-item .bi-code-slash')[1]?.closest('.settings-item').querySelector('input[type="text"]')?.value || '',
    onexbetCode: document.querySelectorAll('.settings-item .bi-code-slash')[2]?.closest('.settings-item').querySelector('input[type="text"]')?.value || '',
    autoAppendCodes: document.querySelector('.settings-item .bi-toggle-on').closest('.settings-item').querySelector('input[type="checkbox"]')?.checked || false,
    
    // Notifications
    pushNotifications: document.querySelector('.settings-item .bi-bell-fill').closest('.settings-item').querySelector('input[type="checkbox"]')?.checked || false,
    oddsChangeAlerts: document.querySelector('.settings-item .bi-graph-up').closest('.settings-item').querySelector('input[type="checkbox"]')?.checked || false,
    newPredictions: document.querySelector('.settings-item .bi-lightbulb').closest('.settings-item').querySelector('input[type="checkbox"]')?.checked || false,
    emailNotifications: document.querySelector('.settings-item .bi-envelope').closest('.settings-item').querySelector('input[type="checkbox"]')?.checked || false,
    
    // Privacy & Security
    biometricLogin: document.querySelector('.settings-item .bi-fingerprint').closest('.settings-item').querySelector('input[type="checkbox"]')?.checked || false,
    twoFactorAuth: document.querySelector('.settings-item .bi-shield-check').closest('.settings-item').querySelector('input[type="checkbox"]')?.checked || false,
    saveBettingHistory: document.querySelector('.settings-item .bi-clock-history').closest('.settings-item').querySelector('input[type="checkbox"]')?.checked || false,
    autoClearHistory: document.querySelector('.settings-item .bi-trash').closest('.settings-item').querySelector('select')?.value || 'never',
  };
  
  // Save to localStorage
  localStorage.setItem('appSettings', JSON.stringify(settings));
  
  // Apply dark mode if enabled
  if (settings.darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  
  showNotification('Settings saved successfully!');
}

// Load settings on page load
function loadSettings() {
  const savedSettings = localStorage.getItem('appSettings');
  if (!savedSettings) return;
  
  try {
    const settings = JSON.parse(savedSettings);
    
    // Apply dark mode
    if (settings.darkMode) {
      document.body.classList.add('dark-mode');
      const darkModeToggle = document.getElementById('dark-mode');
      if (darkModeToggle) darkModeToggle.checked = true;
    }
    
    // You can add more setting applications here
    console.log('Settings loaded:', settings);
  } catch (error) {
    console.error('Error loading settings:', error);
  }
}

// Show notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = `
    <i class="bi bi-check-circle"></i>
    <span>${message}</span>
  `;
  notification.style.cssText = `
    position: fixed;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    color: #fff;
    padding: 12px 24px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 10000;
    animation: slideDown 0.3s ease-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideUp 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Navigation function
function navigateTo(page) {
  window.location.href = page;
}

// Data management functions
function clearCache() {
  if (confirm('Are you sure you want to clear the cache? This will remove temporary data.')) {
    // Clear cache logic here
    localStorage.removeItem('cachedData');
    showNotification('Cache cleared successfully');
  }
}

function exportData() {
  const settings = localStorage.getItem('appSettings');
  const data = {
    settings: settings ? JSON.parse(settings) : {},
    exportDate: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'convertbetcodes-settings.json';
  a.click();
  URL.revokeObjectURL(url);
  
  showNotification('Data exported successfully');
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          if (data.settings) {
            localStorage.setItem('appSettings', JSON.stringify(data.settings));
            showNotification('Data imported successfully. Please reload the page.');
          }
        } catch (error) {
          showNotification('Error importing data. Please check the file.');
        }
      };
      reader.readAsText(file);
    }
  };
  
  input.click();
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
  }
`;
document.head.appendChild(style);

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
  loadSettings();
  
  // Add click handlers for data management buttons
  const clearCacheBtn = document.querySelector('.settings-item .bi-arrow-clockwise')?.closest('.settings-item').querySelector('.action-btn');
  if (clearCacheBtn) {
    clearCacheBtn.addEventListener('click', clearCache);
  }
  
  const exportBtn = document.querySelector('.settings-item .bi-download')?.closest('.settings-item').querySelector('.action-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportData);
  }
  
  const importBtn = document.querySelector('.settings-item .bi-upload')?.closest('.settings-item').querySelector('.action-btn');
  if (importBtn) {
    importBtn.addEventListener('click', importData);
  }
  
  // Dark mode toggle handler
  const darkModeToggle = document.getElementById('dark-mode');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  }
  
  // Close modals when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('active');
    }
  });
});

// Prevent default form submission
document.addEventListener('submit', function(e) {
  e.preventDefault();
});