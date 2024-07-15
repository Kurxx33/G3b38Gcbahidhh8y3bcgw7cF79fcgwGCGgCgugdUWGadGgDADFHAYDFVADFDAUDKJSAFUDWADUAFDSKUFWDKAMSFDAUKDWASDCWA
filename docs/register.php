<?php
session_start();
include('db_conn.php');

// Redirect to dashboard if already logged in
if(isset($_SESSION['username'])) {
    header('Location: dashboard.php');
    exit;
}

// Register user
if(isset($_POST['register'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $invite_key = $_POST['invite_key']; // Assuming you have an invite key system

    // Registration logic here
    // Example validation, you can adjust as needed
    $username_length = strlen($username);
    if ($username_length < 1 || $username_length > 15) {
        echo "Username length must be between 1 and 15 characters.";
    } else {
        // Example: check if username already exists
        $check_sql = "SELECT * FROM users WHERE username='$username'";
        $check_result = mysqli_query($conn, $check_sql);
        if (mysqli_num_rows($check_result) > 0) {
            echo "Username is already taken.";
        } else {
            // Hash the password using Argon2
            $hashed_password = password_hash($password, PASSWORD_ARGON2ID);
            // Insert user into database
            $insert_sql = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";
            if (mysqli_query($conn, $insert_sql)) {
                // Registration successful
                $_SESSION['username'] = $username;
                header('Location: dashboard.php');
                exit;
            } else {
                echo "Error: " . $insert_sql . "<br>" . mysqli_error($conn);
            }
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
    <h2>Register</h2>
    <form method="post" action="">
        <input type="text" name="username" placeholder="Username" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <input type="text" name="invite_key" placeholder="Invite Key" required><br> <!-- Input field for invite key -->
        <button type="submit" name="register">Register</button>
    </form>
</body>
</html>

<?php
mysqli_close($conn);
?>
