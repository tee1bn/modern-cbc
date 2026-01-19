(function() {
  'use strict';

  // ==================== EXPAND/COLLAPSE ====================
  function attachEventListeners() {
    document.querySelectorAll('.code-expand-toggle').forEach(button => {
      button.addEventListener('click', function() {
        const codeId = this.dataset.codeId;
        const eventsContainer = document.querySelector(`.code-events[data-code-id="${codeId}"]`);
        
        if (eventsContainer) {
          const isExpanded = eventsContainer.classList.contains('expanded');
          
          if (isExpanded) {
            eventsContainer.classList.remove('expanded');
            this.classList.remove('expanded');
            this.querySelector('span').textContent = 'View Events';
          } else {
            eventsContainer.classList.add('expanded');
            this.classList.add('expanded');
            this.querySelector('span').textContent = 'Hide Events';
          }
        }
      });
    });
  }

  // ==================== SHARE CODE ====================
  window.shareCode = function(codeId) {
    const shareText = `Check out this betting code: ${codeId}`;
    const shareUrl = `https://convertbetcodes.com/code/${codeId}`;
    
    if (navigator.share) {
      navigator.share({ title: 'Betting Code', text: shareText, url: shareUrl })
        .catch(err => console.log('Share failed:', err));
    } else {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert('Code link copied to clipboard!');
      } else {
        alert(`Share this code: ${codeId}`);
      }
    }
  };

  // ==================== OPEN BOOKIE ====================
  window.openBookie = function(bookie, code) {
    const bookieUrls = {
      betbaba: 'https://www.betbaba.ng/',
      sportybet: 'https://www.sportybet.com/ng/',
      bet9ja: 'https://www.bet9ja.com/',
      '1xbet': 'https://www.1xbet.ng/',
      '22bet': 'https://www.22bet.ng/',
      betking: 'https://www.betking.ng/'
    };

    const url = bookieUrls[bookie] || '#';
    window.open(url, '_blank');
  };


  // ==================== INITIALIZATION ====================
  document.addEventListener('DOMContentLoaded', () => {
    attachEventListeners();
  });

})();