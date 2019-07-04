<h1>Form</h1>

<form action="" method="post">
    <?php foreach($items as $i=>$text) : ?>
        <input type="text" name="items[<?=$i?>]" value='<?=$text?>'>
    <?php endforeach; ?>
    <input type="text" name="items[<?=count($items)?>]" value=''><br>
    <input type="submit" value="Add">

</form>
