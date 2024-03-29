import { quanLyCommentService } from "../../services/QuanLyCommentService";
import { SET_THEM_COMMENT } from "./types/QuanLyCommentType";




export const layDanhSachCommentAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyCommentService.layDanhSachComment(id);

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_THEM_COMMENT,
                arrComment: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}


export const xoaCommentAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyCommentService.xoaComment(id);

            // console.log("result: ", result);
            dispatch(layDanhSachCommentAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}


