<?php
session_start();
include 'db.php'; // Make sure to include your database connection file

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $conn->real_escape_string($_POST['title']);
    $content = $conn->real_escape_string($_POST['content']);
    $type = $conn->real_escape_string($_POST['type']);
    $author = isset($_SESSION['user_id']) ? $_SESSION['user_id'] : 'Anonymous'; // Use logged-in user ID or 'Anonymous'

    $sql = "INSERT INTO pastes (title, content, type, author, date) VALUES ('$title', '$content', '$type', '$author', NOW())";

    if ($conn->query($sql) === TRUE) {
        echo "New paste created successfully. <a href='index.html'>Go back</a>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
