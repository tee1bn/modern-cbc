<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Multi Maker - ConvertBetCodes</title>
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&amp;family=SUSE:wght@100..800&amp;display=swap"
    rel="stylesheet" />
  <script defer src="assets/js/app8051.js?bd1e16b080f637e63a80"></script>
  <link href="assets/css/app8051.css?bd1e16b080f637e63a80" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/main.css" />
  <link rel="stylesheet" href="assets/css/layouts.css">
  <link rel="stylesheet" href="assets/css/betslip-editor.css" />
  <link rel="stylesheet" href="assets/css/filters.css" />
  <link rel="stylesheet" href="assets/css/multi-maker.css" />

</head>

<body>

  <!-- desktop nav -->
  <?php include("layouts/Header.php") ?>

  <!-- tabs nav -->
  <?php include("layouts/TabNabvs.php") ?>

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
              stroke-width="2" />
          </svg>
          <p>Ad Space<br />300 x 600</p>
        </div>
      </div>
    </aside>

    <main class="adminuiux-content">

      <!-- filters -->
      <?php include("layouts/MultiMakerFilter.php") ?>

      <div class="matches-container" id="matches-list">
        <!-- Match Card 1 -->
        <div class="match-card">
          <div class="match-header">
            <div class="match-selection">
              <i class="bi bi-circle-fill"></i>
              <span>1X2 | Home</span>
            </div>
          </div>
          <div class="match-content">
            <button class="match-remove">
              <i class="bi bi-x-lg"></i>
            </button>

            <div class="match-details">
              <div class="match-outcome-row">
                <div class="match-teams">Morocco vs Mali</div>
              </div>
              <div class="match-datetime">26/12 Fri 21:00</div>
            </div>
            <div class="match-odd-box">1.54</div>
            <label class="match-checkbox">
              <input type="checkbox" class="match-check-input" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <!-- Match Card 2 -->
        <div class="match-card">
          <div class="match-header">
            <div class="match-selection">
              <i class="bi bi-circle-fill"></i>
              <span>1X2 | Away</span>
            </div>
          </div>
          <div class="match-content">
            <button class="match-remove">
              <i class="bi bi-x-lg"></i>
            </button>

            <div class="match-details">
              <div class="match-outcome-row">
                <div class="match-teams">Nottingham Forest vs Man City</div>
              </div>
              <div class="match-datetime">27/12 Sat 13:30</div>
            </div>
            <div class="match-odd-box">1.62</div>
            <label class="match-checkbox">
              <input type="checkbox" class="match-check-input" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <!-- Match Card 3 -->
        <div class="match-card">
          <div class="match-header">
            <div class="match-selection">
              <i class="bi bi-circle-fill"></i>
              <span>1X2 | Home</span>
            </div>
          </div>
          <div class="match-content">
            <button class="match-remove">
              <i class="bi bi-x-lg"></i>
            </button>

            <div class="match-details">
              <div class="match-outcome-row">
                <div class="match-teams">AC Milan vs Verona</div>
              </div>
              <div class="match-datetime">28/12 Sun 12:30</div>
            </div>
            <div class="match-odd-box">1.39</div>
            <label class="match-checkbox">
              <input type="checkbox" class="match-check-input">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <!-- Match Card 4 -->
        <div class="match-card">
          <div class="match-header">
            <div class="match-selection">
              <i class="bi bi-circle-fill"></i>
              <span>1X2 | Home</span>
            </div>
          </div>
          <div class="match-content">
            <button class="match-remove">
              <i class="bi bi-x-lg"></i>
            </button>

            <div class="match-details">
              <div class="match-outcome-row">
                <div class="match-teams">Liverpool vs Wolves</div>
              </div>
              <div class="match-datetime">27/12 Sat 16:00</div>
            </div>
            <div class="match-odd-box">1.28</div>
            <label class="match-checkbox">
              <input type="checkbox" class="match-check-input" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <!-- Match Card 5 -->
        <div class="match-card">
          <div class="match-header">
            <div class="match-selection">
              <i class="bi bi-circle-fill"></i>
              <span>1X2 | Away</span>
            </div>
          </div>
          <div class="match-content">
            <button class="match-remove">
              <i class="bi bi-x-lg"></i>
            </button>

            <div class="match-details">
              <div class="match-outcome-row">
                <div class="match-teams">Chelsea vs Arsenal</div>
              </div>
              <div class="match-datetime">28/12 Sun 15:00</div>
            </div>
            <div class="match-odd-box">2.10</div>
            <label class="match-checkbox">
              <input type="checkbox" class="match-check-input" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <!-- bottom action -->
        <div class="bottom-actions">
          <div class="actions-top">
            <div class="selections-info">
              Selections
              <span class="selections-count" id="selections-count">0</span>
            </div>
            <div class="total-odds">
              Total Odds <span id="total-odds">0.00</span>
            </div>
            <div class="action-icons">
              <button
                class="action-icon-btn"
                id="refresh-btn"
                title="Refresh">
                <i class="bi bi-arrow-clockwise"></i>
              </button>
              <button
                class="action-icon-btn"
                id="remove-all-btn"
                title="Remove All">
                <i class="bi bi-x-lg"></i>
              </button>
              <div class="select-all-wrapper">
                <label class="master-checkbox">
                  <input type="checkbox" class="master-check-input" id="select-all">
                  <span class="master-checkmark"></span>
                </label>
                <label for="select-all" class="select-all-label">Select All</label>
              </div>
            </div>
          </div>
          <div class="actions-bottom">
            <div class="add-selections-group">
              <input
                type="number"
                id="add-count-input"
                class="add-count-input"
                value="2"
                min="1"
                max="50" />
              <button class="add-selections-btn" id="add-more-btn">
                Add Selections
              </button>
            </div>
            <button class="add-betslip-btn" id="add-to-betslip">
              Add to Betslip
            </button>
          </div>
        </div>
      </div>
    </main>

    <aside class="sidebar-right">
      <?php include("layouts/SideBarRight.php") ?>
    </aside>

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
  <script src="assets/js/filters.js"></script>
</body>

</html>