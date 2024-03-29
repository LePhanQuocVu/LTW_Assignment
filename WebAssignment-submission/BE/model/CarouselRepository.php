<?php 
class CarouselRepository {
    public $error;

    function getBySearch($search) {
        $cond = "maBanner LIKE '%$search%'";
        $carousel = $this->fetch($cond);
        return $carousel;
    }
    function getAll() {
        return $this->fetch();
    }

    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM carousel";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $carousels = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $carousel = $row;
                $carousels[] = $carousel;
            }
        }
        return $carousels;
    }
   
    function save($data) {
        global $conn;
        $hinhAnh	= $data->hinhAnh;


if($hinhAnh!="" )
{
        $sql = "INSERT INTO carousel(hinhAnh) VALUES('$hinhAnh')";
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
        $sql = "DELETE FROM carousel WHERE id =$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    function update($data) {
        global $conn;
        $id = $data->id;
        $hinhAnh = $data->hinhAnh;
        
        $sql = "UPDATE carousel SET hinhAnh='$hinhAnh'  WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
   
}
?>