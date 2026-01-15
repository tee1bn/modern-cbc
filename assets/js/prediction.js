(function () {
  "use strict";

  // ==================== STATE ====================
  let currentSport = "football";
  let currentMarket = "1x2";
  let predictions = [];

  // ==================== INITIALIZATION ====================
  function init() {
    setupEventListeners();
    loadPredictions();
     setTimeout(() => {
    initLeagueCollapse();
  }, 100);

  }

  // ==================== LEAGUE COLLAPSE ====================
  function initLeagueCollapse() {
    document.addEventListener("click", function (e) {
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

  // ==================== EVENT LISTENERS ====================
  function setupEventListeners() {
    // Market filter dropdown button
    const marketFilterBtn = document.getElementById("market-filter-btn");
    const marketModal = document.getElementById("market-modal");
    const closeMarketModal = document.getElementById("close-market-modal");

    if (marketFilterBtn) {
      marketFilterBtn.addEventListener("click", () => {
        marketModal.classList.remove("hidden");
        marketFilterBtn.classList.add("active");
      });
    }

    if (closeMarketModal) {
      closeMarketModal.addEventListener("click", () => {
        marketModal.classList.add("hidden");
        marketFilterBtn.classList.remove("active");
      });
    }

    // Market list items
    document.querySelectorAll(".market-list-item").forEach((item) => {
      item.addEventListener("click", function () {
        document
          .querySelectorAll(".market-list-item")
          .forEach((i) => i.classList.remove("active"));
        this.classList.add("active");

        const label = this.dataset.label;
        const selectedLabel = document.getElementById("selected-market-label");
        if (selectedLabel) {
          selectedLabel.textContent = label;
        }

        currentMarket = this.dataset.market;
        marketModal.classList.add("hidden");
        marketFilterBtn.classList.remove("active");

        loadPredictions();
        console.log("Selected market:", currentMarket);
      });
    });

    // Close modal on outside click
    if (marketModal) {
      marketModal.addEventListener("click", (e) => {
        if (e.target === marketModal) {
          marketModal.classList.add("hidden");
          marketFilterBtn.classList.remove("active");
        }
      });
    }

    // Pagination
    document.querySelectorAll(".pagination-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        if (!this.disabled && !this.querySelector("i")) {
          document
            .querySelectorAll(".pagination-btn")
            .forEach((b) => b.classList.remove("active"));
          this.classList.add("active");
          loadPredictions();
        }
      });
    });

    // Add to betslip buttons - delegate event
    document.addEventListener("click", (e) => {
      if (e.target.closest(".prediction-action-btn")) {
        const card = e.target.closest(".prediction-card");
        if (card) {
          addToBetslip(card);
        }
      }
    });
  }

  // ==================== LOAD PREDICTIONS ====================
  function loadPredictions() {
    console.log(`Loading predictions for ${currentSport} - ${currentMarket}`);

    const pageInfo = document.getElementById("page-info");
    if (pageInfo) {
      pageInfo.textContent = `Page 1, Showing 25/80`;
    }
  }

  // ==================== INITIALIZE ====================
  document.addEventListener("DOMContentLoaded", init);
})();
