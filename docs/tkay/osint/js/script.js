// script.js

async function searchUsernames() {
    const username = document.getElementById('username').value.trim();
    const resultsDiv = document.getElementById('results');
    
    if (!username) {
        resultsDiv.innerHTML = '<p>Please enter a username.</p>';
        return;
    }
    
    // Sample URLs for demonstration
    const urls = {
        twitter: `https://twitter.com/${username}`,
        youtube: `https://www.youtube.com/results?search_query=${username}`,
        roblox: `https://robloxsocial.com/users/${username}`, // hypothetical
        telegram: `https://t.me/${username}`,
        tiktok: `https://www.tiktok.com/@${username}`
    };
    
    resultsDiv.innerHTML = `<h2>Search Results for "${username}":</h2>`;
    
    for (const [platform, url] of Object.entries(urls)) {
        const link = `<a href="${url}" target="_blank">${platform.charAt(0).toUpperCase() + platform.slice(1)}</a>`;
        resultsDiv.innerHTML += `<div class="result-item">${link}</div>`;
    }
}
