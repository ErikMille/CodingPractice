<?php
require_once 'users.php';
$user_id=4;
session_start();
$_SESSION['user_id']=$user_id;

var_dump($_SESSION);
$user_name='Pepe';

$user=['user_id'=>$user_id,
    'user_name'=>$user_name];

Auth::addUser(['user_id' => 1, 'username' => 'Kevin']);
Auth::addUser(['user_id' => 2, 'username' => 'Stuart']);
Auth::addUser(['user_id' => 3, 'username' => 'Bob']);
Auth::addUser(['user_id' => $user['user_id'], 'username' => $user['user_name']]);
var_dump(Auth::getUsers());

$current_user=Auth::getCurrentUser();
var_dump($current_user);