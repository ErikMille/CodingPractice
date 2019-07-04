<?php
require 'vehicle.php';
require 'Horse.php';
$first_car=new Vehicle();
$first_horse=new Horse();


$first_car->change_color('red');
$first_car->avg_speed=50;
$first_horse->avg_speed=40;
echo $first_car->travel(200).'<br>';
echo $first_horse->travel(200);
