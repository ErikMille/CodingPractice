<!-- <h1>reeee</h1>
<h1>
    
    
<?php 
    $number=123;
    $hel='hello';
    function prin(){
        global $number;
        echo $number;
    }
    prin();
    define('MY_SERVER', 'Apacheeeee');
 
    echo MY_SERVER;

    
    ?>

</h1>
<h1><?=$hel;?></h1> -->

<?php

include 'add.php';
echo 'index';
?>

<p>First name:<?=$first_name?></p>
<p>Surname:<?=$surname?></p>
<p><?php echo "Year of birth: $year_of_birth<br>Height: $hieght"?></p>
<p>This server is running on <?php echo SERVER_SOFTWARE?></p>
<p><?= 'My operating system iss ' . MY_OS?></p>