<?php
session_start();
include 'db_conn.php';

if ($_SESSION['role'] !== 'admin') {
    die("Access denied");
}

function createInviteKey() {
    global $conn;
    $key = 'artemas_' . bin2hex(random_bytes(5));
    
    $stmt = $conn->prepare("INSERT INTO invite_keys (key_value) VALUES (?)");
    $stmt->bind_param("s", $key);
    $stmt->execute();
    
    return $key;
}

function logAdminAction($admin_id, $action) {
    global $conn;
    $stmt = $conn->prepare("INSERT INTO admin_logs (admin_id, action) VALUES (?, ?)");
    $stmt->bind_param("is", $admin_id, $action);
    $stmt->execute();
}
?>
