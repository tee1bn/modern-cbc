<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>Sports Predictions - ConvertBetCodes</title>
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
  <link rel="stylesheet" href="assets/css/filters.css" />
  <link rel="stylesheet" href="assets/css/predictions.css" />
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
      <div class="predictions-page">

        <!-- filter -->
        <?php include("layouts/PredictionFilter.php") ?>

        <!-- Page Info -->
        <div class="predictions-page-info" id="page-info">
          Page 1, Showing 25/80
        </div>

        <!-- Empty State -->
        <div class="predictions-empty" id="empty-state" style="display: none">
          <p class="predictions-empty-text">
            No predictions found. Try adjusting your filters.
          </p>
        </div>

        <!-- Predictions List -->
        <div class="predictions-list" id="predictions-list">
          <!-- DFB Pokal -->
          <div class="league-group">
            <div class="league-header">
              <div class="league-info">
                <i class="bi bi-chevron-down toggle-icon"></i>
                <span class="league-name">DFB POKAL</span>
                <span class="event-count">2 predictions</span>
              </div>
            </div>

            <div class="league-events">
              <div class="prediction-card">
                <div class="prediction-card-content">
                  <div class="prediction-teams-row">
                    <div class="prediction-teams">Brondby vs Copenhagen</div>
                  </div>

                  <div class="prediction-market">Over/Under: Over</div>

                  <div class="prediction-meta">
                    <span class="prediction-date">Feb 8, 18:00 utc</span>
                  </div>
                </div>

                <div class="prediction-actions">
                  <div class="prediction-odd">1.25</div>
                  <div class="prediction-action-icons">
                    <button class="prediction-add-btn" title="Add to Betslip">
                      <i class="bi bi-plus-lg"></i>
                    </button>
                    <div class="prediction-likes-btn" title="Popularity">
                      <i class="bi bi-fire"></i>
                      <span>67</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Denmark Superliga -->
          <div class="league-group">
            <div class="league-header collapsed">
              <div class="league-info">
                <i class="bi bi-chevron-down toggle-icon"></i>
                <span class="league-name">DENMARK. SUPERLIGA</span>
                <span class="event-count">1 prediction</span>
              </div>
            </div>

            <div class="league-events">
              <div class="prediction-card">
                <div class="prediction-card-content">
                  <div class="prediction-teams-row">
                    <div class="prediction-teams">Brondby vs Copenhagen</div>
                  </div>

                  <div class="prediction-market">Over/Under: Over</div>

                  <div class="prediction-meta">
                    <span class="prediction-date">Feb 8, 18:00 utc</span>
                  </div>
                </div>

                <div class="prediction-actions">
                  <div class="prediction-odd">1.25</div>
                  <div class="prediction-action-icons">
                    <button class="prediction-add-btn" title="Add to Betslip">
                      <i class="bi bi-plus-lg"></i>
                    </button>
                    <div class="prediction-likes-btn" title="Popularity">
                      <i class="bi bi-fire"></i>
                      <span>67</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="prediction-card">
                <div class="prediction-card-content">
                  <div class="prediction-teams-row">
                    <div class="prediction-teams">Brondby vs Copenhagen</div>
                  </div>

                  <div class="prediction-market">Over/Under: Over</div>

                  <div class="prediction-meta">
                    <span class="prediction-date">Feb 8, 18:00 utc</span>
                  </div>
                </div>

                <div class="prediction-actions">
                  <div class="prediction-odd">1.25</div>
                  <div class="prediction-action-icons">
                    <button class="prediction-add-btn" title="Add to Betslip">
                      <i class="bi bi-plus-lg"></i>
                    </button>
                    <div class="prediction-likes-btn" title="Popularity">
                      <i class="bi bi-fire"></i>
                      <span>67</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- UEFA Champions League -->
          <div class="league-group">
            <div class="league-header collapsed">
              <div class="league-info">
                <i class="bi bi-chevron-down toggle-icon"></i>
                <span class="league-name">UEFA CHAMPIONS LEAGUE</span>
                <span class="event-count">2 predictions</span>
              </div>
            </div>

            <div class="league-events">
              <div class="prediction-card">
                <div class="prediction-card-content">
                  <div class="prediction-teams-row">
                    <div class="prediction-teams">Brondby vs Copenhagen</div>
                  </div>

                  <div class="prediction-market">Over/Under: Over</div>

                  <div class="prediction-meta">
                    <span class="prediction-date">Feb 8, 18:00 utc</span>
                  </div>
                </div>

                <div class="prediction-actions">
                  <div class="prediction-odd">1.25</div>
                  <div class="prediction-action-icons">
                    <button class="prediction-add-btn" title="Add to Betslip">
                      <i class="bi bi-plus-lg"></i>
                    </button>
                    <div class="prediction-likes-btn" title="Popularity">
                      <i class="bi bi-fire"></i>
                      <span>67</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="prediction-card">
                <div class="prediction-card-content">
                  <div class="prediction-teams-row">
                    <div class="prediction-teams">Brondby vs Copenhagen</div>
                  </div>

                  <div class="prediction-market">Over/Under: Over</div>

                  <div class="prediction-meta">
                    <span class="prediction-date">Feb 8, 18:00 utc</span>
                  </div>
                </div>

                <div class="prediction-actions">
                  <div class="prediction-odd">1.25</div>
                  <div class="prediction-action-icons">
                    <button class="prediction-add-btn" title="Add to Betslip">
                      <i class="bi bi-plus-lg"></i>
                    </button>
                    <div class="prediction-likes-btn" title="Popularity">
                      <i class="bi bi-fire"></i>
                      <span>67</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Links -->
        <div class="predictions-bottom-links">
          <div class="predictions-link-group">
            <a href="#" class="predictions-link">Asian handicap (5)</a>
            <a href="#" class="predictions-link">Double chance (75)</a>
          </div>
          <div class="predictions-link-group">
            <a href="#" class="predictions-link">European handicap (7)</a>
            <a href="#" class="predictions-link">1x2 (419)</a>
          </div>
        </div>

        <!-- Pagination -->
        <div class="predictions-pagination">
          <button class="pagination-btn" disabled>
            <i class="bi bi-chevron-double-left"></i>
          </button>
          <button class="pagination-btn" disabled>
            <i class="bi bi-chevron-left"></i>
            <span class="pagination-text">Prev</span>
          </button>
          <button class="pagination-btn active">1</button>
          <button class="pagination-btn">2</button>
          <button class="pagination-btn">3</button>
          <button class="pagination-btn">4</button>
          <button class="pagination-btn">
            <span class="pagination-text">Next</span>
            <i class="bi bi-chevron-right"></i>
          </button>
          <button class="pagination-btn">
            <i class="bi bi-chevron-double-right"></i>
          </button>
        </div>
      </div>
    </main>

    <!-- Bet editor -->
    <aside class="sidebar-right">
      <?php include("layouts/SideBarRight.php")  ?>
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
  <script >
    function initLeagueCollapse() {
      document.addEventListener("click", function(e) {
        const leagueHeader = e.target.closest(".league-header");
        if (leagueHeader) {
          const toggleIcon = leagueHeader.querySelector(".toggle-icon");

          // Only toggle collapsed on header, NOT on events
          leagueHeader.classList.toggle("collapsed");

          if (toggleIcon) {
            toggleIcon.classList.toggle("rotated");
          }
        }
      });


      const leagueGroups = document.querySelectorAll(".league-group");
      leagueGroups.forEach((group, index) => {
        const header = group.querySelector(".league-header");
        const events = group.querySelector(".league-events");
        const toggleIcon = group.querySelector(".toggle-icon");

        if (header && events) {
          if (index === 0) {
            header.classList.remove("collapsed");
          } else {
            header.classList.add("collapsed");
          }
        }
      });

    }
    document.addEventListener("DOMContentLoaded", initLeagueCollapse);
  </script>
</body>

</html>