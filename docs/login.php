<?php
include('db_conn.php');

// Retrieve POST data
$username = $_POST['username'];
$password = $_POST['password'];

// Validate and sanitize inputs
$username = htmlspecialchars($username, ENT_QUOTES, 'UTF-8');
$password = htmlspecialchars($password, ENT_QUOTES, 'UTF-8');

// Fetch user from database
$sql = "SELECT * FROM user_profiles WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    // Verify password
    if (password_verify($password, $user['password'])) {
        session_start();
        $_SESSION['username'] = $username;
        $_SESSION['role'] = $user['role'];
        
        // Redirect based on role
        if ($user['role'] === 'Admin') {
            header("Location: admin_dashboard.php");
        } else {
            header("Location: user_dashboard.php");
        }
    } else {
        echo "Invalid password!";
    }
} else {
    echo "User not found!";
}

// Close the database connection
$conn->close();
?>
