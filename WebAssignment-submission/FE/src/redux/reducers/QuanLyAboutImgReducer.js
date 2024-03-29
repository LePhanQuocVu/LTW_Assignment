import { SET_DANH_SACH_IMG } from "../actions/types/QuanLyAboutImageType"



const stateDefault = {
    arrImg: [

    ],



}

export const QuanLyAboutImgReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_IMG: {
            state.arrImg = action.arrImg;

            return { ...state }
        }

        default: return { ...state }
    }
}