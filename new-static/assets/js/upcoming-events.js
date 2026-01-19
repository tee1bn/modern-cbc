document.addEventListener('DOMContentLoaded', () => {

    function initLeagueCollapse() {
        const leagueHeaders = document.querySelectorAll('.league-header');
        
        leagueHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const leagueEvents = this.nextElementSibling;
                const toggleIcon = this.querySelector('.toggle-icon');
                
                leagueEvents.classList.toggle('collapsed');
                toggleIcon.classList.toggle('rotated');
            });
        });

        const leagueGroups = document.querySelectorAll('.league-group');
        leagueGroups.forEach(group => {
            const leagueEvents = group.querySelector('.league-events');
            const toggleIcon = group.querySelector('.toggle-icon');
            
            // Collapse and rotate icon
            leagueEvents.classList.add('collapsed');
            toggleIcon.classList.add('rotated');
        });
    }


    function initLoadMore() {
        const eventsContainer = document.querySelector('.events-list');
        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.textContent = 'Load More Events';
        loadMoreBtn.classList.add('load-more-btn');
        
        // Track how many additional leagues to show
        let visibleLeagueCount = 5;
        
        loadMoreBtn.addEventListener('click', () => {
            const leagueGroups = document.querySelectorAll('.league-group');
            
            // Show next 5 league groups
            for (let i = visibleLeagueCount; i < Math.min(visibleLeagueCount + 5, leagueGroups.length); i++) {
                leagueGroups[i].style.display = 'block';
                const leagueEvents = leagueGroups[i].querySelector('.league-events');
                leagueEvents.classList.add('collapsed');
            }
            
            visibleLeagueCount += 5;
            
            // Hide load more if all leagues are visible
            if (visibleLeagueCount >= leagueGroups.length) {
                loadMoreBtn.style.display = 'none';
            }
        });

        // Initially hide leagues beyond first 5 and add load more button
        const leagueGroups = document.querySelectorAll('.league-group');
        leagueGroups.forEach((group, index) => {
            if (index >= 5) {
                group.style.display = 'none';
            }
        });

        // Add load more button if more than 5 leagues
        if (leagueGroups.length > 5) {
            eventsContainer.appendChild(loadMoreBtn);
        }
    }


    const styles = `
    <style>
    .league-events.collapsed {
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition: max-height 0.3s ease, opacity 0.3s ease;
    }

    .toggle-icon.rotated {
        transform: rotate(-90deg);
    }

    .load-more-btn {
        display: block;
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        background-color: #333;
        color: white;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .load-more-btn:hover {
        background-color: #555;
    }

    .odd-btn.selected {
        background-color: #333;
        color: white;
        border-color: #3333;
    }
    </style>
    `;

function initQuickFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const liveToggle = document.querySelector('.live-toggle');
  
  // Date filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const group = this.closest('.filter-group');
      const groupBtns = group.querySelectorAll('.filter-btn');
      
      // Remove active from group
      groupBtns.forEach(b => b.classList.remove('active'));
      
      // Add active to clicked
      this.classList.add('active');
      
      // Filter events based on selection
      const filter = this.dataset.filter;
      filterEventsByDate(filter);
    });
  });
  
  // Live toggle
  if (liveToggle) {
    liveToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      filterLiveEvents(this.classList.contains('active'));
    });
  }
}

function filterEventsByDate(filter) {
  const events = document.querySelectorAll('.event-card');
  
  // This is a placeholder - you'll implement actual filtering logic
  console.log('Filtering by:', filter);
  
  events.forEach(event => {
    event.style.display = 'block';
  });
}


function initStickyHeaders() {
  const stickyHeaders = document.querySelectorAll('.sticky-header');
  
  window.addEventListener('scroll', function() {
    stickyHeaders.forEach(header => {
      const rect = header.getBoundingClientRect();
      
      // Add shadow when header is stuck at top
      if (rect.top <= header.offsetTop) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  });
}

    document.head.insertAdjacentHTML('beforeend', styles);

    initQuickFilters();
    initStickyHeaders();
    initLeagueCollapse();
    initLoadMore();
});