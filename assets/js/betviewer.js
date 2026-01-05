// betviewer.js — Enhanced with copy/share functionality and dynamic updates
(function(){
  const SAMPLE_CODE = 'PYDFRC';

  // Sport icons mapping
  const sportIcons = {
    'soccer': '',
    'football': '',
    'basketball': '',
    'tennis': '',
    'baseball': '',
    'volleyball': '',
    'rugby': '',
    'hockey': '',
    'cricket': '',
    'boxing': '',
    'mma': '',
    'golf': '',
    'default': ''
  };

  document.addEventListener('DOMContentLoaded', function(){
    const pasteBtn = document.getElementById('paste-code');
    const codeInput = document.getElementById('bet-code');
    const viewBtn = document.getElementById('view-bet');
    const noResults = document.getElementById('no-results');
    const betList = document.getElementById('bet-list');
    
    // Header elements
    const headerDesktop = document.getElementById('btv-code');
    const headerMobile = document.getElementById('btv-code-mobile');
    const eventsCountDesktop = document.getElementById('btv-events-count');
    const eventsCountMobile = document.getElementById('btv-events-count-mobile');
    const bookieNameDesktop = document.getElementById('btv-bookie-name');
    const bookieNameMobile = document.getElementById('btv-bookie-name-mobile');
    const oddsDesktop = document.getElementById('btv-odds');
    const oddsMobile = document.getElementById('btv-odds-mobile');

    // Copy buttons (desktop and mobile)
    const copyBtnDesktop = document.getElementById('copy-code');
    const copyBtnMobile = document.getElementById('copy-code-mobile');
    
    // Share buttons (desktop and mobile)
    const shareBtnDesktop = document.getElementById('share-code');
    const shareBtnMobile = document.getElementById('share-code-mobile');

    // Paste button functionality
    if(pasteBtn && navigator.clipboard){
      pasteBtn.addEventListener('click', function(){
        navigator.clipboard.readText().then(text => {
          if(text) {
            codeInput.value = text.trim();
            // showToast('Code pasted from clipboard');
          } else {
            // showToast('Clipboard is empty', 'warning');
          }
        }).catch(()=>{ 
          // showToast('Unable to read clipboard', 'error'); 
        });
      });
    }

    // View bet button functionality
    if(viewBtn){
      viewBtn.addEventListener('click', function(){
        const val = (codeInput.value || '').trim().toUpperCase();
        const selectedBookie = document.getElementById('btv-bookie').value || 'Sportybet';
        
        if(val === SAMPLE_CODE){
          updateHeader(SAMPLE_CODE, selectedBookie, 2, 4.39);
          showResults();
        } else if(val) {
          updateHeader(val, selectedBookie, 0, 0);
          hideResults();
        } else {
          // showToast('Please enter a bet code', 'warning');
        }
      });
    }

    // Copy functionality for desktop
    if(copyBtnDesktop && navigator.clipboard){
      copyBtnDesktop.addEventListener('click', function(){
        const code = headerDesktop.textContent || '';
        copyToClipboard(code);
      });
    }

    // Copy functionality for mobile
    if(copyBtnMobile && navigator.clipboard){
      copyBtnMobile.addEventListener('click', function(){
        const code = headerMobile.textContent || '';
        copyToClipboard(code);
      });
    }

    // Share functionality for desktop
    if(shareBtnDesktop){
      shareBtnDesktop.addEventListener('click', function(){
        const code = headerDesktop.textContent || '';
        const bookie = bookieNameDesktop.textContent || '';
        shareCode(code, bookie);
      });
    }

    // Share functionality for mobile
    if(shareBtnMobile){
      shareBtnMobile.addEventListener('click', function(){
        const code = headerMobile.textContent || '';
        const bookie = bookieNameMobile.textContent || '';
        shareCode(code, bookie);
      });
    }

    // Load to betslip button
    const loadBtn = document.getElementById('load-betslip');
    if(loadBtn){ 
      loadBtn.addEventListener('click', function(){ 
        // showToast('Loading to betslip...', 'info');
        // This would connect to your actual betslip functionality
      }); 
    }
  });

  // Helper function to update header information
  function updateHeader(code, bookie, eventsCount, totalOdds) {
    const headerDesktop = document.getElementById('btv-code');
    const headerMobile = document.getElementById('btv-code-mobile');
    const eventsCountDesktop = document.getElementById('btv-events-count');
    const eventsCountMobile = document.getElementById('btv-events-count-mobile');
    const bookieNameDesktop = document.getElementById('btv-bookie-name');
    const bookieNameMobile = document.getElementById('btv-bookie-name-mobile');
    const oddsDesktop = document.getElementById('btv-odds');
    const oddsMobile = document.getElementById('btv-odds-mobile');

    if(headerDesktop) headerDesktop.textContent = code;
    if(headerMobile) headerMobile.textContent = code;
    if(eventsCountDesktop) eventsCountDesktop.textContent = eventsCount;
    if(eventsCountMobile) eventsCountMobile.textContent = eventsCount;
    if(bookieNameDesktop) bookieNameDesktop.textContent = bookie + ' NG';
    if(bookieNameMobile) bookieNameMobile.textContent = bookie + ' NG';
    if(oddsDesktop) oddsDesktop.textContent = totalOdds > 0 ? totalOdds.toFixed(2) : '—';
    if(oddsMobile) oddsMobile.textContent = totalOdds > 0 ? totalOdds.toFixed(2) : '—';
  }

  // Helper function to show results
  function showResults() {
    const noResults = document.getElementById('no-results');
    const betList = document.getElementById('bet-list');
    
    if(noResults) noResults.classList.add('d-none');
    if(betList) {
      betList.querySelectorAll('.game-card').forEach(el => el.classList.remove('d-none'));
    }
  }

  // Helper function to hide results
  function hideResults() {
    const noResults = document.getElementById('no-results');
    const betList = document.getElementById('bet-list');
    
    if(betList) {
      betList.querySelectorAll('.game-card').forEach(el => el.classList.add('d-none'));
    }
    if(noResults) noResults.classList.remove('d-none');
  }

  // Copy to clipboard function
  function copyToClipboard(text) {
    if(navigator.clipboard){
      navigator.clipboard.writeText(text).then(()=>{ 
        // showToast('Code copied to clipboard: ' + text, 'success');
      }).catch(()=>{ 
        // showToast('Failed to copy: ' + text, 'error'); 
      });
    } else {
      // Fallback for older browsers
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      // showToast('Code copied: ' + text, 'success');
    }
  }

  // Share function
  function shareCode(code, bookie) {
    const shareText = `Check out my bet on ${bookie}! Code: ${code}`;
    const shareUrl = window.location.href;

    // Try native Web Share API first (mobile)
    if (navigator.share) {
      navigator.share({
        title: 'My Bet Code',
        text: shareText,
        url: shareUrl
      }).then(() => {
        // showToast('Shared successfully', 'success');
      }).catch((error) => {
        if (error.name !== 'AbortError') {
          // Fallback to copy if share fails
          copyToClipboard(shareText);
        }
      });
    } else {
      // Fallback: copy to clipboard
      copyToClipboard(shareText);
    }
  }

  // Toast notification function
  function showToast(message, type = 'info') {
    // Check if a toast container exists
    let toastContainer = document.getElementById('toast-container');
    
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
      `;
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    
    const bgColor = type === 'success' ? '#333' : 
                    type === 'error' ? '#333' : 
                    type === 'warning' ? '#333' : '#333';
    
    toast.style.cssText = `
      background: ${bgColor};
      color: white;
      padding: 12px 20px;
      margin-bottom: 10px;
      border-radius: 4px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      font-size: 14px;
      animation: slideIn 0.3s ease-out;
    `;
    
    toast.textContent = message;
    toastContainer.appendChild(toast);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
      }
    `;
    if (!document.getElementById('toast-animations')) {
      style.id = 'toast-animations';
      document.head.appendChild(style);
    }

    // Auto remove after 3 seconds
    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => {
        toast.remove();
        // Remove container if empty
        if (toastContainer.children.length === 0) {
          toastContainer.remove();
        }
      }, 300);
    }, 3000);
  }
})();