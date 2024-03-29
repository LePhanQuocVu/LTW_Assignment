import { SET_SAN_PHAM_IPHONESE, SET_SAN_PHAM_IPHONE11, SET_SAN_PHAM_IPHONE12, SET_SAN_PHAM_IPHONE13, SET_DANH_SACH_SAN_PHAM, SET_SAN_PHAM_IPHONE15, SET_SAN_PHAM_IPHONE14, SET_SAN_PHAM_ALL, SET_CHI_TIET_SAN_PHAM } from "../actions/types/QuanLySanPhamType"



const stateDefault = {
    arrProduct: [


    ],

    arrProductDefault: [],
    productDetail: []

}

export const QuanLySanPhamReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_SAN_PHAM: {
            state.arrProduct = action.arrProduct;
            state.arrProductDefault = state.arrProduct;
            return { ...state }
        }
        case SET_SAN_PHAM_IPHONE15: {



            state.arrProduct = state.arrProductDefault.filter(product => product.pkind === "iphone15");
            return { ...state }
        }

        case SET_SAN_PHAM_IPHONE14: {


            state.arrProduct = state.arrProductDefault.filter(product => product.pkind === "iphone14");
            return { ...state }
        }
        case SET_SAN_PHAM_IPHONE13: {


            state.arrProduct = state.arrProductDefault.filter(product => product.pkind === "iphone13");
            return { ...state }
        }
        case SET_SAN_PHAM_IPHONE12: {


            state.arrProduct = state.arrProductDefault.filter(product => product.pkind === "iphone12");
            return { ...state }
        }
        case SET_SAN_PHAM_IPHONE11: {


            state.arrProduct = state.arrProductDefault.filter(product => product.pkind === "iphone11");
            return { ...state }
        }
        case SET_SAN_PHAM_IPHONESE: {


            state.arrProduct = state.arrProductDefault.filter(product => product.pkind === "iphonese");
            return { ...state }
        }

        case SET_SAN_PHAM_ALL: {


            state.arrProduct = state.arrProductDefault.filter(product => product.pkind !== undefined && product.pkind !== null && product.pkind !== '');
            return { ...state }
        }
        case SET_CHI_TIET_SAN_PHAM: {

            state.productDetail = action.productDetail;
            return { ...state };

        }

        default: return { ...state }
    }
}