<?php
session_start();
require 'db_connection.php'; // Adjust according to your DB connection

// Check if user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: login.html");
    exit();
}

// Example of handling profile updates
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_SESSION['username'];
    $bioText = $_POST['bioText'];

    $stmt = $pdo->prepare("UPDATE users SET bioText = ? WHERE username = ?");
    $stmt->execute([$bioText, $username]);

    echo "Profile updated successfully!";
}
?>
