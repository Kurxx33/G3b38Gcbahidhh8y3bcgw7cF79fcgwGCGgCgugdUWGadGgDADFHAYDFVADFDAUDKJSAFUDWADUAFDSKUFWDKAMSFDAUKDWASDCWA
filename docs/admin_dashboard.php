<?php
session_start();
if (!isset($_SESSION['username']) || $_SESSION['role'] !== 'Admin') {
    header("Location: login.php");
    exit();
}

include('db_conn.php');

// Handle adding users
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_user'])) {
    $newUsername = $_POST['new_username'];
    $newPassword = $_POST['new_password'];

    // Validate and sanitize inputs
    $newUsername = htmlspecialchars($newUsername, ENT_QUOTES, 'UTF-8');
    $newPassword = htmlspecialchars($newPassword, ENT_QUOTES, 'UTF-8');

    // Hash the password
    $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

    // Create new user
    $insertUserSql = "INSERT INTO user_profiles (username, password, role) VALUES (?, ?, 'User')";
    $insertStmt = $conn->prepare($insertUserSql);
    $insertStmt->bind_param("ss", $newUsername, $hashedPassword);
    $insertStmt->execute();
    
    echo "User added successfully!";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
</head>
<body>
    <h1>Welcome, Admin</h1>

    <h2>Add New User</h2>
    <form method="post">
        <label for="new_username">Username:</label>
        <input type="text" id="new_username" name="new_username" required>
        <br>
        <label for="new_password">Password:</label>
        <input type="password" id="new_password" name="new_password" required>
        <br>
        <input type="submit" name="add_user" value="Add User">
    </form>

    <!-- Additional admin features here -->

</body>
</html>
