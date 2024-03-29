import { baseService } from "./baseService";

export class QuanLyDonHangService extends baseService {





    layDanhSachDonHang = () => {

        return this.get(`http://localhost/qlsvmvc/?c=order&a=list`)
    }
    xoaDonHang = (id) => {
        return this.delete(`http://localhost/qlsvmvc/?c=order&a=delete&id=${id}`)

    }
    layThongTinDonHang = (id) => {
        return this.get(`http://localhost/qlsvmvc/?c=order&a=list&search=${id}`)
    }


}



export const quanLyDonHangService = new QuanLyDonHangService();