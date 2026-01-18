<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Settings - ConvertBetCodes</title>
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&amp;family=SUSE:wght@100..800&amp;display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        --adminuiux-content-font: "Open Sans", sans-serif;
        --adminuiux-content-font-weight: 400;
        --adminuiux-title-font: "SUSE", sans-serif;
        --adminuiux-title-font-weight: 600;
      }
    </style>
    <script defer src="assets/js/app8051.js?bd1e16b080f637e63a80"></script>
    <link href="assets/css/app8051.css?bd1e16b080f637e63a80" rel="stylesheet" />
    <link rel="stylesheet" href="assets/css/main.css" />
    <link rel="stylesheet" href="assets/css/layouts.css">
    <link rel="stylesheet" href="assets/css/settings.css" />
  </head>

  <body>

    <!-- desktop nav -->
    <?php  include("layouts/Header.php") ?>

    <!-- tabs nav -->
     <?php  include("layouts/TabNabvs.php") ?>

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
                stroke-width="2"
              />
            </svg>
            <p>Ad Space<br />300 x 600</p>
          </div>
        </div>
      </aside>

      <main class="adminuiux-content">
        <div class="settings-page">
          <!-- Search Bar -->
          <div class="settings-search">
            <i class="bi bi-search search-icon"></i>
            <input
              type="text"
              class="search-input"
              placeholder="Search settings..."
              id="settings-search"
            />
          </div>

          <!-- Settings Content -->
          <div class="settings-content">
            <!-- General Section -->
            <div class="settings-section">
              <button class="section-header" onclick="toggleSection(this)">
                <div class="section-header-left">
                  <i class="bi bi-gear section-icon"></i>
                  <span class="section-title">General</span>
                </div>
                <i class="bi bi-chevron-down toggle-icon"></i>
              </button>

              <div class="section-content">
                <!-- Appearance -->
                <div class="settings-group">
                  <div class="group-title">Appearance</div>
                  <div class="settings-item">
                    <div class="item-left">
                      <i class="bi bi-moon"></i>
                      <span class="item-label">Dark Mode</span>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" id="dark-mode" />
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <!-- Language & Region -->
                <div class="settings-group">
                  <div class="group-title">Language & Region</div>
                  <div class="settings-item">
                    <div class="item-left">
                      <i class="bi bi-translate"></i>
                      <span class="item-label">Language</span>
                    </div>
                    <select class="settings-select">
                      <option value="en">English</option>
                      <option value="fr">Français</option>
                      <option value="es">Español</option>
                    </select>
                  </div>

                  <div class="settings-item">
                    <div class="item-left">
                      <i class="bi bi-cash-coin"></i>
                      <span class="item-label">Currency</span>
                    </div>
                    <select class="settings-select">
                      <option value="ngn">NGN (₦)</option>
                      <option value="usd">USD ($)</option>
                      <option value="eur">EUR (€)</option>
                      <option value="gbp">GBP (£)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <!-- Betting Defaults Section -->
            <div class="settings-section">
              <button class="section-header" onclick="toggleSection(this)">
                <div class="section-header-left">
                  <i class="bi bi-trophy section-icon"></i>
                  <span class="section-title">Betting Defaults</span>
                </div>
                <i class="bi bi-chevron-down toggle-icon"></i>
              </button>

              <div class="section-content collapsed">
                <!-- Bookmakers -->
                <div class="settings-group">
                  <div class="group-title">Bookmakers</div>

                  <div
                    class="settings-item clickable"
                    onclick="openBookieModal()"
                  >
                    <div class="item-left">
                      <i class="bi bi-list-check"></i>
                      <span class="item-label">Comparison Bookies</span>
                    </div>
                    <div class="item-right">
                      <span class="item-value">3 selected</span>
                      <i class="bi bi-chevron-right"></i>
                    </div>
                  </div>
                </div>

                <!-- Odds & Markets -->
                <div class="settings-group">
                  <div class="group-title">Odds & Markets</div>
                  <div class="settings-item">
                    <div class="item-left">
                      <i class="bi bi-bar-chart"></i>
                      <span class="item-label">Odds Format</span>
                    </div>
                    <select class="settings-select">
                      <option value="decimal" selected>Decimal</option>
                      <option value="fractional">Fractional</option>
                      <option value="american">American</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bet Editor Section -->
            <div class="settings-section">
              <button class="section-header" onclick="toggleSection(this)">
                <div class="section-header-left">
                  <i class="bi bi-pencil-square section-icon"></i>
                  <span class="section-title">Bet Editor</span>
                </div>
                <i class="bi bi-chevron-down toggle-icon"></i>
              </button>

              <div class="section-content collapsed">
                <div class="settings-group">
                  <div class="group-title">Editor Preferences</div>

                  <div class="settings-item">
                    <div class="item-left">
                      <i class="bi bi-shield-check"></i>
                      <span class="item-label">Bet Safer Suggestions</span>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" checked />
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Affiliates Section -->
            <div class="settings-section">
              <button class="section-header" onclick="toggleSection(this)">
                <div class="section-header-left">
                  <i class="bi bi-link-45deg section-icon"></i>
                  <span class="section-title">Affiliates</span>
                </div>
                <i class="bi bi-chevron-down toggle-icon"></i>
              </button>

              <div class="section-content collapsed">
                <div class="settings-group">
                  <div class="group-title">Affiliate Codes</div>

                  <div id="affiliate-codes-container">
                    <!-- First Row - Default -->
                    <div class="affiliate-code-row">
                      <select class="affiliate-select">
                        <option value="">Select Bookmaker</option>
                        <option value="sportybet">SportyBet</option>
                        <option value="bet9ja">Bet9ja</option>
                        <option value="1xbet">1xBet</option>
                        <option value="betking">BetKing</option>
                        <option value="22bet">22Bet</option>
                        <option value="nairabet">NairaBet</option>
                        <option value="betway">Betway</option>
                        <option value="msport">MSport</option>
                      </select>

                      <input
                        type="text"
                        class="affiliate-code-input"
                        placeholder="Enter affiliate code"
                      />

                      <button
                        class="affiliate-btn"
                        onclick="addAffiliateRow()"
                        type="button"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </button>

                      <button
                        class="affiliate-btn"
                        onclick="removeAffiliateRow(this)"
                        type="button"
                        disabled
                      >
                        <i class="bi bi-dash-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Privacy & Security Section -->
            <div class="settings-section">
              <button class="section-header" onclick="toggleSection(this)">
                <div class="section-header-left">
                  <i class="bi bi-shield-lock section-icon"></i>
                  <span class="section-title">Privacy & Security</span>
                </div>
                <i class="bi bi-chevron-down toggle-icon"></i>
              </button>

              <div class="section-content collapsed">
                <div class="settings-group">
                  <div class="group-title">Security Settings</div>
                  <div
                    class="settings-item clickable"
                    onclick="navigateTo('change-password.html')"
                  >
                    <div class="item-left">
                      <i class="bi bi-key"></i>
                      <span class="item-label">Change Password</span>
                    </div>
                    <i class="bi bi-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <!-- About Section -->
            <div class="settings-section" >
              <button class="section-header" onclick="toggleSection(this)">
                <div class="section-header-left">
                  <i class="bi bi-info-circle section-icon"></i>
                  <span class="section-title">About</span>
                </div>
                <i class="bi bi-chevron-down toggle-icon"></i>
              </button>

              <div class="section-content collapsed">
                <div class="settings-item clickable" style="margin-left: 10px;">
                  <div class="item-left">
                    <i class="bi bi-file-text"></i>
                    <span class="item-label">Terms of Service</span>
                  </div>
                  <i class="bi bi-chevron-right"></i>
                </div>

                <div class="settings-item clickable" style="margin-left: 10px;">
                  <div class="item-left">
                    <i class="bi bi-shield"></i>
                    <span class="item-label">Privacy Policy</span>
                  </div>
                  <i class="bi bi-chevron-right"></i>
                </div>

                <div class="settings-item clickable" style="margin-left: 10px;">
                  <div class="item-left">
                    <i class="bi bi-question-circle"></i>
                    <span class="item-label">Help & Support</span>
                  </div>
                  <i class="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <div class="settings-footer">
            <button class="save-btn" onclick="saveSettings()">
              <i class="bi bi-check-circle"></i>
              Save Changes
            </button>
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

    <!-- Multi-Select Modal -->
    <div class="modal" id="bookieModal">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Comparison Bookies</h3>
          <button class="modal-close" onclick="closeModal('bookieModal')">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="checkbox-list">
            <label class="checkbox-item">
              <input type="checkbox" checked />
              <span class="checkbox-label">SportyBet</span>
            </label>
            <label class="checkbox-item">
              <input type="checkbox" checked />
              <span class="checkbox-label">Bet9ja</span>
            </label>
            <label class="checkbox-item">
              <input type="checkbox" checked />
              <span class="checkbox-label">1xBet</span>
            </label>
            <label class="checkbox-item">
              <input type="checkbox" />
              <span class="checkbox-label">BetKing</span>
            </label>
            <label class="checkbox-item">
              <input type="checkbox" />
              <span class="checkbox-label">22Bet</span>
            </label>
            <label class="checkbox-item">
              <input type="checkbox" />
              <span class="checkbox-label">NairaBet</span>
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="modal-btn cancel" onclick="closeModal('bookieModal')">
            Cancel
          </button>
          <button class="modal-btn apply" onclick="applyBookieSelection()">
            Apply
          </button>
        </div>
      </div>
    </div>

    <!-- footer -->
    <?php include("layouts/Footer.php") ?>

    <!-- mobile nav -->
    <?php include("layouts/MobileNav.php") ?>

    <script src="assets/js/settings.js"></script>
    <script src="assets/js/app.js"></script>
  </body>
</html>
