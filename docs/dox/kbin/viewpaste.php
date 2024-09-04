<?php
include 'db.php';

$id = intval($_GET['id']);
$result = $conn->query("SELECT * FROM pastes WHERE id=$id");

if ($row = $result->fetch_assoc()) {
    echo "<h1>" . htmlspecialchars($row['title']) . "</h1>";
    echo "<pre>" . htmlspecialchars($row['content']) . "</pre>";
} else {
    echo "Paste not found.";
}

$result->close();
$conn->close();
?>
