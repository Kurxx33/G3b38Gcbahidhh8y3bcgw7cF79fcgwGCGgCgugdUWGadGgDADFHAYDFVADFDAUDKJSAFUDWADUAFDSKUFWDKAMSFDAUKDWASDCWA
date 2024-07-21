document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const invite = document.getElementById('invite').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Implement sign-up logic here
    alert('Signed up successfully');
    window.location.href = 'login.html';
});
