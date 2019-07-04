<?php
class BondCase{
    protected $name=null;
    protected $year=null;
    protected $enemy=null;
    public $girls=[];
    public static $cases_solved=0;
    public static $girls_met=0;
    public static function getAvgGirlsPerCase(){
        return static::$girls_met/static::$cases_solved;
    }
    public function getName(){
        return $this->name;
    }
    public function getYear(){
        return $this->year;
    }
    public function getEnemy($enemy){
        return $this->enemy;
    }
    public function setName($name){
        $this->name=$name;
    }
    public function setYear($year){
        $this->year=$year;
    }
    public function setEnemy($enemy){
        $this->enemy=$enemy;
    }
    public function addGirl($girl){
        $this->girls[]=$girl;
        static::$girls_met++;
    }
    public function __construct($year){
        $this->year=$year;
        static::$cases_solved++;
    }
}