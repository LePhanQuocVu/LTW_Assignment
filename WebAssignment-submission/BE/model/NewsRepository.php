<?php 

class NewsRepository {
    public $error;

    function getBySearch($search) {
        $cond = "id=$search";
        $news = $this->fetch($cond);
        return $news;
    }
    function getAll() {
        return $this->fetch();
    }

    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM news";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $news = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $tintuc = $row;
                $news[] = $tintuc;
            }
        }
        return $news;
    }
    function save($data) {
        global $conn;
        $title= $data->title;
$description= $data->description;

$content= $data->content;
$author	= $data->author;
$date= (date('Y-m-d'));
$img= $data->img;

if($title!="" and $description!="")
{
        $sql = "INSERT INTO news(title,description,content,author,date,img) VALUES('$title','$description','$content','$author','$date','$img')";
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
        $sql = "DELETE FROM news WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    function update($data) {
        global $conn;
        $id = $data->id;
        $title = $data->title;
        $description = $data->description;
        $author = $data->author;
        $img = $data->img;
        $content = $data->content;
        $sql = "UPDATE news SET title='$title', description='$description', author='$author',img='$img',content='$content'  WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
   
    
    

    
    
   
}
?>