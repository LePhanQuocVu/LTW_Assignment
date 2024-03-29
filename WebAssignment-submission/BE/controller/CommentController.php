<?php 
header('Content-Type: application/json; charset=utf-8');
class CommentController {
    function list() {
        $commentRepository = new CommentRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $comment =  $commentRepository->getBySearch($search);
        }
        else {
            $comment =  $commentRepository->getAll();
        }
      
        $comments=json_encode($comment );
        echo ($comments);
    }

    

    function save() {
        $data=json_decode(file_get_contents("php://input"));
        $commentRepository = new CommentRepository();
        if ($commentRepository->save($data)) {
            $_SESSION["success"] = "Đã tạo bình luận thành công";
        }
        else {
            $_SESSION["error"] = $commentRepository->error;
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

    function delete() {
        $id = $_GET["id"];
        $commentRepository = new CommentRepository();
        if ($commentRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa bình luận thành công";
        }
        else {
            $_SESSION["success"] = "Đã xóa bình luận thất bại";

        }

    }
}
?>