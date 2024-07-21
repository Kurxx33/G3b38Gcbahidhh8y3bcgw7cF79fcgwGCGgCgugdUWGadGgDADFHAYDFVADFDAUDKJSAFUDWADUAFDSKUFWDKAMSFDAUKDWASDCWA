document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const invite = document.getElementById('invite').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    fetch('signup.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, invite }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            window.location.href = 'login.html';
        } else {
            alert(data.message);
        }
    });
});
