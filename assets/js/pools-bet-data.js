// Match data structure - exactly 49 matches
const matchesData = [
  // Featured Events (10 matches)
  { id: 1, date: '04/01 Sunday', time: '15:00', home: 'Manchester United', away: 'Liverpool', league: 'English Premier League', odds: ['1.85', '3.40', '4.20'], bestOdd: 0 },
  { id: 2, date: '04/01 Sunday', time: '17:30', home: 'Real Madrid', away: 'Barcelona', league: 'Spanish La Liga', odds: ['2.10', '3.20', '3.50'], bestOdd: 1 },
  { id: 3, date: '04/01 Sunday', time: '18:00', home: 'Bayern Munich', away: 'Borussia Dortmund', league: 'German Bundesliga', odds: ['1.65', '3.80', '5.20'], bestOdd: 0 },
  { id: 4, date: '04/01 Sunday', time: '19:45', home: 'AC Milan', away: 'Inter Milan', league: 'Italian Serie A', odds: ['2.30', '3.10', '3.20'], bestOdd: 1 },
  { id: 5, date: '04/01 Sunday', time: '20:00', home: 'Paris Saint-Germain', away: 'Olympique Marseille', league: 'French Ligue 1', odds: ['1.45', '4.20', '6.50'], bestOdd: 0 },
  { id: 6, date: '05/01 Monday', time: '14:00', home: 'Chelsea', away: 'Arsenal', league: 'UEFA Champions League', odds: ['2.05', '3.30', '3.60'], bestOdd: 1 },
  { id: 7, date: '05/01 Monday', time: '16:30', home: 'Benfica', away: 'Porto', league: 'Portuguese Primeira Liga', odds: ['1.95', '3.25', '4.10'], bestOdd: 0 },
  { id: 8, date: '05/01 Monday', time: '18:00', home: 'Ajax Amsterdam', away: 'PSV Eindhoven', league: 'Dutch Eredivisie', odds: ['2.15', '3.35', '3.40'], bestOdd: 2 },
  { id: 9, date: '05/01 Monday', time: '19:00', home: 'Galatasaray', away: 'Fenerbahce', league: 'Turkish Super Lig', odds: ['1.75', '3.50', '4.80'], bestOdd: 0 },
  { id: 10, date: '05/01 Monday', time: '20:30', home: 'Club Brugge', away: 'Anderlecht', league: 'Belgian Pro League', odds: ['2.25', '3.15', '3.30'], bestOdd: 1 },
  
  // English Premier League (8 matches)
  { id: 11, date: '06/01 Tuesday', time: 'Sat 15:00', home: 'Newcastle United', away: 'Tottenham Hotspur', league: 'English Premier League', odds: ['2.40', '3.30', '2.90'], bestOdd: 1 },
  { id: 12, date: '06/01 Tuesday', time: 'Sat 15:00', home: 'Aston Villa', away: 'West Ham United', league: 'English Premier League', odds: ['1.85', '3.50', '4.30'], bestOdd: 0 },
  { id: 13, date: '06/01 Tuesday', time: 'Sat 17:30', home: 'Brighton & Hove Albion', away: 'Wolverhampton Wanderers', league: 'English Premier League', odds: ['1.95', '3.40', '3.80'], bestOdd: 2 },
  { id: 14, date: '06/01 Tuesday', time: 'Sun 14:00', home: 'Everton', away: 'Leicester City', league: 'English Premier League', odds: ['2.10', '3.25', '3.50'], bestOdd: 0 },
  { id: 15, date: '06/01 Tuesday', time: 'Sun 14:00', home: 'Fulham', away: 'Crystal Palace', league: 'English Premier League', odds: ['2.05', '3.30', '3.60'], bestOdd: 1 },
  { id: 16, date: '06/01 Tuesday', time: 'Sun 16:30', home: 'Southampton', away: 'Bournemouth', league: 'English Premier League', odds: ['2.20', '3.20', '3.40'], bestOdd: 2 },
  { id: 17, date: '06/01 Tuesday', time: 'Sun 16:30', home: 'Nottingham Forest', away: 'Brentford', league: 'English Premier League', odds: ['1.90', '3.45', '4.00'], bestOdd: 0 },
  { id: 18, date: '06/01 Tuesday', time: 'Mon 20:00', home: 'Luton Town', away: 'Sheffield United', league: 'English Premier League', odds: ['2.15', '3.15', '3.50'], bestOdd: 1 },
  
  // Spanish La Liga (10 matches)
  { id: 19, date: '06/01 Tuesday', time: 'Sat 14:00', home: 'Atletico Madrid', away: 'Sevilla', league: 'Spanish La Liga', odds: ['1.70', '3.60', '5.00'], bestOdd: 0 },
  { id: 20, date: '06/01 Tuesday', time: 'Sat 16:15', home: 'Valencia', away: 'Athletic Bilbao', league: 'Spanish La Liga', odds: ['2.30', '3.20', '3.10'], bestOdd: 1 },
  { id: 21, date: '06/01 Tuesday', time: 'Sat 18:30', home: 'Real Sociedad', away: 'Villarreal', league: 'Spanish La Liga', odds: ['2.00', '3.35', '3.70'], bestOdd: 2 },
  { id: 22, date: '06/01 Tuesday', time: 'Sun 16:00', home: 'Real Betis', away: 'Getafe', league: 'Spanish La Liga', odds: ['1.80', '3.50', '4.50'], bestOdd: 0 },
  { id: 23, date: '06/01 Tuesday', time: 'Sun 18:15', home: 'Osasuna', away: 'Celta Vigo', league: 'Spanish La Liga', odds: ['2.10', '3.25', '3.50'], bestOdd: 1 },
  { id: 24, date: '06/01 Tuesday', time: 'Mon 21:00', home: 'Mallorca', away: 'Girona', league: 'Spanish La Liga', odds: ['2.25', '3.15', '3.30'], bestOdd: 2 },
  { id: 25, date: '07/01 Wednesday', time: 'Sat 14:00', home: 'Rayo Vallecano', away: 'Almeria', league: 'Spanish La Liga', odds: ['1.95', '3.40', '4.00'], bestOdd: 0 },
  { id: 26, date: '07/01 Wednesday', time: 'Sat 16:15', home: 'Cadiz', away: 'Granada', league: 'Spanish La Liga', odds: ['2.20', '3.30', '3.20'], bestOdd: 1 },
  { id: 27, date: '07/01 Wednesday', time: 'Sat 18:30', home: 'Las Palmas', away: 'Alaves', league: 'Spanish La Liga', odds: ['2.05', '3.25', '3.60'], bestOdd: 2 },
  { id: 28, date: '07/01 Wednesday', time: 'Sun 16:00', home: 'Real Valladolid', away: 'Elche', league: 'Spanish La Liga', odds: ['1.85', '3.45', '4.20'], bestOdd: 0 },
  
  // German Bundesliga (10 matches)
  { id: 29, date: '07/01 Wednesday', time: 'Sat 14:00', home: 'RB Leipzig', away: 'Bayer Leverkusen', league: 'German Bundesliga', odds: ['2.10', '3.40', '3.30'], bestOdd: 1 },
  { id: 30, date: '07/01 Wednesday', time: 'Sat 16:15', home: 'Eintracht Frankfurt', away: 'Union Berlin', league: 'German Bundesliga', odds: ['1.90', '3.50', '4.00'], bestOdd: 0 },
  { id: 31, date: '07/01 Wednesday', time: 'Sat 18:30', home: 'VfL Wolfsburg', away: 'Freiburg', league: 'German Bundesliga', odds: ['2.15', '3.35', '3.40'], bestOdd: 2 },
  { id: 32, date: '07/01 Wednesday', time: 'Sun 16:00', home: 'Borussia Monchengladbach', away: 'FC Koln', league: 'German Bundesliga', odds: ['1.75', '3.60', '4.80'], bestOdd: 0 },
  { id: 33, date: '07/01 Wednesday', time: 'Sun 18:15', home: 'Hoffenheim', away: 'Mainz 05', league: 'German Bundesliga', odds: ['2.05', '3.30', '3.60'], bestOdd: 1 },
  { id: 34, date: '07/01 Wednesday', time: 'Mon 21:00', home: 'Augsburg', away: 'Stuttgart', league: 'German Bundesliga', odds: ['2.30', '3.20', '3.10'], bestOdd: 2 },
  { id: 35, date: '08/01 Thursday', time: 'Sat 14:00', home: 'Werder Bremen', away: 'Heidenheim', league: 'German Bundesliga', odds: ['1.80', '3.50', '4.50'], bestOdd: 0 },
  { id: 36, date: '08/01 Thursday', time: 'Sat 16:15', home: 'Bochum', away: 'Darmstadt', league: 'German Bundesliga', odds: ['2.25', '3.25', '3.20'], bestOdd: 1 },
  { id: 37, date: '08/01 Thursday', time: 'Sat 18:30', home: 'Hertha Berlin', away: 'Schalke 04', league: 'German Bundesliga', odds: ['1.95', '3.40', '3.80'], bestOdd: 2 },
  { id: 38, date: '08/01 Thursday', time: 'Sun 16:00', home: 'Hamburg SV', away: 'Hannover 96', league: 'German Bundesliga', odds: ['2.00', '3.35', '3.70'], bestOdd: 0 },
  
  // Italian Serie A (11 matches)
  { id: 39, date: '08/01 Thursday', time: 'Sat 14:00', home: 'Juventus', away: 'Napoli', league: 'Italian Serie A', odds: ['2.10', '3.30', '3.40'], bestOdd: 1 },
  { id: 40, date: '08/01 Thursday', time: 'Sat 16:15', home: 'AS Roma', away: 'Lazio', league: 'Italian Serie A', odds: ['1.85', '3.45', '4.20'], bestOdd: 0 },
  { id: 41, date: '08/01 Thursday', time: 'Sat 18:30', home: 'Atalanta', away: 'Fiorentina', league: 'Italian Serie A', odds: ['1.90', '3.50', '4.00'], bestOdd: 2 },
  { id: 42, date: '08/01 Thursday', time: 'Sun 16:00', home: 'Torino', away: 'Bologna', league: 'Italian Serie A', odds: ['2.15', '3.25', '3.50'], bestOdd: 0 },
  { id: 43, date: '08/01 Thursday', time: 'Sun 18:15', home: 'Sassuolo', away: 'Udinese', league: 'Italian Serie A', odds: ['2.05', '3.35', '3.60'], bestOdd: 1 },
  { id: 44, date: '08/01 Thursday', time: 'Mon 21:00', home: 'Verona', away: 'Empoli', league: 'Italian Serie A', odds: ['2.20', '3.20', '3.40'], bestOdd: 2 },
  { id: 45, date: '09/01 Friday', time: 'Sat 14:00', home: 'Monza', away: 'Lecce', league: 'Italian Serie A', odds: ['1.95', '3.40', '3.90'], bestOdd: 0 },
  { id: 46, date: '09/01 Friday', time: 'Sat 16:15', home: 'Salernitana', away: 'Frosinone', league: 'Italian Serie A', odds: ['2.10', '3.30', '3.50'], bestOdd: 1 },
  { id: 47, date: '09/01 Friday', time: 'Sat 18:30', home: 'Cagliari', away: 'Genoa', league: 'Italian Serie A', odds: ['2.25', '3.15', '3.30'], bestOdd: 2 },
  { id: 48, date: '09/01 Friday', time: 'Sun 16:00', home: 'Spezia', away: 'Cremonese', league: 'Italian Serie A', odds: ['1.80', '3.55', '4.60'], bestOdd: 0 },
  { id: 49, date: '09/01 Friday', time: 'Sun 18:15', home: 'Sampdoria', away: 'Venezia', league: 'Italian Serie A', odds: ['2.00', '3.35', '3.70'], bestOdd: 1 }
];

// Group matches by league
function groupMatchesByLeague(matches) {
  const grouped = {};
  matches.forEach(match => {
    if (!grouped[match.league]) {
      grouped[match.league] = [];
    }
    grouped[match.league].push(match);
  });
  return grouped;
}

// Render featured events (first 10 matches)
function renderFeaturedEvents() {
  const container = document.querySelector('.featured-events');
  if (!container) return;
  
  const featuredMatches = matchesData.slice(0, 10);
  let currentDate = '';
  
  container.innerHTML = featuredMatches.map(match => {
    const showHeader = currentDate !== match.date;
    currentDate = match.date;
    
    return `
      <div class="event-card" data-match-id="${match.id}">
        ${showHeader ? `
          <div class="event-market-header">
            <div class="market-date">${match.date}</div>
            <div class="market-title">
              <span>1</span>
              <span>X</span>
              <span>2</span>
            </div>
          </div>
        ` : ''}
        
        <div class="event-header">
          <span class="event-time">${match.time} <span class="event-extra" onclick="navigateTo('upcoming-single-event.html')">+217</span> <span class="match-badge">#${match.id}</span></span>
          <span class="event-league">${match.league}</span>
        </div>
        <div class="event-body">
          <div class="teams" onclick="navigateTo('upcoming-single-event.html')">
            <div class="team">
              
              ${match.home}
            </div>
            <div class="team">${match.away}</div>
          </div>
          <div class="odds-grid">
            ${match.odds.map((odd, idx) => `
              <button class="odd-btn ${match.bestOdd === idx ? 'best' : ''}">${odd}</button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render league groups (remaining 39 matches)
function renderLeagueGroups() {
  const container = document.querySelector('.events-list');
  if (!container) return;
  
  const groupedMatches = matchesData.slice(10);
  const leagues = groupMatchesByLeague(groupedMatches);
  
  const leagueHTML = Object.entries(leagues).map(([leagueName, matches]) => `
    <div class="league-group">
      <div class="league-header" onclick="toggleLeague(this)">
        <div class="league-info">
          <i class="bi bi-chevron-down toggle-icon"></i>
          <span class="league-name">${leagueName}</span>
          <span class="event-count">${matches.length} events</span>
        </div>
      </div>
      
      <div class="league-events">
        ${matches.map((match, idx) => {
          const showHeader = idx === 0 || matches[idx - 1].date !== match.date;
          return `
            <div class="event-card" data-match-id="${match.id}">
              ${showHeader ? `
                <div class="event-market-header">
                  <div class="market-date">${match.date}</div>
                  <div class="market-title">
                    <span>1</span>
                    <span>X</span>
                    <span>2</span>
                  </div>
                </div>
              ` : ''}
              
              <div class="event-header">
                <span class="event-time">${match.time} <span class="event-extra" onclick="navigateTo('upcoming-single-event.html')">+217</span></span>
              </div>
              <div class="event-body">
                <div class="teams" onclick="navigateTo('upcoming-single-event.html')">
                  <div class="team">
                    <span class="match-badge">#${match.id}</span>
                    ${match.home}
                  </div>
                  <div class="team">${match.away}</div>
                </div>
                <div class="odds-grid">
                  ${match.odds.map((odd, oddIdx) => `
                    <button class="odd-btn ${match.bestOdd === oddIdx ? 'best' : ''}">${odd}</button>
                  `).join('')}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
  
  // Find the featured-events div and insert after it
  const featuredDiv = container.querySelector('.featured-events');
  if (featuredDiv) {
    featuredDiv.insertAdjacentHTML('afterend', leagueHTML);
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedEvents();
  renderLeagueGroups();
  
  // Re-initialize existing functionality
  if (typeof initLeagueCollapse === 'function') initLeagueCollapse();
  if (typeof initLoadMore === 'function') initLoadMore();
  if (typeof initBetslipIntegration === 'function') initBetslipIntegration();
});