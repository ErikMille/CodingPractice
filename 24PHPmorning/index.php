<?php
// require_once 'functions.php';
// require_once 'fellowship.php';

// include 'journey.php';
// if (is_array(current($party))){
//     foreach($party as $one_party){
//         present_party($one_party);
//     }
// }else{present_party($party);}


function headline($text,$imp=1){
    return "<h$imp>$text</h$imp>";
}

echo headline('hello');
echo headline('hello',2);

$array=['eee'];
$item='def';
function add_item(&$array,$item='abc'){
    $array[count($array)]=$item;
}

add_item($array);
add_item($array,$item);
var_dump($array);

function element($element,$innerhtml='',$attributes=''){
    return "<$element $attributes>$innerhtml</$element>";
}

echo element('h1','aaaa','style="color:red;"');

function convert_weight($value,$unit='kg'){
    if($unit==='kg'){return $value*2.20462262 ."kg";}
    if ($unit==='lb'){return $value/2.20462262 ."lb";}
}
echo convert_weight(1,'lb');
