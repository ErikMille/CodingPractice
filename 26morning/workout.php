<?php

require_once 'lib/DBBlackbox.php';
require_once 'lib/comments.php';
// your code here
$comment=new Comment();
if ($_POST) {
    $comment->fillFromArray($_POST);
    $comment->save();
    header("Refresh: 0");
    exit();
}
$all_comments_as_arrays=select();
$comments=[];
foreach($all_comments_as_arrays as $comment_data){
    $one_comment=new Comment();
    $one_comment->fillFromArray($comment_data);
    $comments[]=$one_comment;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Disney buys Star Wars maker Lucasfilm from George Lucas | BBC News</title>

    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <article>

        <div class="img">
            <img src="img/article.jpg" alt="Disney buys Star Wars maker Lucasfilm from George Lucas">
        </div>
        
        <h1>Disney buys Star Wars maker Lucasfilm from George Lucas</h1>

        <p class="story">Disney is buying Lucasfilm, the company behind the Star Wars films, from its chairman and founder George Lucas for $4.05bn (£2.5bn).</p>

        <p>Mr Lucas said: "It's now time for me to pass Star Wars on to a new generation of film-makers."</p>

        <p>In a statement announcing the purchase, Disney said it planned to release a new Star Wars film, episode seven, in 2015.</p>

        <p>That will be followed by episodes eight and nine and then one new movie every two or three years, the company said.</p>

    </article>

    <div class="comments">
        <h2>Comment below:</h2>
        <!-- your code here -->
        <form action="" method="post" >
        <input type="text" name="author" value="<?= htmlspecialchars($comment->author)?>"><br>
        <textarea name="text" id="" cols="30" rows="10"><?= htmlspecialchars($comment->text)?></textarea><br>
        <input type="submit" value="Post comment"><br>
        </form>
        <div>
            <?php foreach($comments as $one_comment):?>
            <div>author:<?=htmlspecialchars($one_comment->author)?></div>
            <div><?=htmlspecialchars($one_comment->text)?></div>
            <div><?=htmlspecialchars($one_comment->created_at)?></div><br>
            <?php endforeach;?>
        </div>

        
    </div>
    
</body>
</html>