<?php
    $page_title="Shopping list";
    $page='home';

    if (isset($_GET['page'])){
        $page=$_GET['page'];
    }
    
    if (!empty($_POST['items'])){
        $items=$_POST['items'];
        $items=array_filter($items);
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
    <?php var_dump($_POST);?>
    <h1><?php echo $page_title?></h1>

    <nav>
        <a href="?page=home">Home</a>
        <a href="?page=form">Form</a>
    </nav>

    <?php if($page=='home'):?>
        <?php include 'home.php'?>
    <?php endif?>
    <?php if($page=='form'):?>
        <?php include 'form.php'?>
    <?php endif?>
</body>
</html>