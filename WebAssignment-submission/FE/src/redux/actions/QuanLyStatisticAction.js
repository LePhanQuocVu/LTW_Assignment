import { quanLyStatisticService } from "../../services/QuanLyStatisticService";
import { SET_DANH_SACH_STATISTIC } from "./types/QuanLyStatisticType";




export const layDanhSachStatisticAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyStatisticService.layDanhSachStatistic();


            dispatch({
                type: SET_DANH_SACH_STATISTIC,
                arrStatistic: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}
export const xoaStatisticAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyStatisticService.xoaStatistic(id);

            // console.log("result: ", result);
            dispatch(layDanhSachStatisticAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}
