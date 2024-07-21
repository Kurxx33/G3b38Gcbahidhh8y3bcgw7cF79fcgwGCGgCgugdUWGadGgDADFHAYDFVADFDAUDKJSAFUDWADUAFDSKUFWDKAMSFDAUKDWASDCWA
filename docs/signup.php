<?php
require 'database.php';

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);
$inviteCode = $data['invite'];

if ($inviteCode !== 'artemas_000-000-001') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid invite code']);
    exit;
}

$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error: ' . $conn->error]);
}

$conn->close();
?>
