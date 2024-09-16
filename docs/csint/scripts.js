document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchBar = document.getElementById('search-bar');
    const searchType = document.getElementById('search-type');
    const resultsContainer = document.getElementById('results');

    searchBtn.addEventListener('click', function() {
        const query = searchBar.value.trim();
        const type = searchType.value;

        if (query === '') {
            alert('Please enter a search term.');
            return;
        }

        fetchResults(query, type);
    });

    function fetchResults(query, type) {
        const apiUrls = {
            emails: `https://api.snusbase.com/search?email=${encodeURIComponent(query)}`,
            passwords: `https://api.leakcheck.com/search?password=${encodeURIComponent(query)}`,
            names: `https://api.hackcheck.com/search?name=${encodeURIComponent(query)}`,
            ips: `https://api.breachbase.com/search?ip=${encodeURIComponent(query)}`
        };

        const url = apiUrls[type];

        if (!url) {
            resultsContainer.innerHTML = 'Invalid search type.';
            return;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data.results) {
                    displayResults(data.results);
                } else {
                    resultsContainer.innerHTML = 'No results found.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultsContainer.innerHTML = 'An error occurred while fetching results.';
            });
    }

    function displayResults(results) {
        resultsContainer.innerHTML = '';
        results.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result-item';
            resultDiv.innerHTML = `<p><strong>Type:</strong> ${result.type}</p>
                                   <p><strong>Value:</strong> ${result.value}</p>`;
            resultsContainer.appendChild(resultDiv);
        });
    }
});
