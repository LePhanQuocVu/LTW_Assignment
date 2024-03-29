import { SET_DANH_SACH_NEWS, SET_CHI_TIET_NEWS } from "../actions/types/QuanLyNewsType"



const stateDefault = {
    arrProduct: [

    ],
    productDetail: []


}

export const QuanLyNewsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_NEWS: {
            state.arrProduct = action.arrProduct;
            state.arrProductDefault = state.arrProduct;
            return { ...state }
        }
        case SET_CHI_TIET_NEWS: {
            state.productDetail = action.productDetail;
            return { ...state };

        }


        default: return { ...state }
    }
}