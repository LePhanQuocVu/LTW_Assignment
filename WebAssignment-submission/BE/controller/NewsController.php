<?php 
header('Content-Type: application/json; charset=utf-8');
class NewsController {
    function list() {
        $newsRepository = new NewsRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $news =  $newsRepository->getBySearch($search);
        }
        else {
            $news =  $newsRepository->getAll();
        }
      
        $news=json_encode($news);
        echo ($news);
    }

    
    function save() {
        $data=json_decode(file_get_contents("php://input"));
        $newsRepository = new NewsRepository();
        if ($newsRepository->save($data)) {
            $_SESSION["success"] = "Đã tạo bình luận thành công";
        }
        else {
            $_SESSION["error"] = $newsRepository->error;
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
    $newsRepository = new NewsRepository();
   
    if ($newsRepository->update($data)) {
        $_SESSION["success"] = "Đã tạo cập nhật sinh viên thành công";
    }
    else {
        $_SESSION["error"] = $newsRepository->error;
    }

}
    function delete() {
        $id = $_GET["id"];
        $newsRepository = new NewsRepository();
        if ($newsRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa bình luận thành công";
        }
        else {
            $_SESSION["success"] = "Đã xóa bình luận thất bại";

        }

    }

    


   
}
?>