import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyContactService extends baseService {





    layDanhSachContact = () => {

        return this.get(`http://localhost/qlsvmvc/?c=contact&a=list`)
    }
    xoaContact = (id) => {

        return this.delete(`http://localhost/qlsvmvc/?c=contact&a=delete&id=${id}`)
    }

}



export const quanLyContactService = new QuanLyContactService();