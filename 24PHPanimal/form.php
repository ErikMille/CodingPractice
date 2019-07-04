<?php
require 'lib/DBBlackbox.php';

function get_value_from_request($name_of_input, $default_value = null)
{
    return isset($_POST[$name_of_input]) ? $_POST[$name_of_input] : $default_value;
}
// handle the incoming request here
$name=isset($_POST['name']) ? $_POST['name'] : '';
$motivation=isset($_POST['motivation']) ? $_POST['motivation'] : '';
$color=isset($_POST['color']) ? $_POST['color'] : '';
$gender =   isset($_POST['gender']) ? $_POST['gender'] : '1';
$express = isset($_POST['express']) && $_POST['express'] == 1;


$genders = [
    'm' => 'male',
    'f' => 'female',
    'e' => 'emale'
];
// to save any data to the "database":
// insert($any_data)
// $any_data MUST be an array

var_dump($_POST);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Forms exercise</title>
</head>
<body>
    <h1>FORM</h1>
    <form action="" method="post">
        <div>
            <label for="">"Name of the adopter"</label><br>
            <input type="text" name="name" value="<?= htmlspecialchars($name) ?>" class="form-control">
        </div>
        <div class="form-group">
            <label for="">"Why do you want to adopt a dragon?"</label><br>
            <textarea name="motivation" value="" class="form-control"><?= htmlspecialchars($motivation) ?></textarea>
        </div>
        <div class="form-group">
            <label for="">"Why do you want to adopt a dragon?"</label><br>
            <input type="text" name="color" value="<?= htmlspecialchars($name) ?>" class="form-control">
        </div>
        <div class="form-group">
            <select name="gender" id="">

                <?php foreach ($genders as $value => $name) : ?>
                    <option value="<?= $value ?>" <?= $gender == $value ? 'selected' : '' ?>><?= $name ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        <div class="form-group">
                <input type="hidden" name="express" value="0">
                <input type="checkbox" name="express" value="1" id="express" <?= $express ? 'checked' : '' ?>>
                <label for="express">Express?</label>
            </div>
        <div class="form-group">
            <input type="submit" value="Submit" class="form-control btn btn-primary">
        </div>
    </form>
    <?php insert($_POST); ?>
    
</body>
</html>