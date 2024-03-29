<?php 
class TeamRepository {
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
        $sql = "SELECT * FROM team";
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
$role= $data->role;

$img= $data->img;

if($name!="" and $role!="" and $img!="" )
{
        $sql = "INSERT INTO team(name,role,img) VALUES('$name','$role','$img')";
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
        $sql = "DELETE FROM team WHERE id=$id";
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
        $role= $data->role;
        
        $img= $data->img;;
       
        $sql = "UPDATE team SET name='$name', role='$role', img='$img'  WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    
   
}
?>