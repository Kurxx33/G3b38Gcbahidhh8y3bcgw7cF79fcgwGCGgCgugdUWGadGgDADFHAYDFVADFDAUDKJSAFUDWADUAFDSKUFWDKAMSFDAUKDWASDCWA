<?php
session_start();
include 'db_conn.php';

function updateProfile($user_id, $data) {
    global $conn;

    $fields = [];
    $values = [];
    
    foreach ($data as $key => $value) {
        $fields[] = "$key = ?";
        $values[] = $value;
    }
    
    $values[] = $user_id;
    $query = "UPDATE users SET " . implode(", ", $fields) . " WHERE id = ?";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param(str_repeat('s', count($values)), ...$values);
    $stmt->execute();
}
?>
