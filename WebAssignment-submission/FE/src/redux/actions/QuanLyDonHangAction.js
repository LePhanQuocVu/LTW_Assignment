import { quanLyDonHangService } from "../../services/QuanLyDonHangService";
import { SET_DANH_SACH_DON_HANG, SET_CHI_TIET_DON_HANG } from "./types/QuanLyDonHangType";




export const layDanhSachDonHangAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyDonHangService.layDanhSachDonHang();


            dispatch({
                type: SET_DANH_SACH_DON_HANG,
                arrProduct: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const layThongTinChiTietDonHang = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyDonHangService.layThongTinDonHang(id);


            //Lấy được dữ liệu từ api về  => reducer

            dispatch({

                type: SET_CHI_TIET_DON_HANG,
                productDetail: result.data

            })


        }
        catch (errors) {
            console.log('errors', errors.response?.data)

        }
    }


}
export const xoaDonHangAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyDonHangService.xoaDonHang(id);


            dispatch(layDanhSachDonHangAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

