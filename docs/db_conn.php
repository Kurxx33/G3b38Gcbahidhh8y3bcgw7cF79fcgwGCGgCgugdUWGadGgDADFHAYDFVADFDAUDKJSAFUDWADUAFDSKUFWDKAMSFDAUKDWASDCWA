<?php
$servername = "sql312.infinityfree.com";
$username = "if0_36910809";
$password = "8uiC2xNW0z63xJf";
$dbname = "if0_36910809_artemas_github";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
