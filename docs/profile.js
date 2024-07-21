document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const bio = document.getElementById('bio').value;
    const profilePicture = document.getElementById('profilePicture').value;

    fetch('update_profile.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, bio, profilePicture }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Profile updated successfully');
        } else {
            alert(data.message);
        }
    });
});
