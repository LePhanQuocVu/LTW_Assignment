import { quanLyServiceService } from "../../services/QuanLyServiceService";
import { SET_DANH_SACH_SERVICE } from "./types/QuanLyServiceType";




export const layDanhSachServiceAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyServiceService.layDanhSachService();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_SERVICE,
                arrService: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}
export const xoaServiceAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyServiceService.xoaService(id);


            dispatch(layDanhSachServiceAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

