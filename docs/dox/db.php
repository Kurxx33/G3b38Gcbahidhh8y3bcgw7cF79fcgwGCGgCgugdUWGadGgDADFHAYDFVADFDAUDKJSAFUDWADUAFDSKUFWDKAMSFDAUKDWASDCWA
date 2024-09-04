<?php
// db.php

// Database configuration
$servername = "localhost"; sql313.infinityfree.com
$username = "root"; if0_37246058
$password = ""; g2dXPuNbCu0bOB 
$database = "skidbin"; if0_37246058_skidbin

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set the character set to UTF-8
$conn->set_charset("utf8mb4");
?>
