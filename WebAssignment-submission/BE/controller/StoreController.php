<?php 
header('Content-Type: application/json; charset=utf-8');
class StoreController {
    function list() {
        $storeRepository = new StoreRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $store =  $storeRepository->getBySearch($search);
        }
        else {
            $store =  $storeRepository->getAll();
        }
      
        $stores=json_encode($store );
        echo ($stores);
    }

    

    function save() {
        $data=json_decode(file_get_contents("php://input"));
        $storeRepository = new StoreRepository();
        if ($storeRepository->save($data)) {
            $_SESSION["success"] = "Đã Địa chỉ bình luận thành công";
        }
        else {
            $_SESSION["error"] = $storeRepository->error;
        }

    }

//     function edit() {
//         $id = $_GET["id"];
//         entRepository = new CommentRepository();
//         $student = $studentRepository->find($id);
//     }

//     function update() {
//         $id = $_POST["id"];
//         entRepository = new CommentRepository();
//         $student = $studentRepository->find($id);
//         $student->name = $_POST["name"];
//         $student->birthday = $_POST["birthday"];
//         $student->gender = $_POST["gender"];
//         if ($studentRepository->update($student)) {
//             $_SESSION["success"] = "Đã tạo cập nhật sinh viên thành công";
//         }
//         else {
//             $_SESSION["error"] = $studentRepository->error;
//         }

//     }
function update() {
    $data=json_decode(file_get_contents("php://input"));
    $storeRepository = new StoreRepository();
   
    if ($storeRepository->update($data)) {
        $_SESSION["success"] = "Đã tạo cập nhật sinh viên thành công";
    }
    else {
        $_SESSION["error"] = $storeRepository->error;
    }

}
    function delete() {
        $id = $_GET["id"];
        $storeRepository = new StoreRepository();
        if ($storeRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa bình luận thành công";
        }
        else {
            $_SESSION["success"] = "Đã xóa bình luận thất bại";

        }

    }
}
?>