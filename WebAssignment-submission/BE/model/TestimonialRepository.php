<?php 
class TestimonialRepository {
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
        $sql = "SELECT * FROM testimonials";
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
        if (isset($data->name) && isset($data->content) && isset($data->img)) {
            $name= $data->name;
            $content= $data->content;
            
            $img= $data->img;
            
            if($name!="" and $content!="" and $img!="" )
            {
                    $sql = "INSERT INTO testimonials(name,content,img) VALUES('$name','$content','$img')";
                    if ($conn->query($sql)) {
                        return true;
                    }
                    $this->error = "Error: $sql <br>" .$conn->error ;
                    return false;
                }
                return false;
        } else {
            return false;
        }
    
    }
    function delete($id) {
        global $conn;
        $sql = "DELETE FROM testimonials WHERE id=$id";
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
$content= $data->content;

$img= $data->img;
       
        $sql = "UPDATE testimonials SET name='$name', content='$content', img='$img'  WHERE id = '$id'";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    
   
}
?>