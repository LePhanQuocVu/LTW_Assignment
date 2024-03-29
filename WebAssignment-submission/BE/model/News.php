<?php 
class News {
    public $id;
    public $title;
    public $description;
    public $content;
    public $author;
    public $date;
    public $img;
    
    

    function __construct($id, $title,$description,$content,$author,$date,$img) {
        $this->id= $id;
        $this->title = $title;
        $this->description = $description;
        $this->content = $content;
        $this->author = $author;
        $this->date = $date;
        $this->img = $img;
       
    }

}

?>