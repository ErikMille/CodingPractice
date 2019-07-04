<?php
    require 'DBBlackbox.php';
    $errors=[];

    //new name or editing
    if (!empty($_GET['id'])){ //edit
        $array=find($_GET['id']);
        $name=$array['name'];
    }else{ //new
        $name=null;
    }

    if($_POST){
        $name=$_POST['name'];
        $name=isset($_POST['name']) ? $_POST['name'] :$name;
        $valid=true;
        if ($name==''){
            $errors[]='Fill-in name';
            $valid=false;
        }
        //if data valid
        if($valid){
           // 13.data
           if (!empty($_GET['id'])){
                update($_GET['id'],['name'=>$name]);
           }else{
                $id=insert(['name'=>$name]);
           }
           // 14.inform the user
           //15. redirect with GET
           header('Location:form.php?id='.$id);
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
    <form action="" method="post">
        <input type="text" name="name" value="<?=htmlspecialchars($name)?>"><br>
        <input type="submit">
    </form>
</body>
</html>