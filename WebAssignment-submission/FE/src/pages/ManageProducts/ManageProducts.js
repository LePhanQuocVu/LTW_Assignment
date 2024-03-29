import { IconButton, Button } from "@mui/material";

import { productData } from "../../data/mockData";
import { useEffect } from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ToggleCreate from './ToggleCreate'
import DialogUpdate from './ToggleUpdate'
import DialogDelete from './ToggleDelete'
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachSanPhamAction } from '../../redux/actions/QuanLySanPhamAction';

import {
    DataGrid,

} from '@mui/x-data-grid';
const ManageProducts = () => {

    const { arrProduct } = useSelector(state => state.QuanLySanPhamReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachSanPhamAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])

    const columns = [
        { field: "id", headerName: "ID", headerAlign: "center", align: "center", flex: 0.25 },
        { field: "ptitle", headerName: "Tên sản phẩm", headerAlign: "center", align: "center", flex: 1.5 },
        {
            field: "pkind",
            headerName: "Loại",
            headerAlign: "center",
            flex: 0.8,
            cellClassName: "name-column--cell",
            align: "center",

        },
        {
            field: "pprice",
            headerName: "Giá thành",
            headerAlign: "center",
            flex: 1,
            align: "center",

        },
        {
            field: "pimg",
            headerName: "Ảnh chính",
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className="userItem w-100 h-100">
                        <img src={params.row.pimg} className="imgItem object-contain h-100 w-100 p-2" />

                    </div>
                );
            },
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
                        <DialogUpdate values={params} />
                        <DialogDelete values={params} />
                    </>
                );
            },
        },
    ];

    return (
        <div className="grid mx-4 gap-y-4  md:mt-28" style={{ marginTop: '70px' }}>
            <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div

                    className="text-3xl md:text-5xl font-semibold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    Danh sách sản phẩm
                </div>
                <div className="hidden md:block">
                    <ToggleCreate />
                </div>
            </div>
            <div className="block md:hidden">
                <ToggleCreate />
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
                style={{ overflow: 'scroll' }}
            >
                <DataGrid
                    rows={arrProduct}
                    columns={columns}
                    rowHeight={100}
                    style={{ minWidth: '1000px' }}
                />
            </div>
        </div>
    );
};

export default ManageProducts;



const HandleView = (params) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    let formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });
    return (
        <React.Fragment>
            <IconButton className="userListView" onClick={handleClickOpen}>
                <VisibilityIcon />
            </IconButton>

            <Dialog open={open} onClose={handleClose} maxWidth="lg">
                <DialogTitle padding="0">
                    <h3>{params.row.ptitle}</h3>
                </DialogTitle>
                <DialogTitle>
                    <h3>{formatter.format(params.row.pprice)}</h3>
                </DialogTitle>
                <DialogContent display="flex" overflowy="auto">
                    <img
                        src={params.row.pimg}
                        width="80%"
                        height="80%"
                        alt={params.row.ptitle}
                        align="center"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};
