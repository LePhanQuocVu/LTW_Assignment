<?php 
class ContactRepository {
    public $error;

    function getBySearch($search) {
        $cond = "id LIKE '%$search%'";
        $contacts = $this->fetch($cond);
        return $contacts;
    }
    function getAll() {
        return $this->fetch();
    }

    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM contact";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $contacts = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $contact = $row;
                $contacts[] = $contact;
            }
        }
        return $contacts;
    }
   
    function save($data) {
        global $conn;
        $name= $data->name;
$message= $data->message;
$email= $data->email;

   if( $name!="" and $message!=""){
        $sql = "INSERT INTO contact(name,email,message) VALUES('$name','$email','$message')";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }else{
        return false;
    }
   
    }

    
    function delete($id) {
        global $conn;
        $sql = "DELETE FROM contact WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    
   
}
?>