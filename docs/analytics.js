document.addEventListener('DOMContentLoaded', function() {
    fetch('analytics.php')
    .then(response => response.json())
    .then(data => {
        const viewsGraph = document.getElementById('viewsGraph');
        const leaderboard = document.getElementById('leaderboard');

        viewsGraph.innerHTML = data.viewsGraphHtml;
        leaderboard.innerHTML = data.leaderboardHtml;
    });
});
