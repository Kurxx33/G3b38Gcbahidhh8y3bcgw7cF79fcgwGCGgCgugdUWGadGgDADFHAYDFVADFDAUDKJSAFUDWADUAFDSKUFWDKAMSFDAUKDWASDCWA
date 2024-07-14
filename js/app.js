// app.js

const githubToken = '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';
const repoOwner = 'artemaslol';
const repoName = 'final';

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        username: document.getElementById('login-username').value,
        password: document.getElementById('login-password').value
    };

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (response.ok) {
            console.log('Login successful:', result);

            // Store user data in user-bios.json on GitHub
            const userData = {
                username: formData.username,
                password: formData.password
                // Add other user data fields as needed
            };

            await updateUserBios(userData); // Call function to update user-bios.json
            document.getElementById('login-message').textContent = 'Login successful!';
            
            // Redirect to dashboard or another page
            window.location.href = '/dashboard.html'; // Example redirect
        } else {
            console.error('Login failed:', result.error);
            document.getElementById('login-message').textContent = 'Login failed: ' + result.error;
        }
    } catch (error) {
        console.error('Error during login:', error);
        document.getElementById('login-message').textContent = 'Error during login';
    }
});

async function updateUserBios(userData) {
    try {
        // Fetch current user-bios.json content from GitHub
        const currentContentResponse = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/user-bios.json`, {
            headers: {
                Authorization: `token ${githubToken}`,
                'Content-Type': 'application/json',
                Accept: 'application/vnd.github.v3+json'
            }
        });

        if (!currentContentResponse.ok) {
            throw new Error('Failed to fetch current user-bios.json content');
        }

        const currentContent = await currentContentResponse.json();
        const currentContentDecoded = JSON.parse(atob(currentContent.content)); // Decode base64 content

        // Update user-bios.json with new user data
        currentContentDecoded.push(userData); // Add new user data to array

        // Commit updated user-bios.json back to GitHub
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/user-bios.json`, {
            method: 'PUT',
            headers: {
                Authorization: `token ${githubToken}`,
                'Content-Type': 'application/json',
                Accept: 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
                message: `Update user data for ${userData.username}`,
                content: btoa(JSON.stringify(currentContentDecoded)), // Encode new content to base64
                sha: currentContent.sha // Provide current SHA for optimistic locking
            })
        });

        if (!response.ok) {
            throw new Error('Failed to update user-bios.json');
        }

        console.log('User data updated successfully:', userData);
    } catch (error) {
        console.error('Error updating user-bios.json:', error);
        throw error; // Propagate error for handling
    }
}
