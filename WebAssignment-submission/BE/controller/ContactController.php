<?php 
header('Content-Type: application/json; charset=utf-8');
class ContactController {
    function list() {
        $contactRepository = new ContactRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $contact =  $contactRepository->getBySearch($search);
        }
        else {
            $contact =  $contactRepository->getAll();
        }
      
        $contacts=json_encode($contact );
        echo ($contacts);
    }

    

    function save() {
        $data=json_decode(file_get_contents("php://input"));
        $contactRepository = new ContactRepository();
        if ($contactRepository->save($data)) {
            $_SESSION["success"] = "Đã tạo liên hệ thành công";
        }
        else {
            $_SESSION["error"] = $contactRepository->error;
        }

    }


    function delete() {
        $id = $_GET["id"];
        $contactRepository = new ContactRepository();
        if ($contactRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa liên hệ thành công";
        }
        else {
            $_SESSION["success"] = "Đã xóa liên hệ thất bại";

        }

    }
}
?>