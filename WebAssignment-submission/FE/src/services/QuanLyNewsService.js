import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyNewsService extends baseService {




    layDanhSachNews = () => {
        return this.get(`http://localhost/qlsvmvc/?c=news&a=list`);
    }

    layThongTinNews = (id) => {
        return this.get(`http://localhost/qlsvmvc/?c=news&a=list&search=${id}`)
    }
    xoaNews = (id) => {
        return this.delete(`http://localhost/qlsvmvc/?c=news&a=delete&id=${id}`)
    }

}



export const quanLyNewsService = new QuanLyNewsService();