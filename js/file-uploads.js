// File: github-interactions.js

const githubToken = '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';
const repoOwner = 'artemaslol';
const repoName = 'final';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // Handle file uploads
  if (url.pathname === '/upload') {
    return handleUpload(request)
  }

  // Handle bio creation
  if (url.pathname === '/create-bio') {
    return handleCreateBio(request)
  }

  // Return 404 for other routes
  return new Response('Not Found', { status: 404 })
}

async function handleUpload(request) {
  const formData = await request.formData();

  // Extract files from form data
  const profilePictureFile = formData.get('profilePicture');
  const backgroundSongFile = formData.get('backgroundSong');

  // Generate random alphanumeric string (6 characters)
  const randomString = Math.random().toString(36).substring(2, 8);

  // Upload files to GitHub repository
  const profilePictureUrl = await uploadToGitHub(profilePictureFile, 'profilePictures', randomString);
  const backgroundSongUrl = await uploadToGitHub(backgroundSongFile, 'backgroundSongs', randomString);

  return new Response(JSON.stringify({
    profilePictureUrl,
    backgroundSongUrl
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

async function uploadToGitHub(file, folder, randomString) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folder}/${randomString}_${file.name}`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json'
    },
    body: JSON.stringify({
      message: `Upload ${file.name}`,
      content: formData.get('file')
    })
  });

  const data = await response.json();
  return `https://artemas.lol/${randomString}_${file.name}`;
}

async function handleCreateBio(request) {
  const data = await request.json();

  // Create bio JSON
  const bioData = {
    username: data.username,
    profilePictureUrl: data.profilePictureUrl,
    backgroundSongUrl: data.backgroundSongUrl
  }

  // Commit bio JSON to GitHub repository
  const commitResponse = await commitBioToGitHub(bioData);

  if (commitResponse.ok) {
    return new Response(JSON.stringify({
      message: 'Bio created successfully!'
    }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } else {
    return new Response(JSON.stringify({
      error: 'Failed to create bio'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

async function commitBioToGitHub(bioData) {
  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/bios/${bioData.username}.json`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json'
    },
    body: JSON.stringify({
      message: `Create ${bioData.username}'s bio`,
      content: btoa(JSON.stringify(bioData)) // Base64 encode bioData
    })
  });

  return response;
}
