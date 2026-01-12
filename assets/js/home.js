function switchTab(tabName) {
  // Hide all content sections
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.remove("active");
  });

  // Remove active class from all mobile tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Remove active class from all desktop tabs
  document.querySelectorAll(".tab-btn-desktop").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected content
  document.getElementById(tabName).classList.add("active");

  // Add active class to clicked button
  event.target.classList.add("active");
}

const betLinkInput = document.getElementById("betLinkInput");
if (betLinkInput) {
  betLinkInput.addEventListener("input", function (e) {
    const url = e.target.value.toLowerCase();
    const detectedElement = document.getElementById("detectedBookie");
    const bookieNameElement = document.getElementById("bookieName");

    let detectedBookie = null;

    if (url.includes("sportybet.com")) {
      detectedBookie = "SportyBet";
    } else if (url.includes("bet9ja.com")) {
      detectedBookie = "Bet9ja";
    } else if (url.includes("1xbet.com")) {
      detectedBookie = "1xBet";
    } else if (url.includes("nairabet.com")) {
      detectedBookie = "NairaBet";
    }

    if (detectedBookie) {
      bookieNameElement.textContent = detectedBookie;
      detectedElement.style.display = "block";
    } else {
      detectedElement.style.display = "none";
    }
  });
}

document.querySelectorAll(".paste-btn").forEach((btn) => {
  btn.addEventListener("click", async function () {
    try {
      const text = await navigator.clipboard.readText();
      const input = this.parentElement.querySelector("input");
      if (input) {
        input.value = text;
        input.focus();
        input.dispatchEvent(new Event("input"));
      }
    } catch (err) {
      alert("Please paste manually (Ctrl+V or Cmd+V)");
    }
  });
});

// File Upload Display
const fileInput = document.getElementById("fileInput");
if (fileInput) {
  fileInput.addEventListener("change", function (e) {
    const fileName = e.target.files[0]?.name;
    if (fileName) {
      const uploadArea = document.querySelector(".upload-area h3");
      uploadArea.textContent = `Selected: ${fileName}`;
    }
  });
}

// Form Submit Prevention (for demo)
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Conversion feature will be implemented in production!");
  });
});


// ============================================
// HERO & STATS ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateStats();
      statsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe stats section
const statsSection = document.querySelector(".stats-section");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Animate stat numbers from 0 to target
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");
  const statLabels = document.querySelectorAll(".stat-label");

  statNumbers.forEach((stat, index) => {
    const target = stat.textContent.trim();

    setTimeout(() => {
      stat.classList.add("animated");
      if (statLabels[index]) {
        statLabels[index].classList.add("animated");
      }
    }, index * 150);

    // Extract number and suffix (like % or +)
    const hasPercent = target.includes("%");
    const hasPlus = target.includes("+");
    const numericValue = parseFloat(target.replace(/[^0-9.]/g, ""));

    // Skip animation if not a number
    if (isNaN(numericValue)) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      current += increment;
      step++;

      if (step >= steps) {
        current = numericValue;
        clearInterval(timer);
      }

      // Format number based on value
      let displayValue;
      if (numericValue >= 1000) {
        displayValue = Math.floor(current).toLocaleString();
      } else if (numericValue >= 10) {
        displayValue = Math.floor(current);
      } else {
        displayValue = current.toFixed(1);
      }

      // Add suffix back
      if (hasPlus) displayValue = displayValue + "+";
      if (hasPercent) displayValue = displayValue + "%";

      stat.textContent = displayValue;
    }, duration / steps);
  });
}


// Add ripple animation keyframe dynamically
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple-effect {
    from {
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    to {
      width: 200px;
      height: 200px;
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Smooth scroll reveal for sections (optional)
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  sectionObserver.observe(section);
});

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  console.log("Bet Converter Phase 1 loaded successfully!");
});
