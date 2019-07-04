<?php

require_once 'DBBlackbox.php';

$messages = [];

// prepare empty or saved data
if (!empty($_GET['id'])) {
    $data = find($_GET['id']);
} else {
    $data = [
        'text' => null,
        'publish' => 0
    ];
}

// was the form submitted
if ($_POST) {
    // update the data from request
    $data['text'] = isset($_POST['text']) ? $_POST['text'] : $data['text'];
    $data['publish'] = isset($_POST['publish']) ? $_POST['publish'] : 0;

    // validate
    $valid = true;

    if ($data['text'] == '') {
        $messages[] = 'You have to insert some text, mate';
        $valid = false;
    }

    if ($valid) {
        // save the data
        if (!empty($_GET['id'])) {
            update($_GET['id'], $data);
            $id = $_GET['id'];
        } else {
            $id = insert($data);
        }

        // redirect to edit
        header('Location: form.php?id='.$id);
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Form practice</title>
</head>
<body>

    <?php foreach ($messages as $message) : ?>
        <div class="message"><?= $message ?></div>
    <?php endforeach; ?>

    <form action="" method="post">
    
        <textarea name="text" id="" cols="30" rows="10"><?= htmlspecialchars($data['text']) ?></textarea>
        <br>
        <input type="checkbox" name="publish" value="1" id="publish" <?= $data['publish'] ? ' checked' : '' ?>> 
        <label for="publish">Publish this</label>
        <br>
        <input type="submit" value="save">
    
    </form>
    
</body>
</html>