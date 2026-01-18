// Toggle section visibility
function toggleSection(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.toggle-icon');
  
  content.classList.toggle('collapsed');
  
  if (content.classList.contains('collapsed')) {
    icon.style.transform = 'rotate(0deg)';
  } else {
    icon.style.transform = 'rotate(180deg)';
  }
}

// Modal functions
function openBookieModal() {
  document.getElementById('bookieModal').classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function applyBookieSelection() {
  const modal = document.getElementById('bookieModal');
  const count = modal.querySelectorAll('input[type="checkbox"]:checked').length;
  document.querySelector('.settings-item[onclick="openBookieModal()"] .item-value').textContent = `${count} selected`;
  closeModal('bookieModal');
}


function addAffiliateRow() {
  const container = document.getElementById('affiliate-codes-container');
  const newRow = container.querySelector('.affiliate-code-row').cloneNode(true);
  
  newRow.querySelector('select').value = '';
  newRow.querySelector('input').value = '';
  newRow.querySelector('button[onclick*="removeAffiliateRow"]').disabled = false;
  
  container.appendChild(newRow);
}

function removeAffiliateRow(button) {
  const row = button.closest('.affiliate-code-row');
  const container = document.getElementById('affiliate-codes-container');
  
  if (container.querySelectorAll('.affiliate-code-row').length > 1) {
    row.remove();
  }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('active');
  }
});