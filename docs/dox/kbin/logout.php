<?php
session_start();
session_unset();
session_destroy();
header("Location: login.html"); // Redirect to login page after logout
?>
