<?php
session_start();
include 'db.php'; // Include your database connection

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare and execute SQL statement
    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($hashed_password);
    $stmt->fetch();

    // Verify password
    if (password_verify($password, $hashed_password)) {
        $_SESSION['username'] = $username;
        header("Location: index.html"); // Redirect to homepage after login
    } else {
        echo "Invalid username or password. <a href='login.html'>Try again</a>";
    }

    $stmt->close();
    $conn->close();
}
?>
