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
          } else {
          }
        }).catch(()=>{ 
        });
      });
    }

    if(viewBtn){
      viewBtn.addEventListener('click', function(){
        const val = (codeInput.value || '').trim().toUpperCase();
        const selectedBookie = document.getElementById('btv-bookie').value || 'Sportybet';
        
        if(val === SAMPLE_CODE){
          updateHeader(SAMPLE_CODE, selectedBookie, 2, 4.39);
          // showResults();
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
      }); 
    }
  });



  // Copy to clipboard function
  function copyToClipboard(text) {
    if(navigator.clipboard){

    } else {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    }
  }

  function shareCode(code, bookie) {
    const shareText = `Check out my bet on ${bookie}! Code: ${code}`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: 'My Bet Code',
        text: shareText,
        url: shareUrl
      }).then(() => {
      }).catch((error) => {
        if (error.name !== 'AbortError') {
          copyToClipboard(shareText);
        }
      });
    } else {
      copyToClipboard(shareText);
    }
  }

})();