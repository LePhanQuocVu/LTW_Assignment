import { quanLyContactPageService } from "../../services/QuanLyContactPageService";
import { SET_DANH_SACH_CONTACT } from "./types//QuanLyContactPageType";




export const layDanhSachContactPageAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyContactPageService.layDanhSachContactPage();


            dispatch({
                type: SET_DANH_SACH_CONTACT,
                arrProduct: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}
export const xoaContactPageAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyContactPageService.xoaContactPage(id);


            dispatch(layDanhSachContactPageAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

