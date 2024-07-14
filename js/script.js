document.addEventListener('DOMContentLoaded', function() {
    // Function to show notifications
    function showNotification(type, message) {
        const notification = document.getElementById('dashboardNotification');
        notification.textContent = message;
        notification.classList.add(type);
        notification.style.display = 'block';

        // Hide notification after 3 seconds
        setTimeout(function() {
            notification.style.display = 'none';
            notification.classList.remove(type);
        }, 3000);
    }

    // Function to handle form submission
    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate saving bio (replace with actual backend logic)
        const spotifySong = document.getElementById('spotifySong').value;
        const bioText = document.getElementById('bioText').value;
        const background = document.getElementById('background').value;
        const profilePhoto = document.getElementById('profilePhoto').value;

        // Example validation (replace with actual validation logic)
        if (spotifySong.trim() === '' || bioText.trim() === '') {
            showNotification('error', 'Please fill in all fields.');
        } else {
            // Simulate successful bio save
            showNotification('success', 'Bio saved successfully!');
        }
    });

    // Function to greet user upon login
    function greetUser(username) {
        const header = document.querySelector('header');
        const greeting = document.createElement('p');
        greeting.textContent = `Hello, ${username}! 👋`;
        greeting.classList.add('greeting');
        header.appendChild(greeting);
    }

    // Replace 'your-username' with actual username from backend or sign up
    const username = 'your-username'; // Replace with dynamic username
    greetUser(username);
});

document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const inviteCode = document.getElementById('invite-code').value;

    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, inviteCode })
    });

    const result = await response.json();
    const messageDiv = document.getElementById('signup-message');

    if (response.ok) {
        messageDiv.textContent = 'Sign up successful!';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = result.error || 'Sign up failed!';
    }
});

document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    const messageDiv = document.getElementById('login-message');

    if (response.ok) {
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = result.error || 'Login failed!';
    }
});
// script.js

document.getElementById('saveChangesButton').addEventListener('click', () => {
    const textEffect = document.getElementById('textEffectInput').value;
    const typewriterEffect = document.getElementById('typewriterEffectInput').value;
    const glowEffect = document.getElementById('glowEffectInput').value;
    const backgroundColor = document.getElementById('backgroundColorInput').value;
    const textColor = document.getElementById('textColorInput').value;
    const bioText = document.getElementById('bioTextInput').value;
    const snowEffect = document.getElementById('snowEffectInput').checked;
    const fileDropper = document.getElementById('fileDropper').files[0];

    // Save the data to localStorage (simulate backend)
    localStorage.setItem('textEffect', textEffect);
    localStorage.setItem('typewriterEffect', typewriterEffect);
    localStorage.setItem('glowEffect', glowEffect);
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('textColor', textColor);
    localStorage.setItem('bioText', bioText);
    localStorage.setItem('snowEffect', snowEffect);

    if (fileDropper) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('fileDropper', e.target.result);
        };
        reader.readAsDataURL(fileDropper);
    }
    
    alert('Changes saved!');
});
