<?php 
class Product {
    public $p_id;
    public $ptitle;
    public $pprice;
    public $pfile;
    public $pstatus;
    

    function __construct($p_id, $ptitle,$pprice,$pfile,$ppstatus) {
        $this->p_id= $p_id;
        $this->ptitle = $ptitle;
        $this->pprice = $pprice;
        $this->pfile = $pfile;
        $this->pstatus = $ppstatus;
       
    }

}

?>