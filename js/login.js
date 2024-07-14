const githubToken = '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'; // Replace with your GitHub token
const repoOwner = 'artemaslol';
const repoName = 'final';

// Function to handle login
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetch user-bios.json from GitHub
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/user-bios.json`, {
        headers: {
            Authorization: `token ${githubToken}`,
            Accept: 'application/vnd.github.v3+json'
        }
    });

    if (!response.ok) {
        alert('Failed to fetch user data.');
        return;
    }

    const userData = await response.json();
    const users = JSON.parse(atob(userData.content)); // Decode base64 content

    // Check if username and password match
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login successful!');
        // Redirect to dashboard or another page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
});
