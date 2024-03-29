
import { SET_DANH_SACH_GIO_HANG } from "./types/QuanLyGioHangType";
import { quanLyGioHangService } from "../../services/QuanLyGioHangService";

export const layDanhSachGioHangAction = (username) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyGioHangService.layDanhSachGioHang(username);
            console.log("danh sach gio hang ne anh ban: ", result.data);
            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_GIO_HANG,
                arrProduct: result.data,
                
            })
        
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const xoaDanhSachGioHangAction = (id, username) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyGioHangService.xoaDanhSachGioHang(id, username);

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch(layDanhSachGioHangAction())
            return result;
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const themDanhSachGioHangAction = (formData) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            // console.log("Them gio hang: ", formData);
            const result = await quanLyGioHangService.themDanhSachGioHang(formData);

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch(layDanhSachGioHangAction())

        } catch (errors) {
            console.log('errors', errors)
        }
    };

}
export const truGioHangAction = (id, username) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo

            const result = await quanLyGioHangService.truGioHang(id, username);


            dispatch(layDanhSachGioHangAction())
            return result;
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const congGioHangAction = (id, username) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo

            const result = await quanLyGioHangService.congGioHang(id, username);
            dispatch(layDanhSachGioHangAction())
            return result;
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}






// export const themGioHang = (element) => {
//     return async dispatch => {
//         try {
//             const result = element;




//             dispatch({
//                 type: SET_THEM_SAN_PHAM,
//                 arrProduct: result,

//             })


//         }
//         catch (errors) {
//             console.log('errors them', errors);

//         }
//     }


// }



