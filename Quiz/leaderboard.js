// Leaderboard Management
const leaderboardTable = document.getElementById('leaderboard-table');
const clearBtn = document.getElementById('clear-btn');

// Load and display leaderboard
function loadLeaderboard() {
  const scores = JSON.parse(localStorage.getItem('quizScores') || '[]');
  
  if (scores.length === 0) {
    leaderboardTable.innerHTML = `
      <div class="empty-state">
        <h3>No Scores Yet!</h3>
        <p>Be the first to take the quiz and claim the top spot!</p>
      </div>
    `;
    return;
  }

  // Sort by score (descending), then by date (most recent first)
  scores.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return new Date(b.date) - new Date(a.date);
  });

  // Display leaderboard
  let html = '';
  scores.forEach((entry, index) => {
    const rank = index + 1;
    const topClass = rank === 1 ? 'top-1' : rank === 2 ? 'top-2' : rank === 3 ? 'top-3' : '';
    const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '';
    
    html += `
      <div class="leaderboard-item ${topClass}">
        <div class="rank">${medal || rank}</div>
        <div class="player-info">
          <div class="player-name">${escapeHtml(entry.username)}</div>
          <div class="player-date">${formatDate(entry.date)}</div>
        </div>
        <div class="score">${entry.score}/${entry.total}</div>
      </div>
    `;
  });

  leaderboardTable.innerHTML = html;
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Clear all scores
clearBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear all scores? This action cannot be undone.')) {
    localStorage.removeItem('quizScores');
    loadLeaderboard();
  }
});

// Load leaderboard on page load
loadLeaderboard();

