// assets/js/profile.js

document.addEventListener('DOMContentLoaded', function() {
  
  // Back Button
  const backBtn = document.querySelector('.back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      // Navigate back or to home
      window.history.back();
      console.log('Back button clicked');
    });
  }

  // Close Button
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      window.location.href = '/';
      console.log('Close button clicked');
    });
  }

  // Dark Mode Toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const body = document.body;
  let isDarkMode = false;

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      isDarkMode = !isDarkMode;
      
      if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i><span>Light Mode</span>';
        // You can add more dark mode styling here
      } else {
        body.classList.remove('dark-mode');
        darkModeToggle.innerHTML = '<i class="bi bi-moon-fill"></i><span>Dark Mode</span>';
      }
      
      console.log('Dark mode:', isDarkMode);
    });
  }

  // Balance Toggle
  const balanceLabel = document.querySelector('.balance-label');
  const balanceAmount = document.querySelector('.balance-amount');
  let balanceVisible = false;

  if (balanceLabel) {
    const eyeIcon = balanceLabel.querySelector('i');
    
    balanceLabel.addEventListener('click', function(e) {
      if (e.target.closest('i')) {
        balanceVisible = !balanceVisible;
        
        if (balanceVisible) {
          balanceAmount.textContent = 'NGN 0.00';
          eyeIcon.className = 'bi bi-eye-slash';
        } else {
          balanceAmount.textContent = 'NGN -';
          eyeIcon.className = 'bi bi-eye';
        }
        
        console.log('Balance visibility:', balanceVisible);
      }
    });
  }

  // Subscribe Button
  const subscribeBtn = document.querySelector('.btn-subscribe');
  
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
      subscribeBtn.classList.add('loading');
      subscribeBtn.disabled = true;
      
      // Simulate API call
      setTimeout(function() {
        subscribeBtn.classList.remove('loading');
        subscribeBtn.disabled = false;
        console.log('Subscribe clicked');
        alert('Subscribe functionality - Coming soon!');
      }, 1000);
    });
  }

  // Load Bet Button
  const loadBtn = document.querySelector('.btn-load');
  
  if (loadBtn) {
    loadBtn.addEventListener('click', function() {
      loadBtn.classList.add('loading');
      loadBtn.disabled = true;
      
      // Simulate API call
      setTimeout(function() {
        loadBtn.classList.remove('loading');
        loadBtn.disabled = false;
        console.log('Load Bet clicked');
        alert('Load Bet functionality - Coming soon!');
      }, 1000);
    });
  }

  // Menu Items Click Handler
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const text = item.querySelector('.menu-item-left span').textContent;
      console.log('Menu clicked:', text);
      
      // Add visual feedback
      item.style.background = '#f0f0f0';
      setTimeout(function() {
        item.style.background = '';
      }, 200);
      
      // Handle specific menu items
      switch(text) {
        case 'View Profile':
          console.log('Navigate to profile');
          break;
        case 'Dashboard':
          console.log('Navigate to dashboard');
          break;
        case 'API':
          console.log('Navigate to API');
          break;
        case 'Orders':
          console.log('Navigate to orders');
          break;
        case 'Applets(Widget)':
          console.log('Navigate to applets');
          break;
        case 'Affiliate':
          console.log('Navigate to affiliate');
          break;
        case 'Change password':
          console.log('Open change password');
          break;
        case 'Sign Out':
          if (confirm('Are you sure you want to sign out?')) {
            console.log('User signed out');
            // Add sign out logic here
          }
          break;
      }
    });
  });

  // Customer Service Click Handler
  const customerService = document.querySelector('.customer-service');
  
  if (customerService) {
    customerService.addEventListener('click', function() {
      console.log('Opening Customer Service');
      alert('Customer Service - Available 24/7\n\nContact us at:\nsupport@example.com');
    });
  }

  // User Info Click Handler
  const userInfoSection = document.querySelector('.user-info-section');
  
  if (userInfoSection) {
    userInfoSection.addEventListener('click', function() {
      console.log('User info clicked - redirect to login');
      // Add login redirect logic here
    });
  }

  console.log('Profile page initialized successfully!');
});