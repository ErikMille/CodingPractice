<?php 
require_once 'bondcase.php';
$name='James';
$name.=' Bond';
$bond_info=[
    'first_name' => 'James',
    'last_name' => 'Bond',
    'gun' => 'Walther PPK',
    'car' => 'Aston Martin',
    'enemy' => 'Stavro Blofeld',
    'relationship_status' => 'widower',
    'cases' => 24
];
echo 'The name is '.$bond_info['last_name'].'. '.$bond_info['first_name'].' '.$bond_info['last_name'].'. ';
echo "One day when I was driving my {$bond_info['car']} in the Alps {$bond_info['enemy']} came along and made me a {$bond_info['relationship_status']}. If only I had my {$bond_info['gun']} with me!";
$bond_info['last_case' ]='Spectre';

$bondCase=new BondCase(2015);
$bondCase->setEnemy('Ernst Stavro Blofeld');
$bondCase->setName('Spectre');
$bondCase->addGirl('Estrella');
$bondCase->addGirl('Lucia Sciarra');
$bondCase->addGirl('Madeleine Swann');
var_dump($bondCase);
$bondCase2=new BondCase(2006);
$bondCase2->setEnemy('Le Chiffre');
$bondCase2->setName('Casino Royale');
$bondCase2->addGirl('Vesper Lynd');
$bondCase2->addGirl('Solange Dimitrios');
var_dump($bondCase2);
echo $bondCase::$girls_met.'<br>';
echo $bondCase::getAvgGirlsPerCase();
