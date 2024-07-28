<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (authenticateUser($username, $password)) {
        header('Location: index.php?route=home');
    } else {
        $error = 'Invalid username or password';
    }
}
?>
<form method="POST">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit">Login</button>
    <?php if (isset($error)) echo '<p>' . $error . '</p>'; ?>
</form>
