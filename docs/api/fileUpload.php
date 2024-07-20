<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $apiUrl = 'https://luckycloud.in/api/upload';
    $headers = [
        'Authorization: Bearer YOUR_API_KEY',
    ];
    
    $postData = [
        'file' => new CURLFile($_FILES['file']['tmp_name']),
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $apiUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
}
?>
