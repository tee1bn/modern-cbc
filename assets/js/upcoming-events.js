document.addEventListener('DOMContentLoaded', () => {
    // Collapsible League Groups
    function initLeagueCollapse() {
        const leagueHeaders = document.querySelectorAll('.league-header');
        
        leagueHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const leagueEvents = this.nextElementSibling;
                const toggleIcon = this.querySelector('.toggle-icon');
                
                // Toggle visibility and icon rotation
                leagueEvents.classList.toggle('collapsed');
                toggleIcon.classList.toggle('rotated');
            });
        });

        // Collapse ALL league groups
        const leagueGroups = document.querySelectorAll('.league-group');
        leagueGroups.forEach(group => {
            const leagueEvents = group.querySelector('.league-events');
            const toggleIcon = group.querySelector('.toggle-icon');
            
            // Collapse and rotate icon
            leagueEvents.classList.add('collapsed');
            toggleIcon.classList.add('rotated');
        });
    }

    // Load More Functionality
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

    // Betslip Integration with Duplicate Check
    function initBetslipIntegration() {
        const events = document.querySelectorAll('.event-card');
        
        events.forEach(event => {
            const oddButtons = event.querySelectorAll('.odd-btn');
            
            oddButtons.forEach((button, index) => {
                button.addEventListener('click', (e) => {
                    // Get event details
                    const teams = event.querySelectorAll('.team');
                    const header = event.querySelector('.event-header');
                    
                    // Create a unique match identifier based on teams and date
                    const matchIdentifier = `${teams[0].textContent.trim()}-vs-${teams[1].textContent.trim()}-${header.querySelector('.event-time').textContent.trim()}`;
                    
                    // Determine the bet type based on button position
                    let betType;
                    if (index === 0) betType = 'Home';
                    else if (index === 1) betType = 'Draw';
                    else if (index === 2) betType = 'Away';
                    
                    const eventDetails = {
                        matchId: matchIdentifier,
                        teams: `${teams[0].textContent} vs ${teams[1].textContent}`,
                        date: header.querySelector('.event-time').textContent,
                        market: event.closest('.event-card').getAttribute('data-market') || '1x2',
                        value: betType,
                        odd: button.textContent,
                        league: header.querySelector('.event-league') ? header.querySelector('.event-league').textContent : 'Unknown League',
                        selected: true
                    };
                    
                    // Check if betslip rail is available
                    if (window.betslipRail && window.betslipRail.addSelection) {
                        // Check if event already exists in betslip
                        const existingBet = window.betslipRail.checkIfExists ? 
                            window.betslipRail.checkIfExists(matchIdentifier) : false;
                        
                        if (existingBet) {
                            // Update existing bet instead of adding duplicate
                            if (window.betslipRail.updateSelection) {
                                window.betslipRail.updateSelection(eventDetails);
                                
                                // Update UI: remove selected class from all odds in this event
                                oddButtons.forEach(btn => btn.classList.remove('selected'));
                                // Add selected class to clicked button
                                button.classList.add('selected');
                            } else {
                                // Fallback: show message that bet already exists
                                console.log('Bet already exists in betslip. Updating selection...');
                                // Still highlight the selected odd
                                oddButtons.forEach(btn => btn.classList.remove('selected'));
                                button.classList.add('selected');
                            }
                        } else {
                            // Add new selection
                            window.betslipRail.addSelection(eventDetails);
                            
                            // Highlight selected odd
                            oddButtons.forEach(btn => btn.classList.remove('selected'));
                            button.classList.add('selected');
                        }
                    } else {
                        console.warn('Betslip rail not available');
                        
                        // Still update UI for visual feedback
                        oddButtons.forEach(btn => btn.classList.remove('selected'));
                        button.classList.add('selected');
                    }
                });
            });
        });
    }

    // Optional: CSS to support the JavaScript
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
        margin-top: 15px;
        background-color: #333;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 5px;
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

    // Inject styles
    document.head.insertAdjacentHTML('beforeend', styles);

    // Initialize functionalities
    initLeagueCollapse();
    initLoadMore();
    initBetslipIntegration();
});