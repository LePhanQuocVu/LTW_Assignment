<?php 
class StoreRepository {
    public $error;

    function getBySearch($search) {
        $cond = "id LIKE '%$search%'";
        $store = $this->fetch($cond);
        return $store;
    }
    function getAll() {
        return $this->fetch();
    }

    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM store";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $stores = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $store = $row;
                $stores[] = $store;
            }
        }
        return $stores;
    }
   
    function save($data) {
        global $conn;
        $province= $data->province;
$address= $data->address;

$email= $data->email;
$phone= $data->phone;
if($province!="" and $address!="" and $phone!="" )
{
        $sql = "INSERT INTO store(province,address,email,phone) VALUES('$province','$address','$email','$phone')";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;
    }
    return false;
    }
    function delete($id) {
        global $conn;
        $sql = "DELETE FROM store WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    function update($data) {
        global $conn;
        $id = $data->id;
        $province = $data->province;
        $address = $data->address;
        $email = $data->email;
        $phone	 = $data->phone		;
       
        $sql = "UPDATE store SET province='$province', address='$address', email='$email',phone='$phone'  WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    
   
}
?>