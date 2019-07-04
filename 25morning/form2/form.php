<?php
    require 'DBBlackbox.php';
    $errors=[];

    //new name or editing
    if (!empty($_GET['id'])){ //edit
        $film=find($_GET['id']);
    }else{ //new
        $film=[
            'title'=>null,
            'plot'=>null,
            'raiting'=>0
        ];
    }

    if ($_POST){
        $film['title']=isset($_POST['title']) ? $_POST['title'] :$film['title'];
        $film['plot']=isset($_POST['plot']) ? $_POST['plot'] :$film['plot'];
        if ($film['text']==''){
            $valid=false;
        }
   
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php var_dump($errors);?>
    <?php var_dump($_POST);?>
    <form action="" method="post">
        <input type="text" name="name" value="<?=htmlspecialchars($film['title'])?>"><br>
        <input type="text" name="name" value="<?=htmlspecialchars($film['plot'])?>"><br>
        <input type="text" name="name" value="<?=htmlspecialchars($film['raiting'])?>"><br>
        <input type="submit">
    </form>
</body>
</html>