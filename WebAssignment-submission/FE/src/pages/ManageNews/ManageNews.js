import { newsData } from '../../data/news'
import * as React from "react";
import ToggleCreate from './ToggleCreate'
import ToggleUpdate from './ToggleUpdate'
import ToggleDelete from './ToggleDelete'
import { layDanhSachNewsAction } from '../../redux/actions/QuanLyNewsAction';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {
    DataGrid,

} from '@mui/x-data-grid';
const ManageNews = () => {
    const { arrProduct } = useSelector(state => state.QuanLyNewsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachNewsAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])
    const columns = [
        { field: "id", headerName: "ID", align: "center", headerAlign: "center", flex: 0.25 },

        { field: "title", headerName: "Tiêu đề", align: "center", headerAlign: "center", flex: 1.5 },
        {
            field: "description",
            headerName: "Mô tả",
            headerAlign: "center",
            align: "center",
            flex: 0.8,
            cellClassName: "name-column--cell",
        },
        {
            field: "content",
            headerName: "Nội dung",
            headerAlign: "center",
            flex: 0.8,
            align: "center",
        },
        {
            field: "author",
            headerName: "Tác giả",
            headerAlign: "center",
            flex: 0.8,
            align: "center",
        },
        {
            field: "date",
            headerName: "Ngày",
            headerAlign: "center",
            flex: 0.8,
            align: "center",
        },
        {
            field: "img",
            headerName: "Hình ảnh",
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className="userItem w-100 h-100">
                        <img src={params.row.img} className="imgItem object-contain h-100 w-100 p-2" />
                    </div>
                );
            },
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
                    Danh sách tin tức
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

export default ManageNews;