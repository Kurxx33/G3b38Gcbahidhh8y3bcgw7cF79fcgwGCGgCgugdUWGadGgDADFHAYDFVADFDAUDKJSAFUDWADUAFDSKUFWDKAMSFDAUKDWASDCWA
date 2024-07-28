<?php include 'top-bar.php'; ?>
<div class="ascii-art">
                              s                                                  .x+=:.                ..                   .. 
                             :8                                                 z`    ^%         x .d88"              x .d88"  
               .u    .      .88                  ..    .     :                     .   <k         5888R          u.    5888R   
      u      .d88B :@8c    :888ooo      .u     .888: x888  x888.        u        .@8Ned8"         '888R    ...ue888b   '888R   
   us888u.  ="8888f8888r -*8888888   ud8888.  ~`8888~'888X`?888f`    us888u.   .@^%8888"           888R    888R Y888r   888R   
.@88 "8888"   4888>'88"    8888    :888'8888.   X888  888X '888>  .@88 "8888" x88:  `)8b.          888R    888R I888>   888R   
9888  9888    4888> '      8888    d888 '88%"   X888  888X '888>  9888  9888  8888N=*8888          888R    888R I888>   888R   
9888  9888    4888>        8888    8888.+"      X888  888X '888>  9888  9888   %8"    R88          888R    888R I888>   888R   
9888  9888   .d888L .+    .8888Lu= 8888L        X888  888X '888>  9888  9888    @8Wou 9%     .     888R   u8888cJ888    888R   
9888  9888   ^"8888*"     ^%888*   '8888c. .+  "*88%""*88" '888!` 9888  9888  .888888P`    .@8c   .888B .  "*888*P"    .888B . 
"888*""888"     "Y"         'Y"     "88888%      `~    "    `"`   "888*""888" `   ^"F     '%888"  ^*888%     'Y"       ^*888%  
 ^Y"   ^Y'                            "YP'                         ^Y"   ^Y'                ^*      "%                   "%    
                                                                                                                               
                                                                                                                               
                                                                                                                               
</div>
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
