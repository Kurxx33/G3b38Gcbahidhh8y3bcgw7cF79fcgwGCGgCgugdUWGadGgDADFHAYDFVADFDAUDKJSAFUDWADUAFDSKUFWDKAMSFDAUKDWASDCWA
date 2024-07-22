document.querySelector('#updateSettingsForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userId = document.querySelector('#userId').value;
    const bioLayout = document.querySelector('#bioLayout').value;
    const bioContent = document.querySelector('#bioContent').value;

    fetch('update_settings.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            user_id: userId,
            bio_layout: bioLayout,
            bio_content: bioContent
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log('Settings updated:', data);
    })
    .catch(error => {
        console.error('Error updating settings:', error);
    });
});
