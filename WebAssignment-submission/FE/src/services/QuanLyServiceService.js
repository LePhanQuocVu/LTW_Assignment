import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyServiceService extends baseService {




    layDanhSachService = () => {
        return this.get(`http://localhost/qlsvmvc/?c=service&a=list`);
    }
    xoaService = (id) => {
        return this.delete(`http://localhost/qlsvmvc/?c=service&a=delete&id=${id}`)

    }


}



export const quanLyServiceService = new QuanLyServiceService();