document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const computerScreen = document.getElementById('computer-screen');
    const userDropdown = document.getElementById('user-dropdown');
    const loginForm = document.getElementById('login-form');
    const contentSection = document.querySelector('.content');

    // Hide content initially
    contentSection.classList.add('hidden');

    // Dropdown change event
    userDropdown.addEventListener('change', function() {
        if (userDropdown.value === 'kurxx33') {
            // Show computer screen
            splashScreen.style.display = 'none';
            computerScreen.style.display = 'block';
            contentSection.classList.remove('hidden');
        }
    });

    // Form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Simulate login functionality
        const username = loginForm.username.value.trim();
        if (username.toLowerCase() === 'kurxx33') {
            // Show computer screen
            splashScreen.style.display = 'none';
            computerScreen.style.display = 'block';
            contentSection.classList.remove('hidden');
        } else {
            alert('Invalid username. Please try again.');
        }
    });

    // Clock functionality
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        document.getElementById('clock').textContent = timeString;
    }

    // Update clock every second
    setInterval(updateClock, 1000);

    // Initial clock update
    updateClock();
});
