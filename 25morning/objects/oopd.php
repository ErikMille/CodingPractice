<?php
class Student
{
    public $name = null;
    public $color = null;
 
    public function dumpMe()
    {
        var_dump($this);
    }
    public function __construct($a)
    {
        $this->name=$a;
    }
    public function __destruct(){
        echo $this->name.' is dead<br>';
    }
}