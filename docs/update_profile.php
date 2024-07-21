<?php
require 'database.php';

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$bio = $data['bio'];
$profilePicture = $data['profilePicture'];

$collection = $client->selectDatabase('artemas')->selectCollection('users');

$updateResult = $collection->updateOne(
    ['username' => $username],
    ['$set' => [
        'bio' => $bio,
        'profilePicture' => $profilePicture,
    ]]
);

if ($updateResult->getModifiedCount() === 1) {
    echo json_encode(['status' => 'success', 'message' => 'Profile updated successfully']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error updating profile']);
}
?>
