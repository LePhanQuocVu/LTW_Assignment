<?php 
class ServiceRepository {
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
        $sql = "SELECT * FROM service";
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
        $name= $data->name;
$description= $data->description;


if($name!="" and $description!="" )
{
        $sql = "INSERT INTO service(name,description) VALUES('$name','$description')";
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
        $sql = "DELETE FROM service WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    function update($data) {
        global $conn;
        $id = $data->id;
        $name= $data->name;
        $description= $data->description;
       
        $sql = "UPDATE service SET name='$name', description='$description'  WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    
   
}
?>