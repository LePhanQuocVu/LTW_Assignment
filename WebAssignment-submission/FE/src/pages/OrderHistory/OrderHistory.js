import { IconButton, Button } from "@mui/material";
import { productData } from "../../data/mockData";
import VisibilityIcon from "@mui/icons-material/Visibility";
import * as React from "react";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import {
  DataGrid,


} from '@mui/x-data-grid';
const OrderHistory = () => {


  var role = localStorage.getItem('role');
  var username = localStorage.getItem("username");
  const dispatch = useDispatch();
  const UserDetail = useSelector(
        (state) => state.QuanLyUserReducer.productDetail
    );
    const[listOrder,setListOrder]=useState([]);
   
    useEffect(() => {
      axios.post("http://localhost/qlsvmvc/?c=User&a=getListOrder", {
        username: username
      }).then((res) => {
        // console.log(res.data[0])
        setListOrder(res.data)
      });
    }, []);


  const columns = [
    { field: "id", headerName: "Mã đơn hàng",headerAlign: "center",align: "center", flex: 1 },
    {
      field: "total",
      headerName: "Tổng thanh toán",
      headerAlign: "center",
      flex: 1,
      align: "center",


    },
    {
      field: "date",
      headerName: "Ngày thanh toán",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "status",
      headerName: "Tình trạng",
      headerAlign: "center",
      flex: 1,
      align: "center",


    },


    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      flex: 1,
      align: "center",
      renderCell: (params) => {
        return (
          <>
            {HandleView(params)}

          </>
        );
      },
    },
  ];


  return (
    <div className="grid mx-4 gap-y-4">
      <div className="" style={{display:'flex',justifyContent:'space-between'}}>
        <div
       
          className="text-xl md:text-3xl font-semibold w-full text-center"
          sx={{ m: "0 0 5px 0" }}
        >
          Danh sách đơn hàng
        </div>
      </div>


      <div
        m="40px 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "bg-dark",
            color: "text-light",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "bg-dark",
            color: "text-light",
          },
        }}
        style={{overflow: 'scroll'}}
      >
        <DataGrid
          rows={listOrder}
          columns={columns}
          rowHeight={100}
          style={{minWidth:'1000px'}}
        />
      </div>
    </div>
  );
};


export default OrderHistory;






const HandleView = (params) => {
  const [open, setOpen] = React.useState(false);
  var username = localStorage.getItem("username");




    const [ptitle, setTitle] = useState("");
    const [pprice, setPrice] = useState("");
    const [pimg, setImg] = useState("");
    const [sl, setSl] = useState("");
    const [tonggia, setTonggia] = useState("");
    const [orderDetail,setOrderDetail] =useState(null);
   
    useEffect(() => {
      axios.post("http://localhost/qlsvmvc/?c=User&a=getCart", {
        username: "tamminh",
        id:params.row.id
      }).then((res) => {
        console.log(res.data);
        setOrderDetail(res.data);
        
      });
    }, []);


    const handleOpen = () => setOpen(!open);
  return (
    <React.Fragment>
      <IconButton className="userListView" onClick={handleOpen}>
        <VisibilityIcon />
      </IconButton>


      <Dialog open={open} handler={handleOpen} className="flex flex-col justify-center items-center">
        <div className='p-3 w-full'>
            <DialogHeader>Đơn hàng {params.row.id}</DialogHeader>
            <DialogBody style={{ height: '400px', overflow: 'auto', scrollbarWidth: '0px' }}>
                    <p>Mã đơn hàng: {params.row.id}</p>
                    <p>Tổng thanh toán: {params.row.total}</p>
                    <p>Ngày đặt hàng: {params.row.date}</p>
                    <p>Ghi chú: {params.row.note}</p>
                    <div className='w-full overflow-x-auto'>
                        <table class="table" style={{minWidth:'600px'}}>
                        <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Tổng giá</th>
                        </tr>
                        </thead>
                        <tbody>
                        { Array.isArray(orderDetail) && orderDetail.map((item,index) =>  {
                          // console.log(item);
                          return (
                            <tr >
                                <td>{item["ptitle"]}</td>
                                <td><img src={item.pimg} alt="anhsanpham" style={{height:'100px'}}></img></td>
                                <td>{item.sl}</td>
                                <td>{item.pprice}</td>
                                <td>{item.tonggia}</td>
                            </tr>


                          )
                        })}
                       
                        </tbody>
                        </table>
                    </div>
            </DialogBody>
        </div>
      </Dialog>
    </React.Fragment>
    );
};







