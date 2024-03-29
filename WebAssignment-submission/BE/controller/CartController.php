<?php 
header('Content-Type: application/json; charset=utf-8');
class CartController {
    function list() {
        $cartRepository = new CartRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $cart =    $cartRepository->getBySearch($search);
        }
        else {
            $cart =   $cartRepository->getAll();
        }
      
        $carts=json_encode($cart );
        echo ($carts);
    }

    

   
    function delete() {
        $id = $_GET["id"];
        $username=$_GET["username"];
        $cartRepository = new CartRepository();
        if ( $cartRepository->delete($id, $username)) {
            $_SESSION["success"] = "Đã xóa sản phẩm";
        }
        else {
            $_SESSION["error"] =  $cartRepository->error;
        }

    }
    function save() {
        $data = json_decode(file_get_contents("php://input"));
        
        $cartRepository = new CartRepository();
        if ($cartRepository->productExistsInCart($data->username, $data->p_id)) {
            // Product exists, update quantity
            if ($cartRepository->updateProductQuantity($data->username, $data->p_id, $data->sl)) {
                $_SESSION["success"] = "Số lượng sản phẩm đã được cập nhật trong giỏ hàng";
            } else {
                $_SESSION["error"] = "Không thể cập nhật số lượng sản phẩm";
            }
        } else {
            
            if ($cartRepository->save($data)) {
                $_SESSION["success"] = "Đã thêm sản phẩm vào giỏ hàng thành công";
            } else {
                $_SESSION["error"] = $cartRepository->error;
            }
        }
}

function plus() {
    $id = $_GET["id"];
    $username=$_GET["username"];
    $cartRepository = new CartRepository();
    if ( $cartRepository->updateProductQuantity($username,$id,1)) {
        $_SESSION["success"] = "Đã xóa sản phẩm";
    }
    else {
        $_SESSION["error"] =  $cartRepository->error;
    }

}

function minus() {
    $id = $_GET["id"];
    $username=$_GET["username"];
    $cartRepository = new CartRepository();
    if ( $cartRepository->decreaseProductQuantity($username,$id)) {
        $_SESSION["success"] = "Đã xóa sản phẩm";
    }
    else {
        $_SESSION["error"] =  $cartRepository->error;
    }

}



}

?>