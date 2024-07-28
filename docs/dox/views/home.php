<?php include 'top-bar.php'; ?>
<div class="ascii-art">
    ..                                s                                                  .x+=:.   
  :**888H: `: .xH""                   :8                                                 z`    ^%  
 X   `8888k XX888       .u    .      .88                  ..    .     :                     .   <k 
'8hx  48888 ?8888     .d88B :@8c    :888ooo      .u     .888: x888  x888.        u        .@8Ned8" 
'8888 '8888 `8888    ="8888f8888r -*8888888   ud8888.  ~`8888~'888X`?888f`    us888u.   .@^%8888"  
 %888>'8888  8888      4888>'88"    8888    :888'8888.   X888  888X '888>  .@88 "8888" x88:  `)8b. 
   "8 '888"  8888      4888> '      8888    d888 '88%"   X888  888X '888>  9888  9888  8888N=*8888 
  .-` X*"    8888      4888>        8888    8888.+"      X888  888X '888>  9888  9888   %8"    R88 
    .xhx.    8888     .d888L .+    .8888Lu= 8888L        X888  888X '888>  9888  9888    @8Wou 9%  
  .H88888h.~`8888.>   ^"8888*"     ^%888*   '8888c. .+  "*88%""*88" '888!` 9888  9888  .888888P`   
 .~  `%88!` '888*~       "Y"         'Y"     "88888%      `~    "    `"`   "888*""888" `   ^"F     
       `"     ""                               "YP'                         ^Y"   ^Y'              
                                                                                                   
                                                                                                   
                                                                                                   
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
