import { SET_DANH_SACH_DIA_CHI, SET_CHI_TIET_DIA_CHI } from "../actions/types/QuanLyDiaChiType"



const stateDefault = {
    arrProduct: [

    ],


    productDetail: []

}

export const QuanLyDiaChiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_DIA_CHI: {
            state.arrProduct = action.arrProduct;

            return { ...state }
        }
        case SET_CHI_TIET_DIA_CHI: {
            state.productDetail = action.productDetail;
            return { ...state };

        }


        default: return { ...state }
    }
}