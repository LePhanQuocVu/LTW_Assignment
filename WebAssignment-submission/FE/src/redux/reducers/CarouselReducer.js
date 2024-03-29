import { SET_CAROUSEL } from "../actions/types/QuanLyCarouselType"
const stateDefault = {
    arrProduct: [],

}


export const CarouselReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case SET_CAROUSEL: {

            state.arrProduct = action.arrProduct;

            return { ...state };
        }


        default: return { ...state }
    }

}