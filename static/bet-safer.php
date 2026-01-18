<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>Bet Safer - ConvertBetCodes</title>
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&family=SUSE:wght@100..800&display=swap"
    rel="stylesheet" />
  <style>
    :root {
      --adminuiux-content-font: "Open Sans", sans-serif;
    }
  </style>
  <script defer src="assets/js/app8051.js?bd1e16b080f637e63a80"></script>
  <link href="assets/css/app8051.css?bd1e16b080f637e63a80" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/main.css" />
  <link rel="stylesheet" href="assets/css/layouts.css">
  <link rel="stylesheet" href="assets/css/betslip-editor.css" />
  <link rel="stylesheet" href="assets/css/bet-safer.css" />
</head>

<body>
  <!-- desktop nav -->
  <?php include("layouts/Header.php") ?>

  <!-- tabs nav -->
  <?php include("layouts/TabNabvs.php") ?>

  <!-- side menu -->
  <?php include("layouts/SideMenu.php")  ?>

  <div class="adminuiux-wrap">
    <aside class="ad-sidebar-left">
      <div class="ad-container large">
        <div class="ad-placeholder">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke-width="2" />
          </svg>
          <p>Ad Space<br />300 x 600</p>
        </div>
      </div>
    </aside>

    <main class="adminuiux-content">
      <div class="bet-safer-page">
        <!-- ========== 1. INPUT SECTION ========== -->
        <div class="safer-input-section">
          <!-- Input Type Tabs -->
          <div class="safer-input-tabs">
            <button class="safer-input-tab active" data-input="betting-code">
              Betting Code
            </button>
            <button class="safer-input-tab" data-input="ticket-code">
              Ticket Code
            </button>
            <button class="safer-input-tab" data-input="bet-link">
              Bet Link
            </button>
            <button class="safer-input-tab" data-input="upload-file">
              Upload File
            </button>
          </div>

          <form id="safer-form">
            <!-- Betting Code Input (Default Active) -->
            <div id="betting-code-input" class="safer-input-content">
              <div class="safer-form-group">
                <label class="safer-form-label">Betting Code</label>
                <div class="safer-input-wrapper">
                  <input
                    type="text"
                    class="safer-form-input"
                    id="bet-code-field"
                    placeholder="Enter betting code"
                    required />
                  <button
                    type="button"
                    class="safer-paste-btn"
                    title="Paste from clipboard">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <rect
                        width="8"
                        height="4"
                        x="8"
                        y="2"
                        rx="1"
                        stroke-width="2" />
                      <path
                        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                        stroke-width="2" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="safer-form-group">
                <label class="safer-form-label">Origin Bookie</label>
                <select class="safer-form-select" id="origin-bookie" required>
                  <option value="">Select source bookie</option>
                  <option value="sportybet">SportyBet</option>
                  <option value="bet9ja">Bet9ja</option>
                  <option value="1xbet">1xBet</option>
                  <option value="betking">BetKing</option>
                  <option value="22bet">22bet</option>
                  <option value="nairabet">NairaBet</option>
                </select>
              </div>
            </div>

            <!-- Ticket Code Input (Hidden by default) -->
            <div
              id="ticket-code-input"
              class="safer-input-content"
              style="display: none">
              <div class="safer-form-group">
                <label class="safer-form-label">Ticket Code</label>
                <div class="safer-input-wrapper">
                  <input
                    type="text"
                    class="safer-form-input"
                    placeholder="Enter ticket code" />
                  <button type="button" class="safer-paste-btn">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <rect
                        width="8"
                        height="4"
                        x="8"
                        y="2"
                        rx="1"
                        stroke-width="2" />
                      <path
                        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                        stroke-width="2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Bet Link Input (Hidden by default) -->
            <div
              id="bet-link-input"
              class="safer-input-content"
              style="display: none">
              <div class="safer-form-group">
                <label class="safer-form-label">Bet Link</label>
                <div class="safer-input-wrapper">
                  <input
                    type="url"
                    class="safer-form-input"
                    placeholder="https://example.com/bet/123456" />
                  <button type="button" class="safer-paste-btn">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <rect
                        width="8"
                        height="4"
                        x="8"
                        y="2"
                        rx="1"
                        stroke-width="2" />
                      <path
                        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                        stroke-width="2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Upload File Input (Hidden by default) -->
            <div
              id="upload-file-input"
              class="safer-input-content"
              style="display: none">
              <div class="safer-form-group">
                <label class="safer-form-label">Upload Betting Slip</label>
                <div
                  class="safer-upload-area"
                  onclick="document.getElementById('safer-file-input').click()">
                  <svg
                    class="safer-upload-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <h3 class="safer-upload-title">
                    Browse Files or drag & drop here
                  </h3>
                  <p class="safer-upload-text">
                    JPEG, PNG, and CSV formats up to 2MB
                  </p>
                  <input
                    type="file"
                    id="safer-file-input"
                    style="display: none"
                    accept=".jpg,.jpeg,.png,.csv" />
                  <label for="safer-file-input" class="safer-browse-btn">Browse Files</label>
                </div>
              </div>
            </div>

            <button type="submit" class="safer-analyze-btn">
              <i class="bi bi-search"></i> Analyze Bet
            </button>
          </form>
        </div>

        <!-- Empty State (Shows before analysis) -->
        <div class="safer-empty-state" id="empty-state">
          <p class="safer-empty-text">
            Enter a bet code above to analyze and get safer alternatives
          </p>
        </div>

        <!-- ========== 2. RESULTS SECTION ========== -->
        <div class="safer-results" id="results-section">
          <!-- Results Header -->
          <div class="safer-results-header">
            <div class="header-text">
              <i class="bi bi-receipt"></i> Sportybet:
              <strong>BCGGtWfLW</strong>
            </div>
            <div class="header-text">2 events</div>
          </div>

          <!-- Event 1 -->
          <div class="safer-event-card">
            <!-- Event Header -->
            <div class="event-header">
              <div class="event-info">
                <span class="event-number">1</span>
                <i class="bi bi-dribbble"></i>
                <span class="event-match">Nottingham Forest vs Man City</span>
              </div>
            </div>

            <!-- Picks List -->
            <div class="picks-list">
              <!-- Original -->
              <label class="pick-item">
                <input
                  type="radio"
                  name="event-1"
                  value="original"
                  data-odds="1.5"
                  checked />
                <span class="pick-text">1x2: home @1.5</span>
              </label>

              <!-- Alternative 1 -->
              <label class="pick-item indent">
                <input
                  type="radio"
                  name="event-1"
                  value="alt-1"
                  data-odds="1.1" />
                <span class="pick-text">double chance: 1x @1.1</span>
              </label>

              <!-- Alternative 2 -->
              <label class="pick-item indent">
                <input
                  type="radio"
                  name="event-1"
                  value="alt-2"
                  data-odds="1.9" />
                <span class="pick-text">double chance: 12 @1.9</span>
              </label>

              <!-- Alternative 3 -->
              <label class="pick-item indent">
                <input
                  type="radio"
                  name="event-1"
                  value="alt-3"
                  data-odds="1.7" />
                <span class="pick-text">over/under: over 0.5 @1.7</span>
              </label>

              <!-- Alternative 4 -->
              <label class="pick-item indent">
                <input
                  type="radio"
                  name="event-1"
                  value="alt-4"
                  data-odds="1.9" />
                <span class="pick-text">total number: 1 or more @1.9</span>
              </label>
            </div>
          </div>

          <!-- Event 2 -->
          <div class="safer-event-card">
            <!-- Event Header -->
            <div class="event-header">
              <div class="event-info">
                <span class="event-number">2</span>
                <i class="bi bi-dribbble"></i>
                <span class="event-match">AC Milan vs Verona</span>
              </div>
            </div>

            <!-- Picks List -->
            <div class="picks-list">
              <!-- Original -->
              <label class="pick-item">
                <input
                  type="radio"
                  name="event-2"
                  value="original"
                  data-odds="1.39"
                  checked />
                <span class="pick-text">Exact goals: 5 @1.39</span>
              </label>

              <!-- Alternative 1 -->
              <label class="pick-item indent">
                <input
                  type="radio"
                  name="event-2"
                  value="alt-1"
                  data-odds="1.25" />
                <span class="pick-text">over/under: over 4-5 @1.25</span>
              </label>
            </div>
          </div>

          <!-- Bulk Actions -->
          <div class="bulk-actions">
            <button class="bulk-btn" id="select-highest">
              <i class="bi bi-arrow-up-circle"></i> Select Highest Odds
            </button>
            <button class="bulk-btn" id="select-lowest">
              <i class="bi bi-arrow-down-circle"></i> Select Lowest Odds
            </button>
          </div>

          <div
            class="odds-summary-box"
            id="odds-summary"
            style="display: none">
            <div class="summary-row">
              <span class="summary-label">Origin Odds:</span>
              <span class="summary-value" id="origin-total-odds">@0.00</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Selected Odds:</span>
              <span class="summary-value" id="selected-total-odds">@0.00</span>
            </div>
          </div>


          <!-- Add to Editor -->
          <button class="add-editor-btn" id="add-to-editor">
            <i class="bi bi-pencil-square"></i> Add to Bet Editor (2)
          </button>
        </div>
      </div>
    </main>

    <?php include("layouts/SideBarBetSafer.php")  ?>


    <aside class="ad-sidebar-right">
      <div class="ad-container large">
        <div class="ad-placeholder">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke-width="2" />
          </svg>
          <p>Ad Space<br />300 x 600</p>
        </div>
      </div>
    </aside>
  </div>

  <!-- footer -->
  <?php include("layouts/Footer.php") ?>

  <!-- mobile nav -->
  <?php include("layouts/MobileNav.php") ?>

  <script src="assets/js/app.js"></script>
  <script src="assets/js/betslip-editor.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.safer-input-tab').forEach(tab => {
        tab.addEventListener('click', handleTabSwitch);
      });
    });

    function handleTabSwitch(e) {
      const inputType = this.dataset.input;

      document.querySelectorAll('.safer-input-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      document.querySelectorAll('.safer-input-content').forEach(c => c.style.display = 'none');

      const target = document.getElementById(`${inputType}-input`);
      if (target) target.style.display = 'block';
    }
  </script>
</body>

</html>