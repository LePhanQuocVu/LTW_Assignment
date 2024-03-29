import { quanLyTeamService } from "../../services/QuanLyTeamService";
import { SET_DANH_SACH_TEAM } from "./types/QuanLyTeamType";




export const layDanhSachTeamAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyTeamService.layDanhSachTeam();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_TEAM,
                arrTeam: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}
export const xoaTeamAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyTeamService.xoaTeam(id);

            // console.log("result: ", result);
            dispatch(layDanhSachTeamAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}


