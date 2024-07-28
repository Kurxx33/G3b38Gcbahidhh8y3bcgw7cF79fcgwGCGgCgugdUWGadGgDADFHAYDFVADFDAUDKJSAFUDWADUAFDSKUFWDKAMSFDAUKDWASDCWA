<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    if (registerUser($username, $password, $email)) {
        header('Location: index.php?route=login');
    } else {
        $error = 'Failed to register';
    }
}
?>
<form method="POST">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <input type="email" name="email" placeholder="Email" required>
    <button type="submit">Sign Up</button>
    <?php if (isset($error)) echo '<p>' . $error . '</p>'; ?>
</form>
