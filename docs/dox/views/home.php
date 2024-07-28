<?php include 'top-bar.php'; ?>
<div class="pinned-paste">
    <h2>Pinned Paste</h2>
    <!-- Admins can pin a paste here -->
</div>
<div class="paste-list">
    <?php foreach (getPastes() as $paste): ?>
        <div class="paste">
            <div class="paste-title"><?php echo htmlspecialchars($paste['title']); ?></div>
            <div class="paste-content"><?php echo htmlspecialchars($paste['content']); ?></div>
        </div>
    <?php endforeach; ?>
</div>
<div class="search-bar">
    <input type="text" placeholder="Search pastes...">
</div>
