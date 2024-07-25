<?php
include('db_conn.php');

// Retrieve POST data
$username = $_POST['username'];
$password = $_POST['password'];
$inviteCode = $_POST['invite_code']; // New invite code field

// Validate and sanitize inputs
$username = htmlspecialchars($username, ENT_QUOTES, 'UTF-8');
$password = htmlspecialchars($password, ENT_QUOTES, 'UTF-8');
$inviteCode = htmlspecialchars($inviteCode, ENT_QUOTES, 'UTF-8');

// Check if invite code is valid
$sql = "SELECT * FROM invite_codes WHERE code = ? AND is_used = FALSE";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $inviteCode);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Mark invite code as used
    $updateCode = "UPDATE invite_codes SET is_used = TRUE WHERE code = ?";
    $updateStmt = $conn->prepare($updateCode);
    $updateStmt->bind_param("s", $inviteCode);
    $updateStmt->execute();

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Check if the user already exists
    $checkUserSql = "SELECT * FROM user_profiles WHERE username = ?";
    $checkStmt = $conn->prepare($checkUserSql);
    $checkStmt->bind_param("s", $username);
    $checkStmt->execute();
    $userResult = $checkStmt->get_result();

    if ($userResult->num_rows == 0) {
        // Create new user
        $role = ($username === 'kurxx33') ? 'Admin' : 'User';
        $insertUserSql = "INSERT INTO user_profiles (username, password, role) VALUES (?, ?, ?)";
        $insertStmt = $conn->prepare($insertUserSql);
        $insertStmt->bind_param("sss", $username, $hashedPassword, $role);
        $insertStmt->execute();
        
        echo "Signup successful!";
    } else {
        echo "User already exists!";
    }
} else {
    echo "Invalid or used invite code!";
}

// Close the database connection
$conn->close();
?>

