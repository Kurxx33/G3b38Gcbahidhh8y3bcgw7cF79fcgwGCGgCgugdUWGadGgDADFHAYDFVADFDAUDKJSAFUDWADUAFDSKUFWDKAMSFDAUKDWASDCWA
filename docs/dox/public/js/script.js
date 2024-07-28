// Example: Handle search bar input
document.querySelector('.search-bar input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.paste').forEach(paste => {
        const title = paste.querySelector('.paste-title').innerText.toLowerCase();
        const content = paste.querySelector('.paste-content').innerText.toLowerCase();
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            paste.style.display = 'block';
        } else {
            paste.style.display = 'none';
        }
    });
});
