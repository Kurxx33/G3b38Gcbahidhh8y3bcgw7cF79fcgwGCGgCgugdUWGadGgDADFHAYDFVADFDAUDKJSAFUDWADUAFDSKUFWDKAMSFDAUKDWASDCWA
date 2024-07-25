<?php
// auth.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    include('db_conn.php');

    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare and execute SQL query
    $sql = "SELECT * FROM user_profiles WHERE username = ? AND password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        session_start();
        $_SESSION['username'] = $username;
        $_SESSION['role'] = $result->fetch_assoc()['role'];
        header('Location: dashboard.php');
        exit();
    } else {
        echo "Invalid username or password.";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
