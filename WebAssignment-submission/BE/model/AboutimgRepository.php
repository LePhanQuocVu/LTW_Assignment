<?php 
class AboutimgRepository {
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
        $sql = "SELECT * FROM aboutimg";
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
      
$img= $data->img;

if( $img!="" )
{
        $sql = "INSERT INTO aboutimg(img) VALUES('$img')";
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
        $sql = "DELETE FROM aboutimg WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    function update($data) {
        global $conn;
        $id = $data->id;
       
        $img= $data->img;;
       
        $sql = "UPDATE aboutimg SET  img='$img'  WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    
   
}
?>