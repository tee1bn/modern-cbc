<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Upcoming Events - ConvertBetCodes</title>
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
    <link rel="stylesheet" href="assets/css/bet-editor.css" />
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
        <?php include("layouts/SideBarRight.php")  ?>
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
    <script src="assets/js/betslip-editor.js"></script>
    <script src="assets/js/filters.js"></script>
  </body>
</html>
