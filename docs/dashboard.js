document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.bg-gray-900 button');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dropdownContent = button.nextElementSibling;
            dropdownContent.classList.toggle('hidden');
            const svg = button.querySelector('svg');
            svg.classList.toggle('rotate-180');
        });
    });

    // Profile form submission
    document.getElementById('profileForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const file = document.getElementById('profilePic').files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            const response = await fetch('/upload/profile', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                alert('Profile picture uploaded successfully');
            } else {
                alert('Failed to upload profile picture');
            }
        }
    });

    // Background form submission
    document.getElementById('bgForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const file = document.getElementById('bgPic').files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            const response = await fetch('/upload/background', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                alert('Background uploaded successfully');
            } else {
                alert('Failed to upload background');
            }
        }
    });

    // Bio text form submission
    document.getElementById('bioTextForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const bioText = document.getElementById('bioText').value;
        const response = await fetch('/update/bio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ bioText })
        });
        if (response.ok) {
            alert('Bio text updated successfully');
        } else {
            alert('Failed to update bio text');
        }
    });

    // Other form submissions can be added similarly...
});
