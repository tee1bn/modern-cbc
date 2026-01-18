<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Pricing - ConvertBetCodes</title>
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
    <link rel="stylesheet" href="assets/css/pricing.css" />
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
        <div class="pricing-container">
          <!-- Hero Section -->
          <section class="pricing-hero">
            <h1 class="hero-title">Plans</h1>
            <p class="hero-subtitle">
              **Change the currency at the top-right to your preference.
            </p>

            <!-- Billing Toggle -->
            <div class="billing-toggle">
              <button class="toggle-btn active" data-interval="monthly">
                monthly
              </button>
              <button class="toggle-btn" data-interval="yearly">yearly</button>
            </div>
          </section>

          <!-- Regular Plans Section -->
          <div class="section-header">
            <div class="section-label">SUBSCRIPTION PLANS</div>
            <h2 class="section-title">Regular</h2>
          </div>

          <section class="pricing-plans">
            <!-- Plan: Dl -->
            <div class="plan-card" data-plan="dl">
              <div class="plan-header">
                <h3 class="plan-name">Dl</h3>
                <span class="plan-badge">Popular</span>
              </div>

              <div class="plan-pricing">
                <span class="plan-price" data-monthly="10" data-yearly="100"
                  >$10</span
                >
                <span class="plan-validity">30 days validity</span>
              </div>

              <div class="plan-features">
                <div class="feature-item">
                  <span class="feature-label">Allowed Bookies</span>
                  <span class="feature-value unlimited">Unlimited</span>
                </div>
                <div class="feature-item">
                  <span class="feature-label">Units</span>
                  <span class="feature-value">150</span>
                </div>
                <div class="feature-item checked">
                  <span class="feature-label">API, Widget</span>
                  <svg
                    class="check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div class="feature-item checked">
                  <span class="feature-label">~Zero Ads</span>
                  <svg
                    class="check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              <button class="plan-cta">Order now</button>
            </div>

            <!-- Plan: D (Featured) -->
            <div class="plan-card featured" data-plan="d">
              <div class="plan-header">
                <h3 class="plan-name">D</h3>
                <span class="plan-badge">Popular</span>
              </div>

              <div class="plan-pricing">
                <span class="plan-price" data-monthly="7" data-yearly="70"
                  >$7</span
                >
                <span class="monthly-badge">monthly</span>
              </div>

              <div class="plan-features">
                <div class="feature-item">
                  <span class="feature-label">Allowed Bookies</span>
                  <span class="feature-value unlimited">Unlimited</span>
                </div>
                <div class="feature-item">
                  <span class="feature-label">Units</span>
                  <span class="feature-value unlimited">Unlimited</span>
                </div>
                <div class="feature-item checked">
                  <span class="feature-label">~Zero Ads</span>
                  <svg
                    class="check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              <button class="plan-cta primary">Order now</button>
            </div>

            <!-- Plan: Cl -->
            <div class="plan-card" data-plan="cl">
              <div class="plan-header">
                <h3 class="plan-name">Cl</h3>
              </div>

              <div class="plan-pricing">
                <span class="plan-price" data-monthly="4" data-yearly="40"
                  >$4</span
                >
                <span class="plan-validity">30 days validity</span>
              </div>

              <div class="plan-features">
                <div class="feature-item">
                  <span class="feature-label">Allowed Bookies</span>
                  <span class="feature-value unlimited">Unlimited</span>
                </div>
                <div class="feature-item">
                  <span class="feature-label">Units</span>
                  <span class="feature-value">55</span>
                </div>
                <div class="feature-item checked">
                  <span class="feature-label">~Zero Ads</span>
                  <svg
                    class="check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              <button class="plan-cta">Order now</button>
            </div>

            <!-- Plan: Bl -->
            <div class="plan-card" data-plan="bl">
              <div class="plan-header">
                <h3 class="plan-name">Bl</h3>
              </div>

              <div class="plan-pricing">
                <span class="plan-price" data-monthly="2" data-yearly="20"
                  >$2</span
                >
                <span class="plan-validity">20 days validity</span>
              </div>

              <div class="plan-features">
                <div class="feature-item">
                  <span class="feature-label">Allowed Bookies</span>
                  <span class="feature-value unlimited">Unlimited</span>
                </div>
                <div class="feature-item">
                  <span class="feature-label">Units</span>
                  <span class="feature-value">25</span>
                </div>
                <div class="feature-item checked">
                  <span class="feature-label">~Zero Ads</span>
                  <svg
                    class="check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              <button class="plan-cta">Order now</button>
            </div>

            <!-- Plan: Al -->
            <div class="plan-card" data-plan="al">
              <div class="plan-header">
                <h3 class="plan-name">Al</h3>
              </div>

              <div class="plan-pricing">
                <span class="plan-price" data-monthly="1" data-yearly="10"
                  >$1</span
                >
                <span class="plan-validity">20 days validity</span>
              </div>

              <div class="plan-features">
                <div class="feature-item">
                  <span class="feature-label">Allowed Bookies</span>
                  <span class="feature-value unlimited">Unlimited</span>
                </div>
                <div class="feature-item">
                  <span class="feature-label">Units</span>
                  <span class="feature-value">12</span>
                </div>
                <div class="feature-item checked">
                  <span class="feature-label">~Zero Ads</span>
                  <svg
                    class="check-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              <button class="plan-cta">Order now</button>
            </div>
          </section>


          <!-- FAQ Section -->
          <section class="faq-section">
            <div class="section-header">
              <h2 class="section-title">Frequently Asked Questions</h2>
            </div>

            <div class="accordion-item">
              <button class="accordion-header">
                <span>What payment methods do you accept?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div class="accordion-content collapsed">
                <p>
                  We accept all major credit cards, PayPal, and cryptocurrency
                  payments for your convenience. You can also use mobile money
                  services in supported regions.
                </p>
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-header">
                <span>Can I upgrade or downgrade my plan?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div class="accordion-content collapsed">
                <p>
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes will be reflected in your next billing cycle. Unused
                  units from your previous plan will be carried forward when
                  upgrading.
                </p>
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-header">
                <span>What happens when I run out of units?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div class="accordion-content collapsed">
                <p>
                  When you run out of units, you can either wait for your plan
                  to renew or upgrade to a higher tier plan with more units. You
                  can also purchase additional units as a top-up.
                </p>
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-header">
                <span>Is there a refund policy?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div class="accordion-content collapsed">
                <p>
                  We offer a 7-day money-back guarantee for all plans. If you're
                  not satisfied, contact our support team for a full refund. No
                  questions asked.
                </p>
              </div>
            </div>
          </section>
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
