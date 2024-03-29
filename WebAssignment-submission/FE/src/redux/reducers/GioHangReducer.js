import { SET_DANH_SACH_GIO_HANG, SET_XOA_GIO_HANG } from "../actions/types/QuanLyGioHangType"




const stateDefault = {
    arrProduct: []



}

export const GioHangReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_GIO_HANG: {
            state.arrProduct = action.arrProduct;
            state.arrProductDefault = state.arrProduct;
            return { ...state }
        }
        case SET_XOA_GIO_HANG: {

            return { ...state }
        }

        // case SET_THEM_SAN_PHAM: {

        //     let index = state.arrProduct.findIndex(spGH => spGH.id === action.arrProduct.id);
        //     if (index !== -1) {

        //         state.arrProduct[index].sl += 1;
        //     } else {

        //         state.arrProduct.push(action.arrProduct);
        //     }
        //     state.arrProduct = [...state.arrProduct];

        //     return { ...state }
        // };





        default: return { ...state }
    }
}