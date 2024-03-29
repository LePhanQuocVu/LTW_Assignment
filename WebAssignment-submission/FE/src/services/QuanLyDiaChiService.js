import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyDiaChiService extends baseService {




    layDanhSachDiaChi = () => {
        return this.get(`http://localhost/qlsvmvc/?c=store&a=list`);
    }

    layThongTinDiaChi = (id) => {
        return this.get(`http://localhost/qlsvmvc/?c=store&a=list&search=${id}`)

    }
    xoaDiaChi = (id) => {
        return this.delete(`http://localhost/qlsvmvc/?c=store&a=delete&id=${id}`)

    }


}



export const quanLyDiaChiService = new QuanLyDiaChiService();