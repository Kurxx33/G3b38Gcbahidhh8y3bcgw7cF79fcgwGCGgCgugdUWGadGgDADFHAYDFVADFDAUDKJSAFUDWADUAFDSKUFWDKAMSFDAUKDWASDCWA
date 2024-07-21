<?php
require 'database.php';

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = $data['password'];

$collection = $client->selectDatabase('artemas')->selectCollection('users');

$user = $collection->findOne(['username' => $username]);

if ($user && password_verify($password, $user['password'])) {
    echo json_encode(['status' => 'success', 'message' => 'Login successful']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid username or password']);
}
?>
