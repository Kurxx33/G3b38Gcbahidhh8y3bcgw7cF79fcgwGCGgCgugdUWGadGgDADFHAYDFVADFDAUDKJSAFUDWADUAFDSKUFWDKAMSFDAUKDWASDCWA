<?php
// auth.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    include('db_conn.php');

    $username = $_POST['username'];
    $password = $_POST['password'];

    // Log the received data
    error_log("Received Username: " . $username);
    error_log("Received Password: " . $password);

    $sql = "SELECT * FROM user_profiles WHERE username = ?";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        error_log("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        error_log("Fetched User: " . print_r($user, true));

        if ($user['password'] === $password) {
            session_start();
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];
            header('Location: dashboard.php');
            exit();
        } else {
            error_log("Invalid password.");
            echo "Invalid password.";
        }
    } else {
        error_log("User not found.");
        echo "User not found.";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
