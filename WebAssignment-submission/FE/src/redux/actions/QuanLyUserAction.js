import { quanLyUserService } from "../../services/QuanLyUserService";
import { SET_DANH_SACH_USER, SET_CHI_TIET_USER } from "./types/QuanLyUserType";




export const layDanhSachUserAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyUserService.layDanhSachUser();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_USER,
                arrProduct: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const layThongTinChiTietUser = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyUserService.layThongTinUser(id);


            //Lấy được dữ liệu từ api về  => reducer

            dispatch({

                type: SET_CHI_TIET_USER,
                productDetail: result.data

            })


        }
        catch (errors) {
            console.log('errors', errors.response?.data)

        }
    }


}
export const xoaUserAction = (id) => {


    return async (dispatch) => {
        try {

            const result = await quanLyUserService.xoaUser(id);

            // console.log("result: ", result);
            dispatch(layDanhSachUserAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}


