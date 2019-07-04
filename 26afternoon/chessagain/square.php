<?php
class Square{
    public $x_coord=null;
    public $y_coord=null;
    public $piece=null;
    public function __construct($x,$y,$piece=null){
        $this->x_coord=$x;
        $this->y_coord=$y;
        $this->piece=$piece;
    }
    public function isDark(){
        if ((($this->x_coord+$this->y_coord)%2)==0){
            $str='class="square dark"';
        } else {$str='class="square light"';}
        return $str;
    }
    public function __toString()
    {   
        return '<div '.$this->isDark().'>'. $this->piece.'</div>';
    }
}