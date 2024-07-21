document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const file = document.getElementById('file').files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('https://dash.luckycloud.in/api/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('File uploaded successfully');
        } else {
            alert('File upload failed');
        }
    });
});
