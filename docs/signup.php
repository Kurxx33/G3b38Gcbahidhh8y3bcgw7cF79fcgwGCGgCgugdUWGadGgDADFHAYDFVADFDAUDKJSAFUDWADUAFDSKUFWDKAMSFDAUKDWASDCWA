<?php
// Include database connection
include('db_conn.php');

// Check the request method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve and sanitize input data
    $username = $_POST['username'];
    $password = $_POST['password'];
    $invite_code = $_POST['invite_code'];

    // Check invite code validity (assuming you have a function for this)
    $stmt = $conn->prepare("SELECT * FROM invite_codes WHERE code = ? AND is_used = FALSE");
    $stmt->bind_param("s", $invite_code);
    $stmt->execute();
    $invite_result = $stmt->get_result();

    if ($invite_result->num_rows === 0) {
        echo "Invalid or already used invite code.";
        exit;
    }

    // Check if username already exists
    $stmt = $conn->prepare("SELECT * FROM user_profiles WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $user_result = $stmt->get_result();

    if ($user_result->num_rows > 0) {
        echo "Username already taken.";
        exit;
    }

    // Hash password
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Insert new user
    $stmt = $conn->prepare("INSERT INTO user_profiles (username, password, role) VALUES (?, ?, 'User')");
    $stmt->bind_param("ss", $username, $hashed_password);
    $stmt->execute();

    // Mark invite code as used
    $stmt = $conn->prepare("UPDATE invite_codes SET is_used = TRUE WHERE code = ?");
    $stmt->bind_param("s", $invite_code);
    $stmt->execute();

    // Success message
    echo "Signup successful!";

    // Close database connection
    $stmt->close();
    $conn->close();
} else {
    // Method not allowed
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Method not allowed.";
}
?>
