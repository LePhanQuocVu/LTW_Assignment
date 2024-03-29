import { SET_DANH_SACH_USER, SET_CHI_TIET_USER } from "../actions/types/QuanLyUserType"



const stateDefault = {
    arrProduct: [

    ],
    productDetail: []


}

export const QuanLyUserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_USER: {
            state.arrProduct = action.arrProduct;

            return { ...state }
        }
        case SET_CHI_TIET_USER: {
            state.productDetail = action.productDetail;
            return { ...state };

        }


        default: return { ...state }
    }
}