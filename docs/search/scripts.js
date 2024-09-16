document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchInput = document.getElementById('search-input').value;
    const searchType = document.getElementById('search-type').value;

    if (searchInput.trim() === '') {
        alert('Please enter a value to search');
        return;
    }

    fetchResults(searchInput, searchType);
});

function fetchResults(query, type) {
    const apiUrl = `https://leakcheck.io/api/public?check=${query}`;

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    resultsDiv.style.display = 'block';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.success && data.found > 0) {
                let resultBlock = document.createElement('div');
                resultBlock.innerHTML = `<h3>Found ${data.found} results</h3><pre>${formatResults(data)}</pre>`;
                resultsDiv.appendChild(resultBlock);
            } else {
                resultsDiv.innerHTML = `<div><p>No data found for the query.</p></div>`;
            }
        })
        .catch(err => {
            resultsDiv.innerHTML = `<div><p>Error fetching results.</p></div>`;
        });
}

function formatResults(data) {
    let formatted = '';
    data.sources.forEach(source => {
        formatted += `Source: ${source.name} (Date: ${source.date})\n`;
    });
    return formatted;
}
