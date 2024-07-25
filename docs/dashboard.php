<?php
// Include the database connection file
include('db_conn.php');

// Check if the username parameter is set in the URL
if(isset($_GET['username'])) {
    // Retrieve the username from the URL
    $username = $_GET['username'];

    // Prepare and execute the SQL query to fetch user information
    $sql = "SELECT * FROM user_profiles WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if the user exists in the database
    if($result->num_rows > 0) {
        // Fetch user data
        $user = $result->fetch_assoc();
        
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" rel="stylesheet">
    <title>/<?php echo htmlspecialchars($user['username']); ?></title>
    <style>
        /* Add your styles here */
    </style>
</head>
<body>
<?php if (!empty($user['background']) && pathinfo($user['background'], PATHINFO_EXTENSION) === 'mp4'): ?>
    <!-- Splash screen -->
    <div id="clickanywhere">
        <h1><?php echo !empty($user['splash_text']) ? htmlspecialchars($user['splash_text']) : "click to enter"; ?></h1>
    </div>

    <!-- Audio player -->
    <audio id="song" volume="<?php echo !empty($user['music_url']) ? '0' : '0.3'; ?>">
        <source id="audioSource" src="<?php echo !empty($user['music_url']) ? htmlspecialchars($user['music_url']) : ''; ?>">
    </audio>

    <video playsinline draggable="false" loop id="myVideo" class="background-container">
        <source src="<?php echo htmlspecialchars($user['background']); ?>" type="video/mp4">
    </video>

    <script>
        document.addEventListener("click", function () {
            var clickAnywhereElement = document.getElementById("clickanywhere");
            clickAnywhereElement.style.opacity = "0";
            setTimeout(function () {
                clickAnywhereElement.style.display = "none";
            }, 500);
            var video = document.getElementById("myVideo");
            var audio = document.getElementById("song");
            video.volume = 0.3; // Set video volume to 0.3
            video.play();
            audio.play();
        });
    </script>
<?php elseif (!empty($user['music_url'])): ?>
    <!-- Splash screen -->
    <div id="clickanywhere">
        <h1><?php echo !empty($user['splash_text']) ? htmlspecialchars($user['splash_text']) : "click to enter"; ?></h1>
    </div>

    <!-- Audio player -->
    <audio id="song" volume="0.3">
        <source id="audioSource" src="<?php echo htmlspecialchars($user['music_url']); ?>">
    </audio>

    <video playsinline draggable="false" loop id="myVideo" class="background-container">
        <source src="<?php echo htmlspecialchars($user['background']); ?>" type="video/mp4">
    </video>

    <script>
        document.addEventListener("click", function () {
            var clickAnywhereElement = document.getElementById("clickanywhere");
            clickAnywhereElement.style.opacity = "0";
            setTimeout(function () {
                clickAnywhereElement.style.display = "none";
            }, 500);
            var video = document.getElementById("myVideo");
            var audio = document.getElementById("song");
            video.volume = 0.3; // Set video volume to 0.3
            video.play();
            audio.play();
        });
    </script>
<?php endif; ?>

    <!-- Background container -->
    <div class="background-container"></div>

    <!-- Profile container -->
    <div class="profile-container">
        <!-- Profile picture -->
        <?php if(!empty($user['pfp'])): ?>
            <img class="profile-picture" src="<?php echo htmlspecialchars($user['pfp']); ?>" alt="Profile Picture">
        <?php endif; ?>
        
        <!-- Profile title -->
        <h1 class="profile-title">
            <span class="tooltip"><?php echo !empty($user['title']) ? htmlspecialchars($user['title']) : htmlspecialchars($user['username']); ?>
                <span class="tooltiptext">User ID: <?php echo htmlspecialchars($user['id']); ?></span>
            </span>
        </h1>

        <!-- Admin badge -->
        <?php if($user['power'] === 'Admin'): ?>
            <div class="tooltip">
                <img class="badge" src="badges/staff.png" alt="Admin Badge">
                <span class="tooltiptext">User is a staff member</span>
            </div>
        <?php endif; ?>

        <!-- Early Supporter badge -->
        <?php if($user['early_supporter'] === 1): ?>
            <div class="tooltip">
                <img class="badge" src="badges/early.png" alt="Early Supporter Badge">
                <span class="tooltiptext">User is an early supporter</span>
            </div>
        <?php endif; ?>

        <!-- Verified badge -->
        <?php if($user['verified'] === 1): ?>
            <div class="tooltip">
                <img class="badge" src="badges/image.png" alt="Verified Badge">
                <span class="tooltiptext">User is verified</span>
            </div>
        <?php endif; ?>

        <!-- Booster badge -->
        <?php if($user['booster'] === 1): ?>
            <div class="tooltip">
                <img class="badge" src="badges/booster.gif" alt="Booster Badge">
                <span class="tooltiptext">User is a Booster</span>
            </div>
        <?php endif; ?>

        <!-- Donator badge -->
        <?php if($user['donator'] === 1): ?>
            <div class="tooltip">
                <img class="badge" src="badges/donator.png" alt="Donator Badge">
                <span class="tooltiptext">User is a Donator</span>
            </div>
        <?php endif; ?>

        <!-- Bio -->
        <p class="bio"><?php echo !empty($user['bio']) ? htmlspecialchars($user['bio']) : "No bio available."; ?></p>

        <!-- Social Media Links -->
        <div class="social-media">
            <?php if(!empty($user['discord_link'])): ?>
                <div class="tooltip">
                    <a href="<?php echo htmlspecialchars($user['discord_link']); ?>" target="_blank">
                        <i class="fa-brands fa-discord social-icons"></i>
                    </a>
                    <span class="tooltiptext">Discord</span>
                </div>
            <?php endif; ?>

            <?php if(!empty($user['telegram_link'])): ?>
                <div class="tooltip">
                    <a href="<?php echo htmlspecialchars($user['telegram_link']); ?>" target="_blank">
                        <i class="fa-brands fa-telegram social-icons"></i>
                    </a>
                    <span class="tooltiptext">Telegram</span>
                </div>
            <?php endif; ?>
        </div>
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
    // Username parameter not provided in the URL
    include('404.php');
}
?>
