
<link rel="stylesheet" href="index.css">
<?php

echo '<div class="board">';
for ($i=0;$i<8;$i++){
    echo '<div class="row">';
    for ($j=0;$j<8;$j++){
        if(($i+$j)%2==0){$col='white';}else{$col='black';}
        echo "<div class=".$col."></div>";
    }
    echo '</div>';
}