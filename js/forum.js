const githubToken = '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'; // Replace with your GitHub token
const repoOwner = 'artemaslol';
const repoName = 'final';

// Function to fetch forum messages
async function fetchForumMessages() {
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/forum-messages.json`, {
        headers: {
            Authorization: `token ${githubToken}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        const messages = JSON.parse(atob(data.content)); // Decode base64 content
        return messages;
    } else {
        throw new Error('Failed to fetch forum messages');
    }
}

// Function to save forum message
async function saveForumMessage(message) {
    // Check if user is authenticated (set by login.js)
    if (!isLoggedIn()) {
        console.error('User is not authenticated. Cannot save message.');
        return;
    }

    let messages = await fetchForumMessages();
    messages.push(message);

    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/forum-messages.json`, {
        method: 'PUT',
        headers: {
            Authorization: `token ${githubToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'New message added',
            content: btoa(JSON.stringify(messages)), // Encode to base64
            sha: messages.sha // Use existing sha for update
        })
    });

    if (response.ok) {
        console.log('Message saved successfully');
    } else {
        throw new Error('Failed to save message');
    }
}
