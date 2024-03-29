import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyGioHangService extends baseService {





    layDanhSachGioHang = (username) => {
        return this.get(`http://localhost/qlsvmvc/?c=cart&a=list&search=${username}`)
    }

    xoaDanhSachGioHang = (id, username) => {

        return this.delete(`http://localhost/qlsvmvc/?c=cart&a=delete&id=${id}&username=${username}`)
    }
    themDanhSachGioHang = (formData) => {

        return this.post(`http://localhost/qlsvmvc/?c=cart&a=save`, formData);

    }
    truGioHang = (id, username) => {

        return this.delete(`http://localhost/qlsvmvc/?c=cart&a=minus&username=${username}&id=${id}`);

    }
    congGioHang = (id, username) => {

        return this.put(`http://localhost/qlsvmvc/?c=cart&a=plus&username=${username}&id=${id}"`);

    }

}



export const quanLyGioHangService = new QuanLyGioHangService();