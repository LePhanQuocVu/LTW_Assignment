<?php 
header('Content-Type: application/json; charset=utf-8');
class TeamController {
    function list() {
        $teamRepository = new TeamRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $store =  $teamRepository->getBySearch($search);
        }
        else {
            $store =  $teamRepository->getAll();
        }
      
        $stores=json_encode($store );
        echo ($stores);
    }

    

    function save() {
        $data=json_decode(file_get_contents("php://input"));
        $teamRepository = new TeamRepository();
        if ($teamRepository->save($data)) {
            $_SESSION["success"] = "Đã Địa chỉ bình luận thành công";
        }
        else {
            $_SESSION["error"] = $teamRepository->error;
        }

    }


function update() {
    $data=json_decode(file_get_contents("php://input"));
    $teamRepository = new TeamRepository();
   
    if ($teamRepository->update($data)) {
        $_SESSION["success"] = "Đã tạo cập nhật sinh viên thành công";
    }
    else {
        $_SESSION["error"] = $teamRepository->error;
    }

}
    function delete() {
        $id = $_GET["id"];
        $teamRepository = new TeamRepository();
        if ($teamRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa bình luận thành công";
        }
        else {
            $_SESSION["success"] = "Đã xóa bình luận thất bại";

        }

    }
}
?>