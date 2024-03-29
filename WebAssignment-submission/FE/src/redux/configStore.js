import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLySanPhamReducer } from "./reducers/QuanLySanPhamReducer";
import { GioHangReducer } from "./reducers/GioHangReducer";
import { QuanLyCommentReducer } from "./reducers/QuanLyCommentReducer";
import { QuanLyChiTietReducer } from "./reducers/QuanLyChiTietReducer";
import { QuanLyNewsReducer } from "./reducers/QuanLyNewsReducer";
import { QuanLyDiaChiReducer } from "./reducers/QuanLyDiaChiReducer";
import { QuanLyCommentNewsReducer } from "./reducers/QuanLyCommentNewsReducer";
import { QuanLyContactReducer } from "./reducers/QuanLyContactReducer";
import { QuanLyContactPageReducer } from "./reducers/QuanLyContactPageReducer";
import { QuanLyTeamReducer } from "./reducers/QuanLyTeamReducer";
import { QuanLyTestimonialReducer } from "./reducers/QuanLyTestimonialReducer";
import { QuanLyUserReducer } from "./reducers/QuanLyUserReducer";
import { QuanLyStatisticReducer } from "./reducers/QuanLyStatisticReducer";
import { QuanLyServiceReducer } from "./reducers/QuanLyServiceReducer";
import { QuanLyAboutImgReducer } from "./reducers/QuanLyAboutImgReducer";
import { QuanLyDonHangReducer } from "./reducers/QuanLyDonHangReducer";
const rootReducer = combineReducers({
    CarouselReducer, QuanLyDonHangReducer,
    QuanLyAboutImgReducer,
    QuanLySanPhamReducer,
    QuanLyUserReducer,
    QuanLyStatisticReducer,
    QuanLyServiceReducer,
    GioHangReducer,
    QuanLyTeamReducer,
    QuanLyTestimonialReducer,
    QuanLyCommentReducer,
    QuanLyChiTietReducer,
    QuanLyNewsReducer,
    QuanLyDiaChiReducer,
    QuanLyCommentNewsReducer,
    QuanLyContactReducer,
    QuanLyContactPageReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
