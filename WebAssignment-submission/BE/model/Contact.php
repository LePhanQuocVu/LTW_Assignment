<?php 
class Contact {
    public $id;
    public $name;
    public $email;
    public $message;
    
    
    

    function __construct($id,$name,$email,$message) {
        $this->id= $id;
        $this->name = $name;
        $this->email = $email;
        $this->message = $message;
       
       
    }

}

?>