<?php
class UserRepository
{
    public $error;




    public function getBySearch($search)
    {
        $cond = "username = '$search'";
        $users = $this->fetch($cond);
        return $users;
    }
    public function getAll()
    {
        return $this->fetch();
    }




    public function fetch($cond = null)
    {
        global $conn;
        $sql = "SELECT * FROM account";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $users = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $user = $row;
                $users[] = $user;
            }
        }
        return $users;
    }










    public function register($data)
    {
        global $conn;


        $username = $data->taiKhoan;
        $password = md5($data->matKhau);
        $result = mysqli_query($conn, "SELECT * FROM account where username='$username'");
        $num = mysqli_num_rows($result);
        if ($num >= 1)
            return false;
        $img = "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg";


        if ($username != "" and $password != "") {
            $sql = "INSERT INTO account(username,password,role,image) VALUES('$username','$password','user','$img')";
            if ($conn->query($sql)) {
                return true;
            }


            return false;
        }
        return false;
    }






    public function find($id)
    {
        $cond = "id = $id";
        $students = $this->fetch($cond);
        $student = current($students); //lấy student tại vị trí con trỏ
        return $student;
    }




    public function updateInfo($username, $fullname, $email, $phonenumber, $address,$image)
    {
        global $conn;
        $sql = "UPDATE account SET `fullname`='$fullname', `email`='$email', `phonenumber`='$phonenumber', `address`='$address', `image`='$image'  WHERE `username`= '$username'";
        if ($conn->query($sql)) {
            return true;
        }




        return false;
    }
    public function updatePass($username, $oldPass, $newPass)
    {
        global $conn;
        $selectPass = "SELECT `password` FROM `account` WHERE `username` = '$username'";
        $res = mysqli_query($conn, $selectPass);
        $res = mysqli_fetch_array($res, MYSQLI_NUM);
        $pass = $res[0];
        if ($pass != $oldPass) {
            return false;
        } else {
            $sql = "UPDATE account SET `password`='$newPass' WHERE `username`= '$username'";
            $conn->query($sql);
            return true;
        }
    }
    public function updateUsername($id, $username, $password)
    {
        global $conn;
        $selectPass = "SELECT `password` FROM `account` WHERE `id` = '$id'";
        $res = mysqli_query($conn, $selectPass);
        $res = mysqli_fetch_array($res, MYSQLI_NUM);
        $pass = $res[0];




        if ($pass != $password) {
            return false;
        } else {
            $sql = "UPDATE account SET `username`='$username' WHERE `id`= $id";
            $conn->query($sql);
            return true;
        }
    }
    public function read_single($username)
    {
        global $conn;
        $myArray = [];
        $sql = "SELECT `username`,`password`,`phonenumber`,`address`,`role`,`fullname`,`email`,`image`
        FROM `account` WHERE `username`='$username'";
        $result = mysqli_query($conn, $sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'username' => "{$row['username']}",
                'password' => "{$row['password']}",
                'phonenumber' => "{$row['phonenumber']}",
                'address' => "{$row['address']}",
                'role' => "{$row['role']}",
                'fullname' => "{$row['fullname']}",
                'email' => "{$row['email']}",
                'image' => "{$row['image']}",
            ]);
        }
        return $myArray;
    }
    public function getImg($username)
    {
        global $conn;
        $selectImg = "SELECT `image` FROM `account` WHERE `username` = '$username'";
        $res = mysqli_query($conn, $selectImg);
        $res = mysqli_fetch_array($res, MYSQLI_NUM);
        $img = $res[0];
        return $img;
    }
    public function getListOrder($username)
    {
        global $conn;
        $myArray = [];
        $selectOrder = "SELECT `id`,`total`,`date`,`status` FROM `orders` WHERE `username` = '$username'";
        $result = mysqli_query($conn, $selectOrder);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'id' => "{$row['id']}",
                'total' => "{$row['total']}",
                'date' => "{$row['date']}",
                'status' => "{$row['status']}"
            ]);
        }
        return $myArray;
    }
    public function getCart($username, $id)
    {
        global $conn;
        $myArray = [];
        $selectCart = "SELECT `cart`.`ptitle`, `cart`.`pprice`, `cart`.`pimg`, `cart`.`sl`,(`cart`.`sl`*`cart`.`pprice`) as `tonggia`
                        FROM
                            `orders`
                        INNER JOIN
                            `cart`
                        ON
                            `orders`.`id` = `cart`.`order_id`
                        WHERE
                            -- `cart`.`username` = '$username' 
                            `orders`.`id`='$id'
                        GROUP BY
                            `cart`.`p_id`";

// AND 


        $result = mysqli_query($conn, $selectCart);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'ptitle' => "{$row['ptitle']}",
                'pprice' => "{$row['pprice']}",
                'pimg' => "{$row['pimg']}",
                'sl' => "{$row['sl']}",
                'tonggia' => "{$row['tonggia']}"
            ]);
        }
        return $myArray;
    }
    public function getTotalOrder()
    {
        global $conn;
        $myArray = [];
        $select = "SELECT * FROM `orders` ";
        $result = mysqli_query($conn, $select);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            array_push($myArray, (object)[
                'id' => "{$row['id']}",
                'username' => "{$row['username']}",
                'total' => "{$row['total']}",
                'email' => "{$row['email']}",
                'name' => "{$row['name']}",
                'billing_address' => "{$row['billing_address']}",
                'date' => "{$row['date']}",
                'status' => "{$row['status']}",
                'note' => "{$row['note']}"
            ]);
        }
        return $myArray;
    }
    public function delete($id)
    {
        global $conn;
        $sql = "DELETE FROM account WHERE username=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;
    }
}
