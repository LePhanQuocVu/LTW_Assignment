<?php 
header('Content-Type: application/json; charset=utf-8');
class OrderController {
    function list() {
        $orderRepository = new OrderRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $store =  $orderRepository->getBySearch($search);
        }
        else {
            $store =  $orderRepository->getAll();
        }
      
        $stores=json_encode($store );
        echo ($stores);
    }

    

    function save() {
        $data=json_decode(file_get_contents("php://input"));
        $orderRepository = new OrderRepository();
        if ($orderRepository->save($data)) {
            $_SESSION["success"] = "Đã Địa chỉ bình luận thành công";
        }
        else {
            $_SESSION["error"] = $orderRepository->error;
        }

    }


function update() {
    $data=json_decode(file_get_contents("php://input"));
    $orderRepository = new OrderRepository();
   
    if ($orderRepository->update($data)) {
        $_SESSION["success"] = "Đã tạo cập nhật sinh viên thành công";
    }
    else {
        $_SESSION["error"] = $orderRepository->error;
    }

}
    function delete() {
        $id = $_GET["id"];
        $orderRepository = new OrderRepository();
        if ($orderRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa bình luận thành công";
        }
        else {
            $_SESSION["success"] = "Đã xóa bình luận thất bại";

        }

    }
}
?>