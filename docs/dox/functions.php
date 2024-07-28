<?php
session_start();
include 'config.php';

// Function to create a random invite code
function generateInviteCode() {
    return 'artemas-' . bin2hex(random_bytes(8));
}

// Function to check if an invite code is valid
function isInviteValid($code) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM invites WHERE code = ? AND used = FALSE");
    $stmt->execute([$code]);
    return $stmt->rowCount() > 0;
}

// Function to register a new user
function registerUser($username, $password, $email) {
    global $pdo;
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
    $stmt = $pdo->prepare("INSERT INTO users (username, password, email) VALUES (?, ?, ?)");
    return $stmt->execute([$username, $hashedPassword, $email]);
}

// Function to authenticate user
function authenticateUser($username, $password) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        return true;
    }
    return false;
}

// Function to add a new paste
function addPaste($user_id, $title, $content) {
    global $pdo;
    $stmt = $pdo->prepare("INSERT INTO pastes (user_id, title, content) VALUES (?, ?, ?)");
    return $stmt->execute([$user_id, $title, $content]);
}

// Function to get all pastes
function getPastes() {
    global $pdo;
    $stmt = $pdo->query("SELECT * FROM pastes ORDER BY created_at DESC");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>
