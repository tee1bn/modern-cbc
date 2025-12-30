
    // Input type tab switching
    document.querySelectorAll('.safer-input-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        const inputType = this.dataset.input;
        
        // Update active tab
        document.querySelectorAll('.safer-input-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Hide all input content
        document.querySelectorAll('.safer-input-content').forEach(content => {
          content.style.display = 'none';
        });
        
        // Show selected input type
        document.getElementById(`${inputType}-input`).style.display = 'block';
        
        // Hide auto-detect for now
        document.getElementById('auto-detect').style.display = 'none';
      });
    });

    // Paste button functionality
    document.querySelectorAll('.safer-paste-btn').forEach(btn => {
      btn.addEventListener('click', async function() {
        try {
          const text = await navigator.clipboard.readText();
          const input = this.previousElementSibling;
          if (input && text) {
            input.value = text.trim();
            input.focus();
            
            // Trigger auto-detect
            simulateAutoDetect(text.trim());
          }
        } catch (err) {
          console.log('Failed to read clipboard:', err);
          alert('Please paste manually (Ctrl+V or Cmd+V)');
        }
      });
    });

    // File upload display
    const fileInput = document.getElementById('safer-file-input');
    if (fileInput) {
      fileInput.addEventListener('change', function(e) {
        const fileName = e.target.files[0]?.name;
        if (fileName) {
          const uploadTitle = document.querySelector('.safer-upload-title');
          uploadTitle.textContent = `Selected: ${fileName}`;
        }
      });
    }

    // Auto-detect simulation (replace with real API call)
    function simulateAutoDetect(code) {
      // Mock auto-detection logic
      const bookiePatterns = {
        'sportybet': /^[A-Z0-9]{6}$/i,
        'bet9ja': /^[0-9]{8,10}$/,
        '1xbet': /^[A-Z0-9]{8,12}$/i,
        '22bet': /^[A-Z0-9]{7,10}$/i
      };
      
      let detectedBookie = null;
      
      // Simple pattern matching
      if (code.length === 6 && /^[A-Z0-9]+$/i.test(code)) {
        detectedBookie = 'Sportybet Nigeria';
      } else if (code.length >= 8 && /^[0-9]+$/.test(code)) {
        detectedBookie = 'Bet9ja Nigeria';
      } else if (code.length >= 8 && /^[A-Z0-9]+$/i.test(code)) {
        detectedBookie = '1xBet';
      }
      
      if (detectedBookie) {
        document.getElementById('detected-bookie').textContent = detectedBookie;
        document.getElementById('auto-detect').style.display = 'flex';
        document.getElementById('source-bookie-group').style.display = 'none';
      } else {
        document.getElementById('auto-detect').style.display = 'none';
        document.getElementById('source-bookie-group').style.display = 'block';
      }
    }

    // Manual input trigger auto-detect
    document.getElementById('bet-code-field').addEventListener('input', function(e) {
      const value = e.target.value.trim();
      if (value.length >= 6) {
        simulateAutoDetect(value);
      } else {
        document.getElementById('auto-detect').style.display = 'none';
      }
    });

    // Form submission
    document.getElementById('safer-form').addEventListener('submit', (e) => {
      e.preventDefault();
      
      const activeTab = document.querySelector('.safer-input-tab.active').dataset.input;
      let inputValue = '';
      
      // Get value based on active tab
      if (activeTab === 'betting-code') {
        inputValue = document.getElementById('bet-code-field').value.trim();
      } else if (activeTab === 'ticket-code') {
        inputValue = document.querySelector('#ticket-code-input input').value.trim();
      } else if (activeTab === 'bet-link') {
        inputValue = document.querySelector('#bet-link-input input').value.trim();
      } else if (activeTab === 'upload-file') {
        const file = document.getElementById('safer-file-input').files[0];
        if (!file) {
          alert('Please select a file to upload');
          return;
        }
        inputValue = file.name;
      }
      
      if (!inputValue) {
        alert('Please enter a value');
        return;
      }
      
      // Show auto-detect if not already shown
      if (activeTab === 'betting-code' || activeTab === 'ticket-code') {
        simulateAutoDetect(inputValue);
      }
      
      // Hide empty state, show results
      document.getElementById('empty-state').style.display = 'none';
      document.getElementById('results-section').style.display = 'block';
      document.getElementById('footer-actions').style.display = 'flex';
      document.getElementById('share-section').style.display = 'block';
      
      // Scroll to results
      document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Accept individual suggestion
    document.querySelectorAll('.btn-accept').forEach(btn => {
      btn.addEventListener('click', function() {
        const card = this.closest('.safer-selection-card');
        const saferAlt = card.querySelector('.safer-alternative');
        saferAlt.style.background = '#f5f5f5';
        saferAlt.style.borderColor = '#000';
        this.innerHTML = '<i class="bi bi-check-lg"></i> Accepted';
        this.disabled = true;
        this.style.opacity = '0.6';
      });
    });

    // Accept all suggestions
    document.getElementById('accept-all-btn').addEventListener('click', () => {
      document.querySelectorAll('.btn-accept:not(:disabled)').forEach(btn => {
        btn.click();
      });
    });

    // Generate safer code
    document.getElementById('generate-code-btn').addEventListener('click', () => {
      alert('Generating safer code... (API integration needed)');
    });

    // Add to bet editor
    document.getElementById('add-editor-btn').addEventListener('click', () => {
      const mockBets = [
        {
          market: 'Double Chance: 1X @1.55',
          league: 'soccer, Premier League',
          teams: 'Liverpool vs Man City',
          datetime: 'Sat December.28.25, 17:30',
          odds: '1.55',
          selected: true
        },
        {
          market: 'Over/Under: Over 1.5 @1.30',
          league: 'soccer, Premier League',
          teams: 'Chelsea vs Arsenal',
          datetime: 'Sat December.28.25, 15:00',
          odds: '1.30',
          selected: true
        },
        {
          market: 'Double Chance: 1X @1.15',
          league: 'soccer, La Liga',
          teams: 'Barcelona vs Getafe',
          datetime: 'Sat December.28.25, 20:00',
          odds: '1.15',
          selected: true
        },
        {
          market: 'Over/Under: Over 1.5 @1.25',
          league: 'soccer, La Liga',
          teams: 'Real Madrid vs Atletico Madrid',
          datetime: 'Sun December.29.25, 19:00',
          odds: '1.25',
          selected: true
        }
      ];

      if (window.betslipRail && window.betslipRail.addSelection) {
        mockBets.forEach((b, i) => {
          const sel = { matchId: 'safer-'+Date.now()+'-'+i, teams: b.teams, date: b.datetime, market: (b.market||'').split(':')[0] || '1x2', value: (b.market||'').split(':')[1] ? (b.market.split(':')[1].split('@')[0].trim()) : 'home', odd: b.odds };
          window.betslipRail.addSelection(sel);
        });
      } else {
        localStorage.setItem('editorBets', JSON.stringify(mockBets));
      }
      // window.location.href = 'bet-editor.html';
    });

    // Copy share link
    document.getElementById('copy-link-btn').addEventListener('click', () => {
      const shareLink = document.getElementById('share-link');
      shareLink.select();
      navigator.clipboard.writeText(shareLink.value).then(() => {
        const btn = document.getElementById('copy-link-btn');
        btn.innerHTML = '<i class="bi bi-check-lg"></i> Copied!';
        setTimeout(() => {
          btn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
        }, 2000);
      });
    });
