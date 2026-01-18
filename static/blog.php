<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Bet Converter - ConvertBetCodes</title>
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
    <link rel="stylesheet" href="assets/css/blog.css" />
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
        <div class="blog-container" >
          <!-- search Bar -->
          <div class="blog-search">
            <div class="search-input-wrapper">
              <i class="bi bi-search search-icon"></i>
              <input
                type="text"
                placeholder="Search articles"
                class="search-input"
                id="search-input"
              />
            </div>
          </div>

          <!-- Category -->
          <div class="category-filter">
            <div class="category-chips">
              <button class="category-chip active" data-category="all">
                All
              </button>
              <button class="category-chip" data-category="tips">
                Tips & Tricks
              </button>
              <button class="category-chip" data-category="news">News</button>
              <button class="category-chip" data-category="guide">
                Guides
              </button>
              <button class="category-chip" data-category="analysis">
                Analysis
              </button>
            </div>
          </div>

          <!-- Featured Post -->
          <div class="featured-post">
            <div class="featured-image"></div>
            <div class="featured-content">
              <span class="featured-badge">Featured</span>
              <h2 class="featured-title">
                Master the Art of Betting: 10 Strategies That Actually Work
              </h2>
              <p class="featured-excerpt">
                Discover proven betting strategies used by professionals to
                maximize wins and minimize losses. Learn how to analyze odds,
                manage your bankroll, and make smarter betting decisions.
              </p>
              <div class="featured-meta">
                <div class="meta-item">
                  <i class="bi bi-calendar3"></i>
                  <span>Jan 5, 2026</span>
                </div>
                <div class="meta-item">
                  <i class="bi bi-clock"></i>
                  <span>8 min read</span>
                </div>
                <div class="meta-item">
                  <i class="bi bi-eye"></i>
                  <span>2.4k views</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Blog Grid -->
          <div class="blog-grid" id="blog-grid">
            <!-- Blog Card 1 -->
            <div class="blog-card" onclick="">
              <!-- <div class="blog-card-image"></div> -->
              <div class="blog-card-content" >
                <span class="blog-category strategy">Strategy</span>
                <a href="blog-post.php">
                                  <h3 class="blog-title">
                  Understanding Value Betting: A Complete Guide
                </h3>
                </a>

                <p class="blog-excerpt">
                  Learn how to identify value bets and increase your long-term
                  profitability. This comprehensive guide covers everything from
                  basic concepts to advanced techniques.
                </p>
                <div class="blog-meta">
                  <div class="blog-meta-left">
                    <div class="blog-meta-item">
                      <i class="bi bi-calendar3"></i>
                      <span>Jan 4, 2026</span>
                    </div>
                    <div class="blog-meta-item">
                      <i class="bi bi-clock"></i>
                      <span>6 min</span>
                    </div>
                  </div>
                  <i
                    class="bi bi-share blog-share"
                    onclick="share(event, 1)"
                  ></i>
                </div>
              </div>
            </div>

            <!-- Blog Card 2 -->
            <div class="blog-card" onclick="">
              <!-- <div class="blog-card-image"></div> -->
              <div class="blog-card-content">
                <span class="blog-category tips">Tips & Tricks</span>
                <a href="blog-post.php">
                <h3 class="blog-title">
                  5 Common Betting Mistakes to Avoid in 2026
                </h3>
                </a>

                <p class="blog-excerpt">
                  Don't fall into these common traps! Discover the most frequent
                  mistakes bettors make and how to avoid them to protect your
                  bankroll.
                </p>
                <div class="blog-meta">
                  <div class="blog-meta-left">
                    <div class="blog-meta-item">
                      <i class="bi bi-calendar3"></i>
                      <span>Jan 3, 2026</span>
                    </div>
                    <div class="blog-meta-item">
                      <i class="bi bi-clock"></i>
                      <span>5 min</span>
                    </div>
                  </div>
                  <i
                    class="bi bi-share blog-share"
                    onclick="share(event, 2)"
                  ></i>
                </div>
              </div>
            </div>

            <!-- Blog Card 3 -->
            <div class="blog-card" onclick="">
              <!-- <div class="blog-card-image"></div> -->
              <div class="blog-card-content">
                <span class="blog-category news">News</span>
                <a href="blog-post.php">
                <h3 class="blog-title">
                  Breaking: New Betting Regulations Coming in 2026
                </h3>
                </a>

                <p class="blog-excerpt">
                  Stay informed about the latest regulatory changes affecting
                  online betting. Here's what you need to know about the new
                  laws.
                </p>
                <div class="blog-meta">
                  <div class="blog-meta-left">
                    <div class="blog-meta-item">
                      <i class="bi bi-calendar3"></i>
                      <span>Jan 2, 2026</span>
                    </div>
                    <div class="blog-meta-item">
                      <i class="bi bi-clock"></i>
                      <span>4 min</span>
                    </div>
                  </div>
                  <i
                    class="bi bi-share blog-share"
                    onclick="share(event, 3)"
                  ></i>
                </div>
              </div>
            </div>

            <!-- Blog Card 4 -->
            <div class="blog-card" onclick="">
              <!-- <div class="blog-card-image"></div> -->
              <div class="blog-card-content">
                <span class="blog-category guide">Guide</span>
                <a href="blog-post.php">
                <h3 class="blog-title">
                  Bankroll Management 101: Essential Tips for Beginners
                </h3>
                </a>

                <p class="blog-excerpt">
                  Master the fundamentals of bankroll management. Learn how to
                  set budgets, track spending, and bet responsibly for long-term
                  success.
                </p>
                <div class="blog-meta">
                  <div class="blog-meta-left">
                    <div class="blog-meta-item">
                      <i class="bi bi-calendar3"></i>
                      <span>Jan 1, 2026</span>
                    </div>
                    <div class="blog-meta-item">
                      <i class="bi bi-clock"></i>
                      <span>7 min</span>
                    </div>
                  </div>
                  <i
                    class="bi bi-share blog-share"
                    onclick="share(event, 4)"
                  ></i>
                </div>
              </div>
            </div>

            <!-- Blog Card 5 -->
            <div class="blog-card" onclick="">
              <!-- <div class="blog-card-image"></div> -->
              <div class="blog-card-content">
                <span class="blog-category strategy">Strategy</span>
                <a href="blog-post.php">
                <h3 class="blog-title">
                  Live Betting vs Pre-Match: Which is More Profitable?
                </h3>
                </a>

                <p class="blog-excerpt">
                  Compare the pros and cons of live betting versus pre-match
                  betting. Find out which strategy suits your betting style
                  best.
                </p>
                <div class="blog-meta">
                  <div class="blog-meta-left">
                    <div class="blog-meta-item">
                      <i class="bi bi-calendar3"></i>
                      <span>Dec 31, 2025</span>
                    </div>
                    <div class="blog-meta-item">
                      <i class="bi bi-clock"></i>
                      <span>6 min</span>
                    </div>
                  </div>
                  <i
                    class="bi bi-share blog-share"
                    onclick="share(event, 5)"
                  ></i>
                </div>
              </div>
            </div>

            <!-- Blog Card 6 -->
            <div class="blog-card" onclick="">
              <!-- <div class="blog-card-image"></div> -->
              <div class="blog-card-content">
                <span class="blog-category tips">Tips & Tricks</span>

                <a href="blog-post.php">
                <h3 class="blog-title">
                  How to Read Betting Odds Like a Professional
                </h3>
                </a>

                <p class="blog-excerpt">
                  Demystify betting odds with this easy-to-follow guide. Learn
                  to interpret different odds formats and calculate potential
                  returns quickly.
                </p>
                <div class="blog-meta">
                  <div class="blog-meta-left">
                    <div class="blog-meta-item">
                      <i class="bi bi-calendar3"></i>
                      <span>Dec 30, 2025</span>
                    </div>
                    <div class="blog-meta-item">
                      <i class="bi bi-clock"></i>
                      <span>5 min</span>
                    </div>
                  </div>
                  <i
                    class="bi bi-share blog-share"
                    onclick="share(event, 6)"
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Load More -->
          <div class="load-more-container">
            <button class="load-more-btn" onclick="loadMore()">
              Load More Articles
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


    
    <!-- footer -->
    <?php include("layouts/Footer.php") ?>

    <!-- mobile nav -->
    <?php include("layouts/MobileNav.php") ?>


    <script src="assets/js/app.js"></script>

  </body>
</html>
