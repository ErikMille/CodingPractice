<?php
$pathcinfo=pathinfo(__FILE__);


$img_dir=__DIR__.'/images';

$files_in_images=scandir($img_dir);
var_dump($files_in_images);

$dh=opendir($img_dir);
while (false!==($file = readdir($dh))){
    var_dump($file);
}

