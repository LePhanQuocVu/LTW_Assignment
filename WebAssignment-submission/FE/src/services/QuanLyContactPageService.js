import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyContactPageService extends baseService {





    layDanhSachContactPage = () => {

        return this.get(`http://localhost/qlsvmvc/?c=contactPage&a=list`)
    }
    xoaContactPage = (id) => {
        return this.delete(`http://localhost/qlsvmvc/?c=contactPage&a=delete&id=${id}`)

    }


}



export const quanLyContactPageService = new QuanLyContactPageService();