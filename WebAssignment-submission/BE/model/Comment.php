<?php 
class Comment {
    public $id;
    public $username;
    public $comment;
    public $time;
    public $productid;
    

    function __construct($id, $username,$comment,$time,$productid) {
        $this->id= $id;
        $this->username = $username;
        $this->comment = $comment;
        $this->time = $time;
        $this->productid = $productid;
       
    }

}

?>