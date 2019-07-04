<?php
require 'BlogPost.php';
$first_post=new BlogPost(3,'The first post');
$first_post->text='I have decided to write my own blog. This is my first post, beautiful in it\'s simplicity.';

$second_post=new BlogPost(3,'The second post');
$second_post->text='Happy birthday Nick Gur';

$first_post->publish();
var_dump($all_posts);

echo $total_posts.'<br>';
$second_post->__destruct();
echo $total_posts;