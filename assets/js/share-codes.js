
// Toggle events list
function toggleEvents() {
  const eventsList = document.getElementById('eventsList');
  const toggleBtn = document.getElementById('toggleEventsList');
  const toggleText = toggleBtn.querySelector('.toggle-text');
  
  eventsList.classList.toggle('expanded');
  toggleBtn.classList.toggle('expanded');
  
  if (eventsList.classList.contains('expanded')) {
    toggleText.textContent = 'Show Less';
  } else {
    toggleText.textContent = 'Show More';
  }
}

// Expand bookie card events
document.querySelectorAll('.expand-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    const target = document.getElementById(targetId);
    
    target.classList.toggle('collapsed');
    this.classList.toggle('expanded');
  });
});

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
    const content = this.nextElementSibling;
    
    content.classList.toggle('collapsed');
    this.classList.toggle('expanded');
  });
});

// Copy code functionality
document.getElementById('copyCodeBtn').addEventListener('click', async function() {
  const code = document.querySelector('.code-text').getAttribute('data-code');
  try {
    await navigator.clipboard.writeText(code);
    alert('Code copied: ' + code);
  } catch(err) {
    alert('Failed to copy');
  }
});

// Share buttons
document.getElementById('copyLinkBtn').addEventListener('click', async function() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert('Link copied!');
  } catch(err) {
    alert('Failed to copy link');
  }
});

document.getElementById('shareWhatsappBtn').addEventListener('click', function() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://wa.me/?text=${url}`, '_blank');
});

document.getElementById('shareTwitterBtn').addEventListener('click', function() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank');
});