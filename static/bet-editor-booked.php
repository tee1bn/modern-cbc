<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>Booked - ConvertBetCodes</title>
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&family=SUSE:wght@100..800&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --adminuiux-content-font: "Open Sans", sans-serif;
    }
    body {
      margin: 0;
      padding: 0;
      background: #f5f5f5;
      font-family: var(--adminuiux-content-font);
    }
  </style>
  <link rel="stylesheet" href="./assets/css/bet-editor-booked.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet">
</head>

<body>
  
  <div class="booked-container">
    
    <!-- Close Button (if used as modal) -->
    <button class="booked-close" id="close-btn" style="display: none;">
      <i class="bi bi-x-lg"></i>
    </button>

    <!-- Booked Card -->
    <div class="booked-card">
      
      <!-- Bookie Info -->
      <div class="booked-header">
        <div class="booked-bookie">sportybet:ng</div>
        <div class="booked-code">
          MWT2UR
          <button class="booked-copy-btn" id="copy-btn" title="Copy code">
            <i class="bi bi-clipboard"></i>
          </button>
        </div>
        <div class="booked-meta">5events @9.48odds</div>
      </div>

      <!-- Action Buttons -->
      <div class="booked-actions">
        <button class="booked-action-btn" id="load-btn">
          <i class="bi bi-plus-circle"></i>
          Load Code
        </button>
        <button class="booked-action-btn" id="add-btn">
          <i class="bi bi-plus-circle"></i>
          Add Game
        </button>
      </div>

  <!-- Shared betslip rail -->
  <div id="betslip-rail"></div>
      </div>

    </div>

    <!-- Book Button -->
    <button class="booked-book-btn" id="book-btn">
      Book <span class="booked-book-count">(5)</span>
    </button>

  </div>

  <script src="./components/betslip-rail.js"></script>
  <script>
    // Copy code to clipboard
    document.getElementById('copy-btn').addEventListener('click', () => {
      const codeEl = document.querySelector('.booked-code');
      const code = codeEl ? codeEl.firstChild.textContent.trim() : '';
      if (!code) return alert('No code to copy');
      navigator.clipboard.writeText(code).then(() => {
        alert('Code copied to clipboard!');
      }).catch(() => {
        alert('Failed to copy code');
      });
    });

    // Listen for booked events from shared rail
    document.addEventListener('betslip:booked', (e) => {
      const d = e && e.detail ? e.detail : {};
      const code = d.code || '';
      const bookie = d.bookie || '';
      if (code) {
        document.querySelector('.booked-code').childNodes[0].textContent = code + ' ';
      }
      if (bookie) {
        document.querySelector('.booked-bookie').textContent = bookie;
      }
      // update counts using editorBets
      const bets = JSON.parse(localStorage.getItem('editorBets') || '[]');
      if (bets.length > 0) {
        bets.forEach(b => { b.odds = b.odds || b.odd || ''; });
        const totalOdds = bets.reduce((acc, bet) => acc * (parseFloat(bet.odds) || 1), 1).toFixed(2);
        document.querySelector('.booked-odds-value').textContent = totalOdds;
        document.querySelector('.booked-meta').textContent = `${bets.length}events @${totalOdds}odds`;
        document.querySelector('.booked-book-count').textContent = `(${bets.length})`;
      }
    });

    // Keep counts updated when rail changes
    document.addEventListener('betslip:updated', (e) => {
      const bets = e && e.detail && e.detail.bets ? e.detail.bets : JSON.parse(localStorage.getItem('editorBets') || '[]');
      if (bets.length > 0) {
        bets.forEach(b => { b.odds = b.odds || b.odd || ''; });
        const totalOdds = bets.reduce((acc, bet) => acc * (parseFloat(bet.odds) || 1), 1).toFixed(2);
        document.querySelector('.booked-odds-value').textContent = totalOdds;
        document.querySelector('.booked-meta').textContent = `${bets.length}events @${totalOdds}odds`;
        document.querySelector('.booked-book-count').textContent = `(${bets.length})`;
      } else {
        document.querySelector('.booked-odds-value').textContent = '0';
        document.querySelector('.booked-meta').textContent = `0events @0odds`;
        document.querySelector('.booked-book-count').textContent = `(0)`;
      }
    });

    // Book button uses shared rail if available
    document.getElementById('book-btn').addEventListener('click', () => {
      if (window.betslipRail && window.betslipRail._bookAction) window.betslipRail._bookAction();
    });

    // Load Code button
    document.getElementById('load-btn').addEventListener('click', () => {
      window.location.href = 'bet-editor-load.html';
    });

    // Add Game button
    document.getElementById('add-btn').addEventListener('click', () => {
      window.location.href = 'bet-editor-add.html';
    });

    // Book button (opens bookie site)
    document.getElementById('book-btn').addEventListener('click', () => {
      // Open bookie website with code
      window.open('https://www.sportybet.com/ng/', '_blank');
    });

    // Close button (if used as modal)
    const closeBtn = document.getElementById('close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        window.location.href = 'bet-editor.html';
      });
    }

    // Load bet data from localStorage
    window.addEventListener('DOMContentLoaded', () => {
      const bets = JSON.parse(localStorage.getItem('editorBets') || '[]');
      if (bets.length > 0) {
        bets.forEach(b => { b.odds = b.odds || b.odd || ''; });
        const totalOdds = bets.reduce((acc, bet) => acc * (parseFloat(bet.odds) || 1), 1).toFixed(2);
        document.querySelector('.booked-odds-value').textContent = totalOdds;
        document.querySelector('.booked-meta').textContent = `${bets.length}events @${totalOdds}odds`;
        document.querySelector('.booked-book-count').textContent = `(${bets.length})`;
      }
    });
  </script>
</body>
</html>