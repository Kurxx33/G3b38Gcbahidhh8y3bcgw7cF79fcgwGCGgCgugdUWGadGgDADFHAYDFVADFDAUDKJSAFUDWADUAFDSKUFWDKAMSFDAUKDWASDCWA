const githubToken = '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';
const repoOwner = 'artemaslol';
const repoName = 'final';

// Function to fetch user bio
async function fetchUserBio(username) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/bios/${username}.json`, {
      headers: {
        Authorization: `token ${githubToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      throw new Error('Bio not found');
    }

    const data = await response.json();
    const bioData = JSON.parse(atob(data.content)); // Decode base64 content
    return bioData;
  } catch (error) {
    console.error('Error fetching user bio:', error.message);
    return null;
  }
}

// Function to update user bio
async function updateUserBio(username, updatedBioData) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/bios/${username}.json`, {
      method: 'PUT',
      headers: {
        Authorization: `token ${githubToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        message: `Update ${username}'s bio`,
        content: btoa(JSON.stringify(updatedBioData)) // Encode bio data to base64
      })
    });

    if (!response.ok) {
      throw new Error('Failed to update bio');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating user bio:', error.message);
    return null;
  }
}

// Function to delete user bio
async function deleteUserBio(username) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/bios/${username}.json`, {
      method: 'DELETE',
      headers: {
        Authorization: `token ${githubToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        message: `Delete ${username}'s bio`
      })
    });

    if (!response.ok) {
      throw new Error('Failed to delete bio');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting user bio:', error.message);
    return null;
  }
}
