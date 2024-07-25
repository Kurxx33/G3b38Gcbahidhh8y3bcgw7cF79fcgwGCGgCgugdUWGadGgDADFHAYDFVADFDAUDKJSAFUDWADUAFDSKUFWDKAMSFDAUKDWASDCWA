<?php
session_start();
include 'db_conn.php';

function login($username, $password) {
    global $conn;

    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['role'] = $user['role'];
        return true;
    }
    return false;
}

function register($username, $password, $invite_key) {
    global $conn;

    $stmt = $conn->prepare("SELECT * FROM invite_keys WHERE key_value = ? AND used = FALSE");
    $stmt->bind_param("s", $invite_key);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $hashed_password);
        $stmt->execute();

        $stmt = $conn->prepare("UPDATE invite_keys SET used = TRUE WHERE key_value = ?");
        $stmt->bind_param("s", $invite_key);
        $stmt->execute();

        return true;
    }
    return false;
}
?>
