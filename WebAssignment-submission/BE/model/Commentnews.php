<?php 
class Commentnews {
    public $id;
    public $username;
    public $comment;
    public $time;
    public $newsid;
    

    function __construct($id, $username,$comment,$time,$newsid) {
        $this->id= $id;
        $this->username = $username;
        $this->comment = $comment;
        $this->time = $time;
        $this->newsid = $newsid;
       
    }

}

?>