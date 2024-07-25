<?php
$servername = "sql312.infinityfree.com";
$username = "if0_36910809"; // Your database username
$password = "8uiC2xNW0z63xJf"; // Your database password
$dbname = "if0_36910809_XXX"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
