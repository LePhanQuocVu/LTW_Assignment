<?php 
header('Content-Type: application/json; charset=utf-8');
class TestimonialController {
    function list() {
        $testimonialRepository = new TestimonialRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $store =  $testimonialRepository->getBySearch($search);
        }
        else {
            $store =  $testimonialRepository->getAll();
        }
      
        $stores=json_encode($store );
        echo ($stores);
    }

    

    function save() {
        $data=json_decode(file_get_contents("php://input"));
        $testimonialRepository = new TestimonialRepository();
        if ($testimonialRepository->save($data)) {
            $_SESSION["success"] = "Đã Địa chỉ bình luận thành công";
        }
        else {
            $_SESSION["error"] = $testimonialRepository->error;
        }

    }


function update() {
    $data=json_decode(file_get_contents("php://input"));
    $testimonialRepository = new TestimonialRepository();
   
    if ($testimonialRepository->update($data)) {
        $_SESSION["success"] = "Đã tạo cập nhật sinh viên thành công";
    }
    else {
        $_SESSION["error"] = $testimonialRepository->error;
    }

}
    function delete() {
        $id = $_GET["id"];
        $testimonialRepository = new TestimonialRepository();
        if ($testimonialRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa bình luận thành công";
        }
        else {
            $_SESSION["success"] = "Đã xóa bình luận thất bại";

        }

    }
}
?>