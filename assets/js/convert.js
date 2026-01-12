// Tab Switching Function
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

// Auto-detect bookie from bet link
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

// Paste Button Functionality
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

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  console.log("Bet Converter Phase 1 loaded successfully!");
});
