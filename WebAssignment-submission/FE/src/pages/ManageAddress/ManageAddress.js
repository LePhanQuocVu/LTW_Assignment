
import * as React from "react";
import ToggleCreate from './ToggleCreate'
import ToggleUpdate from './ToggleUpdate'
import ToggleDelete from './ToggleDelete'
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachDiaChiAction } from '../../redux/actions/QuanLyDiaChiAction';
import { useEffect } from 'react';
import {
    DataGrid,
} from '@mui/x-data-grid';
const ManageAddress = () => {
    const { arrProduct } = useSelector(state => state.QuanLyDiaChiReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachDiaChiAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])
    const columns = [
        { field: "id", headerName: "ID", align: "center", headerAlign: "center", flex: 0.25 },

        { field: "province", headerName: "Tỉnh thành", align: "center", headerAlign: "center", flex: 1.5 },
        {
            field: "address",
            headerName: "Địa chỉ",
            headerAlign: "center",
            align: "center",
            flex: 0.8,
            cellClassName: "name-column--cell",
        },
        {
            field: "email",
            headerName: "Email",
            headerAlign: "center",
            flex: 0.8,
            align: "center",
        },
        {
            field: "phone",
            headerName: "Số điện thoại",
            headerAlign: "center",
            flex: 0.8,
            align: "center",
        },
        {
            field: "action",
            headerName: "Thao tác",
            headerAlign: "center",
            flex: 1,
            align: "center",

            renderCell: (params) => {
                console.log(params);
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

                    className="text-xl md:text-3xl font-semibold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    Danh sách địa chỉ
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

export default ManageAddress;