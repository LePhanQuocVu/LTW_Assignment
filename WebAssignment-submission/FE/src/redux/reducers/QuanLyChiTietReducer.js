import { SET_CHI_TIET_SAN_PHAM } from "../actions/types/QuanLySanPhamType"



const stateDefault = {


    productDetail: []

}

export const QuanLyChiTietReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case SET_CHI_TIET_SAN_PHAM: {

            state.productDetail = action.productDetail;
            return { ...state };

        }

        default: return { ...state }
    }
}