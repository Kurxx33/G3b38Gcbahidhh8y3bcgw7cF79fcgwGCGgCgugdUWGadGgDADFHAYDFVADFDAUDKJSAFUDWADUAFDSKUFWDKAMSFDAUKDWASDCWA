<?php
include 'functions.php';

// Simple routing
$route = isset($_GET['route']) ? $_GET['route'] : 'home';
switch ($route) {
    case 'home':
        include 'views/home.php';
        break;
    case 'add_paste':
        include 'views/add_paste.php';
        break;
    case 'hall_of_losers':
        include 'views/hall_of_losers.php';
        break;
    case 'history':
        include 'views/history.php';
        break;
    case 'login':
        include 'views/login.php';
        break;
    case 'signup':
        include 'views/signup.php';
        break;
    default:
        include 'views/home.php';
        break;
}
?>
