<?php

$my_name = 'Erik';
$height=1.82;
var_dump($my_name);
var_dump($height);
function headline($head){
    return "<h1>$head</h1>";
}
echo headline('HEAD');


$inches=12;
function inchesToCentimeters($inch){
    return $inch*2.54;
}
echo inchesToCentimeters($inches);
echo "<br>";

$celsius=100;
function celsiusToFahrenheit($cel){
    return (9/5)*$cel+32;
}
echo celsiusToFahrenheit($celsius);
echo "<br>";

$temperature=36.5;
function isHealthy($temp,$scale){
    if ($scale=='f'){$temp=($temp-32)*5/9;}
    if (37>=$temp){return "healthy";}else{return "ill";}
}
echo isHealthy($temperature,'c');
echo "<br>";

$number=42;
function evenOrOdd($num){
    return ($num%2==0)?'even':'odd';
}
echo evenOrOdd($number);
echo "<br>";

$weekday='Monday';
function sayWeekday($day){
    echo 'today is '.$day;
}
sayWeekday($weekday);
echo "<br>";

$year_of_birth=1998;
function sayBirthday($year){
    echo "I was born in $year so this year I am celebrating my ".(date('Y')-$year)." birthday";
}
sayBirthday($year_of_birth);
echo "<br>";

$height=182;
function assessHeight($height){
    if ($height>180){echo 'tol';
    }elseif($height<=180 && $height>=160){
    echo 'so so';}else{echo 'smol';}
}
assessHeight($height);
echo "<br>";

function getLanguageUsage($len){
    $len=strtolower($len);
    switch($len){
        case 'php':
        case 'python':
        case 'ruby':
            echo 'serverside';
            break;
        case 'javascript':
            echo 'clientside';
            break;
        default:
            echo "i don't know";
    }
}
getLanguageUsage('Php');
echo "<br>";

$time_served=0;
while($time_served<10){
    echo "The prisoner has served $time_served years<br>";
    $time_served++;
}
echo '<br>';
$time_served=10;
do{
    $time_served++;
    echo "The prisoner has served $time_served years<br>";
}while($time_served<=10);
echo '<br>';
for($i=0;$i<=10;$i++){
    echo "The prisoner has served $i years<br>";
}
echo '<br>';
for($i=10;$i>=0;$i--){
    echo "The prisoner has $i more years to serve.";
    if ($i<=5){echo "Going to a parole hearing...";}
    echo '<br>';
    if ($i==2){echo "Paroled!";break;}
}


