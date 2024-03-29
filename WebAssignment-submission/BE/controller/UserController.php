<?php
header('Content-Type: application/json; charset=utf-8');
class UserController
{
    function list()
    {
        $userRepository = new UserRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $users =  $userRepository->getBySearch($search);
        } else {
            $users =  $userRepository->getAll();
        }


        $user = json_encode($users);
        echo ($user);
    }




    function add()
    {
    }
    function register()
    {
        $data = json_decode(file_get_contents("php://input"));
        $userRepository = new UserRepository();
        if ($userRepository->register($data)) {
            echo json_encode("true");
        } else {
            echo json_encode("false");
        }
    }




    function save()
    {
        $data = json_decode(file_get_contents("php://input"));
        $username = $data->taiKhoan;
        $password = $data->matKhau;
        return true;
    }




    function edit()
    {
        $id = $_GET["id"];
        $userRepository = new UserRepository();
        $student =  $userRepository->find($id);
    }




    public function updateInfo()
    {
        $_POST = json_decode(file_get_contents("php://input"), true);
        $username = isset($_POST["username"]) ? $_POST["username"] : '';
        $fullname = isset($_POST["fullname"]) ? $_POST["fullname"] : '';
        $email = isset($_POST["email"]) ? $_POST["email"] : '';
        $phonenumber = isset($_POST["phonenumber"]) ? $_POST["phonenumber"] : '';
        $address = isset($_POST["address"]) ? $_POST["address"] : '';
        $image = isset($_POST["image"]) ? $_POST["image"] : '';

        $user = new UserRepository();
        $result = $user->updateInfo($username, $fullname, $email, $phonenumber, $address,$image);
        echo json_encode($result);
    }
    public function updatePass()
    {
        $_POST = json_decode(file_get_contents("php://input"), true);
        $username = isset($_POST["username"]) ? $_POST["username"] : '';
        $oldPass = md5(isset($_POST["oldPass"]) ? $_POST["oldPass"] : '');
        $newPass = md5(isset($_POST["newPass"]) ? $_POST["newPass"] : '');
        $user = new UserRepository();
        $result = $user->updatePass($username, $oldPass, $newPass);
        echo json_encode($result);
    }
    public function updateUsername()
    {
        $id = isset($_POST["id"]) ? $_POST["id"] : '';
        $username = isset($_POST["username"]) ? $_POST["username"] : '';
        $password = md5(isset($_POST["password"]) ? $_POST["password"] : '');
        $user = new UserRepository();
        $result = $user->updateUsername($id, $username, $password);
        echo json_encode($result);
    }
    public function getImg()
    {
        $_POST = json_decode(file_get_contents("php://input"), true);
        $username = isset($_POST["username"]) ? $_POST["username"] : '';
        $user = new UserRepository();
        $result = $user->getImg($username);
        echo json_encode($result);
    }
    public function getListOrder()
    {
        $_POST = json_decode(file_get_contents("php://input"), true);
        $username = isset($_POST["username"]) ? $_POST["username"] : '';
        $user = new UserRepository();
        $result = $user->getListOrder($username);
        echo json_encode($result);
    }
    public function getUser()
    {
        $_POST = json_decode(file_get_contents("php://input"), true);
        $username = isset($_POST["username"]) ? $_POST["username"] : '';
        $user = new UserRepository();
        $result = $user->read_single($username);
        echo json_encode($result);
    }


    public function getCart()
    {
        $_POST = json_decode(file_get_contents("php://input"), true);
        $username = isset($_POST["username"]) ? $_POST["username"] : '';
        $id = isset($_POST["id"]) ? $_POST["id"] : '';
        $user = new UserRepository();
        $result = $user->getCart($username, $id);
        echo json_encode($result);
    }
    public function getTotalOrder()
    {
        $_POST = json_decode(file_get_contents("php://input"), true);
        $user = new UserRepository();
        $result = $user->getTotalOrder();
        echo json_encode($result);
    }
    function delete()
    {
        $id = $_GET["id"];
        $userRepository = new UserRepository();
        if ($userRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa user thành công";
            echo "thanh cong";
        } else {
            $_SESSION["error"] =  $userRepository->error;
            echo $userRepository->error;
        }
    }
}
