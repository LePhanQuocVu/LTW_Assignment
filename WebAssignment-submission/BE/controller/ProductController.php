<?php 
header('Content-Type: application/json; charset=utf-8');
class ProductController {
        function list() {
            $productRepository = new ProductRepository();
            $search = "";
            if (!empty($_GET["search"])) {
                $search = $_GET["search"];
                $products =  $productRepository->getBySearch($search);
            }
            else {
                $products =  $productRepository->getAll();
            }
        
            $user=json_encode($products );
            echo ($user);
        }
    
    // function getall(){
    //     global $conn;
    //     $path= explode('/', $_SERVER['REQUEST_URI']);

    //     if(isset($path[4]) && is_numeric($path[4]))
    //     {
    //       echo "Get Api Single Row"; die;
    //     } else {
       
    //      $destination= $_SERVER['DOCUMENT_ROOT']."/reactcrudphp"."/";
    //      $sql = "SELECT * FROM tbl_product";
    //      $result = $conn->query($sql);
        
    //      if(mysqli_num_rows($result) > 0)
    //      {
    //         while($row= mysqli_fetch_array($result))
    //         {
    //          $json_array["productdata"][]= array("id"=>$row['p_id'], 
    //          "ptitle"=>$row["ptitle"],
    //          "pprice"=>$row["pprice"],
    //          "pimage"=>$row["pfile"],
    //          "status"=>$row["pstatus"]
    //         );
    //         }
    //         echo json_encode($json_array["productdata"]);
    //         return;
    //      } else {
    //       echo json_encode(["result"=>"please check the Data"]);
    //       return;
    //      }
  
  
    //     }



        
    // }
    function update() {
        $data=json_decode(file_get_contents("php://input"));
        $productRepository = new ProductRepository();
       
        if ($productRepository->update($data)) {
            $_SESSION["success"] = "Đã tạo cập nhật sinh viên thành công";
        }
        else {
            $_SESSION["error"] = $productRepository->error;
        }

    }

   
    // function register(){
    //     $data=json_decode(file_get_contents("php://input"));
    //     $userRepository = new ProductRepository();
    //     if ( $userRepository->register($data)) {
    //         echo json_encode(["success"=>"User Added Successfully"]);
    //     }
    //     else {
    //         echo json_encode(["success"=>"Please Check the User Data!"]);
    //     }
    
        
    // }
    function save()
    {
        $data=json_decode(file_get_contents("php://input"));
        $productRepository = new ProductRepository();
        if ($productRepository->save($data)) {
            $_SESSION["success"] = "Đã tạo bình luận thành công";
        }
        else {
            $_SESSION["error"] = $productRepository->error;
        }
        
        // global $conn;
        // if(isset($_FILES['pfile']))
        // {      
        //   $ptitle= $_POST['ptitle'];
        //   $pprice= $_POST['pprice'];
        //   $pfile= time().$_FILES['pfile']['name'];
        //   $pfile_temp= $_FILES['pfile']['tmp_name'];
        //   $destination= $_SERVER['DOCUMENT_ROOT'].'/reactcrudphp'."/images"."/".$pfile;
        //   $sql = "INSERT INTO tbl_product (ptitle, pprice,pfile, pstatus)
        //   VALUES('$ptitle','$pprice','$pfile','1')";
        //    if ($conn->query($sql)) {
        //     move_uploaded_file($pfile_temp, $destination);
        //     echo json_encode(["success"=>"Product Inserted Successfully"]);
        //      return;
        // }
        
        // echo json_encode(["success"=>"Product Not Inserted!"]);
        // return;
         
  

        
    // }
    }
    function delete() {
        $id = $_GET["id"];
        $productRepository = new ProductRepository();
        if ( $productRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa user thành công";
            echo "thanh cong";
        }
        else {
            $_SESSION["error"] = $productRepository->error;
            echo  $productRepository->error;
        }

    }
    
}
?>