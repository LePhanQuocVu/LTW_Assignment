<?php

class CartRepository
{
    public $error;

    function getBySearch($search)
    {
        $cond = "username LIKE '%$search%'";
        $products = $this->fetch($cond);
        return $products;
    }
    function getAll()
    {
        return $this->fetch();
    }

    function fetch($cond = null)
    {
        global $conn;
        $sql = "SELECT * FROM cart";
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

    function save($data)
    {
        global $conn;
        $ptitle = $data->ptitle;
        $pprice = $data->pprice;
        $pkind = $data->pkind;
        $pimg = $data->pimg;
        $sl = $data->sl;
        $username = $data->username;
        $p_id = $data->p_id;



        $sql = "INSERT INTO cart(ptitle,pprice,pkind,pimg,sl,username,p_id) VALUES('$ptitle','$pprice','$pkind','$pimg','$sl','$username','$p_id')";
       

        if ($conn->query($sql)) {

            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;
    }
    public function delete($id, $username)
    {
        global $conn;
        $sql = "DELETE FROM cart WHERE p_id='$id' And username='$username'";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;
    }
    public function productExistsInCart($username, $p_id)
    {
        global $conn;
        $sql = "SELECT * FROM cart WHERE username = '$username' AND p_id = '$p_id'";
        $result = $conn->query($sql);
        return $result && $result->num_rows > 0;
    }

    public function updateProductQuantity($username, $p_id, $additionalQuantity)
    {
        global $conn;
        $sql = "UPDATE cart SET sl = sl + $additionalQuantity WHERE username = '$username' AND p_id = '$p_id'";
        return $conn->query($sql);
    }
    function decreaseProductQuantity($username, $p_id)
    {
        global $conn;
        $sql = "SELECT sl FROM cart WHERE username='$username' AND p_id='$p_id'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $currentQuantity = $row["sl"];
            if ($currentQuantity > 1) {
                // Giảm số lượng sản phẩm
                $newQuantity = $currentQuantity - 1;
                $updateSql = "UPDATE cart SET sl='$newQuantity' WHERE username='$username' AND p_id='$p_id'";
                if ($conn->query($updateSql)) {
                    return true;
                }
                $this->error = "Error: $updateSql <br>" . $conn->error;
                return false;
            } else if ($currentQuantity == 1) {
                // Số lượng = 1, xóa sản phẩm
                return $this->delete($p_id, $username);
            }
        }
        $this->error = "Sản phẩm không tồn tại trong giỏ hàng";
        return false;
    }
}