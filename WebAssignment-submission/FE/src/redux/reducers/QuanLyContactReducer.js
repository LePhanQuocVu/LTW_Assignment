import { SET_DANH_SACH_CONTACT } from "../actions/types/QuanLyContactType"





const stateDefault = {
    arrProduct: [


    ]



}

export const QuanLyContactReducer = (state = stateDefault, action) => {
    switch (action.type) {


        case SET_DANH_SACH_CONTACT: {
            state.arrProduct = action.arrProduct;

            return { ...state }
        }





        default: return { ...state }
    }
}