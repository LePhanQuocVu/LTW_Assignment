<?php 
class Order {
    public $id;
    public $username;
    public $total;
    public $email;
    public $name;
    public $billing_address;
    public $note;

    function __construct($id, $username,$total,$email,$name,$billing_address,$note) {
        $this->id= $id;
        $this->username = $username;
        $this->total = $total;
        $this->email = $email;
        $this->name = $name;
        $this->billing_address = $billing_address;
        $this->note = $note;
       
    }

}

?>