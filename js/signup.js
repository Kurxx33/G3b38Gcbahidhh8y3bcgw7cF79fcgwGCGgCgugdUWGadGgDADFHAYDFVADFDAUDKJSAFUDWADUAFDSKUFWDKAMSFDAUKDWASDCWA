const githubToken = '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';
const repoOwner = 'artemaslol';
const repoName = 'final';

// Check if invite code and password match before allowing sign up
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const inviteCode = document.getElementById('inviteCode').value;

    if (inviteCode !== 'artemas_000-000-001') {
        alert('Invalid invite code.');
        return;
    }

    // Proceed with sign-up logic (GitHub integration)
    try {
        await createUser(username, password);
        alert('Sign up successful!');

        // Redirect to dashboard or other page
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error('Failed to create user account:', error);
        alert('Failed to create user account. Please try again later.');
    }
});

async function createUser(username, password) {
    // Example: Commit user data to GitHub repository
    const userData = {
        username: username,
        password: password // Note: This is not secure for production; use secure methods to handle passwords
        // Add additional fields as needed
    };

    // Commit user data JSON to GitHub repository
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/user-bios.json`, {
        method: 'GET',
        headers: {
            Authorization: `token ${githubToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.v3+json'
        }
    });

    let existingData = await response.json();
    existingData = JSON.parse(atob(existingData.content)); // Decode existing data

    // Add new user data to existingData
    existingData.push(userData);

    // Update user-bios.json with new data
    const updateResponse = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/user-bios.json`, {
        method: 'PUT',
        headers: {
            Authorization: `token ${githubToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
            message: `Update user-bios.json with ${username}'s data`,
            content: btoa(JSON.stringify(existingData)) // Base64 encode updated data
        })
    });

    if (!updateResponse.ok) {
        throw new Error('Failed to update user-bios.json.');
    }
}
