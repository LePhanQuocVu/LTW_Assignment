import { SET_DANH_SACH_TESTIMONIAL } from "../actions/types/QuanLyTestimonialType"



const stateDefault = {
    arrTestimonial: [

    ],



}

export const QuanLyTestimonialReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_TESTIMONIAL: {
            state.arrTestimonial = action.arrTestimonial;

            return { ...state }
        }

        default: return { ...state }
    }
}