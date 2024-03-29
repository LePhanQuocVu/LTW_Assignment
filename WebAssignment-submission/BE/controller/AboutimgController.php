<?php 
header('Content-Type: application/json; charset=utf-8');
class AboutimgController {
    function list() {
        $aboutimgRepository = new AboutimgRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $store =  $aboutimgRepository->getBySearch($search);
        }
        else {
            $store =  $aboutimgRepository->getAll();
        }
      
        $stores=json_encode($store );
        echo ($stores);
    }

    

    function save() {
        $data=json_decode(file_get_contents("php://input"));
        $aboutimgRepository = new AboutimgRepository();
        if ($aboutimgRepository->save($data)) {
            $_SESSION["success"] = "Đã Địa chỉ bình luận thành công";
        }
        else {
            $_SESSION["error"] = $aboutimgRepository->error;
        }

    }


function update() {
    $data=json_decode(file_get_contents("php://input"));
    $aboutimgRepository = new AboutimgRepository();
   
    if ($aboutimgRepository->update($data)) {
        $_SESSION["success"] = "Đã tạo cập nhật sinh viên thành công";
    }
    else {
        $_SESSION["error"] = $aboutimgRepository->error;
    }

}
    function delete() {
        $id = $_GET["id"];
        $aboutimgRepository = new AboutimgRepository();
        if ($aboutimgRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa bình luận thành công";
        }
        else {
            $_SESSION["success"] = "Đã xóa bình luận thất bại";

        }

    }
}
?>