<?php 
header('Content-Type: application/json; charset=utf-8');
class ServiceController {
    function list() {
        $serviceRepository = new ServiceRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $store =  $serviceRepository->getBySearch($search);
        }
        else {
            $store =  $serviceRepository->getAll();
        }
      
        $stores=json_encode($store );
        echo ($stores);
    }

    

    function save() {
        $data=json_decode(file_get_contents("php://input"));
        $serviceRepository = new ServiceRepository();
        if ($serviceRepository->save($data)) {
            $_SESSION["success"] = "Đã Địa chỉ bình luận thành công";
        }
        else {
            $_SESSION["error"] = $serviceRepository->error;
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
    $serviceRepository = new ServiceRepository();
   
    if ($serviceRepository->update($data)) {
        $_SESSION["success"] = "Đã tạo cập nhật sinh viên thành công";
    }
    else {
        $_SESSION["error"] = $serviceRepository->error;
    }

}
    function delete() {
        $id = $_GET["id"];
        $serviceRepository = new ServiceRepository();
        if ($serviceRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa bình luận thành công";
        }
        else {
            $_SESSION["success"] = "Đã xóa bình luận thất bại";

        }

    }
}
?>