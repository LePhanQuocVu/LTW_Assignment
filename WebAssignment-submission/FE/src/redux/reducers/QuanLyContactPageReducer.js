import { SET_DANH_SACH_CONTACT } from "../actions/types/QuanLyContactPageType"



const stateDefault = {
    arrProduct: [

    ],


    productDetail: []

}

export const QuanLyContactPageReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_CONTACT: {
            state.arrProduct = action.arrProduct;

            return { ...state }
        }


        default: return { ...state }
    }
}