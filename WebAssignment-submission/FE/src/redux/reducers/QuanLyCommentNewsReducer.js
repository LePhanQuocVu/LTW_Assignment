import { SET_THEM_COMMENTN } from "../actions/types/QuanLyCommentnType"





const stateDefault = {
    arrComment: [
        {


        }

    ]



}

export const QuanLyCommentNewsReducer = (state = stateDefault, action) => {
    switch (action.type) {


        case SET_THEM_COMMENTN: {
            state.arrComment = action.arrComment;

            return { ...state }
        }





        default: return { ...state }
    }
}