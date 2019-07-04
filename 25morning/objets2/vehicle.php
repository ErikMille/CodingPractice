<?php
class Vehicle 
{
    public $wheels_count=4;
    public $color=null;
    public $avg_speed=null;

    public function travel($distance){
        return $distance/$this->avg_speed;
    }
    public function change_color($color){
        $this->color=$color;
    }
}