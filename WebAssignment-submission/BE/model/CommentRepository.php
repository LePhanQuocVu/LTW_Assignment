<?php 
class CommentRepository {
    public $error;

    function getBySearch($search) {
        $cond = "productid LIKE '%$search%'";
        $comments = $this->fetch($cond);
        return $comments;
    }
    function getAll() {
        return $this->fetch();
    }

    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM commentdb";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $comments = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $comment = $row;
                $comments[] = $comment;
            }
        }
        return $comments;
    }
   
    function save($data) {
        global $conn;
        $username= $data->username;
$comment= $data->comment;
$time= (date('Y-m-d'));
$productid= $data->productid;

if($comment!="" and $productid!="")
{
        $sql = "INSERT INTO commentdb(username,comment,time,productid) VALUES('$username','$comment','$time','$productid')";
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
        $sql = "DELETE FROM commentdb WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    
   
}
?>