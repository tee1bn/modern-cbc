// betviewer.js — minimal page script (static HTML for header & event cards)
(function(){
  const SAMPLE_CODE = 'PYDFRC';

  document.addEventListener('DOMContentLoaded', function(){
    const pasteBtn = document.getElementById('paste-code');
    const codeInput = document.getElementById('bet-code');
    const viewBtn = document.getElementById('view-bet');
    const noResults = document.getElementById('no-results');
    const betList = document.getElementById('bet-list');
    const headerDesktop = document.getElementById('btv-code');
    const headerMobile = document.getElementById('btv-code-mobile');

    if(pasteBtn && navigator.clipboard){
      pasteBtn.addEventListener('click', function(){
        navigator.clipboard.readText().then(text => {
          if(text) {
            codeInput.value = text.trim();
          } else {
            alert('Clipboard empty or no permission to read.');
          }
        }).catch(()=>{ alert('Unable to read clipboard'); });
      });
    }

    // if(viewBtn){
    //   viewBtn.addEventListener('click', function(){
    //     const val = (codeInput.value || '').trim().toUpperCase();
    //     if(val === SAMPLE_CODE){
    //       headerDesktop.textContent = SAMPLE_CODE + ' NG';
    //       headerMobile.textContent = SAMPLE_CODE;
    //       noResults.classList.add('d-none');
    //       betList.querySelectorAll('.game-card').forEach(el => el.classList.remove('d-none'));
    //     } else {
    //       headerDesktop.textContent = val || '—';
    //       headerMobile.textContent = val || '—';
    //       betList.querySelectorAll('.game-card').forEach(el => el.classList.add('d-none'));
    //       noResults.classList.remove('d-none');
    //     }
    //   });
    // }

    const shareBtn = document.getElementById('share-code');
    if(shareBtn && navigator.clipboard){
      shareBtn.addEventListener('click', function(){
        const code = headerMobile.textContent || headerDesktop.textContent || '';
        navigator.clipboard.writeText(code).then(()=>{ alert('Code copied to clipboard'); }).catch(()=>{ alert(code); });
      });
    }

    const loadBtn = document.getElementById('load-betslip');
    if(loadBtn){ loadBtn.addEventListener('click', function(){ alert('Load to betslip (static demo)'); }); }
  });
})();
