<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Upcoming Events - ConvertBetCodes</title>
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&amp;family=SUSE:wght@100..800&amp;display=swap"
    rel="stylesheet" />
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
  <link rel="stylesheet" href="assets/css/betslip-editor.css" />
  <link rel="stylesheet" href="assets/css/filters.css" />
  <link rel="stylesheet" href="assets/css/upcoming-events.css" />
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
      <div class="page-main-content">

        <!-- filter -->
        <?php include("layouts/UpcomingEventFilter.php") ?>

        <div class="events-list">
          <div class="featured-events">
            <!-- Event 1 -->
            <div class="event-card">
              <div class="event-market-header">
                <div class="market-date">04/01 Sunday</div>
                <div class="market-title">
                  <span>1</span>
                  <span>X</span>
                  <span>2</span>
                </div>
              </div>

              <div class="event-header">
                <span class="event-time">15:00
                  <span
                    class="event-extra">+217</span></span>
                <span class="event-league">English Premier League</span>
              </div>
              <div class="event-body">
                <a href="upcoming-single-event.php">
                  <div class="teams">
                    <div class="team">Manchester United</div>
                    <div class="team">Liverpool</div>
                  </div>
                </a>
                <div class="odds-grid">
                  <button class="odd-btn best">1.85</button>
                  <button class="odd-btn">3.40</button>
                  <button class="odd-btn">4.20</button>
                </div>
              </div>
            </div>

            <!-- Event 2 -->
            <div class="event-card">
              <div class="event-header">
                <span class="event-time">17:30
                  <span
                    class="event-extra">+217</span></span>
                <span class="event-league">Spanish La Liga</span>
              </div>
              <div class="event-body">
                <a href="upcoming-single-event.php">
                  <div
                    class="teams">
                    <div class="team">Real Madrid</div>
                    <div class="team">Barcelona</div>
                  </div>
                </a>

                <div class="odds-grid">
                  <button class="odd-btn">2.10</button>
                  <button class="odd-btn best">3.20</button>
                  <button class="odd-btn">3.50</button>
                </div>
              </div>
            </div>

            <!-- Event 3 -->
            <div class="event-card">
              <div class="event-header">
                <span class="event-time">18:00
                  <span
                    class="event-extra">+217</span></span>
                <span class="event-league">German Bundesliga</span>
              </div>
              <div class="event-body">
                <a href="upcoming-single-event.php">
                  <div
                    class="teams">
                    <div class="team">Bayern Munich</div>
                    <div class="team">Borussia Dortmund</div>
                  </div>
                </a>

                <div class="odds-grid">
                  <button class="odd-btn best">1.65</button>
                  <button class="odd-btn">3.80</button>
                  <button class="odd-btn">5.20</button>
                </div>
              </div>
            </div>

            <!-- Event 4 -->
            <div class="event-card">
              <div class="event-header">
                <span class="event-time">19:45
                  <span
                    class="event-extra">+217</span></span>
                <span class="event-league">Italian Serie A</span>
              </div>
              <div class="event-body">
                <a href="upcoming-single-event.php">
                  <div
                    class="teams">
                    <div class="team">AC Milan</div>
                    <div class="team">Inter Milan</div>
                  </div>
                </a>

                <div class="odds-grid">
                  <button class="odd-btn">2.30</button>
                  <button class="odd-btn best">3.10</button>
                  <button class="odd-btn">3.20</button>
                </div>
              </div>
            </div>

            <!-- Event 5 -->
            <div class="event-card">
              <div class="event-header">
                <span class="event-time">20:00
                  <span
                    class="event-extra">+217</span></span>
                <span class="event-league">French Ligue 1</span>
              </div>
              <div class="event-body">
                <a href="upcoming-single-event.php">
                  <div
                    class="teams">
                    <div class="team">Paris Saint-Germain</div>
                    <div class="team">Olympique Marseille</div>
                  </div>
                </a>

                <div class="odds-grid">
                  <button class="odd-btn best">1.45</button>
                  <button class="odd-btn">4.20</button>
                  <button class="odd-btn">6.50</button>
                </div>
              </div>
            </div>

            <!-- Event 6 -->
            <div class="event-card">
              <div class="event-market-header">
                <div class="market-date">05/01 Monday</div>
                <div class="market-title">
                  <span>1</span>
                  <span>X</span>
                  <span>2</span>
                </div>
              </div>

              <div class="event-header">
                <span class="event-time">14:00
                  <span
                    class="event-extra">+217</span></span>
                <span class="event-league">UEFA Champions League</span>
              </div>
              <div class="event-body">
                <a href="upcoming-single-event.php">
                  <div
                    class="teams">
                    <div class="team">Chelsea</div>
                    <div class="team">Arsenal</div>
                  </div>
                </a>

                <div class="odds-grid">
                  <button class="odd-btn">2.05</button>
                  <button class="odd-btn best">3.30</button>
                  <button class="odd-btn">3.60</button>
                </div>
              </div>
            </div>

            <!-- Event 7 -->
            <div class="event-card">
              <div class="event-header">
                <span class="event-time">16:30
                  <span
                    class="event-extra">+217</span></span>
                <span class="event-league">Portuguese Primeira Liga</span>
              </div>
              <div class="event-body">
                <a href="upcoming-single-event.php">
                  <div
                    class="teams">
                    <div class="team">Benfica</div>
                    <div class="team">Porto</div>
                  </div>
                </a>

                <div class="odds-grid">
                  <button class="odd-btn best">1.95</button>
                  <button class="odd-btn">3.25</button>
                  <button class="odd-btn">4.10</button>
                </div>
              </div>
            </div>

            <!-- Event 8 -->
            <div class="event-card">
              <div class="event-header">
                <span class="event-time">18:00
                  <span
                    class="event-extra">+217</span></span>
                <span class="event-league">Dutch Eredivisie</span>
              </div>
              <div class="event-body">
                <div
                  class="teams">
                  <div class="team">Ajax Amsterdam</div>
                  <div class="team">PSV Eindhoven</div>
                </div>
                <div class="odds-grid">
                  <button class="odd-btn">2.15</button>
                  <button class="odd-btn">3.35</button>
                  <button class="odd-btn best">3.40</button>
                </div>
              </div>
            </div>

            <!-- Event 9 -->
            <div class="event-card">
              <div class="event-header">
                <span class="event-time">19:00
                  <span
                    class="event-extra">+217</span></span>
                <span class="event-league">Turkish Super Lig</span>
              </div>
              <div class="event-body">
                <div
                  class="teams">
                  <div class="team">Galatasaray</div>
                  <div class="team">Fenerbahce</div>
                </div>
                <div class="odds-grid">
                  <button class="odd-btn best">1.75</button>
                  <button class="odd-btn">3.50</button>
                  <button class="odd-btn">4.80</button>
                </div>
              </div>
            </div>

            <!-- Event 10 -->
            <div class="event-card">
              <div class="event-header">
                <span class="event-time">20:30
                  <span
                    class="event-extra">+217</span></span>
                <span class="event-league">Belgian Pro League</span>
              </div>
              <div class="event-body">
                <div
                  class="teams">
                  <div class="team">Club Brugge</div>
                  <div class="team">Anderlecht</div>
                </div>
                <div class="odds-grid">
                  <button class="odd-btn">2.25</button>
                  <button class="odd-btn best">3.15</button>
                  <button class="odd-btn">3.30</button>
                </div>
              </div>
            </div>
          </div>

          <div class="league-group">
            <div class="league-header" onclick="toggleLeague(this)">
              <div class="league-info">
                <i class="bi bi-chevron-down toggle-icon"></i>
                <span class="league-name">English Premier League</span>
                <span class="event-count">8 events</span>
              </div>
            </div>

            <div class="league-events">
              <div class="event-card">
                <div class="event-market-header">
                  <div class="market-date">06/01 Tuesday</div>
                  <div class="market-title">
                    <span>1</span>
                    <span>X</span>
                    <span>2</span>
                  </div>
                </div>

                <div class="event-header">
                  <span class="event-time">Sat 15:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Newcastle United</div>
                    <div class="team">Tottenham Hotspur</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.40</button>
                    <button class="odd-btn best">3.30</button>
                    <button class="odd-btn">2.90</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sat 15:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Aston Villa</div>
                    <div class="team">West Ham United</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">1.85</button>
                    <button class="odd-btn">3.50</button>
                    <button class="odd-btn">4.30</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sat 17:30
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Brighton & Hove Albion</div>
                    <div class="team">Wolverhampton Wanderers</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">1.95</button>
                    <button class="odd-btn">3.40</button>
                    <button class="odd-btn best">3.80</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 14:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Everton</div>
                    <div class="team">Leicester City</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">2.10</button>
                    <button class="odd-btn">3.25</button>
                    <button class="odd-btn">3.50</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 14:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Fulham</div>
                    <div class="team">Crystal Palace</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.05</button>
                    <button class="odd-btn best">3.30</button>
                    <button class="odd-btn">3.60</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 16:30
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Southampton</div>
                    <div class="team">Bournemouth</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.20</button>
                    <button class="odd-btn">3.20</button>
                    <button class="odd-btn best">3.40</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 16:30
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Nottingham Forest</div>
                    <div class="team">Brentford</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">1.90</button>
                    <button class="odd-btn">3.45</button>
                    <button class="odd-btn">4.00</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Mon 20:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Luton Town</div>
                    <div class="team">Sheffield United</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.15</button>
                    <button class="odd-btn best">3.15</button>
                    <button class="odd-btn">3.50</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 2: Spanish La Liga -->
          <div class="league-group">
            <div class="league-header" onclick="toggleLeague(this)">
              <div class="league-info">
                <i class="bi bi-chevron-down toggle-icon"></i>
                <span class="league-name">Spanish La Liga</span>
                <span class="event-count">6 events</span>
              </div>
            </div>
            <div class="league-events">
              <div class="event-card">
                <div class="event-market-header">
                  <div class="market-date">06/01 Tuesday</div>
                  <div class="market-title">
                    <span>1</span>
                    <span>X</span>
                    <span>2</span>
                  </div>
                </div>
                <div class="event-header">
                  <span class="event-time">Sat 14:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Atletico Madrid</div>
                    <div class="team">Sevilla</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">1.70</button>
                    <button class="odd-btn">3.60</button>
                    <button class="odd-btn">5.00</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sat 16:15
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Valencia</div>
                    <div class="team">Athletic Bilbao</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.30</button>
                    <button class="odd-btn best">3.20</button>
                    <button class="odd-btn">3.10</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sat 18:30
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Real Sociedad</div>
                    <div class="team">Villarreal</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.00</button>
                    <button class="odd-btn">3.35</button>
                    <button class="odd-btn best">3.70</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 16:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Real Betis</div>
                    <div class="team">Getafe</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">1.80</button>
                    <button class="odd-btn">3.50</button>
                    <button class="odd-btn">4.50</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 18:15
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Osasuna</div>
                    <div class="team">Celta Vigo</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.10</button>
                    <button class="odd-btn best">3.25</button>
                    <button class="odd-btn">3.50</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Mon 21:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Mallorca</div>
                    <div class="team">Girona</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.25</button>
                    <button class="odd-btn">3.15</button>
                    <button class="odd-btn best">3.30</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 2: Spanish La Liga -->
          <div class="league-group">
            <div class="league-header" onclick="toggleLeague(this)">
              <div class="league-info">
                <i class="bi bi-chevron-down toggle-icon"></i>
                <span class="league-name">Spanish La Liga</span>
                <span class="event-count">6 events</span>
              </div>
            </div>
            <div class="league-events">
              <div class="event-card">
                <div class="event-market-header">
                  <div class="market-date">06/01 Tuesday</div>
                  <div class="market-title">
                    <span>1</span>
                    <span>X</span>
                    <span>2</span>
                  </div>
                </div>
                <div class="event-header">
                  <span class="event-time">Sat 14:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Atletico Madrid</div>
                    <div class="team">Sevilla</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">1.70</button>
                    <button class="odd-btn">3.60</button>
                    <button class="odd-btn">5.00</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sat 16:15
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Valencia</div>
                    <div class="team">Athletic Bilbao</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.30</button>
                    <button class="odd-btn best">3.20</button>
                    <button class="odd-btn">3.10</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sat 18:30
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Real Sociedad</div>
                    <div class="team">Villarreal</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.00</button>
                    <button class="odd-btn">3.35</button>
                    <button class="odd-btn best">3.70</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 16:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Real Betis</div>
                    <div class="team">Getafe</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">1.80</button>
                    <button class="odd-btn">3.50</button>
                    <button class="odd-btn">4.50</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 18:15
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Osasuna</div>
                    <div class="team">Celta Vigo</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.10</button>
                    <button class="odd-btn best">3.25</button>
                    <button class="odd-btn">3.50</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Mon 21:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Mallorca</div>
                    <div class="team">Girona</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.25</button>
                    <button class="odd-btn">3.15</button>
                    <button class="odd-btn best">3.30</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 2: Spanish La Liga -->
          <div class="league-group">
            <div class="league-header" onclick="toggleLeague(this)">
              <div class="league-info">
                <i class="bi bi-chevron-down toggle-icon"></i>
                <span class="league-name">Spanish La Liga</span>
                <span class="event-count">6 events</span>
              </div>
            </div>
            <div class="league-events">
              <div class="event-card">
                <div class="event-market-header">
                  <div class="market-date">06/01 Tuesday</div>
                  <div class="market-title">
                    <span>1</span>
                    <span>X</span>
                    <span>2</span>
                  </div>
                </div>
                <div class="event-header">
                  <span class="event-time">Sat 14:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Atletico Madrid</div>
                    <div class="team">Sevilla</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">1.70</button>
                    <button class="odd-btn">3.60</button>
                    <button class="odd-btn">5.00</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sat 16:15
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Valencia</div>
                    <div class="team">Athletic Bilbao</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.30</button>
                    <button class="odd-btn best">3.20</button>
                    <button class="odd-btn">3.10</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sat 18:30
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Real Sociedad</div>
                    <div class="team">Villarreal</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.00</button>
                    <button class="odd-btn">3.35</button>
                    <button class="odd-btn best">3.70</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 16:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Real Betis</div>
                    <div class="team">Getafe</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">1.80</button>
                    <button class="odd-btn">3.50</button>
                    <button class="odd-btn">4.50</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 18:15
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Osasuna</div>
                    <div class="team">Celta Vigo</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.10</button>
                    <button class="odd-btn best">3.25</button>
                    <button class="odd-btn">3.50</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Mon 21:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Mallorca</div>
                    <div class="team">Girona</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.25</button>
                    <button class="odd-btn">3.15</button>
                    <button class="odd-btn best">3.30</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 3: Budesliga La Liga -->
          <div class="league-group">
            <div class="league-header" onclick="toggleLeague(this)">
              <div class="league-info">
                <i class="bi bi-chevron-down toggle-icon"></i>
                <span class="league-name">Budesliga</span>
                <span class="event-count">6 events</span>
              </div>
            </div>
            <div class="league-events">
              <div class="event-card">
                <div class="event-market-header">
                  <div class="market-date">06/01 Tuesday</div>
                  <div class="market-title">
                    <span>1</span>
                    <span>X</span>
                    <span>2</span>
                  </div>
                </div>
                <div class="event-header">
                  <span class="event-time">Sat 14:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Atletico Madrid</div>
                    <div class="team">Sevilla</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">1.70</button>
                    <button class="odd-btn">3.60</button>
                    <button class="odd-btn">5.00</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sat 16:15
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Valencia</div>
                    <div class="team">Athletic Bilbao</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.30</button>
                    <button class="odd-btn best">3.20</button>
                    <button class="odd-btn">3.10</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sat 18:30
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Real Sociedad</div>
                    <div class="team">Villarreal</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.00</button>
                    <button class="odd-btn">3.35</button>
                    <button class="odd-btn best">3.70</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 16:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Real Betis</div>
                    <div class="team">Getafe</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">1.80</button>
                    <button class="odd-btn">3.50</button>
                    <button class="odd-btn">4.50</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 18:15
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Osasuna</div>
                    <div class="team">Celta Vigo</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.10</button>
                    <button class="odd-btn best">3.25</button>
                    <button class="odd-btn">3.50</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Mon 21:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Mallorca</div>
                    <div class="team">Girona</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.25</button>
                    <button class="odd-btn">3.15</button>
                    <button class="odd-btn best">3.30</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 4: Spanish La Liga -->
          <div class="league-group">
            <div class="league-header" onclick="toggleLeague(this)">
              <div class="league-info">
                <i class="bi bi-chevron-down toggle-icon"></i>
                <span class="league-name">League La Liga</span>
                <span class="event-count">6 events</span>
              </div>
            </div>
            <div class="league-events">
              <div class="event-card">
                <div class="event-market-header">
                  <div class="market-date">06/01 Tuesday</div>
                  <div class="market-title">
                    <span>1</span>
                    <span>X</span>
                    <span>2</span>
                  </div>
                </div>
                <div class="event-header">
                  <span class="event-time">Sat 14:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Atletico Madrid</div>
                    <div class="team">Sevilla</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">1.70</button>
                    <button class="odd-btn">3.60</button>
                    <button class="odd-btn">5.00</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sat 16:15
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Valencia</div>
                    <div class="team">Athletic Bilbao</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.30</button>
                    <button class="odd-btn best">3.20</button>
                    <button class="odd-btn">3.10</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sat 18:30
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Real Sociedad</div>
                    <div class="team">Villarreal</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.00</button>
                    <button class="odd-btn">3.35</button>
                    <button class="odd-btn best">3.70</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 16:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Real Betis</div>
                    <div class="team">Getafe</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn best">1.80</button>
                    <button class="odd-btn">3.50</button>
                    <button class="odd-btn">4.50</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Sun 18:15
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Osasuna</div>
                    <div class="team">Celta Vigo</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.10</button>
                    <button class="odd-btn best">3.25</button>
                    <button class="odd-btn">3.50</button>
                  </div>
                </div>
              </div>

              <div class="event-card">
                <div class="event-header">
                  <span class="event-time">Mon 21:00
                    <span
                      class="event-extra">+217</span></span>
                </div>
                <div class="event-body">
                  <div
                    class="teams">
                    <div class="team">Mallorca</div>
                    <div class="team">Girona</div>
                  </div>
                  <div class="odds-grid">
                    <button class="odd-btn">2.25</button>
                    <button class="odd-btn">3.15</button>
                    <button class="odd-btn best">3.30</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- SideBarRIght -->
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
  <script src="assets/js/upcoming-events.js"></script>
  <script src="assets/js/filters.js"></script>
</body>

</html>