import { contactData } from "../../data/contact.js";
import * as React from "react";
import ToggleDelete from './ToggleDelete'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachContactAction } from '../../redux/actions/QuanLyContactAction.js';
import {
    DataGrid,
} from '@mui/x-data-grid';
const ManageContact = () => {
    const { arrProduct } = useSelector(state => state.QuanLyContactReducer);
    console.log("lien he:", arrProduct);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachContactAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])

    const columns = [
        { field: "id", headerName: "ID", align: "center", headerAlign: "center", flex: 0.25 },

        { field: "name", headerName: "Họ và tên", align: "center", headerAlign: "center", flex: 1.5 },
        {
            field: "email",
            headerName: "Email",
            headerAlign: "center",
            align: "center",
            flex: 0.8,
            cellClassName: "name-column--cell",
        },
        {
            field: "message",
            headerName: "Nội dung",
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
                    Danh sách liên hệ
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

export default ManageContact;