<?php
// Include the database connection file
include('db_conn.php');

// Check if the user is logged in
session_start();
if(!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

// Retrieve the logged-in username
$username = $_SESSION['username'];

// Prepare and execute the SQL query to fetch user information
$sql = "SELECT * FROM usernames WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

// Check if the user exists in the database
if($result->num_rows > 0) {
    // Fetch user data
    $user = $result->fetch_assoc();
    
    // Handle form submission
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $pfp = $_POST['pfp'];
        $background = $_POST['background'];
        $bio = $_POST['bio'];
        $discord_link = $_POST['discord_link'];
        $telegram_link = $_POST['telegram_link'];
        $twitter_link = $_POST['twitter_link'];
        // Add other links here
        
        // Prepare and execute the update query
        $sql = "UPDATE usernames SET pfp = ?, background = ?, bio = ?, discord_link = ?, telegram_link = ?, twitter_link = ? WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssss", $pfp, $background, $bio, $discord_link, $telegram_link, $twitter_link, $username);
        $stmt->execute();
        
        // Redirect or show success message
        header("Location: dashboard.php");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" rel="stylesheet">
    <title>Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #000;
            color: #fff;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
        }
        .form-group input[type="text"],
        .form-group textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #333;
            border-radius: 5px;
            background-color: #222;
            color: #fff;
        }
        .form-group input[type="submit"] {
            background-color: #444;
            border: none;
            padding: 10px 20px;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
        }
        .form-group input[type="submit"]:hover {
            background-color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Dashboard</h1>
        <form action="dashboard.php" method="post">
            <div class="form-group">
                <label for="pfp">Profile Picture URL:</label>
                <input type="text" id="pfp" name="pfp" value="<?php echo htmlspecialchars($user['pfp']); ?>">
            </div>
            <div class="form-group">
                <label for="background">Background URL:</label>
                <input type="text" id="background" name="background" value="<?php echo htmlspecialchars($user['background']); ?>">
            </div>
            <div class="form-group">
                <label for="bio">Bio:</label>
                <textarea id="bio" name="bio" rows="4"><?php echo htmlspecialchars($user['bio']); ?></textarea>
            </div>
            <div class="form-group">
                <label for="discord_link">Discord Link:</label>
                <input type="text" id="discord_link" name="discord_link" value="<?php echo htmlspecialchars($user['discord_link']); ?>">
            </div>
            <div class="form-group">
                <label for="telegram_link">Telegram Link:</label>
                <input type="text" id="telegram_link" name="telegram_link" value="<?php echo htmlspecialchars($user['telegram_link']); ?>">
            </div>
            <div class="form-group">
                <label for="twitter_link">Twitter Link:</label>
                <input type="text" id="twitter_link" name="twitter_link" value="<?php echo htmlspecialchars($user['twitter_link']); ?>">
            </div>
            <!-- Add other links here -->
            <div class="form-group">
                <input type="submit" value="Update Profile">
            </div>
        </form>
    </div>
</body>
</html>

<?php
} else {
    // User not found
    include('404.php');
}

// Close the database connection
$stmt->close();
$conn->close();
} else {
    // User not logged in
    header("Location: login.php");
    exit();
}
?>
