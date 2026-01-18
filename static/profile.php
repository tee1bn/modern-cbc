<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Profile - ConvertBetCodes</title>
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&amp;family=SUSE:wght@100..800&amp;display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
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
    <link rel="stylesheet" href="./assets/css/profile.css" />
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
        <div class="profile-container">

          <!-- User Info Section -->
          <div class="user-info-section">
            <div class="user-avatar">
              <i class="bi bi-person-circle"></i>
            </div>
            <div class="user-details">
              <h2 class="user-name">Login to View</h2>
              <p class="user-email">user@example.com</p>
            </div>
          </div>

          <!-- Balance Card -->
          <div class="balance-card">
            <div class="balance-header">
              <div class="balance-label">
                <i class="bi bi-eye"></i>
                <span>Status</span>
              </div>
              <button class="dark-mode-toggle">
                <i class="bi bi-moon-fill"></i>
                <span>Dark Mode</span>
              </button>
            </div>
            <div class="balance-amount">Active</div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button class="btn-action btn-subscribe">
              <i class="bi bi-credit-card"></i>
              <span>Subscribe</span>
            </button>
            <button class="btn-action btn-load">
              <i class="bi bi-upload"></i>
              <span>Load Bet</span>
            </button>
          </div>

          <!-- Menu List -->
          <div class="menu-list">
            <a href="#" class="menu-item">
              <div class="menu-item-left">
                <i class="bi bi-speedometer2"></i>
                <span>Dashboard</span>
              </div>
              <i class="bi bi-chevron-right"></i>
            </a>

            <a href="#" class="menu-item">
              <div class="menu-item-left">
                <i class="bi bi-code-slash"></i>
                <span>API</span>
              </div>
              <i class="bi bi-chevron-right"></i>
            </a>

            <a href="#" class="menu-item">
              <div class="menu-item-left">
                <i class="bi bi-box-seam"></i>
                <span>Orders</span>
              </div>
              <i class="bi bi-chevron-right"></i>
            </a>

            <a href="#" class="menu-item">
              <div class="menu-item-left">
                <i class="bi bi-puzzle"></i>
                <span>Applets(Widget)</span>
              </div>
              <i class="bi bi-chevron-right"></i>
            </a>

            <a href="#" class="menu-item">
              <div class="menu-item-left">
                <i class="bi bi-diagram-3"></i>
                <span>Affiliate</span>
              </div>
              <span class="badge-new">NEW</span>
              <i class="bi bi-chevron-right"></i>
            </a>

            <a href="#" class="menu-item">
              <div class="menu-item-left">
                <i class="bi bi-shield-lock"></i>
                <span>Change password</span>
              </div>
              <i class="bi bi-chevron-right"></i>
            </a>

            <a href="#" class="menu-item">
              <div class="menu-item-left">
                <i class="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </div>
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <!-- Customer Service -->
          <div class="customer-service">
            <div class="cs-left">
              <i class="bi bi-headset"></i>
              <span>Customer Service</span>
            </div>
            <div class="cs-right">
              <span class="cs-status">Online 24/7</span>
              <i class="bi bi-chevron-right"></i>
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
