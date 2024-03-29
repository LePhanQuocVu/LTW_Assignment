import { SET_DANH_SACH_STATISTIC } from "../actions/types/QuanLyStatisticType"



const stateDefault = {
    arrStatistic: [

    ],



}

export const QuanLyStatisticReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_STATISTIC: {
            state.arrStatistic = action.arrStatistic;

            return { ...state }
        }

        default: return { ...state }
    }
}