<?php
// Database connection
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user settings from POST request
$user_id = $_POST['user_id'];
$bio_layout = $_POST['bio_layout'];
$bio_content = $_POST['bio_content'];

// Update user settings in the database
$sql = "UPDATE users SET bio_layout = ?, bio_content = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $bio_layout, $bio_content, $user_id);
$stmt->execute();
$stmt->close();

// Generate bio page
$bio_page_content = generate_bio_page($bio_layout, $bio_content);

// Save bio page to a file
$bio_page_path = "/path/to/bio_pages/user_$user_id.html";
file_put_contents($bio_page_path, $bio_page_content);

$conn->close();

function generate_bio_page($layout, $content) {
    // Logic to generate bio page based on layout and content
    // For example:
    if ($layout == "layout2") {
        $template = file_get_contents("layout2.html");
    } else {
        $template = file_get_contents("layout3.html");
    }
    $template = str_replace("{{content}}", $content, $template);
    return $template;
}
?>
