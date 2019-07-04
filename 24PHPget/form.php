<?php 
    var_dump($_GET);
    var_dump($_POST);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <form action="" method="post">
    <div class="form-group">
        <input type="text"  name="author" value="J.K.Roll"><br>
        <input type="password" name="password" value=""><br>
        <textarea name="text" id="" cols="30" rows="10"></textarea>
        <button type="submit" class="btn btn-primary">Submit</button> 
    </div>
    </form>
</body>
</html>