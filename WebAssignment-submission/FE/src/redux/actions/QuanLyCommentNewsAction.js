import { quanLyCommentNewsService } from "../../services/QuanLyCommentNewsService";
import { SET_THEM_COMMENTN } from "./types/QuanLyCommentnType";




export const layDanhSachCommentNewsAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyCommentNewsService.layDanhSachCommentNews(id);

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_THEM_COMMENTN,
                arrComment: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}


export const xoaCommentNewsAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyCommentNewsService.xoaCommentNews(id);

            // console.log("result: ", result);
            dispatch(layDanhSachCommentNewsAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}


