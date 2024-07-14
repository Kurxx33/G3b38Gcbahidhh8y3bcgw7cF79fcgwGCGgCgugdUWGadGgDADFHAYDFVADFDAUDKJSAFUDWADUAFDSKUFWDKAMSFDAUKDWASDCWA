// 404.js

// Function to handle initializing the 404 page
function init404Page() {
    // Get the current URL pathname
    var currentPath = window.location.pathname;

    // Update the DOM with the incorrect URL path
    var pathElement = document.getElementById('wrongPath');
    if (pathElement) {
        pathElement.textContent = currentPath;
    }
}

// Initialize the 404 page when the script loads
window.onload = function() {
    init404Page();
};
