<?php
session_start();
include('db_conn.php');

// Redirect to login if not logged in
if(!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit;
}

// Fetch user data for display
$username = $_SESSION['username'];
$sql = "SELECT * FROM users WHERE username='$username'";
$result = mysqli_query($conn, $sql);
$user = mysqli_fetch_assoc($result);

// Close the database connection
mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h2>Welcome, <?php echo $user['username']; ?></h2>
    <p>Your Dashboard content here.</p>
    <a href="logout.php">Logout</a>
</body>
</html>
