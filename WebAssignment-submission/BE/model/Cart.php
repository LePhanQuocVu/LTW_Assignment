<?php 
class Cart {
    public $id;
    public $ptitle;
    public $pprice;
    public $pkind;
    public $pimg;
    public $sl;
    public $username;
    
    

    function __construct($id,$ptitle,$pprice,$pkind,$pimg,$sl,$username) {
        $this->id= $id;
        $this->ptitle = $ptitle;
        $this->pprice = $pprice;
        $this->pkind = $pkind;
        $this->pimg = $pimg;
        $this->sl = $sl;
        $this->username = $username;
       
    }

}

?>