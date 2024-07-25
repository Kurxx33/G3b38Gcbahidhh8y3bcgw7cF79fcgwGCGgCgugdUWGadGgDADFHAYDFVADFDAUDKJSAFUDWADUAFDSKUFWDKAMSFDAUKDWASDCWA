<?php
session_start();
include 'db_conn.php';
include 'adminPanel.php';

if ($_SESSION['role'] === 'admin') {
    $key = createInviteKey();
    echo "Generated invite key: " . $key;
}
?>
