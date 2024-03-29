import { quanLyCarouselService } from "../../services/QuanLyCarouselService";
import { SET_CAROUSEL } from "./types/QuanLyCarouselType";




export const layDanhSachCarouselAction = () => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyCarouselService.layDanhSachCarousel();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)

            dispatch({
                type: SET_CAROUSEL,
                arrProduct: result.data,
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

// export const layThongTinChiTietSanPham = (id) => {
//     return async dispatch => {
//         try {
//             const result = await quanLySanPhamService.layThongTinSanPham(id);


//             //Lấy được dữ liệu từ api về  => reducer

//             dispatch({

//                 type: SET_CHI_TIET_SAN_PHAM,
//                 productDetail: result.data

//             })


//         }
//         catch (errors) {
//             console.log('errors', errors.response?.data)

//         }
//     }


// }

export const xoaCarouselAction = (id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyCarouselService.xoaCarousel(id);

            // console.log("result: ", result);
            dispatch(layDanhSachCarouselAction);
            return result

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}