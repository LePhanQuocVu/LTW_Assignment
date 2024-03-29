<?php 
class StatisticRepository {
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
        $sql = "SELECT * FROM statistic";
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
        $quantity= $data->quantity;
$item= $data->item;


if($quantity!="" and $item!=""  )
{
        $sql = "INSERT INTO statistic(quantity,item) VALUES('$quantity','$item')";
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
        $sql = "DELETE FROM statistic WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    function update($data) {
        global $conn;
        $id = $data->id;
        $quantity= $data->quantity;
$item= $data->item;

        $sql = "UPDATE statistic SET quantity='$quantity', item='$item'  WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    
   
}
?>