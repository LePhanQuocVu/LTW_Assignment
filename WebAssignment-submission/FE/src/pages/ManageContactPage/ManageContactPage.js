import * as React from "react";
import ToggleCreate from './ToggleCreate'
import ToggleUpdate from './ToggleUpdate'
import ToggleDelete from './ToggleDelete'
import {
    DataGrid,

} from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachContactPageAction } from '../../redux/actions/QuanLyContactPageAction';
import { useEffect } from 'react';
const ManageContactPage = () => {
    const { arrProduct } = useSelector(state => state.QuanLyContactPageReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachContactPageAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])

    const columns = [
        { field: "id", headerName: "ID", align: "center", headerAlign: "center", flex: 0.25 },

        { field: "header", headerName: "Tiêu đề", align: "center", headerAlign: "center", flex: 1.5 },

        {
            field: "content",
            headerName: "Nội dung",
            headerAlign: "center",
            flex: 2,
            align: "center",
        },
        {
            field: "action",
            headerName: "Thao tác",
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

                    className="text-xl md:text-3xl font-semibold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    Thông tin liên hệ
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

export default ManageContactPage;