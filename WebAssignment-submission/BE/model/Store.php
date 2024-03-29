<?php 
class Store {
    public $id;
    public $province;
    public $address;
    public $email;
    public $phone;
    

    function __construct($id, $province,$address,$email,$phone) {
        $this->id= $id;
        $this->province = $province;
        $this->address = $address;
        $this->email = $email;
        $this->phone = $phone;
       
    }

}

?>