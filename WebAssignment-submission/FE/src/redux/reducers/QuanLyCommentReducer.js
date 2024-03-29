import { SET_THEM_COMMENT } from "../actions/types/QuanLyCommentType"





const stateDefault = {
    arrComment: [
        {


        }

    ]



}

export const QuanLyCommentReducer = (state = stateDefault, action) => {
    switch (action.type) {


        case SET_THEM_COMMENT: {
            state.arrComment = action.arrComment;

            return { ...state }
        }





        default: return { ...state }
    }
}