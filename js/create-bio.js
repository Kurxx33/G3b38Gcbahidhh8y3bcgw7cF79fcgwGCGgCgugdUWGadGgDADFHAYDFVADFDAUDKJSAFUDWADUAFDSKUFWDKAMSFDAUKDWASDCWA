const githubToken = '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'; // Replace with your GitHub token
const repoOwner = 'artemaslol';
const repoName = 'final';

async function createUserBio(username, profilePictureUrl, backgroundSongUrl) {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${username}'s Bio</title>
    <link rel="stylesheet" href="user-bio-style.css">
</head>
<body>
    <div class="card">
        <img id="profile-picture" src="${profilePictureUrl}" alt="Profile Picture">
        <h1 id="username">${username}</h1>
    </div>
    <audio id="background-song" controls>
        <source src="${backgroundSongUrl}" type="audio/mp3">
        Your browser does not support the audio element.
    </audio>
</body>
</html>
`;

    const cssContent = `
body {
    background-color: #000;
    color: #fff;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background: url('background.jpg') no-repeat center center fixed;
    background-size: cover;
}

.card {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    width: 300px;
    filter: blur(10px);
    backdrop-filter: blur(10px);
}

.card img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
}

audio {
    margin-top: 20px;
}
`;

    const base64HtmlContent = btoa(unescape(encodeURIComponent(htmlContent)));
    const base64CssContent = btoa(unescape(encodeURIComponent(cssContent)));

    // Create HTML file in GitHub repository
    await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${username}.html`, {
        method: 'PUT',
        headers: {
            Authorization: `token ${githubToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: `Create bio page for ${username}`,
            content: base64HtmlContent
        })
    });

    // Create CSS file in GitHub repository
    await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${username}-style.css`, {
        method: 'PUT',
        headers: {
            Authorization: `token ${githubToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: `Create bio style for ${username}`,
            content: base64CssContent
        })
    });

    console.log(`Bio page for ${username} created successfully.`);
}

// Example usage:
// createUserBio('john_doe', 'https://example.com/john.jpg', 'https://example.com/song.mp3');
