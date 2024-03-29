import { quanLyDiaChiService } from "../../services/QuanLyDiaChiService";
import { SET_DANH_SACH_DIA_CHI, SET_CHI_TIET_DIA_CHI } from "./types/QuanLyDiaChiType";




export const layDanhSachDiaChiAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyDiaChiService.layDanhSachDiaChi();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_DIA_CHI,
                arrProduct: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const layThongTinChiTietDiaChi = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyDiaChiService.layThongTinDiaChi(id);


            //Lấy được dữ liệu từ api về  => reducer

            dispatch({

                type: SET_CHI_TIET_DIA_CHI,
                productDetail: result.data

            })


        }
        catch (errors) {
            console.log('errors', errors.response?.data)

        }
    }


}

export const xoaDiaChiAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyDiaChiService.xoaDiaChi(id);

            // console.log("result: ", result);
            dispatch(layDanhSachDiaChiAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}
