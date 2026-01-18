<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Bet Viewer - ConvertBetCodes</title>
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&amp;family=SUSE:wght@100..800&amp;display=swap"
      rel="stylesheet"
    />
    <script defer src="assets/js/app8051.js?bd1e16b080f637e63a80"></script>
    <link href="assets/css/app8051.css?bd1e16b080f637e63a80" rel="stylesheet" />
    <link rel="stylesheet" href="assets/css/main.css" />
    <link rel="stylesheet" href="assets/css/layouts.css">
    <link href="assets/css/betviewer.css" rel="stylesheet" />
  </head>

  <body>

      <!-- desktop nav -->
    <?php  include("layouts/Header.php") ?>

    <!-- tabs nav -->
     <?php  include("layouts/TabNabvs.php") ?>

    <!-- side menu -->
    <?php include("layouts/SideMenu.php")  ?>

    <!-- content -->
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
                stroke-width="2"
              />
            </svg>
            <p>Ad Space<br />300 x 600</p>
          </div>
        </div>
      </aside>

      <main class="adminuiux-content">
        <div class="betviewer">
          <div class="betviewer-columns">
            <!-- Left column: form -->
            <div class="btv-form">
              <label for="bet-code">Enter Bet Code</label>
              <div class="input-group">
                <input
                  id="bet-code"
                  class="form-control"
                  placeholder="Enter bet code (e.g. PYDFRC)"
                  aria-label="Bet code"
                />
                <button
                  id="paste-code"
                  class="btn btn-outline-secondary"
                  type="button"
                  title="Paste from clipboard"
                  aria-label="Paste from clipboard"
                >
                  <i class="bi bi-clipboard"></i>
                </button>
              </div>

              <label for="btv-bookie">Select Bookie</label>
              <select id="btv-bookie" class="form-select">
                <option>Sportybet</option>
                <option value="">Bet9ja</option>
                <option value="">1Xbet</option>
              </select>

              <div>
                <button id="view-bet" class="btn mt-2 mb-2 w-50" type="button">
                  Load
                </button>
              </div>

              <p class="text-muted">
                Enter your bet code above to view details and share with
                friends.
              </p>
            </div>

            <!-- Right column: results -->
            <div
              class="btv-results"
              role="region"
              aria-label="Bet details and results"
            >
              <!-- Mobile header card -->
              <div class="btv-header d-lg-none">
                <div class="btv-header-content">
                  <div class="btv-header-left">
                    <h5 id="btv-code-mobile">PYDFRC</h5>
                    <div class="small">
                      <span id="btv-events-count-mobile">6</span> Events ·
                      <span id="btv-bookie-name-mobile">Sportybet NG</span>
                    </div>
                  </div>
                  <div class="btv-header-middle">
                    <button
                      id="copy-code-mobile"
                      class="icon-btn"
                      type="button"
                      title="Copy code"
                      aria-label="Copy code"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                        />
                      </svg>
                    </button>
                    <button
                      id="share-code-mobile"
                      class="icon-btn"
                      type="button"
                      title="Share code"
                      aria-label="Share code"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div class="btv-header-right">
                    <div class="h4" id="btv-odds-mobile">4.39</div>
                    <div class="small">Total Odds</div>
                  </div>
                </div>
              </div>

              <!-- Desktop header -->
              <div class="btv-desktop-header d-none d-lg-block" style>
                <div class="btv-header-content">
                  <div class="btv-header-left">
                    <h5 id="btv-code">PYDFRC</h5>
                    <div class="btv-header-meta">
                      <span id="btv-events-count">6</span> events ·
                      <span id="btv-bookie-name">Sportybet NG</span>
                    </div>
                  </div>
                  <div class="btv-header-middle">
                    <span
                      id="copy-code"
                      class="icon-btn"
                      type="button"
                      title="Copy code"
                      aria-label="Copy code"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                        />
                      </svg>
                    </span>
                    <span
                      id="share-code"
                      class="icon-btn"
                      type="button"
                      title="Share code"
                      aria-label="Share code"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="btv-header-right">
                    <div class="h4" id="btv-odds">4.39</div>
                    <div class="small">Total Odds</div>
                  </div>
                </div>
              </div>
              <div id="bet-list">
                <!-- Game Card 1 - Over/Under (Short Market) -->
                <div class="game-card">
                  <!-- Row 1: Serial + Icon + League + Date -->
                  <div class="game-card-row1">
                    <div class="game-card-row1-left">
                      <span class="serial-number-inline">1</span>
                      <span class="game-league-name">Women Bundesliga</span>
                    </div>
                    <span class="game-datetime-compact"
                      >Sat 12/12/25 · 18:30</span
                    >
                  </div>

                  <!-- Row 2: Teams -->
                  <div class="game-card-row2">
                    <div class="game-teams-compact">
                      Werder Bremen vs Bayer Leverkusen
                    </div>
                    <div class="game-odds-compact">1.03</div>
                  </div>

                  <!-- Row 3: Market + Odds -->
                  <div class="game-card-row3">
                    <div class="game-market-compact">
                      <span class="game-market-name">Over/Under | Over 0.5</span>
                    </div>
                  </div>
                </div>

                <div class="game-card">
                  <!-- Row 1: Serial + Icon + League + Date -->
                  <div class="game-card-row1">
                    <div class="game-card-row1-left">
                      <span class="serial-number-inline">1</span>
                      <span class="game-league-name">Women Bundesliga</span>
                    </div>
                    <span class="game-datetime-compact"
                      >Sat 12/12/25 · 18:30</span
                    >
                  </div>

                  <!-- Row 2: Teams -->
                  <div class="game-card-row2">
                    <div class="game-teams-compact">
                      Werder Bremen vs Bayer Leverkusen
                    </div>
                    <div class="game-odds-compact">1.03</div>
                  </div>

                  <!-- Row 3: Market + Odds -->
                  <div class="game-card-row3">
                    <div class="game-market-compact">
                      <span class="game-market-name">Over/Under | Over 0.5</span>
                    </div>
                  </div>
                </div>

                <div class="game-card">
                  <!-- Row 1: Serial + Icon + League + Date -->
                  <div class="game-card-row1">
                    <div class="game-card-row1-left">
                      <span class="serial-number-inline">1</span>
                      <span class="game-league-name">Women Bundesliga</span>
                    </div>
                    <span class="game-datetime-compact"
                      >Sat 12/12/25 · 18:30</span
                    >
                  </div>

                  <!-- Row 2: Teams -->
                  <div class="game-card-row2">
                    <div class="game-teams-compact">
                      Werder Bremen vs Bayer Leverkusen
                    </div>
                    <div class="game-odds-compact">1.03</div>
                  </div>

                  <!-- Row 3: Market + Odds -->
                  <div class="game-card-row3">
                    <div class="game-market-compact">
                      <span class="game-market-name">Over/Under | Over 0.5</span>
                    </div>
                  </div>
                </div>

                <div class="game-card">
                  <!-- Row 1: Serial + Icon + League + Date -->
                  <div class="game-card-row1">
                    <div class="game-card-row1-left">
                      <span class="serial-number-inline">1</span>
                      <span class="game-league-name">Women Bundesliga</span>
                    </div>
                    <span class="game-datetime-compact"
                      >Sat 12/12/25 · 18:30</span
                    >
                  </div>

                  <!-- Row 2: Teams -->
                  <div class="game-card-row2">
                    <div class="game-teams-compact">
                      Werder Bremen vs Bayer Leverkusen
                    </div>
                    <div class="game-odds-compact">1.03</div>
                  </div>

                  <!-- Row 3: Market + Odds -->
                  <div class="game-card-row3">
                    <div class="game-market-compact">
                      <span class="game-market-name">Over/Under | Over 0.5</span>
                    </div>
                  </div>
                </div>

                <div class="game-card">
                  <!-- Row 1: Serial + Icon + League + Date -->
                  <div class="game-card-row1">
                    <div class="game-card-row1-left">
                      <span class="serial-number-inline">1</span>
                      <span class="game-league-name">Women Bundesliga</span>
                    </div>
                    <span class="game-datetime-compact"
                      >Sat 12/12/25 · 18:30</span
                    >
                  </div>

                  <!-- Row 2: Teams -->
                  <div class="game-card-row2">
                    <div class="game-teams-compact">
                      Werder Bremen vs Bayer Leverkusen
                    </div>
                    <div class="game-odds-compact">1.03</div>
                  </div>

                  <!-- Row 3: Market + Odds -->
                  <div class="game-card-row3">
                    <div class="game-market-compact">
                      <span class="game-market-name">Over/Under | Over 0.5</span>
                    </div>
                  </div>
                </div>

                <div class="game-card">
                  <!-- Row 1: Serial + Icon + League + Date -->
                  <div class="game-card-row1">
                    <div class="game-card-row1-left">
                      <span class="serial-number-inline">1</span>
                      <span class="game-league-name">Women Bundesliga</span>
                    </div>
                    <span class="game-datetime-compact"
                      >Sat 12/12/25 · 18:30</span
                    >
                  </div>

                  <!-- Row 2: Teams -->
                  <div class="game-card-row2">
                    <div class="game-teams-compact">
                      Werder Bremen vs Bayer Leverkusen
                    </div>
                    <div class="game-odds-compact">1.03</div>
                  </div>

                  <!-- Row 3: Market + Odds -->
                  <div class="game-card-row3">
                    <div class="game-market-compact">
                      <span class="game-market-name">Over/Under | Over 0.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
                stroke-width="2"
              />
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
  </body>
</html>
