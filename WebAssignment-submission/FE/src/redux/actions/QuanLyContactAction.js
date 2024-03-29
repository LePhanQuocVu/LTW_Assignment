import { quanLyContactService } from "../../services/QuanLyContactService";
import { SET_DANH_SACH_CONTACT } from "./types/QuanLyContactType";




export const layDanhSachContactAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyContactService.layDanhSachContact();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_CONTACT,
                arrProduct: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const xoaContactAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyContactService.xoaContact(id);

            // console.log("result: ", result);
            dispatch(layDanhSachContactAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

