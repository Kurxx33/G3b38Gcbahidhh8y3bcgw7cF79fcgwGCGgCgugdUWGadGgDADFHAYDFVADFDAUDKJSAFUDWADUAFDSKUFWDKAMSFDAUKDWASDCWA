document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('viewsChart').getContext('2d');
    const viewsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [], // Add dates here
            datasets: [{
                label: 'Views',
                data: [], // Add views data here
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    },
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Views'
                    }
                }
            }
        }
    });

    // Fetch and update leaderboard data
    async function updateLeaderboard() {
        const response = await fetch('/api/leaderboard');
        if (response.ok) {
            const leaderboard = await response.json();
            const leaderboardElement = document.getElementById('leaderboard');
            leaderboardElement.innerHTML = leaderboard.map(user => `
                <li class="bg-gray-800 p-2 rounded flex justify-between">
                    <span>${user.username}</span>
                    <span>${user.views} views</span>
                </li>
            `).join('');
        }
    }

    // Fetch and update views chart data
    async function updateViewsChart() {
        const response = await fetch('/api/views');
        if (response.ok) {
            const { labels, data } = await response.json();
            viewsChart.data.labels = labels;
            viewsChart.data.datasets[0].data = data;
            viewsChart.update();
        }
    }

    updateLeaderboard();
    updateViewsChart();
});
