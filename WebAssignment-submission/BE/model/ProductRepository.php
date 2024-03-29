<?php 
class ProductRepository {
    public $error;

    function getBySearch($search) {
        $cond = "id='$search'";
        $products = $this->fetch($cond);
        return $products;
    }
    function getAll() {
        return $this->fetch();
    }

    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM product";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $products = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $product = $row;
                $products[] = $product;
            }
        }
        return $products;
    }
    function register($data) {
        global $conn;
        $username= $data->taiKhoan;
$password= $data->matKhau;
        $sql = "INSERT INTO account(username,password) VALUES('$username','$password')";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    function save($data) {
        global $conn;
        $ptitle= $data->ptitle;
$pprice= $data->pprice;
$pkind= $data->pkind;
$pimg= $data->pimg;
if($pimg!="" and $pkind!="" and $pprice!="" and $ptitle!=""  )
{
    $sql = "INSERT INTO product(ptitle,pprice,pkind,pimg) VALUES('$ptitle','$pprice','$pkind','$pimg')";
    if ($conn->query($sql)) {
        return true;
    }
    $this->error = "Error: $sql <br>" .$conn->error ;
    return false;
}else{
    return false;
}
       

    }
    function delete($id) {
        global $conn;
        $sql = "DELETE FROM product WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    function update($data) {
        global $conn;
        $id = $data->id;
        $ptitle = $data->ptitle;
        $pprice = $data->pprice;
        $pkind = $data->pkind;
        $pimg = $data->pimg;
        $sql = "UPDATE product SET ptitle='$ptitle', pprice='$pprice', pkind='$pkind',pimg='$pimg'  WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    
   
}
?>