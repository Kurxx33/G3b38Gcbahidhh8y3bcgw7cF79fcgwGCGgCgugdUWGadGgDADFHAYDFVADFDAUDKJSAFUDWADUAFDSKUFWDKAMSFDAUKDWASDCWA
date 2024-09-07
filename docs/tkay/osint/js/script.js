function removeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
}

async function searchUsername() {
    const username = document.getElementById('username').value;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (!username) {
        resultsContainer.innerHTML = '<p class="result-item">Please enter a username</p>';
        return;
    }

    const sites = {
        Twitter: `https://twitter.com/${username}`,
        YouTube: `https://youtube.com/user/${username}`,
        Roblox: `https://robloxlive.com/user/${username}`,
        Telegram: `https://t.me/${username}`,
        TikTok: `https://www.tiktok.com/@${username}`,
        // Add more sites as needed
    };

    for (const [site, url] of Object.entries(sites)) {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            if (response.ok) {
                resultsContainer.innerHTML += `<p class="result-item glitch">Username found on ${site}: <a href="${url}" target="_blank">${url}</a></p>`;
            } else {
                resultsContainer.innerHTML += `<p class="result-item">Username not found on ${site}</p>`;
            }
        } catch (error) {
            resultsContainer.innerHTML += `<p class="result-item">Error checking ${site}</p>`;
        }
    }
}
