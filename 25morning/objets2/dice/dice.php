<?php

class dice 
{
    public $sides=6;

    public function roll(){
        return rand(1,$this->sides);
    }