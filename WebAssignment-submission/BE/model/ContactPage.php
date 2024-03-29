<?php 
class ContactPage {
    public $id;
    public $header;
    public $content;
   
    
    
    

    function __construct($id,$header,$content) {
        $this->id= $id;
        $this->header = $header;
        $this->content = $content;
       
       
       
    }

}

?>