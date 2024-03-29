import { SET_DANH_SACH_SERVICE } from "../actions/types/QuanLyServiceType"



const stateDefault = {
    arrService: [

    ],



}

export const QuanLyServiceReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_SERVICE: {
            state.arrService = action.arrService;

            return { ...state }
        }

        default: return { ...state }
    }
}