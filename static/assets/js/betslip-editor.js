/* ==================== BetEditor Logic ==================== */
(function() {

  // Get elements
  const railToggle = document.getElementById('rail-toggle');
  const loadBtn = document.getElementById('rail-load-btn');
  const loadBackBtn = document.getElementById('load-back-btn');
  const loadCancelBtn = document.getElementById('empty-cancel-btn');
  const betslipView = document.getElementById('betslip-view');
  const loadFormView = document.getElementById('load-form-view');
  const expandBtn = document.getElementById('rail-expand-btn');
  const railContainer = document.querySelector('.rail-container');
  const overlay = document.querySelector('.rail-overlay');

  // Back button - close modal on mobile
  const backBtns = document.querySelectorAll('.back-btn');
  backBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
        railToggle.checked = false;
        railContainer.classList.remove('fullscreen');
      }
    });
  });

  // Overlay click - close modal
  if (overlay) {
    overlay.addEventListener('click', function() {
      railToggle.checked = false;
      railContainer.classList.remove('fullscreen');
    });
  }

  // Show/hide load form
  if (loadBtn) {
    loadBtn.addEventListener('click', function() {
      betslipView.style.display = 'none';
      loadFormView.style.display = 'block';
    });
  }

  if (loadBackBtn) {
    loadBackBtn.addEventListener('click', function(e) {
      e.preventDefault();
      loadFormView.style.display = 'none';
      betslipView.style.display = 'block';
    });
  }

  if (loadCancelBtn) {
    loadCancelBtn.addEventListener('click', function() {
      loadFormView.style.display = 'none';
      betslipView.style.display = 'block';
    });
  }

  // Expand/fullscreen toggle on mobile
  if (expandBtn && railContainer) {
    expandBtn.addEventListener('click', function() {
      railContainer.classList.toggle('fullscreen');
      
      // Update icon
      const icon = expandBtn.querySelector('i');
      if (railContainer.classList.contains('fullscreen')) {
        icon.classList.remove('bi-arrows-fullscreen');
        icon.classList.add('bi-fullscreen-exit');
        expandBtn.title = 'Exit Fullscreen';
      } else {
        icon.classList.add('bi-arrows-fullscreen');
        icon.classList.remove('bi-fullscreen-exit');
        expandBtn.title = 'Fullscreen';
      }
    });
  }

  // When badge is clicked, ensure fullscreen is removed
  const badge = document.querySelector('.rail-badge');
  if (badge) {
    badge.addEventListener('click', function() {
      railContainer.classList.remove('fullscreen');
      const icon = expandBtn?.querySelector('i');
      if (icon) {
        icon.classList.add('bi-arrows-fullscreen');
        icon.classList.remove('bi-fullscreen-exit');
      }
    });
  }
})();