import { SET_DANH_SACH_DON_HANG, SET_CHI_TIET_DON_HANG } from "../actions/types/QuanLyDonHangType"



const stateDefault = {
    arrProduct: [


    ],


    productDetail: []

}

export const QuanLyDonHangReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_DON_HANG: {


            state.arrProduct = action.arrProduct;

            return { ...state }

        }
        case SET_CHI_TIET_DON_HANG: {


            state.productDetail = action.productDetail;

            return { ...state }

        }


        default: return { ...state }
    }
}