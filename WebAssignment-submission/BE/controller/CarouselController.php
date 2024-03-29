<?php 
header('Content-Type: application/json; charset=utf-8');
class CarouselController {
    function list() {
        $carouselRepository = new CarouselRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $carousel =  $carouselRepository->getBySearch($search);
        }
        else {
            $carousel =  $carouselRepository->getAll();
        }
      
        $carousels=json_encode($carousel );
        echo ($carousels);
    }

    

    function save() {
        $data=json_decode(file_get_contents("php://input"));
        $carouselRepository = new CarouselRepository();
        if ($carouselRepository->save($data)) {
            $_SESSION["success"] = "Đã tạo bình luận thành công";
        }
        else {
            $_SESSION["error"] = $carouselRepository->error;
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
    $carouselRepository = new CarouselRepository();
   
    if ($carouselRepository->update($data)) {
        $_SESSION["success"] = "Đã tạo cập nhật sinh viên thành công";
    }
    else {
        $_SESSION["error"] = $carouselRepository->error;
    }

}
    function delete() {
        $id = $_GET["id"];
        $carouselRepository = new CarouselRepository();
        if ($carouselRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa bình luận thành công";
        }
        else {
            $_SESSION["success"] = "Đã xóa bình luận thất bại";

        }

    }
}
?>