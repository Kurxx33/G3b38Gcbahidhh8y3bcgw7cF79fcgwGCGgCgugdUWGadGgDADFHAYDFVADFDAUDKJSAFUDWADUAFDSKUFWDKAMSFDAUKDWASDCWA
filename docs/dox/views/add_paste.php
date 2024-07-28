<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $content = $_POST['content'];
    $user_id = $_SESSION['user_id'];
    addPaste($user_id, $title, $content);
    header('Location: index.php?route=home');
}
?>
<?php include 'top-bar.php'; ?>
<form method="POST">
    <input type="text" name="title" placeholder="Paste Title" required>
    <textarea name="content" placeholder="Paste Content" required></textarea>
    <button type="submit">Add Paste</button>
</form>
