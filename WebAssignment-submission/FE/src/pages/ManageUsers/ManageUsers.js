
import * as React from "react";
import ToggleCreate from './ToggleCreate'
import ToggleUpdate from './ToggleUpdate'
import ToggleDelete from './ToggleDelete'
import {
    DataGrid,

} from '@mui/x-data-grid';
import { layDanhSachUserAction } from '../../redux/actions/QuanLyUserAction';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
const ManageUsers = () => {
    const { arrProduct } = useSelector(state => state.QuanLyUserReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachUserAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])

    const columns = [
        { field: "id", headerName: "ID", align: "center", headerAlign: "center", flex: 0.25 },

        { field: "username", headerName: "Tên người dùng", align: "center", headerAlign: "center", flex: 1.5 },
        {
            field: "password",
            headerName: "Mật khẩu",
            headerAlign: "center",
            align: "center",
            flex: 0.8,
            cellClassName: "name-column--cell",
        },
        {
            field: "fullname",
            headerName: "Họ và tên",
            headerAlign: "center",
            flex: 0.8,
            align: "center",
        },
        {
            field: "email",
            headerName: "Email",
            headerAlign: "center",
            flex: 0.8,
            align: "center",
        },
        {
            field: "phonenumber",
            headerName: "Số điện thoại",
            headerAlign: "center",
            flex: 0.8,
            align: "center",
        },
        {
            field: "image",
            headerName: "Ảnh đại diện",
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className="userItem">

                        <img src={params.row.image} width="100%" height="100%" alt="avatar" />
                    </div>
                );
            },
        },
        {
            field: "role",
            headerName: "Vai trò",
            headerAlign: "center",
            flex: 0.8,
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
                        <ToggleUpdate values={params} />
                        <ToggleDelete values={params} />
                    </>
                );
            },
        },
    ];

    return (
        <div className="grid mx-4 gap-y-4  md:mt-28" style={{ marginTop: '70px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div

                    className="text-3xl md:text-5xl font-semibold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    Danh sách người dùng
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

export default ManageUsers;