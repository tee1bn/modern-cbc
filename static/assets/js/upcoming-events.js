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

    document.head.insertAdjacentHTML('beforeend', styles);

    initLeagueCollapse();
});