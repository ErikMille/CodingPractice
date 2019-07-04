<?php
$all_posts=[];
$total_posts=0;
class BlogPost
{
    public $id=null;
    public $headline=null;
    public $text=null;
    public $added_at=null;
    public $user_id=null;
    public $status='not-published';
    public function publish(){
        $this->status='published';
    }
    public function __construct($user_id,$headline=null){
        $this->added_at=date('Y-m-d');
        $this->user_id=$user_id;
        global $all_posts;
        global $total_posts;
        $total_posts++;
        $all_posts[]=$this;
    }
    public function __destruct(){
        global $total_posts;
        $total_posts--;
    }
}