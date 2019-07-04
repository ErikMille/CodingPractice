<?php   
    require_once 'piece.php';
    require_once 'square.php';
    $piece=new Piece('P');
    $squares=[];
    for ($i=1;$i<=8;$i++){
        for ($j=1;$j<=8;$j++){
            $squares[$i][$j]=new Square($i,$j);
        }
    }
    $squares[5][4]->piece=$piece;
    for ($i=1;$i<=8;$i++){
        for ($j=1;$j<=8;$j++){
            echo($squares[$i][$j]->__toString());
        }
        echo '<br>';
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    body{background-color:pink;margin:0;}
    .light{background-color:#DDD;}
    .dark{background-color:#555;}
    .square{display:inline-block; width:40px;height:40px;}
    div{margin:0;}
    img{margin:0;}
    </style>
</head>
<body>
    <?php
        for ($i=1;$i<=8;$i++){
            for ($j=1;$j<=8;$j++){
                echo($squares[$i][$j]->__toString());
            }
            echo '<br>';
        }
    ?>


</body>
</html>