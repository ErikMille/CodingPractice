<?php
class Comment
{
    public $author = null; // YYYY-MM-DD HH:mm:ss
    public $text = null;
    public $created_at=null; 
    function fillFromArray($array){
        $this->author=$array['author'];
        $this->text=$array['text'];
        if(isset($array['created_at'])){
            $this->created_at=$array['created_at'];
        }
    }
    function save(){
        $this->created_at=date('Y-m-d H:i:s');
        insert((array)$this);
    }


}