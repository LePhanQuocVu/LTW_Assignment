<?php 
class Testimonial {
    public $id;
    public $name;
    public $content;
    public $img;
   
    
    
    

    function __construct($id,$name,$content,$img) {
        $this->id= $id;
        $this->name= $name;
        $this->content=$content	;
        $this->img=$img	;
       
       
       
    }

}

?>