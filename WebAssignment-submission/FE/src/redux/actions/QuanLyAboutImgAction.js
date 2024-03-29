import { quanLyAboutImgService } from "../../services/QuanLyAboutImgService";
import { SET_DANH_SACH_IMG } from "./types/QuanLyAboutImageType";




export const layDanhSachAboutImgAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyAboutImgService.layDanhSachAboutImg(id);

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_IMG,
                arrImg: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}
export const xoaAboutImgAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyAboutImgService.xoaAboutImg(id);

            // console.log("result: ", result);
            dispatch(layDanhSachAboutImgAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}



