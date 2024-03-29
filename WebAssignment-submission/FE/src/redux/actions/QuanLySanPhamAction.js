import { quanLySanPhamService } from "../../services/QuanLySanPhamService";
import { SET_DANH_SACH_SAN_PHAM, SET_CHI_TIET_SAN_PHAM } from "./types/QuanLySanPhamType";




export const layDanhSachSanPhamAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLySanPhamService.layDanhSachSanPham();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_SAN_PHAM,
                arrProduct: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const layThongTinChiTietSanPham = (id) => {
    return async dispatch => {
        try {
            const result = await quanLySanPhamService.layThongTinSanPham(id);


            //Lấy được dữ liệu từ api về  => reducer

            dispatch({

                type: SET_CHI_TIET_SAN_PHAM,
                productDetail: result.data

            })


        }
        catch (errors) {
            console.log('errors', errors.response?.data)

        }
    }


}

export const xoaSanPhamAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLySanPhamService.xoaSanPham(id);

            // console.log("result: ", result);
            dispatch(layDanhSachSanPhamAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}