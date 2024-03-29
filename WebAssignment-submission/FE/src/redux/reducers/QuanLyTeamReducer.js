import { SET_DANH_SACH_TEAM } from "../actions/types/QuanLyTeamType"




const stateDefault = {
    arrTeam: []



}

export const QuanLyTeamReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_TEAM: {
            state.arrTeam = action.arrTeam;

            return { ...state }
        }






        default: return { ...state }
    }
}