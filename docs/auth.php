<?php
// auth.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    include('db_conn.php');

    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare and execute SQL query
    $sql = "SELECT * FROM user_profiles WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Check hashed password
        if (password_verify($password, $user['password'])) {
            session_start();
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];
            header('Location: dashboard.php');
            exit();
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "User not found.";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
