import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyUserService extends baseService {




    layDanhSachUser = () => {
        return this.get(`http://localhost/qlsvmvc/?c=user&a=list`);
    }
    layThongTinUser = (id) => {
        return this.get(`http://localhost/qlsvmvc/?c=user&a=list&search=${id}`)
    }
    xoaUser = (id) => {
        return this.delete(`http://localhost/qlsvmvc/?c=user&a=delete&id=${id}`)

    }

}



export const quanLyUserService = new QuanLyUserService();