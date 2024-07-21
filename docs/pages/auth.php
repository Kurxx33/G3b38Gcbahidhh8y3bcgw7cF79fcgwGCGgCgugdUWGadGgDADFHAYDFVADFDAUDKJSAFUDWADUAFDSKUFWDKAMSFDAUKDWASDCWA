<?php
session_start();

function isLoggedIn() {
    // Check if the user is logged in (e.g., session variable is set)
    return isset($_SESSION['user_id']);
}

if (!isLoggedIn()) {
    // Redirect to login page if not logged in
    header("Location: login.html");
    exit();
}
?>
