import { quanLyNewsService } from "../../services/QuanLyNewsService";
import { SET_DANH_SACH_NEWS, SET_CHI_TIET_NEWS } from "./types/QuanLyNewsType";




export const layDanhSachNewsAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyNewsService.layDanhSachNews();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_NEWS,
                arrProduct: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const layThongTinChiTietNews = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyNewsService.layThongTinNews(id);


            //Lấy được dữ liệu từ api về  => reducer

            dispatch({

                type: SET_CHI_TIET_NEWS,
                productDetail: result.data

            })


        }
        catch (errors) {
            console.log('errors', errors.response?.data)

        }
    }


}


export const xoaNewsAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyNewsService.xoaNews(id);

            // console.log("result: ", result);
            dispatch(layDanhSachNewsAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}
